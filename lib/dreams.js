import { normalizeSlug } from "@/lib/normalizeSlug";
import { dreams as allDreams } from "@/data/dreams";

const categoryLinks = {
  anxiety: "/categories/anxiety",
  fear: "/categories/fear",
  transformation: "/categories/transformation",
  identity: "/categories/identity",
  relationships: "/categories/relationships",
  "hidden emotions": "/categories/hidden-emotions",
  "inner conflict": "/categories/inner-conflict",
  death: "/categories/death",
  body: "/categories/body",
};

const dreamSlugAliases = {
  pregnancy: "pregnant",
  "being-pregnant": "pregnant",
  "being-chased": "chased",
  snakes: "snake",
  twins: "pregnant-with-twins",
  school: "going-back-to-school",
  "lost-in-a-building": "being-lost-in-a-building",
  "lost-in-a-forest": "lost-in-the-forest",
};

const dreamLookupCache = new WeakMap();

function getDreamLookup(dreams = allDreams) {
  if (dreamLookupCache.has(dreams)) {
    return dreamLookupCache.get(dreams);
  }

  const keyMap = new Map();
  const slugMap = new Map();

  dreams.forEach((dream) => {
    const slug = normalizeSlug(dream.slug || dream.title);

    if (slug) {
      slugMap.set(slug, dream);
    }

    getDreamKeys(dream).forEach((key) => {
      if (key && !keyMap.has(key)) {
        keyMap.set(key, dream);
      }
    });
  });

  const lookup = { keyMap, slugMap };
  dreamLookupCache.set(dreams, lookup);
  return lookup;
}

export function shorten(text, maxLength = 220) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();

  if (!clean) return "";

  if (clean.length <= maxLength) return clean;

  return `${clean.slice(0, maxLength - 3).trim()}...`;
}

export function normalizeForMatch(value = "") {
  return String(value || "").toLowerCase().trim();
}

export function normalizeCategory(cat = "") {
  const c = cat.toLowerCase().trim();

  if (c === "relationships") return "relationship";
  if (c === "emotions") return "emotion";

  return c;
}

export function formatCategory(cat = "") {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

export function getDreamKeys(item = {}) {
  const slug = normalizeSlug(item.slug);
  const aliases = Object.entries(dreamSlugAliases)
    .filter(([, targetSlug]) => targetSlug === slug)
    .flatMap(([alias]) => [alias, normalizeForMatch(alias)]);

  return [
    normalizeForMatch(item.slug),
    normalizeSlug(item.slug),
    normalizeForMatch(item.title),
    normalizeSlug(item.title),
    ...aliases,
  ];
}

export function getDreamBySlug(slug = "", dreams = allDreams) {
  const normalizedSlug = normalizeForMatch(slug);

  return getDreamLookup(dreams).keyMap.get(normalizedSlug);
}

export function dreamMatchesReference(dream, reference = "") {
  const normalizedReference = normalizeForMatch(reference);
  const slugReference = normalizeSlug(reference);

  return getDreamKeys(dream).some(
    (key) =>
      key === normalizedReference ||
      key === slugReference ||
      (slugReference.length > 4 && key.includes(slugReference))
  );
}

export function uniqueDreams(items = []) {
  const seen = new Set();

  return items.filter((item) => {
    const key = normalizeSlug(item.slug || item.title);

    if (!key || seen.has(key)) return false;

    seen.add(key);
    return true;
  });
}

export function getDynamicDreamTitle(title = "", dream = {}) {
  return dream.seoTitle || `${title} Dream Meaning`;
}

export function pickFirstText(...values) {
  return (
    values.find((value) => String(value || "").replace(/\s+/g, " ").trim()) || ""
  );
}

export function uniqueParts(parts = []) {
  const seen = new Set();

  return parts.filter((part) => {
    const clean = String(part || "").replace(/\s+/g, " ").trim();

    if (!clean) return false;

    const key = clean.toLowerCase();

    if (seen.has(key)) return false;

    seen.add(key);
    return true;
  });
}

export function cleanFAQ(text = "", maxLength = 320) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();

  if (!clean) return "";

  if (clean.length <= maxLength) {
    return clean.endsWith(".") ? clean : `${clean}.`;
  }

  const trimmed = clean.substring(0, maxLength);
  const lastSentence = trimmed.lastIndexOf(".");
  const punctuationBoundary = Math.max(
    trimmed.lastIndexOf(","),
    trimmed.lastIndexOf(";")
  );
  const wordBoundary = trimmed.lastIndexOf(" ");
  const phraseBoundary =
    punctuationBoundary > 120 ? punctuationBoundary : wordBoundary;
  const result =
    lastSentence !== -1
      ? trimmed.substring(0, lastSentence + 1).trim()
      : trimmed.substring(0, phraseBoundary > 120 ? phraseBoundary : maxLength).trim();

  return result.replace(/[,;:]$/, "").endsWith(".")
    ? result.replace(/[,;:]$/, "")
    : `${result.replace(/[,;:]$/, "").trim()}.`;
}

function getTextValue(value) {
  if (!value) return "";

  if (typeof value === "string") return value;

  if (Array.isArray(value)) {
    return value.map(getTextValue).find(Boolean) || "";
  }

  if (typeof value === "object") {
    return pickFirstText(
      value.content,
      value.body,
      value.text,
      value.meaning,
      value.description,
      value.summary
    );
  }

  return String(value);
}

export function getFaqAnswer(field, fallback = "", maxLength = 260) {
  const text = pickFirstText(getTextValue(field), getTextValue(fallback));

  if (!text) return "";

  const firstParagraph =
    String(text)
      .split(/\n\s*\n+/)
      .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
      .find(Boolean) || "";

  const sentences = firstParagraph.match(/[^.!?]+[.!?]+/g);
  const concise = sentences
    ? sentences.slice(0, 3).join(" ").trim()
    : firstParagraph;

  return cleanFAQ(concise, maxLength);
}

export function buildFAQAnswer(parts, fallback) {
  const text = uniqueParts(parts).join(" ");

  return getFaqAnswer(text, fallback);
}

export function hashString(value = "") {
  return Array.from(String(value || "")).reduce(
    (total, char) => total + char.charCodeAt(0),
    0
  );
}

export function getSeededItems(items = [], seed = "", count = 5) {
  const list = [...items];
  const seedValue = hashString(seed);

  list.sort((a, b) => {
    const aScore = (a.id * 31 + seedValue) % 997;
    const bScore = (b.id * 31 + seedValue) % 997;

    return aScore - bScore;
  });

  return list.slice(0, count);
}

export function generateSummary(dream = {}) {
  return dream.summary || "";
}

export function getParagraphs(text = "") {
  return String(text)
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export function linkCategories(text = "") {
  let updatedText = text;

  Object.entries(categoryLinks).forEach(([term, href]) => {
    const regex = new RegExp(`\\b${term}\\b`, "i");

    updatedText = updatedText.replace(
      regex,
      `<a href="${href}" class="underline underline-offset-4 hover:text-[#C6A96B] transition-colors">${term}</a>`
    );
  });

  return updatedText;
}

export function getExploreThemes(dreams = allDreams, count = 5) {
  return [
    ...new Set(
      dreams.flatMap((item) => (item.categories || []).map(normalizeCategory))
    ),
  ].slice(0, count);
}

export function getDreamInsightSections(dream = {}) {
  const sections = [
    {
      id: "emotional-meaning",
      title: "What does this dream mean emotionally?",
      body: pickFirstText(dream.emotionalMeaning, dream.emotional),
    },
    {
      id: "symbolic-meaning",
      title: "What does this dream symbolize?",
      body: pickFirstText(dream.symbolicMeaning, dream.symbolic),
    },
    {
      id: "spiritual-meaning",
      title: "What is the spiritual meaning of this dream?",
      body: pickFirstText(dream.spiritualMeaning, dream.spiritual),
    },
    {
      id: "real-life-meaning",
      title: "What does this dream mean in real life?",
      body: pickFirstText(dream.wakingLifeMeaning, dream.wakingLife),
    },
  ];

  const seen = new Set();

  return sections.filter((section) => {
    const normalizedBody = String(section.body || "").replace(/\s+/g, " ").trim().toLowerCase();

    if (!normalizedBody || seen.has(normalizedBody)) return false;

    seen.add(normalizedBody);
    return true;
  });
}

export function getDreamFAQItems(dream = {}) {
  const manualItems = dream.faqs || dream.FAQs || [];
  const seen = new Set();

  if (!Array.isArray(manualItems)) return [];

  return manualItems
    .map((item) => ({
      question: String(item?.question || item?.title || "").replace(/\s+/g, " ").trim(),
      answer: String(item?.answer || item?.body || item?.text || "").replace(/\s+/g, " ").trim(),
    }))
    .filter(({ question, answer }) => {
      const key = `${question.toLowerCase()}|${answer.toLowerCase()}`;

      if (!question || answer.length < 40 || seen.has(key)) return false;

      seen.add(key);
      return true;
    });
}

export function getBreadcrumbSchema({
  dreamTitle = "",
  canonicalDreamSlug = "",
  emotion = "",
  emotionSlug = "",
}) {
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.dreamscriptures.com/",
    },
  ];

  itemListElement.push({
    "@type": "ListItem",
    position: 2,
    name: "Dream Dictionary",
    item: "https://www.dreamscriptures.com/dreams",
  });

  if (emotion && emotionSlug) {
    itemListElement.push(
      {
        "@type": "ListItem",
        position: 3,
        name: formatCategory(emotion),
        item: `https://www.dreamscriptures.com/emotions/${emotionSlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: dreamTitle,
        item: `https://www.dreamscriptures.com/dreams/${canonicalDreamSlug}`,
      }
    );
  } else {
    itemListElement.push({
        "@type": "ListItem",
        position: 3,
        name: dreamTitle,
        item: `https://www.dreamscriptures.com/dreams/${canonicalDreamSlug}`,
      });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function getFAQSchema(faqItems = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems
      .filter((item) => item.question && item.answer)
      .map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: String(item.answer).replace(/\s+/g, " ").trim(),
        },
      })),
  };
}

export function getDreamsBySlugs(slugs = [], dreams = allDreams) {
  if (!Array.isArray(slugs) || slugs.length === 0) {
    return [];
  }

  const { keyMap, slugMap } = getDreamLookup(dreams);
  const seen = new Set();

  return slugs
    .map((item) => (typeof item === "string" ? item : item?.slug))
    .map((value) => ({
      slug: normalizeSlug(value),
      dream:
        keyMap.get(normalizeForMatch(value)) ||
        keyMap.get(normalizeSlug(value)) ||
        slugMap.get(normalizeSlug(value)),
    }))
    .filter(({ slug, dream }) => {
      const dreamKey = normalizeSlug(dream?.slug || dream?.title);

      if (!slug || !dreamKey || seen.has(dreamKey)) return false;

      seen.add(dreamKey);
      return Boolean(dream);
    })
    .map(({ dream }) => dream);
}
