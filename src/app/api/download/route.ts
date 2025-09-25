import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { sheetsConfig } from '@/config/sheets';

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
    console.log('=== Download API Start ===');

    const formData = await request.json();
    console.log('Download form data received:', formData);

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
    
    // スプレッドシートに追加するデータ（K列まで）
    const rowData = [
      now,                    // A: 日時
      formData.company,       // B: 会社名
      formData.name,          // C: 担当者名
      formData.email,         // D: メールアドレス
      "",                     // E: 予算（空欄）
      "",                     // F: 興味領域（空欄）
      "",                     // G: 開始時期（空欄）
      formData.message,       // H: メッセージ
      "",                     // I: 参考URL（空欄）
      "",                     // J: 見積もりデータ（空欄）
      "資料ダウンロード申請"   // K: 対応状況
    ];

    console.log('Attempting to append download data to spreadsheet:', rowData);
    console.log('Spreadsheet ID:', sheetsConfig.spreadsheetId);

    // Google Sheets APIの認証テスト
    try {
      console.log('Testing Google Sheets API authentication...');
      await auth.getClient();
      console.log('Authentication successful');
    } catch (authError) {
      console.error('Authentication failed:', authError);
      throw new Error(`認証エラー: ${authError}`);
    }

    // スプレッドシートにデータを追加
    console.log('Appending download data to spreadsheet...');
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetsConfig.spreadsheetId,
      range: 'A:K', // A列からK列まで
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('Google Sheets API response:', response.data);
    console.log('資料ダウンロード申請がスプレッドシートに正常に追加されました');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('=== Download API Error ===');
    console.error('Error type:', typeof error);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    console.error('Full error object:', JSON.stringify(error, null, 2));
    
    return NextResponse.json({ 
      error: '送信に失敗しました',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 