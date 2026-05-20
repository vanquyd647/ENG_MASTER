import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { checkRateLimit, cleanupRateLimit, explainWord, generateAvatar, generateMistakeReview, generateQuiz } from "./src/server/gemini";

dotenv.config({ path: ".env.local" });
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3000);
  const isProduction =
    process.env.NODE_ENV === "production" ||
    process.env.npm_lifecycle_event === "start";

  app.use(express.json({ limit: "64kb" }));

  app.use("/api/gemini", (req, res, next) => {
    const limited = checkRateLimit(req.ip || req.socket.remoteAddress || "unknown");
    if (limited) return res.status(limited.status).json(limited.body);
    next();
  });

  setInterval(cleanupRateLimit, Number(process.env.API_RATE_LIMIT_WINDOW_MS || 60_000)).unref();

  app.post("/api/gemini/explain", async (req, res) => {
    const result = await explainWord(req.body);
    res.status(result.status).json(result.body);
  });

  app.post("/api/gemini/generate-avatar", async (req, res) => {
    const result = await generateAvatar(req.body);
    res.status(result.status).json(result.body);
  });

  app.post("/api/gemini/quiz", async (req, res) => {
    const result = await generateQuiz(req.body);
    res.status(result.status).json(result.body);
  });

  app.post("/api/gemini/mistake-review", async (req, res) => {
    const result = await generateMistakeReview(req.body);
    res.status(result.status).json(result.body);
  });

  // Vite middleware for development
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
