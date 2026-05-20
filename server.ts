import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3000);
  const isProduction =
    process.env.NODE_ENV === "production" ||
    process.env.npm_lifecycle_event === "start";

  app.use(express.json({ limit: "64kb" }));

  const geminiApiKey = process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY2;
  const textModels = (process.env.GEMINI_TEXT_MODELS || "gemini-2.5-flash,gemini-2.0-flash")
    .split(",")
    .map((model) => model.trim())
    .filter(Boolean);
  const imageModel = process.env.GEMINI_IMAGE_MODEL || "imagen-3.0-generate-001";

  const ai = new GoogleGenAI({
    apiKey: geminiApiKey || "missing-api-key",
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  const limiter = new Map<string, { count: number; resetAt: number }>();
  const rateLimitWindowMs = Number(process.env.API_RATE_LIMIT_WINDOW_MS || 60_000);
  const rateLimitMax = Number(process.env.API_RATE_LIMIT_MAX || 20);

  app.use("/api/gemini", (req, res, next) => {
    const now = Date.now();
    const key = req.ip || req.socket.remoteAddress || "unknown";
    const current = limiter.get(key);

    if (!current || current.resetAt <= now) {
      limiter.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
      return next();
    }

    current.count += 1;
    if (current.count > rateLimitMax) {
      return res.status(429).json({ error: "Too many AI requests. Please try again later." });
    }

    next();
  });

  setInterval(() => {
    const now = Date.now();
    for (const [key, value] of limiter.entries()) {
      if (value.resetAt <= now) limiter.delete(key);
    }
  }, rateLimitWindowMs).unref();

  const requireGeminiKey = () => {
    if (!geminiApiKey) {
      const err = new Error("Missing GEMINI_API_KEY. Add it to .env.local before using Gemini APIs.");
      (err as Error & { status?: number }).status = 503;
      throw err;
    }
  };

  const generateWithFallback = async (options: any) => {
    requireGeminiKey();

    let lastError;
    
    for (const model of textModels) {
      try {
        return await ai.models.generateContent({
          ...options,
          model
        });
      } catch (error: any) {
        lastError = error;
        console.warn(`Model ${model} failed: ${error.message}. Trying next model...`);
      }
    }
    throw lastError;
  };

  // API to get more info about a word
  app.post("/api/gemini/explain", async (req, res) => {
    const { word, meaning } = req.body;
    if (typeof word !== "string" || word.trim().length === 0 || word.length > 80) {
      return res.status(400).json({ error: "A valid word is required" });
    }
    if (meaning !== undefined && (typeof meaning !== "string" || meaning.length > 300)) {
      return res.status(400).json({ error: "Meaning is too long" });
    }

    try {
      const response = await generateWithFallback({
        contents: `Explain the TOEIC vocabulary word "${word}" (meaning: ${meaning}) in more detail. 
        Provide:
        1. Simple English explanation.
        2. Common collocations.
        3. A real-world business example sentence.
        Return as Markdown.`,
      });

      res.json({ text: response.text });
    } catch (error) {
      const status = (error as Error & { status?: number }).status || 500;
      console.error("Gemini explain error:", error);
      res.status(status).json({ error: "Failed to generate explanation" });
    }
  });

  app.post("/api/gemini/generate-avatar", async (req, res) => {
    try {
      requireGeminiKey();
      const prompt =
        typeof req.body.prompt === "string" && req.body.prompt.length <= 500
          ? req.body.prompt
          : "A minimal, clean vector avatar for a professional profile, solid bright background, simple geometric shapes";
      const response = await ai.models.generateImages({
        model: imageModel,
        prompt,
        config: {
          outputMimeType: "image/jpeg",
          numberOfImages: 1,
          aspectRatio: "1:1"
        }
      });
      const base64 = response.generatedImages?.[0]?.image?.imageBytes;
      if (base64) {
        res.json({ image: `data:image/jpeg;base64,${base64}` });
      } else {
        res.status(500).json({ error: "No image bytes returned" });
      }
    } catch (error) {
      const status = (error as Error & { status?: number }).status || 500;
      console.error("Imagen error:", error);
      res.status(status).json({ error: "Failed to generate image" });
    }
  });

  app.post("/api/gemini/quiz", async (req, res) => {
    const { words } = req.body;
    if (!Array.isArray(words) || words.length === 0 || words.length > 20) {
      return res.status(400).json({ error: "Words array must contain 1-20 items" });
    }
    const safeWords = words
      .filter((w: any) => typeof w?.word === "string" && w.word.length <= 80)
      .map((w: any) => ({
        word: w.word,
        meaning: typeof w.meaning === "string" ? w.meaning.slice(0, 300) : "",
      }));
    if (safeWords.length !== words.length) {
      return res.status(400).json({ error: "Each quiz word must include a valid word" });
    }

    try {
      const prompt = `Generate a varied quiz for these vocabulary words: ${safeWords.map((w) => w.word).join(', ')}.
      For each word, create an engaging quiz question. Mix the types between Multiple Choice ('mcq') and Fill in the Blanks ('fill').
      - For 'mcq', provide a real-world scenario with _____ and 4 options.
      - For 'fill', provide an engaging sentence or short dialogue with _____ where the user must type the exact missing word.
      
      Return exactly a JSON array, with no other text or explanation. 
      Format each object as:
      {
        "wordId": "string",
        "type": "mcq" | "fill",
        "questionText": "string (the scenario with _____ for the missing word)",
        "options": ["string", "string", "string", "string"], (provide 4 options for mcq, or empty array [] for fill)
        "answer": "string" (the correct word),
        "hint": "string (a helpful hint in Vietnamese for the missing word)",
        "translation": "string (Vietnamese translation of the entire questionText sentence)",
        "explanation": "string (A short explanation in Vietnamese about why this word is correct and what mistake to avoid)"
      }
      MAKE SURE the JSON is an array.`;

      const response = await generateWithFallback({
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });

      const text = response.text;
      if (!text) throw new Error("Empty response");
      
      const quizQuestions = JSON.parse(text);
      if (!Array.isArray(quizQuestions)) {
        throw new Error("Quiz response was not an array");
      }
      res.json({ questions: quizQuestions });
    } catch (error) {
      const status = (error as Error & { status?: number }).status || 500;
      console.error("Gemini quiz error:", error);
      res.status(status).json({ error: "Failed to generate quiz" });
    }
  });

  // API to seed initial data (hidden/admin)
  app.post("/api/seed", async (req, res) => {
    // This would typically involve Firebase Admin, but since we are in a container with client SDK config,
    // we can't easily seed Firestore directly from the server without service account.
    // We'll handle seeding on the client side for this applet's simplicity or provide instruction.
    res.json({ message: "Seeding should be triggered from client-side admin action." });
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
