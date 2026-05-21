export interface ApiResult {
  status: number;
  body: unknown;
}

type RateEntry = {
  count: number;
  resetAt: number;
};

const limiter = new Map<string, RateEntry>();

const rateLimitWindowMs = Number(process.env.API_RATE_LIMIT_WINDOW_MS || 60_000);
const rateLimitMax = Number(process.env.API_RATE_LIMIT_MAX || 20);

const getGeminiApiKey = () => process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY2;

const textModels = () =>
  (process.env.GEMINI_TEXT_MODELS || "gemini-2.5-flash,gemini-2.0-flash")
    .split(",")
    .map((model) => model.trim())
    .filter(Boolean);

const imageModel = () => process.env.GEMINI_IMAGE_MODEL || "imagen-3.0-generate-001";

const createAiClient = async () => {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY");
  }

  const { GoogleGenAI } = await import("@google/genai");
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "eng-master",
      },
    },
  });
};

export function checkRateLimit(key: string): ApiResult | null {
  const now = Date.now();
  const current = limiter.get(key);

  if (!current || current.resetAt <= now) {
    limiter.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    return null;
  }

  current.count += 1;
  if (current.count > rateLimitMax) {
    return {
      status: 429,
      body: { error: "Too many AI requests. Please try again later.", code: "rate_limited" },
    };
  }

  return null;
}

export function cleanupRateLimit() {
  const now = Date.now();
  for (const [key, value] of limiter.entries()) {
    if (value.resetAt <= now) limiter.delete(key);
  }
}

const normalizeGeminiError = (error: unknown): ApiResult => {
  const message = error instanceof Error ? error.message : String(error);
  const lower = message.toLowerCase();

  if (!getGeminiApiKey()) {
    return { status: 503, body: { error: "AI is not configured.", code: "missing_key" } };
  }
  if (
    lower.includes("api key") ||
    lower.includes("apikey") ||
    lower.includes("unauthenticated") ||
    lower.includes("permission_denied") ||
    lower.includes("forbidden")
  ) {
    return {
      status: 503,
      body: { error: "AI service key is invalid or not allowed for this deployment.", code: "invalid_key" },
    };
  }
  if (lower.includes("quota") || lower.includes("resource_exhausted")) {
    return { status: 429, body: { error: "AI quota is temporarily unavailable.", code: "quota" } };
  }
  if (lower.includes("not found") || lower.includes("not_found") || lower.includes("model")) {
    return {
      status: 502,
      body: { error: "The configured AI model is unavailable.", code: "model_unavailable" },
    };
  }
  if (lower.includes("timeout") || lower.includes("deadline") || lower.includes("fetch failed")) {
    return { status: 504, body: { error: "AI request timed out. Please try again.", code: "ai_timeout" } };
  }
  if (lower.includes("safety")) {
    return { status: 400, body: { error: "AI blocked this request for safety reasons.", code: "safety" } };
  }

  return { status: 500, body: { error: "AI request failed.", code: "ai_failed" } };
};

const generateWithFallback = async (options: any) => {
  const ai = await createAiClient();
  let lastError: unknown;

  for (const model of textModels()) {
    try {
      return await ai.models.generateContent({
        ...options,
        model,
      });
    } catch (error) {
      lastError = error;
      console.warn(`Model ${model} failed: ${error instanceof Error ? error.message : String(error)}. Trying next model...`);
    }
  }

  throw lastError;
};

export async function explainWord(body: any): Promise<ApiResult> {
  const { word, meaning } = body || {};
  if (typeof word !== "string" || word.trim().length === 0 || word.length > 80) {
    return { status: 400, body: { error: "A valid word is required.", code: "invalid_word" } };
  }
  if (meaning !== undefined && (typeof meaning !== "string" || meaning.length > 300)) {
    return { status: 400, body: { error: "Meaning is too long.", code: "invalid_meaning" } };
  }

  try {
    const response = await generateWithFallback({
      contents: `Explain the TOEIC vocabulary word "${word}" (meaning: ${meaning || ""}) in more detail.
Provide:
1. Simple English explanation.
2. Common collocations.
3. A real-world business example sentence.
Return as Markdown.`,
    });

    return { status: 200, body: { text: response.text } };
  } catch (error) {
    console.error("Gemini explain error:", error);
    return normalizeGeminiError(error);
  }
}

export async function generateAvatar(body: any): Promise<ApiResult> {
  const prompt =
    typeof body?.prompt === "string" && body.prompt.length <= 500
      ? body.prompt
      : "A minimal, clean vector avatar for a professional profile, solid bright background, simple geometric shapes";

  try {
    const ai = await createAiClient();
    const response = await ai.models.generateImages({
      model: imageModel(),
      prompt,
      config: {
        outputMimeType: "image/jpeg",
        numberOfImages: 1,
        aspectRatio: "1:1",
      },
    });

    const base64 = response.generatedImages?.[0]?.image?.imageBytes;
    if (!base64) {
      return { status: 500, body: { error: "No image bytes returned.", code: "empty_image" } };
    }

    return { status: 200, body: { image: `data:image/jpeg;base64,${base64}` } };
  } catch (error) {
    console.error("Imagen error:", error);
    return normalizeGeminiError(error);
  }
}

export async function generateQuiz(body: any): Promise<ApiResult> {
  const { words } = body || {};
  if (!Array.isArray(words) || words.length === 0 || words.length > 20) {
    return { status: 400, body: { error: "Words array must contain 1-20 items.", code: "invalid_words" } };
  }

  const safeWords = words
    .filter((word: any) => typeof word?.word === "string" && word.word.length <= 80)
    .map((word: any) => ({
      word: word.word,
      meaning: typeof word.meaning === "string" ? word.meaning.slice(0, 300) : "",
    }));

  if (safeWords.length !== words.length) {
    return { status: 400, body: { error: "Each quiz word must include a valid word.", code: "invalid_word_item" } };
  }

  try {
    const wordList = safeWords.map((word) => `- ${word.word}: ${word.meaning}`).join("\n");
    const prompt = `Generate a varied TOEIC quiz for these vocabulary words:
${wordList}

For each word, create one engaging quiz question. Mix the types between Multiple Choice ("mcq") and Fill in the Blanks ("fill").
- For "mcq", provide a real-world scenario with _____ and 4 options.
- For "fill", provide an engaging sentence or short dialogue with _____ where the user must type the exact missing word.

Return exactly a JSON array, with no other text or explanation.
Format each object as:
{
  "wordId": "string",
  "type": "mcq or fill",
  "questionText": "string with _____ for the missing word",
  "options": ["string", "string", "string", "string"],
  "answer": "string",
  "hint": "Vietnamese hint",
  "translation": "Vietnamese translation of questionText",
  "explanation": "Short Vietnamese explanation about why this word is correct and what mistake to avoid"
}

MAKE SURE the JSON is an array.`;

    const response = await generateWithFallback({
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text;
    if (!text) throw new Error("Empty response");

    const questions = JSON.parse(text);
    if (!Array.isArray(questions)) {
      throw new Error("Quiz response was not an array");
    }

    return { status: 200, body: { questions } };
  } catch (error) {
    console.error("Gemini quiz error:", error);
    return normalizeGeminiError(error);
  }
}

export async function generateMistakeReview(body: any): Promise<ApiResult> {
  const { mistakes } = body || {};
  if (!Array.isArray(mistakes) || mistakes.length === 0 || mistakes.length > 20) {
    return { status: 400, body: { error: "Mistakes array must contain 1-20 items.", code: "invalid_mistakes" } };
  }

  const safeMistakes = mistakes
    .filter((item: any) => typeof item?.word === "string" && item.word.length <= 80)
    .map((item: any) => ({
      word: item.word,
      meaning: typeof item.meaning === "string" ? item.meaning.slice(0, 300) : "",
      userAnswer: typeof item.userAnswer === "string" ? item.userAnswer.slice(0, 120) : "",
      correctAnswer: typeof item.correctAnswer === "string" ? item.correctAnswer.slice(0, 120) : "",
    }));

  if (safeMistakes.length !== mistakes.length) {
    return { status: 400, body: { error: "Each mistake must include a valid word.", code: "invalid_mistake_item" } };
  }

  try {
    const mistakeList = safeMistakes
      .map(
        (item) =>
          `- Word: ${item.word}; Meaning: ${item.meaning}; User answer: ${item.userAnswer}; Correct: ${item.correctAnswer}`,
      )
      .join("\n");

    const response = await generateWithFallback({
      contents: `You are a TOEIC vocabulary coach. Review these quiz mistakes and return concise Vietnamese Markdown.
For each item, explain why the answer is wrong and give one memorable learning tip.
Mistakes:
${mistakeList}`,
    });

    return { status: 200, body: { text: response.text } };
  } catch (error) {
    console.error("Gemini mistake review error:", error);
    return normalizeGeminiError(error);
  }
}
