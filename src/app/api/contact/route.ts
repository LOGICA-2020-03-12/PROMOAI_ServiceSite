import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { sheetsConfig } from '@/config/sheets';

// デバッグ用：環境変数の確認
console.log('Environment variables check:');
console.log('Private key exists:', !!process.env.GOOGLE_SHEETS_PRIVATE_KEY);
console.log('Client email:', process.env.GOOGLE_SHEETS_CLIENT_EMAIL);
console.log('Spreadsheet ID:', process.env.GOOGLE_SHEETS_SPREADSHEET_ID);

// Google Sheets APIの設定
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: sheetsConfig.clientEmail,
    private_key: sheetsConfig.privateKey.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

// reCAPTCHA検証関数
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error('reCAPTCHA secret key not found');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // reCAPTCHA検証
    if (!formData.recaptchaToken) {
      return NextResponse.json({ error: 'reCAPTCHA認証が必要です' }, { status: 400 });
    }

    const isValidRecaptcha = await verifyRecaptcha(formData.recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json({ error: 'reCAPTCHA認証に失敗しました' }, { status: 400 });
    }

    // 現在の日時を取得
    const now = new Date().toLocaleString('ja-JP');
    
    // 興味領域を文字列に変換
    const interests = Object.entries(formData.interests)
      .filter(([, checked]) => checked)
      .map(([key]) => {
        const interestMap: { [key: string]: string } = {
          sns: 'SNS運用',
          ads: '広告運用',
          video: '動画制作',
          ai: 'AI活用',
          analytics: '分析',
          education: '教育'
        };
        return interestMap[key] || key;
      })
      .join(', ');

    // スプレッドシートに追加するデータ（K列まで）
    const rowData = [
      now,                    // A: 日時
      formData.company,       // B: 会社名
      formData.name,          // C: 担当者名
      formData.email,         // D: メールアドレス
      formData.budget,        // E: 予算レンジ
      interests,              // F: 興味領域
      formData.startDate,     // G: 希望開始時期
      formData.message,       // H: メッセージ
      formData.referenceUrl,  // I: 参考URL
      formData.selectedConditions, // J: 見積もりデータ
      '未対応'                // K: ステータス
    ];

    console.log('Attempting to append data to spreadsheet:', rowData);

    // スプレッドシートにデータを追加
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetsConfig.spreadsheetId,
      range: 'A:K', // A列からK列まで
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('データがスプレッドシートに正常に追加されました');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error details:', error);
    return NextResponse.json({ error: '送信に失敗しました' }, { status: 500 });
  }
} 