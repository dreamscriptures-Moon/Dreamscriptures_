import { normalizeSlug } from "@/lib/normalizeSlug";

export const SITE_URL = "https://www.dreamscriptures.com";
export const GUIDE_UPDATED_LABEL = "July 2026";

const STOP_WORDS = new Set([
  "about", "after", "also", "and", "are", "because", "been", "being",
  "between", "can", "dream", "dreaming", "dreams", "for", "from", "guide",
  "have", "how", "into", "meaning", "may", "more", "that", "the", "their",
  "these", "this", "through", "understand", "what", "when", "where", "which",
  "why", "with", "your",
]);

function words(value = "") {
  return String(value).toLowerCase().match(/[a-z0-9]+/g) || [];
}

export function getGuideText(guide = {}) {
  return [
    guide.title,
    guide.description,
    guide.intro,
    ...(guide.content || []),
    ...(guide.sections || []).flatMap((section) => [section.title, section.body]),
    ...(guide.actions || []),
  ].filter(Boolean).join(" ");
}

export function getReadingTime(value, wordsPerMinute = 220) {
  const count = words(typeof value === "string" ? value : getGuideText(value)).length;
  return Math.max(1, Math.ceil(count / wordsPerMinute));
}

export function getGuideKeywords(guide = {}) {
  const counts = new Map();
  words(`${guide.title || ""} ${guide.title || ""} ${guide.description || ""} ${getGuideText(guide)}`)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word))
    .forEach((word) => counts.set(word, (counts.get(word) || 0) + 1));

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 30)
    .map(([word]) => word);
}

function similarity(source, candidate) {
  const sourceKeywords = new Set(getGuideKeywords(source));
  const candidateKeywords = new Set(getGuideKeywords(candidate));
  let score = 0;
  sourceKeywords.forEach((keyword) => {
    if (candidateKeywords.has(keyword)) score += 1;
    if (normalizeSlug(candidate.title || "").includes(keyword)) score += 2;
  });
  return score;
}

export function getRelatedGuides(guide, allGuides = [], limit = 4) {
  const validSlugs = new Set(allGuides.map((item) => item.slug));
  const manual = (guide.related || [])
    .filter((slug) => validSlugs.has(slug) && slug !== guide.slug)
    .map((slug) => allGuides.find((item) => item.slug === slug))
    .filter(Boolean);
  const seen = new Set(manual.map((item) => item.slug));
  const semantic = allGuides
    .filter((item) => item.slug !== guide.slug && !seen.has(item.slug))
    .map((item) => ({ item, score: similarity(guide, item) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .map(({ item }) => item);
  return [...manual, ...semantic].slice(0, limit);
}

export function getRelatedDreamsForGuide(guide, allDreams = [], limit = 5) {
  const guideKeywords = new Set(getGuideKeywords(guide));
  const manual = new Set((guide.relatedDreams || []).map(normalizeSlug));
  return allDreams
    .map((dream) => {
      const slug = normalizeSlug(dream.slug || dream.title);
      const haystack = words([dream.title, dream.description, dream.summary, ...(dream.categories || [])].join(" "));
      const overlap = haystack.reduce((score, word) => score + (guideKeywords.has(word) ? 1 : 0), 0);
      return { dream, slug, score: overlap + (manual.has(slug) ? 100 : 0) };
    })
    .filter(({ slug, score }) => slug && score > 0)
    .sort((a, b) => b.score - a.score || a.dream.title.localeCompare(b.dream.title))
    .filter(({ slug }, index, items) => items.findIndex((item) => item.slug === slug) === index)
    .slice(0, limit)
    .map(({ dream }) => dream);
}

export function createGuideMetadata({ slug, title, description }) {
  const path = slug ? `/guides/${slug}` : "/guides";
  const resolvedTitle = title.includes("Dream") ? title : `${title} | Dream Guide`;
  return {
    title: resolvedTitle,
    description,
    alternates: { canonical: path },
    openGraph: { title: resolvedTitle, description, url: path, siteName: "DreamScriptures", type: "article", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image", title: resolvedTitle, description, images: ["/og-image.jpg"] },
  };
}

export function createMetadataFromGuide(guide = {}) {
  const custom = guide.metadata || {};
  const generated = createGuideMetadata({ slug: guide.slug, title: custom.title || guide.title, description: custom.description || guide.description || guide.intro });
  return { ...generated, ...custom, alternates: { ...generated.alternates, ...custom.alternates }, openGraph: { ...generated.openGraph, ...custom.openGraph }, twitter: { ...generated.twitter, ...custom.twitter } };
}

export function createGuideSchemas({ slug, title, description, faqs = [] }) {
  const url = `${SITE_URL}/guides/${slug}`;
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ] },
    { "@context": "https://schema.org", "@type": "Article", headline: title, description, mainEntityOfPage: url, author: { "@type": "Organization", name: "DreamScriptures", url: SITE_URL }, publisher: { "@type": "Organization", name: "DreamScriptures", url: SITE_URL } },
  ];
  if (faqs.length) schemas.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) });
  return schemas;
}
