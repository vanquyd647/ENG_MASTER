import type { IncomingMessage, ServerResponse } from "node:http";
import { checkRateLimit, generateAvatar } from "../../src/server/gemini";

const readBody = async (req: IncomingMessage & { body?: unknown }) => {
  if (req.body) return req.body;

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
};

export default async function handler(req: IncomingMessage & { body?: unknown; socket: IncomingMessage["socket"] }, res: ServerResponse) {
  if (req.method !== "POST") {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const limited = checkRateLimit(req.socket.remoteAddress || "unknown");
  if (limited) {
    res.writeHead(limited.status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(limited.body));
    return;
  }

  const result = await generateAvatar(await readBody(req));
  res.writeHead(result.status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(result.body));
}
