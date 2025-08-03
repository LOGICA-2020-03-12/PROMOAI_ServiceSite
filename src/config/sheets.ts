export const sheetsConfig = {
  privateKey: process.env.GOOGLE_SHEETS_PRIVATE_KEY || "",
  clientEmail: process.env.GOOGLE_SHEETS_CLIENT_EMAIL || "sheets-api@promo-ai-467903.iam.gserviceaccount.com",
  spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID || "1o7n78rdHqcBI78UteGfjPFgTB87lTy_hgu2QBBncmz8"
};

// デバッグ用：設定値の確認
console.log('Sheets config loaded:', {
  hasPrivateKey: !!sheetsConfig.privateKey,
  clientEmail: sheetsConfig.clientEmail,
  spreadsheetId: sheetsConfig.spreadsheetId
}); 