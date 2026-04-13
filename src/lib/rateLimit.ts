interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 3;

export function rateLimit(ip: string): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();

  // Purge expired entries to prevent memory leak
  for (const [key, entry] of store) {
    if (now > entry.resetAt) store.delete(key);
  }

  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}
