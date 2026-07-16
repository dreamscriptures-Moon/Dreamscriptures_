import { normalizeSlug } from "@/lib/normalizeSlug";
import { shorten } from "@/lib/dreams";

/**
 * Return the first image found for a dream.
 * Supports the fields currently used in dream.js.
 */
export function getDreamImage(dream = {}) {
  return (
    dream.image ||
    dream.featuredImage ||
    ""
  );
}

/**
 * Return a short excerpt for cards and previews.
 */
export function getDreamExcerpt(dream = {}, maxLength = 165) {
  return shorten(
    dream.shortDescription ||
      dream.microSummary ||
      dream.summary ||
      dream.description ||
      "",
    maxLength
  );
}

/**
 * Recently Added Dreams
 *
 * Since DreamScriptures stores dreams in dream.js,
 * the newest dreams are simply the last ones added.
 */
export function getRecentlyAddedDreams(dreams = [], count = 6) {
  return [...dreams]
    .slice(-count)
    .reverse();
}

/**
 * Dream of the Day
 *
 * Same dream for every visitor each day.
 */
export function getDreamOfTheDay(dreams = []) {
  if (!dreams.length) return null;

  const now = new Date();
  const today = [
    now.getUTCFullYear(),
    String(now.getUTCMonth() + 1).padStart(2, "0"),
    String(now.getUTCDate()).padStart(2, "0"),
  ].join("-");

  let hash = 0;

  for (let i = 0; i < today.length; i++) {
    hash = (hash * 31 + today.charCodeAt(i)) % dreams.length;
  }

  return dreams[Math.abs(hash)];
}

function toTokens(value) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value.flatMap(toTokens);
  }

  if (typeof value === "object") {
    return Object.values(value).flatMap(toTokens);
  }

  return String(value)
    .split(/[,\s]+/)
    .map((item) => normalizeSlug(item))
    .filter(Boolean);
}

function getSignals(dream = {}) {
  return {
    categories: toTokens(dream.categories),

    tags: toTokens([
      dream.tags,
      dream.dreamSymbols,
      dream.lifeSituations,
      dream.emotionalStates,
      dream.emotionalTriggers,
      dream.subconsciousPatterns,
      dream.emotionalConnections,
    ]),

    themes: toTokens([
      dream.title,
      dream.slug,
      dream.shortDescription,
      dream.microSummary,
      dream.summary,
    ]),
  };
}

function scoreOverlap(a = [], b = []) {
  const lookup = new Set(b);

  return [...new Set(a)].filter((x) => lookup.has(x)).length;
}

/**
 * Intelligent Related Dreams
 */
export function getIntelligentRelatedDreams(
  currentDream,
  dreams = [],
  count = 6
) {
  if (!currentDream) return [];

  const currentSlug = normalizeSlug(
    currentDream.slug || currentDream.title
  );

  const current = getSignals(currentDream);

  return dreams
    .filter(
      (dream) =>
        normalizeSlug(dream.slug || dream.title) !== currentSlug
    )
    .map((dream) => {
      const other = getSignals(dream);

      const score =
        scoreOverlap(current.tags, other.tags) * 5 +
        scoreOverlap(current.categories, other.categories) * 4 +
        scoreOverlap(current.themes, other.themes) * 2;

      return { dream, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((item) => item.dream);
}

/**
 * Estimated Reading Time
 */
export function getReadingTime(dream = {}) {
  const text = [
    dream.microSummary,
    dream.description,
    dream.shortDescription,
    dream.symbolic,
    dream.symbolicMeaning,
    dream.spiritual,
    dream.spiritualMeaning,
    dream.emotional,
    dream.emotionalMeaning,
    dream.biblical,
    dream.biblicalMeaning,
    dream.wakingLife,
    dream.wakingLifeMeaning,
    dream.summary,
    ...(dream.behavioralInsights || []).map((x) => x.content),
    ...(dream.types || []).flatMap((x) => Object.values(x || {})),
  ]
    .filter(Boolean)
    .join(" ");

  const words = text.trim().split(/\s+/).length;

  return Math.max(1, Math.ceil(words / 225));
}
