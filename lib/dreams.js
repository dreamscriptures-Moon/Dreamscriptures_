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
  return [
    normalizeForMatch(item.slug),
    normalizeSlug(item.slug),
    normalizeForMatch(item.title),
    normalizeSlug(item.title),
  ];
}

export function getDreamBySlug(slug = "", dreams = allDreams) {
  const normalizedSlug = normalizeForMatch(slug);

  return dreams.find((item) => getDreamKeys(item).includes(normalizedSlug));
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

export function getDynamicDreamTitle(title = "") {
  const patterns = [
    `${title} Dream Meaning (What It Really Means)`,
    `${title} Dream Meaning (Hidden Meaning Explained)`,
    `${title} Dream Meaning (Spiritual & Emotional Meaning)`,
    `${title} Dream Meaning (Why This Dream Feels So Intense)`,
    `${title} Dream Meaning (What Your Subconscious May Be Telling You)`,
    `${title} Dream Meaning (Fear, Stress, or Transformation?)`,
    `${title} Dream Meaning (Why This Dream Stays With You)`,
    `${title} Dream Meaning (What This Dream May Be Revealing)`,
    `${title} Dream Meaning (What Does This Dream Say About You?)`,
    `${title} Dream Meaning (A Sign of Anxiety or Change?)`,
  ];

  const index = title.length % patterns.length;

  return patterns[index];
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
  const result =
    lastSentence !== -1 ? trimmed.substring(0, lastSentence + 1).trim() : clean;

  return result.endsWith(".") ? result : `${result.trim()}.`;
}

export function buildFAQAnswer(parts, fallback) {
  const text = uniqueParts(parts).join(" ");

  return cleanFAQ(text || fallback);
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

export function generateSummary(dream = {}, dreamTitle = "") {
  if (dream.summary) {
    return dream.summary;
  }

  return shorten(
    `${dreamTitle} often points to ${pickFirstText(
      dream.symbolic,
      dream.description,
      "a meaningful inner theme"
    )}. In waking life, it may connect to ${pickFirstText(
      dream.wakingLife,
      dream.emotional,
      "current emotions or changes you are processing"
    )}`,
    220
  );
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
  return [
    {
      id: "emotional-meaning",
      title: "What does this dream mean emotionally?",
      body: pickFirstText(
        dream.emotional,
        dream.description,
        dream.wakingLife,
        dream.symbolic
      ),
    },
    {
      id: "symbolic-meaning",
      title: "What does this dream symbolize?",
      body: pickFirstText(
        dream.symbolic,
        dream.description,
        dream.spiritual,
        dream.emotional
      ),
    },
    {
      id: "spiritual-meaning",
      title: "What is the spiritual meaning of this dream?",
      body: pickFirstText(
        dream.spiritual,
        dream.symbolic,
        dream.description,
        dream.emotional
      ),
    },
    {
      id: "real-life-meaning",
      title: "What does this dream mean in real life?",
      body: pickFirstText(
        dream.wakingLife,
        dream.emotional,
        dream.description,
        dream.symbolic
      ),
    },
  ].filter((section) => section.body);
}

export function getDreamFAQItems(dream = {}, dreamTitle = "") {
  const faqTemplates = [
    {
      id: 1,
      question: (title) => `What does dreaming about ${title} usually mean?`,
      answer: () =>
        buildFAQAnswer(
          [dream.symbolic, dream.spiritual, dream.wakingLife, dream.description],
          `${dreamTitle} usually reflects a mix of personal symbolism, emotional undercurrents, and experiences your mind is still processing.`
        ),
    },
    {
      id: 2,
      question: (title) => `What emotions are connected to dreaming about ${title}?`,
      answer: () =>
        buildFAQAnswer(
          [
            dream.emotional,
            dream.symbolic,
            dream.spiritual,
            dream.wakingLife,
            dream.description,
          ],
          `Dreams about ${dreamTitle} often connect to feelings you have not fully processed yet, especially around stress, desire, uncertainty, or change.`
        ),
    },
    {
      id: 3,
      question: (title) => `What might ${title} symbolize in a dream?`,
      answer: () =>
        buildFAQAnswer(
          [
            dream.symbolic,
            dream.spiritual,
            dream.wakingLife,
            dream.description,
          ],
          `${dreamTitle} often acts as a symbol for something unfolding beneath the surface, pointing to patterns, fears, hopes, or transitions in your life.`
        ),
    },
    {
      id: 4,
      question: (title) => `Does dreaming about ${title} relate to waking life?`,
      answer: () =>
        buildFAQAnswer(
          [
            dream.wakingLife,
            dream.symbolic,
            dream.spiritual,
            dream.emotional,
            dream.description,
          ],
          `Yes. Dreams about ${dreamTitle} often mirror current situations, relationships, or decisions that are shaping your emotions and attention right now.`
        ),
    },
    {
      id: 5,
      question: (title) => `Why do I keep dreaming about ${title}?`,
      answer: () =>
        buildFAQAnswer(
          [
            dream.emotional,
            dream.wakingLife,
            dream.symbolic,
            dream.spiritual,
          ],
          `Repeated dreams about ${dreamTitle} usually suggest an issue, emotion, or life pattern is still unresolved and returning for deeper attention.`
        ),
    },
    {
      id: 6,
      question: (title) => `Is dreaming about ${title} a warning sign?`,
      answer: () =>
        buildFAQAnswer(
          [
            dream.spiritual,
            dream.symbolic,
            dream.wakingLife,
            dream.emotional,
            dream.description,
          ],
          `Not always. A dream about ${dreamTitle} is more often a signal to notice your emotional state, inner conflicts, or the direction your life is taking.`
        ),
    },
    {
      id: 7,
      question: (title) => `What is the spiritual meaning of dreaming about ${title}?`,
      answer: () =>
        buildFAQAnswer(
          [
            dream.spiritual,
            dream.symbolic,
            dream.wakingLife,
            dream.description,
          ],
          `Spiritually, ${dreamTitle} may point to inner guidance, transformation, or a deeper lesson that your subconscious is trying to bring forward.`
        ),
    },
    {
      id: 8,
      question: (title) => `What should I reflect on after dreaming about ${title}?`,
      answer: () =>
        buildFAQAnswer(
          [
            dream.wakingLife,
            dream.emotional,
            dream.symbolic,
            dream.spiritual,
          ],
          `Reflect on what ${dreamTitle} reminds you of emotionally and practically, because the dream may be highlighting something active in your daily life.`
        ),
    },
  ];

  return getSeededItems(faqTemplates, dream.slug || dreamTitle, 5).map((item) => ({
    question: item.question(dreamTitle),
    answer: item.answer(),
  }));
}

export function getBreadcrumbSchema({ dreamTitle = "", canonicalDreamSlug = "" }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.dreamscriptures.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dream Meanings",
        item: "https://www.dreamscriptures.com/dreams",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: dreamTitle,
        item: `https://www.dreamscriptures.com/dreams/${canonicalDreamSlug}`,
      },
    ],
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

  const dreamBySlug = new Map(
    dreams.map((dream) => [normalizeSlug(dream.slug || dream.title), dream])
  );
  const seen = new Set();

  return slugs
    .map((item) => normalizeSlug(typeof item === "string" ? item : item?.slug))
    .filter((slug) => {
      if (!slug || seen.has(slug)) return false;

      seen.add(slug);
      return true;
    })
    .map((slug) => dreamBySlug.get(slug))
    .filter(Boolean);
}
