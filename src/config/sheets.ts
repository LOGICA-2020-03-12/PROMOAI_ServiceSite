export const sheetsConfig = {
  privateKey: process.env.GOOGLE_SHEETS_PRIVATE_KEY || "",
  clientEmail: process.env.GOOGLE_SHEETS_CLIENT_EMAIL || "sheets-api@promo-ai-467903.iam.gserviceaccount.com",
  spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID || "1o7n78rdHqcBI78UteGfjPFgTB87lTy_hgu2QBBncmz8"
}; 