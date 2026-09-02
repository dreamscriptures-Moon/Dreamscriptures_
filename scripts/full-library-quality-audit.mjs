import { mkdir, writeFile } from "node:fs/promises";
import { dreams } from "../data/dream.js";
import { getEditorialStatus } from "../data/editorialStatuses.js";

const OUTPUT_DIR = new URL("../reports/dream-quality-audit/", import.meta.url);
const STOP_WORDS = new Set([
  "about", "after", "again", "also", "and", "are", "because", "been", "being", "between",
  "but", "can", "could", "does", "dream", "dreaming", "dreams", "during", "each", "from",
  "have", "into", "itself", "many", "may", "meaning", "might", "more", "often", "other",
  "rather", "reflect", "represents", "something", "such", "than", "that", "their", "them",
  "there", "these", "they", "this", "through", "what", "when", "where", "which", "while",
  "with", "would", "your", "you",
]);
const EMOTIONS = [
  "afraid", "anxious", "anxiety", "anger", "angry", "ashamed", "awe", "calm", "comfort",
  "confused", "curious", "disgust", "excited", "fear", "free", "grief", "guilt", "happy",
  "helpless", "hope", "joy", "lonely", "loved", "numb", "peace", "powerful", "relief",
  "sad", "safe", "shame", "threatened", "trapped", "uneasy", "vulnerable",
];
const CONDITIONAL_MARKERS = [
  "if you", "depending on", "changes when", "can shift", "rather than", "while a", "whereas",
  "the meaning changes", "felt", "whether", "what happened", "how you responded", "how the dream ended",
];
const TRUST_RISKS = [
  "definitely means", "guarantees", "will happen", "is a bad omen", "proves that", "you are cursed",
  "the universe is telling you", "predicts death", "predicts pregnancy", "means your partner is cheating",
];
const TRUST_SIGNALS = [
  "may", "might", "can", "could", "possibility", "rather than", "does not predict", "not necessarily",
  "depends on", "context", "sometimes", "recent", "ordinary", "cannot determine",
];
const MAJOR_CATEGORIES = [
  ["Animals and creatures", ["animal", "animals", "snake", "spider", "fish", "rat", "bear", "tiger", "cow", "lion", "dragon", "bird", "dog", "cat", "crocodile", "scorpion", "shark", "elephant"]],
  ["Relationships", ["relationship", "romance", "partner", "ex-partner", "marriage", "wedding", "kissing", "cheating", "dating"]],
  ["Family", ["family", "parent", "mother", "father", "baby", "child", "pregnant", "birth", "sibling"]],
  ["Houses and places", ["house", "home", "room", "building", "city", "forest", "school", "hospital", "church", "temple", "cave"]],
  ["Water", ["water", "ocean", "sea", "river", "lake", "pool", "underwater", "drowning", "waves"]],
  ["Natural disasters", ["disaster", "tornado", "volcano", "earthquake", "flood", "tsunami", "drought", "storm"]],
  ["Death and grief", ["death", "dying", "dead", "funeral", "burial", "cemetery", "coffin", "grief"]],
  ["Objects", ["object", "objects", "mirror", "phone", "book", "ring", "shoe", "clock", "door", "key", "money", "gold"]],
  ["Food", ["food", "eating", "fruit", "bread", "meat", "harvest"]],
  ["Travel and transportation", ["travel", "transportation", "train", "car", "bus", "flight", "plane", "road", "driving", "journey"]],
  ["Body-related dreams", ["body", "teeth", "hair", "blood", "naked", "pregnant", "urinating", "peeing", "injury", "pain"]],
  ["Biblical dreams", ["biblical", "scripture", "bible", "god", "jesus", "angel", "ark", "prophetic"]],
  ["Spiritual dreams", ["spiritual", "demon", "evil", "witchcraft", "praying", "heaven", "light", "soul"]],
  ["Anxiety and fear", ["anxiety", "fear", "chased", "trapped", "watched", "attack", "panic", "lost", "failing", "public speaking"]],
  ["Transformation and life transitions", ["transformation", "transition", "change", "growth", "future", "moving", "aging", "butterfly"]],
];
const CATEGORY_ALIASES = new Map([
  ["life transitions", "Transformation and life transitions"],
  ["personal growth", "Transformation and life transitions"],
  ["new beginnings", "Transformation and life transitions"],
  ["transformation", "Transformation and life transitions"],
  ["relationships", "Relationships"],
  ["family", "Family"],
  ["spiritual", "Spiritual dreams"],
  ["spirituality", "Spiritual dreams"],
  ["spiritual reflection", "Spiritual dreams"],
  ["biblical", "Biblical dreams"],
  ["biblical symbolism", "Biblical dreams"],
  ["fear", "Anxiety and fear"],
  ["anxiety", "Anxiety and fear"],
  ["grief", "Death and grief"],
  ["death", "Death and grief"],
  ["travel", "Travel and transportation"],
  ["food", "Food"],
]);

function repairMojibake(value) {
  return value
    .replaceAll("â€™", "’")
    .replaceAll("â€˜", "‘")
    .replaceAll("â€œ", "“")
    .replaceAll("â€", "”")
    .replaceAll("â€”", "—")
    .replaceAll("â€“", "–")
    .replaceAll("Â·", "·")
    .replaceAll("dÃ©jÃ ", "déjà")
    .replaceAll("dÃ©jÃ", "déjà");
}

function clean(value = "") {
  if (Array.isArray(value)) return value.map(clean).filter(Boolean).join(" ");
  if (value && typeof value === "object") {
    const ignoredKeys = new Set(["slug", "id", "href", "url", "icon", "image", "imageUrl"]);
    return Object.entries(value)
      .filter(([key]) => !ignoredKeys.has(key))
      .map(([, item]) => clean(item))
      .filter(Boolean)
      .join(" ");
  }
  return typeof value === "string" ? repairMojibake(value).replace(/\s+/g, " ").trim() : "";
}

function normalize(value = "") {
  return clean(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9' ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function words(value = "") {
  return normalize(value).split(" ").filter((word) => word.length > 2 && !STOP_WORDS.has(word));
}

function wordCount(value = "") {
  return clean(value).split(/\s+/).filter(Boolean).length;
}

function sentences(value = "") {
  return clean(value)
    .split(/(?<=[.!?])\s+|\n+/)
    .map(clean)
    .filter((sentence) => wordCount(sentence) >= 8);
}

function stringItems(value) {
  if (!value) return [];
  if (typeof value === "string") return [value];
  if (!Array.isArray(value)) return [];
  return value.map((item) => typeof item === "string" ? item : clean(item)).filter(Boolean);
}

function getFields(dream) {
  return {
    opening: clean(dream.microSummary || dream.shortSummary || dream.shortDescription || dream.description || dream.uniqueDescription),
    description: clean(dream.description || dream.uniqueDescription || dream.shortDescription),
    emotional: clean(dream.emotionalMeaning || dream.emotional),
    symbolic: clean(dream.symbolicMeaning || dream.symbolic),
    spiritual: clean(dream.spiritualMeaning || dream.spiritual),
    biblical: clean(dream.biblicalMeaning || dream.biblical),
    practical: clean(dream.wakingLifeMeaning || dream.wakingLife),
    context: clean(dream.context || dream.interpretationContext || dream.whenThisDreamAppears),
    scenarios: clean([dream.scenarios, dream.types, dream.illustrativeExamples, dream.behaviorInsights, dream.behavioralInsights]),
    questions: stringItems(dream.reflectionQuestions),
  };
}

function titleTokens(dream) {
  return [...new Set(words(`${dream.title || ""} ${String(dream.slug || "").replace(/-/g, " ")}`))];
}

function includesAny(text, phrases) {
  const value = normalize(text);
  return phrases.some((phrase) => value.includes(normalize(phrase)));
}

function countMatches(text, phrases) {
  const value = normalize(text);
  return phrases.filter((phrase) => value.includes(normalize(phrase))).length;
}

function sentenceSpecificity(sentence, dream, idf = new Map()) {
  const normalized = normalize(sentence);
  const tokens = words(sentence);
  const titleHits = titleTokens(dream).filter((token) => normalized.includes(token)).length;
  const conditionalHits = countMatches(sentence, CONDITIONAL_MARKERS);
  const emotionHits = EMOTIONS.filter((emotion) => normalized.includes(emotion)).length;
  const rareSignal = tokens.reduce((sum, token) => sum + Math.min(idf.get(token) || 0, 4), 0) / Math.max(tokens.length, 1);
  const usefulLength = wordCount(sentence) >= 14 && wordCount(sentence) <= 65 ? 1 : 0;
  return titleHits * 2.2 + conditionalHits * 1.4 + Math.min(emotionHits, 3) + rareSignal + usefulLength;
}

function chooseEvidence(candidates, dream, idf, threshold, excluded = new Set()) {
  const ranked = candidates
    .flatMap(sentences)
    .filter((sentence) => !excluded.has(normalize(sentence)))
    .map((sentence) => ({ sentence, score: sentenceSpecificity(sentence, dream, idf) }))
    .sort((a, b) => b.score - a.score || a.sentence.length - b.sentence.length);
  return ranked[0]?.score >= threshold ? ranked[0] : { sentence: "", score: ranked[0]?.score || 0 };
}

function tokenSet(value) {
  return new Set(words(value));
}

function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let overlap = 0;
  for (const value of a) if (b.has(value)) overlap += 1;
  return overlap / (a.size + b.size - overlap);
}

function cosine(a, b) {
  let dot = 0;
  let aSize = 0;
  let bSize = 0;
  for (const value of a.values()) aSize += value * value;
  for (const value of b.values()) bSize += value * value;
  for (const [token, value] of a) dot += value * (b.get(token) || 0);
  return aSize && bSize ? dot / (Math.sqrt(aSize) * Math.sqrt(bSize)) : 0;
}

function scoreLength(value, good, strong) {
  const count = wordCount(value);
  if (count >= strong) return 3;
  if (count >= good) return 2;
  if (count > 0) return 1;
  return 0;
}

function getMajorCategory(dream, fields) {
  const subject = ` ${normalize([dream.title, dream.slug].join(" "))} `;
  for (const [category, signals] of MAJOR_CATEGORIES) {
    if (signals.some((signal) => subject.includes(` ${normalize(signal)} `))) return category;
  }
  const authoredCategories = Array.isArray(dream.categories)
    ? dream.categories
    : Array.isArray(dream.category)
      ? dream.category
      : [dream.category].filter(Boolean);
  for (const category of authoredCategories) {
    const mapped = CATEGORY_ALIASES.get(normalize(category));
    if (mapped) return mapped;
  }
  const haystack = ` ${normalize([dream.categories, dream.category, dream.tags, fields.opening].join(" "))} `;
  let best = { category: "Other", matches: 0 };
  for (const [category, signals] of MAJOR_CATEGORIES) {
    const matches = signals.filter((signal) => haystack.includes(` ${normalize(signal)} `)).length;
    if (matches > best.matches) best = { category, matches };
  }
  return best.category;
}

function csvEscape(value) {
  const string = Array.isArray(value) ? value.join("; ") : String(value ?? "");
  return /[",\n]/.test(string) ? `"${string.replace(/"/g, '""')}"` : string;
}

function markdownQuote(value) {
  return clean(value).replace(/\|/g, "\\|");
}

function reusablePrinciple(record) {
  if (record.scores.D === 3 && record.scores.F === 3) return "Let the dreamer's emotion, response, and ending produce genuinely different readings of the same image.";
  if (record.scores.G === 3) return "Explain why the central image matters in this event instead of listing inherited symbol meanings.";
  if (record.scores.I === 3) return "Connect the scene to recognizable waking-life tensions while leaving the conclusion open to the reader.";
  if (record.scores.E === 3) return "Protect the page's narrow search intent; its usefulness comes from distinctions that neighboring topics cannot absorb.";
  return "Preserve the specific contextual distinction in the quoted evidence, without copying its wording into neighboring pages.";
}

const indexedDreams = dreams.filter((dream) => {
  const status = String(dream.status || dream.seoStatus || "").toLowerCase();
  return dream.noindex !== true && dream.isIndexed !== false && !["draft", "merged", "noindex", "thin"].includes(status);
});

const rawDocuments = indexedDreams.map((dream) => {
  const fields = getFields(dream);
  const core = clean([fields.opening, fields.description, fields.emotional, fields.symbolic, fields.spiritual, fields.biblical, fields.practical, fields.context, fields.scenarios]);
  return { dream, fields, core, tokenSet: tokenSet(core), titleSet: tokenSet(`${dream.title} ${dream.slug}`) };
});

const documentFrequency = new Map();
for (const document of rawDocuments) {
  for (const token of document.tokenSet) documentFrequency.set(token, (documentFrequency.get(token) || 0) + 1);
}
const idf = new Map([...documentFrequency].map(([token, frequency]) => [token, Math.log((rawDocuments.length + 1) / (frequency + 1)) + 1]));

for (const document of rawDocuments) {
  const counts = new Map();
  for (const token of words(document.core)) counts.set(token, (counts.get(token) || 0) + 1);
  const total = [...counts.values()].reduce((sum, count) => sum + count, 0) || 1;
  document.vector = new Map([...counts].map(([token, count]) => [token, (count / total) * (idf.get(token) || 1)]));
}

const neighborsBySlug = new Map();
for (let i = 0; i < rawDocuments.length; i += 1) {
  const source = rawDocuments[i];
  const neighbors = [];
  for (let j = 0; j < rawDocuments.length; j += 1) {
    if (i === j) continue;
    const target = rawDocuments[j];
    const contentSimilarity = cosine(source.vector, target.vector);
    const titleSimilarity = jaccard(source.titleSet, target.titleSet);
    const similarity = contentSimilarity * 0.82 + titleSimilarity * 0.18;
    neighbors.push({ slug: target.dream.slug, title: target.dream.title, similarity, contentSimilarity, titleSimilarity });
  }
  neighbors.sort((a, b) => b.similarity - a.similarity);
  neighborsBySlug.set(source.dream.slug, neighbors.slice(0, 5));
}

const records = rawDocuments.map(({ dream, fields, core }) => {
  const nearest = neighborsBySlug.get(dream.slug)?.[0] || {};
  const related = Array.isArray(dream.relatedDreams) ? dream.relatedDreams : [];
  const relatedWithReasons = related.filter((item) => typeof item === "object" && clean(item.reason));
  const recognition = chooseEvidence([fields.opening, fields.emotional, fields.context, fields.scenarios], dream, idf, 5.1);
  const uniqueInsight = chooseEvidence(
    [fields.symbolic, fields.emotional, fields.practical, fields.context, fields.scenarios, fields.questions],
    dream,
    idf,
    6.1,
    new Set(recognition.sentence ? [normalize(recognition.sentence)] : [])
  );
  const openingTitleHits = titleTokens(dream).filter((token) => normalize(fields.opening).includes(token)).length;
  const conditionalCount = countMatches(core, CONDITIONAL_MARKERS);
  const emotionCount = EMOTIONS.filter((emotion) => normalize(fields.emotional).includes(emotion)).length;
  const symbolicConditionalCount = countMatches(fields.symbolic, CONDITIONAL_MARKERS);
  const practicalSignals = countMatches(fields.practical, ["waking life", "recent", "relationship", "work", "family", "decision", "stress", "memory", "experience", "situation"]);
  const trustRisks = TRUST_RISKS.filter((phrase) => normalize(core).includes(normalize(phrase)));
  const trustSignalCount = countMatches(core, TRUST_SIGNALS);
  const questionSpecificity = fields.questions.length
    ? fields.questions.reduce((sum, question) => sum + sentenceSpecificity(question, dream, idf), 0) / fields.questions.length
    : 0;
  const spirituallyApplicable = Boolean(fields.spiritual || fields.biblical || includesAny([dream.categories, dream.tags, dream.title].join(" "), ["spiritual", "biblical", "god", "angel", "demon", "prayer", "heaven"]));

  const scores = {
    A: fields.opening && openingTitleHits > 0 && wordCount(fields.opening) >= 24 ? 3 : fields.opening && wordCount(fields.opening) >= 18 ? 2 : fields.opening ? 1 : 0,
    B: recognition.sentence ? (recognition.score >= 8 ? 3 : 2) : fields.emotional ? 1 : 0,
    C: uniqueInsight.sentence ? (uniqueInsight.score >= 9 ? 3 : 2) : scoreLength(fields.symbolic, 55, 110),
    D: conditionalCount >= 6 && fields.scenarios ? 3 : conditionalCount >= 3 ? 2 : conditionalCount >= 1 ? 1 : 0,
    E: nearest.similarity < 0.34 ? 3 : nearest.similarity < 0.46 ? 2 : nearest.similarity < 0.58 ? 1 : 0,
    F: emotionCount >= 5 && countMatches(fields.emotional, CONDITIONAL_MARKERS) >= 2 ? 3 : emotionCount >= 3 ? 2 : emotionCount >= 1 ? 1 : 0,
    G: wordCount(fields.symbolic) >= 90 && symbolicConditionalCount >= 2 ? 3 : wordCount(fields.symbolic) >= 55 ? 2 : fields.symbolic ? 1 : 0,
    H: spirituallyApplicable
      ? (trustRisks.length === 0 && trustSignalCount >= 4 && wordCount(`${fields.spiritual} ${fields.biblical}`) >= 80 ? 3 : wordCount(`${fields.spiritual} ${fields.biblical}`) >= 35 ? 2 : fields.spiritual || fields.biblical ? 1 : 0)
      : 3,
    I: wordCount(fields.practical) >= 90 && practicalSignals >= 3 ? 3 : wordCount(fields.practical) >= 50 ? 2 : fields.practical ? 1 : 0,
    J: fields.questions.length >= 4 && questionSpecificity >= 5.5 ? 3 : fields.questions.length >= 3 ? 2 : fields.questions.length ? 1 : 0,
    K: related.length >= 3 && relatedWithReasons.length === related.length ? 3 : relatedWithReasons.length >= 2 ? 2 : related.length ? 1 : 0,
    L: trustRisks.length === 0 && trustSignalCount >= 8 ? 3 : trustRisks.length === 0 && trustSignalCount >= 3 ? 2 : trustRisks.length === 0 ? 1 : 0,
  };
  const overall = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const genericCore = scores.C + scores.D + scores.E + scores.G;
  const genericDictionaryTest = genericCore >= 10 && uniqueInsight.sentence
    ? "Clearly no"
    : genericCore >= 6
      ? "Partially"
      : "Mostly yes";
  const failsReaderTest = !recognition.sentence || !uniqueInsight.sentence;
  const tier = failsReaderTest || overall < 17
    ? "P0"
    : overall < 23 || genericDictionaryTest === "Mostly yes"
      ? "P1"
      : overall < 28
        ? "P2"
        : overall < 33
          ? "P3"
          : "P4";

  const weaknessScores = [
    ["Weak opening", scores.A],
    ["Generic interpretation", Math.min(scores.C, scores.E)],
    ["Insufficient emotional context", scores.F],
    ["Insufficient symbolic context", scores.G],
    ["Weak spiritual/biblical interpretation", spirituallyApplicable ? scores.H : 3],
    ["No practical connection", scores.I],
    ["Weak reflection questions", scores.J],
    ["Poor conditional scenarios", scores.D],
    ["Excessive repetition", scores.E],
    ["Weak internal links", scores.K],
    ["Weak related dreams", scores.K],
    ["Thin content", wordCount(core) >= 350 ? 3 : wordCount(core) >= 220 ? 2 : 0],
    ["Likely duplicate intent", nearest.similarity < 0.48 ? 3 : nearest.similarity < 0.6 ? 1 : 0],
    ["Page may not deserve independent indexing", failsReaderTest && nearest.similarity >= 0.55 ? 0 : 3],
  ].sort((a, b) => a[1] - b[1]);
  const primaryReason = !recognition.sentence && !uniqueInsight.sentence
    ? "Generic interpretation"
    : !recognition.sentence
      ? "Insufficient emotional context"
      : !uniqueInsight.sentence
        ? "Generic interpretation"
        : weaknessScores[0][0];
  const secondaryReasons = [...new Set(weaknessScores.filter(([, score]) => score === weaknessScores[0][1] && score < 3).slice(1, 3).map(([reason]) => reason))];
  const collision = nearest.similarity >= 0.54 || (nearest.titleSimilarity >= 0.45 && nearest.contentSimilarity >= 0.42);
  const independentIntent = collision
    ? uniqueInsight.sentence
      ? `Potentially defensible if this distinction remains central: ${uniqueInsight.sentence}`
      : "No strong independent distinction was identified."
    : "The closest neighbor does not currently erase this page's independent intent.";

  return {
    slug: dream.slug,
    title: dream.title,
    category: getMajorCategory(dream, fields),
    recognitionEvidence: recognition.sentence,
    uniqueInsightEvidence: uniqueInsight.sentence,
    readerTest: failsReaderTest ? "Fails" : "Passes",
    genericDictionaryTest,
    genericDictionaryNote: genericDictionaryTest === "Mostly yes"
      ? "The page needs a more dream-specific distinction, conditional scenario, or reflection that could not be reused broadly."
      : genericDictionaryTest === "Partially"
        ? "Useful material is present, but some reasoning still resembles a broad dictionary treatment."
        : "The page contains identifiable contextual reasoning beyond a broad symbol definition.",
    nearestNeighborSlug: nearest.slug || "",
    nearestNeighborTitle: nearest.title || "",
    neighborSimilarity: Number((nearest.similarity || 0).toFixed(4)),
    collision,
    independentIntent,
    scores,
    overall,
    tier,
    primaryReason,
    secondaryReasons,
    trustRisks,
    wordCount: wordCount(core),
    scenarioSignal: Boolean(fields.scenarios),
    reflectionQuestionCount: fields.questions.length,
    relatedDreamCount: related.length,
    relatedReasonCount: relatedWithReasons.length,
  };
});

const tierOrder = { P0: 0, P1: 1, P2: 2, P3: 3, P4: 4 };
const weakest = [...records].sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier] || a.overall - b.overall || b.neighborSimilarity - a.neighborSimilarity).slice(0, 25);
const strongest = [...records].sort((a, b) => tierOrder[b.tier] - tierOrder[a.tier] || b.overall - a.overall || a.neighborSimilarity - b.neighborSimilarity).slice(0, 25);
const collisionKeys = new Set();
const collisions = records
  .filter((record) => record.collision)
  .sort((a, b) => b.neighborSimilarity - a.neighborSimilarity)
  .filter((record) => {
    const key = [record.slug, record.nearestNeighborSlug].sort().join("::");
    if (collisionKeys.has(key)) return false;
    collisionKeys.add(key);
    return true;
  });

const categoryMap = new Map();
for (const record of records) {
  if (!categoryMap.has(record.category)) categoryMap.set(record.category, []);
  categoryMap.get(record.category).push(record);
}
const categoryReport = [...categoryMap].map(([category, items]) => {
  const model = [...items].sort((a, b) => b.overall - a.overall)[0];
  return {
    category,
    pages: items.length,
    averageScore: Number((items.reduce((sum, item) => sum + item.overall, 0) / items.length).toFixed(2)),
    p0: items.filter((item) => item.tier === "P0").length,
    p1: items.filter((item) => item.tier === "P1").length,
    p4: items.filter((item) => item.tier === "P4").length,
    modelSlug: model?.slug || "",
    modelReason: model ? `Strongest evidence combines: ${model.recognitionEvidence} / ${model.uniqueInsightEvidence}` : "",
  };
}).sort((a, b) => a.averageScore - b.averageScore);

const actionQueue = new Map();
for (const record of records.filter((item) => ["P0", "P1", "P2"].includes(item.tier))) {
  const editorialStatus = getEditorialStatus(record.slug);
  if (["KEEP", "KEEP_MODEL_CANDIDATE", "MERGE_REVIEW", "NOINDEX_REVIEW"].includes(editorialStatus?.decision)) continue;
  if (!actionQueue.has(record.primaryReason)) actionQueue.set(record.primaryReason, []);
  actionQueue.get(record.primaryReason).push(record);
}
for (const items of actionQueue.values()) items.sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier] || a.overall - b.overall);

const medianRecord = [...records].sort((a, b) => a.overall - b.overall)[Math.floor(records.length / 2)];
const examples = [
  { label: "Excellent", record: strongest[0] },
  { label: "Average", record: medianRecord },
  { label: "Weak", record: weakest[0] },
];

const scoreColumns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
const csvHeaders = [
  "slug", "title", "category", "editorial_status", ...scoreColumns, "overall", "tier", "reader_test",
  "recognition_evidence", "unique_insight_evidence", "generic_dictionary_test", "generic_dictionary_note",
  "nearest_neighbor_slug", "neighbor_similarity", "collision", "independent_intent", "primary_reason",
  "secondary_reasons", "trust_risks", "word_count", "reflection_question_count", "related_dream_count", "related_reason_count",
];
const csvRows = records.map((record) => [
  record.slug, record.title, record.category, getEditorialStatus(record.slug)?.decision || "", ...scoreColumns.map((column) => record.scores[column]),
  record.overall, record.tier, record.readerTest, record.recognitionEvidence, record.uniqueInsightEvidence,
  record.genericDictionaryTest, record.genericDictionaryNote, record.nearestNeighborSlug, record.neighborSimilarity,
  record.collision, record.independentIntent, record.primaryReason, record.secondaryReasons, record.trustRisks,
  record.wordCount, record.reflectionQuestionCount, record.relatedDreamCount, record.relatedReasonCount,
]);

function pageReport(title, intro, items, mode) {
  const lines = [`# ${title}`, "", intro, ""];
  items.forEach((record, index) => {
    lines.push(`## ${index + 1}. ${record.title} (${record.slug})`, "");
    lines.push(`- **Score / tier:** ${record.overall}/36 — ${record.tier}`);
    lines.push(`- **2 a.m. reader test:** ${record.readerTest}`);
    lines.push(`- **Recognition evidence:** ${record.recognitionEvidence || "No sufficiently specific passage identified."}`);
    lines.push(`- **Unique insight:** ${record.uniqueInsightEvidence || "No sufficiently distinct insight identified."}`);
    lines.push(`- **Generic dictionary test:** ${record.genericDictionaryTest}. ${record.genericDictionaryNote}`);
    lines.push(`- **Closest neighbor:** ${record.nearestNeighborTitle} (${record.nearestNeighborSlug}), similarity ${record.neighborSimilarity}`);
    lines.push(`- **Primary editorial finding:** ${record.primaryReason}`);
    if (record.secondaryReasons.length) lines.push(`- **Secondary findings:** ${record.secondaryReasons.join("; ")}`);
    if (mode === "strong") lines.push(`- **Reusable principle:** ${reusablePrinciple(record)}`);
    lines.push("");
  });
  return lines.join("\n");
}

const collisionMarkdown = [
  "# Neighbor collision report",
  "",
  "These pairs have the highest semantic overlap. A flag is a review prompt, not an automatic merge decision.",
  "",
  "| Page | Closest neighbor | Similarity | Independent-intent note |",
  "|---|---|---:|---|",
  ...collisions.map((record) => `| ${record.slug} | ${record.nearestNeighborSlug} | ${record.neighborSimilarity} | ${markdownQuote(record.independentIntent)} |`),
].join("\n");

const categoryMarkdown = [
  "# Category quality report",
  "",
  "| Category | Pages | Average /36 | P0 | P1 | P4 | Current model page |",
  "|---|---:|---:|---:|---:|---:|---|",
  ...categoryReport.map((item) => `| ${item.category} | ${item.pages} | ${item.averageScore} | ${item.p0} | ${item.p1} | ${item.p4} | ${item.modelSlug} |`),
  "",
  "## Why the model pages work",
  "",
  ...categoryReport.flatMap((item) => [`### ${item.category}: ${item.modelSlug}`, "", item.modelReason, ""]),
].join("\n");

const queueMarkdown = [
  "# Editorial action queue",
  "",
  "Pages are grouped by the strongest missing element. Work P0 before P1, and P1 before P2 within each batch.",
  "",
  ...[...actionQueue].sort((a, b) => (tierOrder[a[1][0]?.tier] ?? 9) - (tierOrder[b[1][0]?.tier] ?? 9)).flatMap(([reason, items]) => [
    `## ${reason} (${items.length})`,
    "",
    ...items.map((item) => `- **${item.tier} · ${item.slug} · ${item.overall}/36** — ${item.genericDictionaryTest}; closest to ${item.nearestNeighborSlug} (${item.neighborSimilarity}).`),
    "",
  ]),
].join("\n");

const examplesMarkdown = [
  "# Three example audits",
  "",
  "These examples show how the same rubric separates an excellent, average, and weak page.",
  "",
  ...examples.flatMap(({ label, record }) => [
    `## ${label}: ${record.title} (${record.slug})`,
    "",
    `- **Dimension scores:** ${scoreColumns.map((column) => `${column}=${record.scores[column]}`).join(", ")}`,
    `- **Overall:** ${record.overall}/36 — ${record.tier}`,
    `- **Recognition:** ${record.recognitionEvidence || "Not identified"}`,
    `- **Unique insight:** ${record.uniqueInsightEvidence || "Not identified"}`,
    `- **Generic dictionary test:** ${record.genericDictionaryTest}`,
    `- **Neighbor test:** ${record.nearestNeighborSlug} at ${record.neighborSimilarity}; ${record.independentIntent}`,
    label === "Excellent"
      ? `- **Minor opportunity:** ${record.primaryReason}`
      : `- **Primary action:** ${record.primaryReason}`,
    "",
  ]),
].join("\n");

const summary = {
  generatedAt: new Date().toISOString(),
  indexedPages: records.length,
  tierCounts: Object.fromEntries(["P0", "P1", "P2", "P3", "P4"].map((tier) => [tier, records.filter((record) => record.tier === tier).length])),
  readerTestFailures: records.filter((record) => record.readerTest === "Fails").length,
  genericDictionaryCounts: Object.fromEntries(["Clearly no", "Partially", "Mostly yes"].map((value) => [value, records.filter((record) => record.genericDictionaryTest === value).length])),
  collisionCount: collisions.length,
  weakestCategories: categoryReport.slice(0, 5),
  strongestCategories: [...categoryReport].sort((a, b) => b.averageScore - a.averageScore).slice(0, 5),
  caveat: "Scores are evidence-backed editorial triage. Final approval still requires a human reviewer to confirm the quoted evidence and complete the 2 a.m. reader test.",
};

await mkdir(OUTPUT_DIR, { recursive: true });
await Promise.all([
  writeFile(new URL("full-library-scorecard.csv", OUTPUT_DIR), [csvHeaders, ...csvRows].map((row) => row.map(csvEscape).join(",")).join("\n")),
  writeFile(new URL("full-library-scorecard.json", OUTPUT_DIR), JSON.stringify(records, null, 2)),
  writeFile(new URL("audit-summary.json", OUTPUT_DIR), JSON.stringify(summary, null, 2)),
  writeFile(new URL("top-25-needing-attention.md", OUTPUT_DIR), pageReport("Top 25 pages needing attention", "These pages rank first for human editorial review. Each finding points to evidence rather than recommending automatic expansion.", weakest, "weak")),
  writeFile(new URL("top-25-strongest.md", OUTPUT_DIR), pageReport("Top 25 strongest pages", "These pages currently provide the strongest category-aware evidence. Reuse their editorial principles, never their sentences.", strongest, "strong")),
  writeFile(new URL("neighbor-collision-report.md", OUTPUT_DIR), collisionMarkdown),
  writeFile(new URL("category-quality-report.md", OUTPUT_DIR), categoryMarkdown),
  writeFile(new URL("editorial-action-queue.md", OUTPUT_DIR), queueMarkdown),
  writeFile(new URL("three-example-audits.md", OUTPUT_DIR), examplesMarkdown),
]);

console.log(JSON.stringify(summary, null, 2));
