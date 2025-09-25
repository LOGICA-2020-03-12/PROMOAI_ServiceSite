import { NextResponse } from 'next/server';
import { generateCSRFToken } from '@/lib/csrf';

export async function GET() {
  try {
    const token = generateCSRFToken();
    return NextResponse.json({ csrfToken: token });
  } catch (error) {
    return NextResponse.json({ error: 'トークン生成に失敗しました' }, { status: 500 });
  }
}