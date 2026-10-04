import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { configuredUsername, createSessionToken, verifyCredentials, verifySessionToken } from "./auth";

describe("cloud authentication", () => {
  beforeEach(() => {
    process.env.SESSION_SECRET = "test-session-secret-with-more-than-32-characters";
    delete process.env.APP_USERNAME;
    delete process.env.APP_PASSWORD;
  });

  afterEach(() => {
    delete process.env.SESSION_SECRET;
  });

  it("accepts the requested default account", () => {
    expect(configuredUsername()).toBe("mh");
    expect(verifyCredentials("mh", "123456")).toBe(true);
  });

  it("rejects a wrong username or password", () => {
    expect(verifyCredentials("other", "123456")).toBe(false);
    expect(verifyCredentials("mh", "wrong-password")).toBe(false);
  });

  it("creates and verifies a signed session token", () => {
    const token = createSessionToken("mh");
    expect(verifySessionToken(token)).toBe("mh");
    expect(verifySessionToken(`${token}tampered`)).toBeNull();
  });

  it("allows a secure password override from the environment", () => {
    process.env.APP_PASSWORD = "a-much-stronger-password";
    expect(verifyCredentials("mh", "a-much-stronger-password")).toBe(true);
    expect(verifyCredentials("mh", "123456")).toBe(false);
  });
});
