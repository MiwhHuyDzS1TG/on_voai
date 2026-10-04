import { createHash, createHmac, scryptSync, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "vaio_session";
const DEFAULT_USERNAME = "mh";
const DEFAULT_PASSWORD_SALT = "0b061caa397a24a1fd0b9b192878a06d";
const DEFAULT_PASSWORD_HASH = "bcaf6557b067d474cb633278d1ebe138d017c2401981dc896e60b5239c375e2d84b983c13c4ef2d4153ab99dfdfc5b8e2a6f5f8163ca329d5e03d1e271128908";
const SESSION_AGE_SECONDS = 60 * 60 * 24 * 30;

const safeEqual = (left: Buffer, right: Buffer) => left.length === right.length && timingSafeEqual(left, right);

export const configuredUsername = () => process.env.APP_USERNAME?.trim() || DEFAULT_USERNAME;

export const verifyCredentials = (username: string, password: string): boolean => {
  if (username !== configuredUsername()) return false;

  if (process.env.APP_PASSWORD) {
    const received = createHash("sha256").update(password).digest();
    const expected = createHash("sha256").update(process.env.APP_PASSWORD).digest();
    return safeEqual(received, expected);
  }

  const received = scryptSync(password, DEFAULT_PASSWORD_SALT, 64);
  return safeEqual(received, Buffer.from(DEFAULT_PASSWORD_HASH, "hex"));
};

const sessionSecret = (): string => {
  const secret = process.env.SESSION_SECRET
    || process.env.UPSTASH_REDIS_REST_TOKEN
    || process.env.KV_REST_API_TOKEN;
  if (!secret) throw new Error("SESSION_SECRET_OR_REDIS_TOKEN_MISSING");
  return secret;
};

export const createSessionToken = (username: string): string => {
  const payload = Buffer.from(JSON.stringify({ username, expiresAt: Date.now() + SESSION_AGE_SECONDS * 1000 })).toString("base64url");
  const signature = createHmac("sha256", sessionSecret()).update(payload).digest("base64url");
  return `${payload}.${signature}`;
};

export const verifySessionToken = (token: string | undefined): string | null => {
  if (!token) return null;
  const [payload, suppliedSignature] = token.split(".");
  if (!payload || !suppliedSignature) return null;

  try {
    const expectedSignature = createHmac("sha256", sessionSecret()).update(payload).digest("base64url");
    if (!safeEqual(Buffer.from(suppliedSignature), Buffer.from(expectedSignature))) return null;
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as { username?: string; expiresAt?: number };
    if (parsed.username !== configuredUsername() || !parsed.expiresAt || parsed.expiresAt < Date.now()) return null;
    return parsed.username;
  } catch {
    return null;
  }
};

const readCookie = (request: Request, name: string): string | undefined => {
  const cookie = request.headers.get("cookie") ?? "";
  return cookie.split(";").map((part) => part.trim()).find((part) => part.startsWith(`${name}=`))?.slice(name.length + 1);
};

export const authenticatedUsername = (request: Request) => verifySessionToken(readCookie(request, COOKIE_NAME));

export const sessionCookie = (token: string) => `${COOKIE_NAME}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESSION_AGE_SECONDS}`;
export const clearSessionCookie = () => `${COOKIE_NAME}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;

export const isSameOrigin = (request: Request): boolean => {
  const origin = request.headers.get("origin");
  return !origin || origin === new URL(request.url).origin;
};

export const json = (data: unknown, status = 200, headers?: HeadersInit) => Response.json(data, {
  status,
  headers: { "Cache-Control": "no-store", ...headers },
});
