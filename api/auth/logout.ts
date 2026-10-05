import { clearSessionCookie, isSameOrigin, json } from "../_lib/auth";

export function handleLogout(request: Request) {
  if (request.method !== "POST") return json({ error: "METHOD_NOT_ALLOWED" }, 405, { Allow: "POST" });
  if (!isSameOrigin(request)) return json({ error: "INVALID_ORIGIN" }, 403);
  return json({ ok: true }, 200, { "Set-Cookie": clearSessionCookie() });
}

export default { fetch: handleLogout };
