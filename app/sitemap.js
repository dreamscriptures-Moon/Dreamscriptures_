import { dreams } from "@/data/dreams";
import { emotionalHubs } from "@/data/emotionalHubs";
import { getAllGuideEntries } from "@/lib/guideCatalog";
import { getAuthorityPriority } from "@/lib/emotions/authority";
import { normalizeSlug } from "@/lib/normalizeSlug";
import { isDreamIndexable } from "@/lib/seo";

const BASE_URL = "https://www.dreamscriptures.com";
const CONTENT_DATE_FIELDS = ["updatedAt", "publishedAt", "createdAt"];

// Keeping entry creation in one place makes it easy to add optional image data
// and new content collections (such as blog posts or devotionals) later.
function getContentDate(content) {
  for (const field of CONTENT_DATE_FIELDS) {
    if (!content?.[field]) continue;

    const date = new Date(content[field]);
    if (!Number.isNaN(date.getTime())) return date;
  }

  return undefined;
}

function createEntry(path, { content, lastModified, changeFrequency, priority }) {
  const normalizedPath = path === "/" ? "" : `/${String(path).replace(/^\/+|\/+$/g, "")}`;
  const contentDate = lastModified || getContentDate(content);

  return {
    url: `${BASE_URL}${normalizedPath}`,
    ...(contentDate ? { lastModified: contentDate } : {}),
    changeFrequency,
    priority,
  };
}

function uniqueEntries(entries) {
  const seen = new Set();

  return entries.filter(({ url }) => {
    if (seen.has(url)) return false;
    seen.add(url);
    return true;
  });
}

function countItems(value) {
  return Array.isArray(value) ? value.length : 0;
}

function hasRichText(value, minimumLength = 300) {
  return typeof value === "string" && value.trim().length >= minimumLength;
}

function getDreamPriority(dream) {
  let priority = getAuthorityPriority(dream);

  const relatedCount = countItems(dream.relatedDreams);
  if (relatedCount >= 8) priority += 0.03;
  else if (relatedCount >= 4) priority += 0.015;

  const interpretationFields = [
    dream.description,
    dream.uniqueDescription,
    dream.emotionalMeaning,
    dream.symbolicMeaning,
    dream.spiritualMeaning,
    dream.wakingLifeMeaning,
  ];
  const richSections = interpretationFields.filter((value) => hasRichText(value)).length;
  if (richSections >= 5) priority += 0.03;
  else if (richSections >= 3) priority += 0.015;

  const faqCount = countItems(dream.faqs || dream.FAQs);
  if (faqCount >= 5) priority += 0.02;
  else if (faqCount > 0) priority += 0.01;

  const biblicalReferenceCount = countItems(
    dream.biblicalReferences || dream.scriptures || dream.bibleReferences
  );
  if (biblicalReferenceCount >= 3 || hasRichText(dream.biblicalMeaning)) {
    priority += 0.02;
  }

  if (dream.premiumEditorial === true || dream.editorialTier === "premium") {
    priority += 0.02;
  }

  return Number(Math.min(priority, 0.95).toFixed(2));
}

const STATIC_PAGES = [
  ["/", "daily", 1.0],
  ["/dreams", "weekly", 0.95],
  ["/categories", "weekly", 0.9],
  ["/emotions", "weekly", 0.9],
  ["/guides", "monthly", 0.85],
  ["/methodology", "monthly", 0.85],
  ["/submit-dream", "weekly", 0.85],
  ["/about", "monthly", 0.5],
  ["/contact", "monthly", 0.5],
  ["/editorial-standards", "monthly", 0.7],
  ["/author", "monthly", 0.6],
  ["/disclaimer", "yearly", 0.5],
  ["/faq", "monthly", 0.4],
  ["/privacy", "yearly", 0.4],
  ["/terms", "yearly", 0.4],
];

const PILLAR_GUIDE_PRIORITIES = {
  interpretation: 0.9,
  "common-dream-symbols": 0.9,
  "how-to-interpret-dream-symbols": 0.85,
  "types-of-dreams": 0.85,
};

export default function sitemap() {
  const indexedDreams = dreams.filter(isDreamIndexable);

  const staticPages = STATIC_PAGES.map(([path, changeFrequency, priority]) =>
    createEntry(path, { changeFrequency, priority })
  );

  const guidePages = getAllGuideEntries().map((guide) =>
    createEntry(
      `/guides/${normalizeSlug(guide.slug)}`,
      {
        content: guide,
        changeFrequency: "monthly",
        priority: PILLAR_GUIDE_PRIORITIES[normalizeSlug(guide.slug)] || 0.75,
      }
    )
  );

  const dreamPages = indexedDreams.map((dream) =>
    createEntry(
      `/dreams/${normalizeSlug(dream.slug || dream.title)}`,
      {
        content: dream,
        changeFrequency: "weekly",
        priority: getDreamPriority(dream),
      }
    )
  );

  const categories = [
    ...new Set(indexedDreams.flatMap((dream) => dream.categories || [])),
  ];
  const categoryPages = categories.map((category) =>
    createEntry(
      `/categories/${normalizeSlug(category)}`,
      { changeFrequency: "weekly", priority: 0.8 }
    )
  );

  const emotionPages = Object.entries(emotionalHubs).map(([slug, emotion]) =>
    createEntry(
      `/emotions/${normalizeSlug(slug)}`,
      {
        content: emotion,
        changeFrequency: "weekly",
        priority: 0.85,
      }
    )
  );

  // Add future long-lived collections here; URL normalization and duplicate
  // protection are applied to the combined sitemap automatically.
  const futureContentPages = [];

  return uniqueEntries([
    ...staticPages,
    ...guidePages,
    ...emotionPages,
    ...categoryPages,
    ...dreamPages,
    ...futureContentPages,
  ]);
}
