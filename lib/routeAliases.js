// Keep this module data-only: client URL helpers must not import the dream library.
export const dreamSlugAliases = {
  pregnancy: "pregnant",
  "being-pregnant": "pregnant",
  "being-chased": "chased",
  snakes: "snake",
  twins: "pregnant-with-twins",
  school: "going-back-to-school",
  "lost-in-a-building": "being-lost-in-a-building",
  "lost-in-a-forest": "lost-in-the-forest",
};

// Titles whose normalized form differs from their existing dream slug.
export const dreamTitleAliases = {
  "hearing-seeing-bells": "hearing-bells",
  "seeing-a-baby-boy": "seeing-baby-boy",
  "seeing-a-baby-girl": "seeing-baby-girl",
  "seeing-a-cobra": "cobra",
  "seeing-waves": "waves",
  "marriage-or-wedding": "marriage",
  "confrontation-or-argument": "confrontation-argument",
  "intimacy-with-a-strange-creature": "intimacy-with-strange-creature",
  "your-partner-cheating-on-you": "partner-cheating-on-you",
  "going-down-the-stairs": "going-down-stairs",
  "stranded-on-an-island-alone": "stranded-on-island-alone",
  "stranded-on-an-island-with-a-stranger": "stranded-on-island-with-stranger",
  "stranded-on-an-island-with-someone-you-know": "stranded-on-island-with-someone-you-know",
  "a-baby-crying": "baby-crying",
  "dog-biting-you": "dog-bite",
  "11-11": "1111",
  funeral: "burial",
  "getting-engaged": "engagement",
  "mud-grass-house": "mud-house",
  "unable-to-call-or-communicate": "failure-to-call-or-communicate",
  "a-familiar-place-turning-eerie": "familiar-place-turned-eerie",
};

export const dreamCanonicalPaths = {
  "lucid-dreaming": "/guides/lucid-dreaming",
};

export function normalizeCategory(category = "") {
  const value = category.toLowerCase().trim();
  if (value === "relationships") return "relationship";
  if (value === "emotions") return "emotion";
  return value;
}
