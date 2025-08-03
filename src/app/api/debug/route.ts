import { NextResponse } from 'next/server';

export async function GET() {
  // 環境変数の読み込み状況を確認
  const envCheck = {
    hasPrivateKey: !!process.env.GOOGLE_SHEETS_PRIVATE_KEY,
    privateKeyLength: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.length || 0,
    clientEmail: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    environment: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
  };

  return NextResponse.json({
    success: true,
    environment: envCheck,
    message: '環境変数の読み込み状況を確認しました'
  });
} 