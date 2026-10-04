import { authenticatedUsername, json } from "../_lib/auth";

export default function handler(request: Request) {
  if (request.method !== "GET") return json({ error: "METHOD_NOT_ALLOWED" }, 405, { Allow: "GET" });
  const username = authenticatedUsername(request);
  return username ? json({ user: { username } }) : json({ user: null }, 401);
}
