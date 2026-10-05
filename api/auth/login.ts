import { configuredUsername, createSessionToken, isSameOrigin, json, sessionCookie, verifyCredentials } from "../_lib/auth";
import { getRedis } from "../_lib/redis";

export async function handleLogin(request: Request) {
  if (request.method !== "POST") return json({ error: "METHOD_NOT_ALLOWED" }, 405, { Allow: "POST" });
  if (!isSameOrigin(request)) return json({ error: "INVALID_ORIGIN" }, 403);

  try {
    const { username, password } = await request.json() as { username?: string; password?: string };
    const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const key = `vaio:login:${forwarded}`;
    const redis = getRedis();
    const attempts = await redis.incr(key);
    if (attempts === 1) await redis.expire(key, 600);
    if (attempts > 10) return json({ error: "TOO_MANY_ATTEMPTS" }, 429);

    if (!username || !password || !verifyCredentials(username, password)) {
      return json({ error: "INVALID_CREDENTIALS" }, 401);
    }

    await redis.del(key);
    const token = createSessionToken(configuredUsername());
    return json({ user: { username: configuredUsername() } }, 200, { "Set-Cookie": sessionCookie(token) });
  } catch (error) {
    const code = error instanceof Error ? error.message : "LOGIN_FAILED";
    console.error("Login failed", { code });
    const configurationError = code.includes("MISSING") || code.includes("CONFIGURED");
    return json({ error: configurationError ? "AUTH_NOT_CONFIGURED" : "LOGIN_FAILED" }, configurationError ? 503 : 500);
  }
}

export default { fetch: handleLogin };
