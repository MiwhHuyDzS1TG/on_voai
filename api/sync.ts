import type { ProgressData } from "../src/types";
import { authenticatedUsername, isSameOrigin, json } from "./_lib/auth";
import { getRedis } from "./_lib/redis";

type CloudRecord = { data: ProgressData; updatedAt: string };

const isProgressData = (value: unknown): value is ProgressData => {
  if (!value || typeof value !== "object") return false;
  const data = value as Partial<ProgressData>;
  return data.version === 1
    && Array.isArray(data.lessonCompletion)
    && Array.isArray(data.answers)
    && Array.isArray(data.mistakes)
    && typeof data.mastery === "object";
};

export async function handleSync(request: Request) {
  const username = authenticatedUsername(request);
  if (!username) return json({ error: "UNAUTHORIZED" }, 401);
  if (!isSameOrigin(request)) return json({ error: "INVALID_ORIGIN" }, 403);

  try {
    const redis = getRedis();
    const key = `vaio:progress:${username}`;

    if (request.method === "GET") {
      const record = await redis.get<CloudRecord>(key);
      return json({ record: record ?? null });
    }

    if (request.method === "PUT") {
      const contentLength = Number(request.headers.get("content-length") || 0);
      if (contentLength > 1_000_000) return json({ error: "PAYLOAD_TOO_LARGE" }, 413);
      const body = await request.json() as { data?: unknown };
      if (!isProgressData(body.data)) return json({ error: "INVALID_PROGRESS" }, 400);
      const record: CloudRecord = { data: body.data, updatedAt: new Date().toISOString() };
      await redis.set(key, record);
      return json({ record });
    }

    return json({ error: "METHOD_NOT_ALLOWED" }, 405, { Allow: "GET, PUT" });
  } catch (error) {
    const code = error instanceof Error ? error.message : "SYNC_FAILED";
    console.error("Cloud sync failed", { code });
    return json({ error: code === "REDIS_NOT_CONFIGURED" ? "REDIS_NOT_CONFIGURED" : "SYNC_FAILED" }, code === "REDIS_NOT_CONFIGURED" ? 503 : 500);
  }
}

export default { fetch: handleSync };
