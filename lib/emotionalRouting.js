import { normalizeSlug } from "@/lib/normalizeSlug";
import { isDreamIndexable } from "@/lib/seo";

const fieldWeights = [
  ["emotionalConnections", 6],
  ["emotionalStates", 5],
  ["subconsciousPatterns", 4],
  ["emotionalTriggers", 3],
  ["lifeSituations", 2],
  ["categories", 2],
  ["dreamSymbols", 1],
];

const pathwayLabels = [
  {
    key: "fear-of-losing-control",
    matches: ["control", "collapse", "fall", "drown", "crash", "chaos"],
    label: "loss of control",
    preferredSlugs: ["falling", "driving", "chaos", "drowning"],
  },
  {
    key: "anxiety",
    matches: ["anxiety", "pressure", "late", "unprepared", "fear", "avoidance"],
    label: "anxiety and pressure",
    preferredSlugs: ["being-chased", "trapped", "being-late", "running-slowly"],
  },
  {
    key: "transformation",
    matches: ["transformation", "change", "growth", "rebirth", "healing"],
    label: "change and transformation",
    preferredSlugs: ["death", "snakes", "fire", "water"],
  },
  {
    key: "abandonment",
    matches: ["abandonment", "rejection", "ignored", "left", "loss"],
    label: "separation and abandonment",
    preferredSlugs: ["ex-partner", "being-left-behind", "being-ignored"],
  },
  {
    key: "emotional-overwhelm",
    matches: ["overwhelm", "flood", "survival", "trapped", "stress"],
    label: "emotional overwhelm",
    preferredSlugs: ["drowning", "tsunami", "trapped", "unable-to-scream"],
  },
];

function toTerms(value) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value.flatMap(toTerms);
  }

  if (typeof value === "object") {
    return Object.values(value).flatMap(toTerms);
  }

  return String(value)
    .split(/[,|]/)
    .map((item) => normalizeSlug(item))
    .filter(Boolean);
}

function getWeightedTerms(dream = {}) {
  const terms = new Map();

  fieldWeights.forEach(([field, weight]) => {
    toTerms(dream[field]).forEach((term) => {
      terms.set(term, (terms.get(term) || 0) + weight);
    });
  });

  return terms;
}

function getManualRelatedSlugs(dream = {}) {
  return new Set(
    (dream.relatedDreams || [])
      .map((item) => normalizeSlug(typeof item === "string" ? item : item?.slug))
      .filter(Boolean)
  );
}

function getSharedTerms(aTerms, bTerms) {
  return [...aTerms.keys()].filter((term) => bTerms.has(term));
}

function getPathwayLabel(sharedTerms = []) {
  const sharedText = sharedTerms.join(" ");
  const match = pathwayLabels.find((pathway) =>
    pathway.matches.some((term) => sharedText.includes(term))
  );

  return match?.label || "similar emotional patterns";
}

function getMatchedPathways(terms = []) {
  const termText = terms.join(" ");

  return pathwayLabels.filter((pathway) =>
    pathway.matches.some((term) => termText.includes(term))
  );
}

function getReason(pathway, sourceTitle, targetTitle) {
  return `Both ${sourceTitle.toLowerCase()} and ${targetTitle.toLowerCase()} dreams can move through ${pathway}, though the symbols may express that feeling differently.`;
}

export function getEmotionalRoutingItems(currentDream, allDreams = [], limit = 6) {
  if (!currentDream) return [];

  const currentSlug = normalizeSlug(currentDream.slug || currentDream.title);
  const currentTerms = getWeightedTerms(currentDream);
  const relatedSlugs = getManualRelatedSlugs(currentDream);
  const sourceTitle = currentDream.title || currentSlug.replace(/-/g, " ");
  const matchedPathways = getMatchedPathways([...currentTerms.keys()]);
  const preferredBySlug = new Map(
    matchedPathways.flatMap((pathway) =>
      pathway.preferredSlugs.map((slug, index) => [
        normalizeSlug(slug),
        { pathway: pathway.label, boost: 18 - index },
      ])
    )
  );

  return allDreams
    .filter((dream) => {
      const slug = normalizeSlug(dream.slug || dream.title);
      return slug && slug !== currentSlug && isDreamIndexable(dream);
    })
    .map((dream) => {
      const dreamTerms = getWeightedTerms(dream);
      const sharedTerms = getSharedTerms(currentTerms, dreamTerms);
      const dreamSlug = normalizeSlug(dream.slug || dream.title);
      const manualBoost = relatedSlugs.has(dreamSlug) ? 12 : 0;
      const preferredMatch = preferredBySlug.get(dreamSlug);
      const score =
        sharedTerms.reduce(
          (total, term) => total + currentTerms.get(term) + dreamTerms.get(term),
          0
        ) +
        manualBoost +
        (preferredMatch?.boost || 0);
      const pathway = preferredMatch?.pathway || getPathwayLabel(sharedTerms);

      return {
        dream,
        score,
        pathway,
        sharedTerms,
        reason: getReason(pathway, sourceTitle, dream.title || dream.slug),
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
