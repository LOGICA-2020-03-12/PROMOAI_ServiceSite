import { randomBytes, createHash } from 'crypto';

const CSRF_SECRET = process.env.CSRF_SECRET || 'default-csrf-secret-key';

export function generateCSRFToken(): string {
  const timestamp = Date.now().toString();
  const randomData = randomBytes(16).toString('hex');
  const payload = `${timestamp}:${randomData}`;

  const hash = createHash('sha256')
    .update(payload + CSRF_SECRET)
    .digest('hex');

  return `${payload}:${hash}`;
}

export function verifyCSRFToken(token: string): boolean {
  try {
    const parts = token.split(':');
    if (parts.length !== 3) return false;

    const [timestamp, randomData, hash] = parts;
    const payload = `${timestamp}:${randomData}`;

    // トークンの有効期限チェック（1時間）
    const tokenTime = parseInt(timestamp);
    const currentTime = Date.now();
    if (currentTime - tokenTime > 3600000) return false;

    // ハッシュ検証
    const expectedHash = createHash('sha256')
      .update(payload + CSRF_SECRET)
      .digest('hex');

    return hash === expectedHash;
  } catch {
    return false;
  }
}