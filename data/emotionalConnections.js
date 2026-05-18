import { dreams as rawDreams } from "@/data/dream";
import { emotionalHubs } from "@/data/emotionalHubs";
import { normalizeSlug } from "@/lib/normalizeSlug";

const fallbackConnections = ["uncertainty", "hidden-stress", "emotional-overwhelm"];

const explicitConnections = {
  falling: ["fear-of-losing-control", "uncertainty", "emotional-overwhelm"],
  tsunami: ["fear-of-losing-control", "survival-pressure", "emotional-overwhelm"],
  "unable-to-scream": [
    "feeling-powerless",
    "emotional-suppression",
    "fear-of-being-ignored",
  ],
  trapped: ["fear-of-being-trapped", "lack-of-control", "emotional-overwhelm"],
  "being-chased": ["survival-pressure", "fear-of-the-unknown", "anxiety"],
  drowning: ["emotional-overwhelm", "fear-of-losing-control", "survival-pressure"],
  "failing-a-test": ["fear-of-failure", "performance-pressure", "self-doubt"],
  "teeth-falling-out": ["fear-of-losing-control", "vulnerability", "self-worth"],
  "ex-partner": ["difficulty-letting-go", "past-relationships", "wanting-closure"],
  "being-pregnant": ["personal-growth", "uncertainty", "life-transition"],
  "pregnant-with-twins": ["emotional-overwhelm", "personal-growth", "constant-responsibility"],
  mirrors: ["identity-confusion", "self-discovery", "vulnerability"],
  "watching-yourself-like-a-movie": [
    "emotional-disconnection",
    "detachment",
    "self-discovery",
  ],
  "aging-suddenly": ["life-transition", "uncertainty", "personal-growth"],
  snake: ["hidden-truths", "fear-of-the-unknown", "inner-conflict"],
};

const categoryConnections = {
  anxiety: ["anxiety", "hidden-stress", "emotional-overwhelm"],
  fear: ["fear-of-the-unknown", "survival-pressure", "fear-of-losing-control"],
  transformation: ["personal-growth", "life-transition", "letting-go"],
  identity: ["identity-confusion", "self-discovery", "emotional-disconnection"],
  relationships: ["relationship-confusion", "fear-of-abandonment", "unspoken-feelings"],
  relationship: ["relationship-confusion", "fear-of-abandonment", "unspoken-feelings"],
  love: ["fear-of-abandonment", "unspoken-feelings", "reconnection"],
  "hidden emotions": ["hidden-stress", "emotional-suppression", "inner-conflict"],
  "inner conflict": ["inner-conflict", "decision-anxiety", "hidden-stress"],
  spiritual: ["self-discovery", "personal-growth", "hidden-truths"],
  death: ["letting-go", "life-transition", "grief"],
  body: ["body-image", "vulnerability", "self-worth"],
};

const keywordConnections = [
  {
    pattern: /\b(chased|escaping|running away|danger|attacked|hunted)\b/i,
    connections: ["survival-pressure", "fight-or-flight", "fear-of-the-unknown"],
  },
  {
    pattern: /\b(falling|crash|control|collapse|sinking)\b/i,
    connections: ["fear-of-losing-control", "lack-of-control", "emotional-overwhelm"],
  },
  {
    pattern: /\b(water|drowning|flood|tsunami|wave|storm)\b/i,
    connections: ["emotional-overwhelm", "fear-of-losing-control", "survival-pressure"],
  },
  {
    pattern: /\b(test|exam|late|unprepared|fail|failing)\b/i,
    connections: ["fear-of-failure", "performance-pressure", "anxiety"],
  },
  {
    pattern: /\b(trapped|locked|stuck|unable|paralyzed)\b/i,
    connections: ["feeling-trapped", "feeling-powerless", "lack-of-control"],
  },
  {
    pattern: /\b(scream|voice|ignored|unheard|silent)\b/i,
    connections: ["emotional-suppression", "fear-of-being-ignored", "feeling-powerless"],
  },
  {
    pattern: /\b(ex|partner|cheating|relationship|wedding|marrying|love)\b/i,
    connections: ["relationship-confusion", "fear-of-abandonment", "unspoken-feelings"],
  },
  {
    pattern: /\b(baby|pregnant|birth|child|twins)\b/i,
    connections: ["personal-growth", "life-transition", "constant-responsibility"],
  },
  {
    pattern: /\b(lost|unknown|dark|maze|future)\b/i,
    connections: ["uncertainty", "fear-of-the-unknown", "identity-confusion"],
  },
  {
    pattern: /\b(mirror|reflection|face|body|naked|hair|teeth)\b/i,
    connections: ["identity-confusion", "vulnerability", "self-worth"],
  },
  {
    pattern: /\b(dead|death|funeral|past|memory|goodbye)\b/i,
    connections: ["grief", "letting-go", "emotional-healing"],
  },
];

function uniqueValidConnections(items = []) {
  const seen = new Set();

  return items
    .filter((slug) => emotionalHubs[slug])
    .filter((slug) => {
      if (seen.has(slug)) return false;
      seen.add(slug);
      return true;
    })
    .slice(0, 4);
}

export function getEmotionalConnectionsForDream(dream = {}) {
  const slug = normalizeSlug(dream.slug || dream.title);
  const text = [
    dream.slug,
    dream.title,
    dream.description,
    dream.microSummary,
    dream.shortDescription,
    dream.emotional,
    dream.symbolic,
    dream.wakingLife,
  ]
    .filter(Boolean)
    .join(" ");

  const categoryMatches = (dream.categories || []).flatMap(
    (category) => categoryConnections[String(category).toLowerCase().trim()] || []
  );

  const keywordMatches = keywordConnections.flatMap((item) =>
    item.pattern.test(text) ? item.connections : []
  );

  return uniqueValidConnections([
    ...(explicitConnections[slug] || []),
    ...categoryMatches,
    ...keywordMatches,
    ...fallbackConnections,
  ]);
}

export const dreamsWithEmotionalConnections = rawDreams.map((dream) => ({
  ...dream,
  emotionalConnections:
    dream.emotionalConnections?.length > 0
      ? uniqueValidConnections(dream.emotionalConnections)
      : getEmotionalConnectionsForDream(dream),
}));
