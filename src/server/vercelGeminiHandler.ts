import type { IncomingMessage, ServerResponse } from "node:http";
import type { ApiResult } from "./gemini";
import { checkRateLimit } from "./gemini";

type VercelRequest = IncomingMessage & {
  body?: unknown;
  socket?: IncomingMessage["socket"];
};

type GeminiAction = (body: unknown) => Promise<ApiResult>;

const sendJson = (res: ServerResponse, status: number, body: unknown) => {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
};

const parseBodyValue = (body: unknown) => {
  if (typeof body === "string") {
    return body.trim() ? JSON.parse(body) : {};
  }
  if (Buffer.isBuffer(body)) {
    const raw = body.toString("utf8");
    return raw.trim() ? JSON.parse(raw) : {};
  }
  return body ?? {};
};

const readBody = async (req: VercelRequest) => {
  if (req.body !== undefined) return parseBodyValue(req.body);

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  return parseBodyValue(Buffer.concat(chunks));
};

const getClientKey = (req: VercelRequest) => {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string" && forwardedFor.trim()) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }
  if (Array.isArray(forwardedFor) && forwardedFor[0]) {
    return forwardedFor[0].split(",")[0]?.trim() || "unknown";
  }
  return req.socket?.remoteAddress || "unknown";
};

export async function handleGeminiApi(req: VercelRequest, res: ServerResponse, action: GeminiAction) {
  try {
    if (req.method !== "POST") {
      sendJson(res, 405, { error: "Method not allowed", code: "method_not_allowed" });
      return;
    }

    const limited = checkRateLimit(getClientKey(req));
    if (limited) {
      sendJson(res, limited.status, limited.body);
      return;
    }

    let body: unknown;
    try {
      body = await readBody(req);
    } catch (error) {
      console.warn("Invalid Gemini API request body:", error instanceof Error ? error.message : String(error));
      sendJson(res, 400, { error: "Request body must be valid JSON.", code: "invalid_json" });
      return;
    }

    const result = await action(body);
    sendJson(res, result.status, result.body);
  } catch (error) {
    console.error("Gemini API handler error:", error);
    sendJson(res, 500, { error: "AI endpoint failed before completing the request.", code: "api_handler_failed" });
  }
}
