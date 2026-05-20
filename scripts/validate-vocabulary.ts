import { VOCABULARY, Word } from "../src/data/vocabulary.ts";

const requiredFields: Array<keyof Word> = [
  "id",
  "topic",
  "word",
  "pos",
  "meaning",
  "example",
  "exampleTranslation",
];

const errors: string[] = [];
const warnings: string[] = [];
const ids = new Set<string>();
const normalizedKeys = new Set<string>();
const suspiciousEncoding = /(?:Ã|Â|â|Ä|á»|Ë|É|Ê|Å)/;

VOCABULARY.forEach((entry, index) => {
  for (const field of requiredFields) {
    const value = entry[field];
    if (typeof value !== "string" || value.trim().length === 0) {
      errors.push(`Row ${index + 1}: missing ${field}`);
    }
  }

  if (ids.has(entry.id)) {
    errors.push(`Duplicate id: ${entry.id}`);
  }
  ids.add(entry.id);

  if (typeof entry.phonetic !== "string" || entry.phonetic.trim().length === 0) {
    warnings.push(`Missing phonetic in ${entry.id} (${entry.word})`);
  }

  const normalizedKey = `${entry.topic.trim().toLowerCase()}::${entry.word.trim().toLowerCase()}`;
  if (normalizedKeys.has(normalizedKey)) {
    errors.push(`Duplicate topic+word: ${entry.topic} / ${entry.word}`);
  }
  normalizedKeys.add(normalizedKey);

  const searchableText = [
    entry.phonetic,
    entry.meaning,
    entry.exampleTranslation,
    entry.translations?.vi,
  ]
    .filter(Boolean)
    .join(" ");

  if (suspiciousEncoding.test(searchableText)) {
    warnings.push(`Possible encoding/OCR issue in ${entry.id} (${entry.word})`);
  }
});

if (warnings.length > 0) {
  console.warn(`[vocabulary] ${warnings.length} possible encoding/OCR issues detected.`);
  for (const warning of warnings.slice(0, 20)) {
    console.warn(`- ${warning}`);
  }
  if (warnings.length > 20) {
    console.warn(`- ...and ${warnings.length - 20} more`);
  }
}

if (errors.length > 0) {
  console.error(`[vocabulary] ${errors.length} validation errors found.`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`[vocabulary] ${VOCABULARY.length} entries validated.`);
