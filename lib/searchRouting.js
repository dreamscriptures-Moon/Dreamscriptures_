import { dreamSearchIndex } from "@/data/dreamSearchIndex";
import { dreams } from "@/data/dreams";
import {
  getAuthoritySearchAliasItems,
  getAutomaticAuthorityAliases,
} from "@/lib/emotions/authority";

export const MAX_SEARCH_RESULTS = 8;
const numericDreamAliases = new Set(["1111", "222", "333", "444", "666", "777", "888", "999"]);

function normalizeSearch(value = "") {
  return String(value || "")
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function truncate(text = "", words = 14) {
  const parts = String(text || "").split(" ").filter(Boolean);
  return parts.length > words ? `${parts.slice(0, words).join(" ")}...` : parts.join(" ");
}

const indexedDreams = dreamSearchIndex.map((dream) => ({
  href: `/dreams/${dream.slug}`,
  slug: dream.slug,
  title: dream.title,
  normalizedTitle: normalizeSearch(dream.title),
  snippet: truncate(dream.description, 14),
  source: "dream",
}));

const aliasItems = getAuthoritySearchAliasItems().map((item) => ({
  href: item.href,
  slug: item.href.replace(/^\/dreams\//, ""),
  title: item.title,
  normalizedTitle: normalizeSearch(item.query),
  snippet: "Opens the strongest related section inside the authority page.",
  source: "authority-alias",
}));

function resolvesToDedicatedNumericDream(item = {}) {
  const normalizedTitle = normalizeSearch(item.query || item.title);
  const numericAlias = normalizedTitle
    .split(" ")
    .find((part) => numericDreamAliases.has(part));

  if (!numericAlias) return true;

  return item.href === `/dreams/${numericAlias}`;
}

const automaticAuthorityItems = getAutomaticAuthorityAliases(dreams)
  .filter(resolvesToDedicatedNumericDream)
  .map((item) => ({
    href: item.href,
    slug: item.href.replace(/^\/dreams\//, ""),
    title: item.title,
    normalizedTitle: normalizeSearch(item.query),
    snippet: "Opens the matching section inside the authority page.",
    source: "authority-type",
  }));

export const searchableDreamRoutes = [
  ...aliasItems,
  ...automaticAuthorityItems,
  ...indexedDreams,
];

const sourceRank = {
  "authority-alias": 3,
  dream: 2,
  "authority-type": 1,
};

export function getSearchResults(query = "", limit = MAX_SEARCH_RESULTS) {
  const normalizedQuery = normalizeSearch(query);

  if (!normalizedQuery) return [];

  const matches = [];
  const seen = new Set();

  for (const item of searchableDreamRoutes) {
    const exactMatch = item.normalizedTitle === normalizedQuery;
    const partialMatch = item.normalizedTitle.includes(normalizedQuery);

    if (!exactMatch && !partialMatch) continue;
    if (seen.has(item.href)) continue;

    seen.add(item.href);
    matches.push({
      ...item,
      exactMatch,
    });

  }

  return matches
    .sort(
      (a, b) =>
        Number(b.exactMatch) - Number(a.exactMatch) ||
        (sourceRank[b.source] || 0) - (sourceRank[a.source] || 0)
    )
    .slice(0, limit);
}

export function getBestSearchRoute(query = "") {
  const results = getSearchResults(query, 1);

  return results[0]?.href || "";
}
