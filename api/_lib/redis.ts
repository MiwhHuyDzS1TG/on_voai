import { Redis } from "@upstash/redis";

let redis: Redis | null = null;

export const getRedis = (): Redis => {
  if (redis) return redis;
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url || !token) throw new Error("REDIS_NOT_CONFIGURED");
  redis = new Redis({ url, token });
  return redis;
};
