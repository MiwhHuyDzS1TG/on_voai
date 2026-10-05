import { afterEach, beforeEach, describe, expect, it } from "vitest";
import loginFunction from "./login";
import logoutFunction from "./logout";
import meFunction from "./me";
import syncFunction from "../sync";
import { createSessionToken } from "../_lib/auth";

describe("Vercel Web Handler contract", () => {
  beforeEach(() => {
    process.env.SESSION_SECRET = "test-session-secret-with-more-than-32-characters";
  });

  afterEach(() => {
    delete process.env.SESSION_SECRET;
  });

  it("exports fetch handlers for every production endpoint", () => {
    expect(loginFunction.fetch).toBeTypeOf("function");
    expect(logoutFunction.fetch).toBeTypeOf("function");
    expect(meFunction.fetch).toBeTypeOf("function");
    expect(syncFunction.fetch).toBeTypeOf("function");
  });

  it("restores a valid signed session", async () => {
    const token = createSessionToken("mh");
    const response = await meFunction.fetch(new Request("https://onvoai.vercel.app/api/auth/me", {
      headers: { cookie: `vaio_session=${token}` },
    }));
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ user: { username: "mh" } });
  });

  it("clears the production cookie securely", async () => {
    const response = await logoutFunction.fetch(new Request("https://onvoai.vercel.app/api/auth/logout", {
      method: "POST",
      headers: { origin: "https://onvoai.vercel.app" },
    }));
    expect(response.status).toBe(200);
    expect(response.headers.get("set-cookie")).toContain("HttpOnly");
    expect(response.headers.get("set-cookie")).toContain("Secure");
    expect(response.headers.get("set-cookie")).toContain("SameSite=Strict");
  });

  it("returns a stable configuration error instead of crashing or leaking details", async () => {
    delete process.env.UPSTASH_REDIS_REST_URL;
    delete process.env.UPSTASH_REDIS_REST_TOKEN;
    const response = await loginFunction.fetch(new Request("https://onvoai.vercel.app/api/auth/login", {
      method: "POST",
      headers: { origin: "https://onvoai.vercel.app", "content-type": "application/json" },
      body: JSON.stringify({ username: "mh", password: "123456" }),
    }));
    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toEqual({ error: "AUTH_NOT_CONFIGURED" });
  });
});
