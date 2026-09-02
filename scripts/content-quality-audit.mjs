import { dreams } from "../data/dream.js";

const NON_INDEXABLE_STATUSES = new Set(["draft", "merged", "noindex", "thin"]);
const KNOWN_ALIASES = {
  pregnancy: "pregnant",
  "being-pregnant": "pregnant",
  "being-chased": "chased",
  snakes: "snake",
  twins: "pregnant-with-twins",
  school: "going-back-to-school",
  "lost-in-a-building": "being-lost-in-a-building",
  "lost-in-a-forest": "lost-in-the-forest",
};

function clean(value = "") {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
}

function normalize(value = "") {
  return clean(value)
    .toLowerCase()
    .replace(/[“”‘’]/g, "'")
    .replace(/[^a-z0-9' ]/g, "")
    .replace(/\s+/g, " ");
}

function slugify(value = "") {
  return clean(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function wordCount(value = "") {
  return clean(value).split(/\s+/).filter(Boolean).length;
}

function isIndexable(dream = {}) {
  const status = String(dream.status || dream.seoStatus || "").toLowerCase();
  return !(
    dream.noindex === true ||
    dream.isIndexed === false ||
    dream.index === false ||
    dream.robots?.index === false ||
    NON_INDEXABLE_STATUSES.has(status)
  );
}

function itemCount(value) {
  if (Array.isArray(value)) return value.filter(Boolean).length;
  return clean(value) ? 1 : 0;
}

function getDescription(dream = {}) {
  return clean(dream.description || dream.uniqueDescription);
}

function getOpening(dream = {}) {
  return clean(
    dream.microSummary ||
    dream.shortSummary ||
    dream.shortDescription ||
    getDescription(dream).split(/\n+/)[0]
  );
}

function hasDirectOpening(dream = {}) {
  const opening = normalize(getOpening(dream));
  if (wordCount(opening) < 18) return false;

  return ![
    "dreams have fascinated",
    "dreams are mysterious",
    "have you ever wondered",
    "dreams can have many",
  ].some((phrase) => opening.startsWith(phrase));
}

function relatedReasonCount(dream = {}) {
  return (dream.relatedDreams || []).filter(
    (item) => typeof item === "object" && clean(item?.reason)
  ).length;
}

function getCategoryCount(dream = {}) {
  return itemCount(dream.category) + itemCount(dream.categories);
}

function structuredText(value) {
  if (!value) return "";
  if (typeof value === "string") return clean(value);
  if (!Array.isArray(value)) return "";

  return value.map((item) => {
    if (typeof item === "string") return item;
    return [item?.title, item?.meaning, item?.description, item?.text, item?.example, item?.content]
      .map(clean)
      .filter(Boolean)
      .join(" ");
  }).filter(Boolean).join(" ");
}

function getContentEntries(dream = {}) {
  return [
    ["microSummary", clean(dream.microSummary || dream.shortSummary)],
    ["shortDescription", clean(dream.shortDescription)],
    ["description", getDescription(dream)],
    ["introduction", clean(dream.introduction)],
    ["emotionalMeaning", clean(dream.emotionalMeaning || dream.emotional)],
    ["symbolicMeaning", clean(dream.symbolicMeaning || dream.symbolic)],
    ["spiritualMeaning", clean(dream.spiritualMeaning || dream.spiritual)],
    ["wakingLifeMeaning", clean(dream.wakingLifeMeaning || dream.wakingLife)],
    ["biblicalMeaning", clean(dream.biblicalMeaning)],
    ["context", clean(dream.context)],
    ["scenarios", structuredText(dream.scenarios)],
    ["behaviorInsights", structuredText(dream.behaviorInsights || dream.behavioralInsights)],
    ["reflectionQuestions", structuredText(dream.reflectionQuestions)],
    ["illustrativeExamples", structuredText(dream.illustrativeExamples)],
    ["psychologicalScientificContext", clean(dream.psychologicalScientificContext)],
    ["culturalContext", clean(dream.culturalContext)],
  ].filter(([, value]) => value);
}

function getManualFaqs(dream = {}) {
  const items = dream.faqs || dream.FAQs || [];
  return Array.isArray(items)
    ? items.filter((item) => clean(item?.question || item?.title) && clean(item?.answer || item?.body || item?.text))
    : [];
}

function getRepeatedFields(dream = {}) {
  const values = new Map();
  for (const [field, content] of getContentEntries(dream)) {
    const value = normalize(content);
    if (!value) continue;
    values.set(value, [...(values.get(value) || []), field]);
  }
  return [...values.values()].filter((fields) => fields.length > 1);
}

function classify({ meaningfulWords, coreSections, richSections, supportFeatures }) {
  if (meaningfulWords < 350 || coreSections <= 1) return "incomplete";
  if (meaningfulWords >= 1200 && richSections >= 4 && supportFeatures >= 3) return "strong";
  if (meaningfulWords >= 700 && richSections >= 2 && supportFeatures >= 2) return "good";
  return "needs-enrichment";
}

const slugCounts = new Map();
for (const dream of dreams) {
  const slug = slugify(dream.slug || dream.title);
  slugCounts.set(slug, (slugCounts.get(slug) || 0) + 1);
}

const rows = dreams.map((dream) => {
  const contentEntries = getContentEntries(dream);
  const uniqueContent = [...new Set(contentEntries.map(([, value]) => normalize(value)).filter(Boolean))];
  const coreValues = [
    getDescription(dream),
    clean(dream.emotionalMeaning || dream.emotional),
    clean(dream.symbolicMeaning || dream.symbolic),
    clean(dream.spiritualMeaning || dream.spiritual),
    clean(dream.wakingLifeMeaning || dream.wakingLife),
  ].filter(Boolean);
  const coreSections = coreValues.length;
  const richSections = coreValues.filter((value) => wordCount(value) >= 120).length;
  const manualFaqs = getManualFaqs(dream);
  const supportFeatures = [
    itemCount(dream.types),
    itemCount(dream.scenarios),
    itemCount(dream.behaviorInsights || dream.behavioralInsights),
    itemCount(dream.reflectionQuestions),
    itemCount(dream.illustrativeExamples),
    itemCount(dream.dreamSymbols),
    itemCount(dream.emotionalState || dream.emotionalStates),
    itemCount(dream.lifeSituations),
    itemCount(dream.subconsciousPatterns),
    itemCount(dream.contradictions),
    itemCount(dream.relatedDreams),
    getCategoryCount(dream),
    itemCount(dream.tags),
    itemCount(dream.sources),
    clean(dream.biblicalMeaning) ? 1 : 0,
  ].filter((count) => count > 0).length;
  const meaningfulWords = wordCount(uniqueContent.join(" "));
  const repeatedFields = getRepeatedFields(dream);
  const technicalProblems = [];
  const normalizedSlug = slugify(dream.slug || dream.title);

  if (!clean(dream.title)) technicalProblems.push("missing-title");
  if (!clean(dream.slug)) technicalProblems.push("missing-slug");
  if ((slugCounts.get(normalizedSlug) || 0) > 1) technicalProblems.push("duplicate-slug");

  return {
    title: dream.title,
    slug: dream.slug,
    indexable: isIndexable(dream),
    classification: technicalProblems.length
      ? "technically-problematic"
      : classify({ meaningfulWords, coreSections, richSections, supportFeatures }),
    meaningfulWords,
    distinctContentFields: uniqueContent.length,
    coreSections,
    richSections,
    faqCount: manualFaqs.length,
    relatedDreamCount: itemCount(dream.relatedDreams),
    relatedDreamReasonCount: relatedReasonCount(dream),
    biblicalReferenceCount: itemCount(
      dream.biblicalReferences || dream.scriptures || dream.bibleReferences
    ),
    hasDescription: Boolean(getDescription(dream)),
    descriptionField: clean(dream.description) ? "description" : clean(dream.uniqueDescription) ? "uniqueDescription" : null,
    hasEmotionalMeaning: Boolean(clean(dream.emotionalMeaning || dream.emotional)),
    hasSymbolicMeaning: Boolean(clean(dream.symbolicMeaning || dream.symbolic)),
    hasSpiritualMeaning: Boolean(clean(dream.spiritualMeaning || dream.spiritual)),
    hasWakingLifeMeaning: Boolean(clean(dream.wakingLifeMeaning || dream.wakingLife)),
    hasBiblicalMeaning: Boolean(clean(dream.biblicalMeaning)),
    dreamSymbolCount: itemCount(dream.dreamSymbols),
    emotionalStateCount: itemCount(dream.emotionalState || dream.emotionalStates),
    behaviorInsightCount: itemCount(dream.behaviorInsights || dream.behavioralInsights),
    scenarioCount: itemCount(dream.scenarios || dream.types),
    reflectionQuestionCount: itemCount(dream.reflectionQuestions),
    illustrativeExampleCount: itemCount(dream.illustrativeExamples),
    categoryCount: getCategoryCount(dream),
    tagCount: itemCount(dream.tags),
    sourceCount: itemCount(dream.sources),
    repeatedFields,
    technicalProblems,
    qualityChecks: {
      directOpening: hasDirectOpening(dream),
      distinctCoreSections: repeatedFields.length === 0,
      specificReflectionQuestions: itemCount(dream.reflectionQuestions) >= 3,
      contextualRelatedDreams:
        itemCount(dream.relatedDreams) > 0 && relatedReasonCount(dream) > 0,
      standaloneDepth: meaningfulWords >= 350 && coreSections > 1,
    },
  };
});

function repeatedBlocks(kind) {
  const blocks = new Map();
  for (const dream of dreams) {
    for (const [field, content] of getContentEntries(dream)) {
      const value = clean(content);
      if (!value) continue;
      const parts = kind === "paragraph"
        ? String(content).split(/\n+/)
        : value.split(/(?<=[.!?])\s+/);
      for (const part of parts.map(clean).filter((item) => wordCount(item) >= 12)) {
        const key = normalize(part);
        const existing = blocks.get(key) || { text: part, occurrences: [] };
        existing.occurrences.push({ slug: dream.slug, field });
        blocks.set(key, existing);
      }
    }
  }
  return [...blocks.values()]
    .filter((block) => new Set(block.occurrences.map((item) => item.slug)).size > 1)
    .map((block) => ({
      ...block,
      pageCount: new Set(block.occurrences.map((item) => item.slug)).size,
    }))
    .sort((a, b) => b.pageCount - a.pageCount || b.text.length - a.text.length);
}

function relatedReferenceAudit() {
  const bySlug = new Map(dreams.map((dream) => [slugify(dream.slug), dream]));
  const byTitle = new Map();
  for (const dream of dreams) {
    const key = slugify(dream.title);
    byTitle.set(key, [...(byTitle.get(key) || []), dream]);
  }

  const entries = [];
  for (const source of dreams) {
    for (const item of source.relatedDreams || []) {
      const reference = clean(typeof item === "string" ? item : item?.slug || item?.title);
      if (!reference) continue;
      const normalized = slugify(reference);
      if (bySlug.has(normalized)) continue;

      const titleMatches = byTitle.get(normalized) || [];
      const aliasTarget = KNOWN_ALIASES[normalized];
      let classification = "genuinely-missing-destination";
      let likelyDestination = null;
      let reason = "No dream slug, unique normalized title, or documented alias matches this reference.";
      let recommendedAction = "Editorial review: add a destination only if the intended dream subject exists.";

      if (titleMatches.length === 1) {
        classification = "confidently-resolvable";
        likelyDestination = titleMatches[0].slug;
        reason = "The raw reference is a unique dream title rather than its canonical slug.";
        recommendedAction = `Normalize the reference to ${titleMatches[0].slug}.`;
      } else if (aliasTarget && bySlug.has(aliasTarget)) {
        classification = "resolvable-through-alias-normalization";
        likelyDestination = aliasTarget;
        reason = "The reference uses a documented legacy or plural alias already supported by the resolver.";
        recommendedAction = `Keep alias support or normalize the stored reference to ${aliasTarget}.`;
      } else if (titleMatches.length > 1) {
        classification = "ambiguous";
        reason = "More than one dream has the same normalized title, so the intended destination is not unique.";
        recommendedAction = "Human review is required before changing this reference.";
      }

      entries.push({
        sourceDream: source.slug,
        unresolvedReference: reference,
        likelyDestination,
        classification,
        reason,
        recommendedAction,
      });
    }
  }

  const counts = entries.reduce((result, entry) => {
    result[entry.classification] = (result[entry.classification] || 0) + 1;
    return result;
  }, {});
  return { rawUnresolvedCount: entries.length, counts, entries };
}

const classificationCounts = rows.reduce((counts, row) => {
  counts[row.classification] = (counts[row.classification] || 0) + 1;
  return counts;
}, {});

const report = {
  generatedAt: new Date().toISOString(),
  rubric: {
    strong: ">=1200 unique words, >=4 rich core sections, >=3 support feature types",
    good: ">=700 unique words, >=2 rich core sections, >=2 support feature types",
    needsEnrichment: "Useful source content exists but falls below the good thresholds",
    incomplete: "<350 unique words or <=1 core interpretation field",
    technicallyProblematic: "Missing or duplicate title/slug",
  },
  summary: {
    dreamCount: rows.length,
    indexableCount: rows.filter((row) => row.indexable).length,
    classificationCounts,
    manualFaqDreamCount: rows.filter((row) => row.faqCount > 0).length,
    dreamsWithRepeatedFields: rows.filter((row) => row.repeatedFields.length > 0).length,
    dreamsWithoutDirectOpening: rows.filter((row) => !row.qualityChecks.directOpening).length,
    dreamsWithoutSpecificReflectionQuestions: rows.filter((row) => !row.qualityChecks.specificReflectionQuestions).length,
    dreamsWithoutExplainedRelatedLinks: rows.filter((row) => !row.qualityChecks.contextualRelatedDreams).length,
    dreamsNeedingStandaloneReview: rows.filter((row) => !row.qualityChecks.standaloneDepth).length,
  },
  worstExactParagraphReuse: repeatedBlocks("paragraph").slice(0, 25),
  worstExactSentenceReuse: repeatedBlocks("sentence").slice(0, 25),
  relatedReferences: relatedReferenceAudit(),
  dreams: rows,
};

if (process.argv.includes("--related-json")) {
  console.log(JSON.stringify(report.relatedReferences, null, 2));
} else if (process.argv.includes("--needs-enrichment-json")) {
  console.log(JSON.stringify(report.dreams.filter((dream) => dream.classification === "needs-enrichment"), null, 2));
} else if (process.argv.includes("--needs-enrichment-tsv")) {
  for (const dream of report.dreams.filter((item) => item.classification === "needs-enrichment")) {
    console.log([
      dream.slug,
      dream.title,
      dream.meaningfulWords,
      dream.coreSections,
      dream.richSections,
      dream.relatedDreamCount,
      dream.reflectionQuestionCount,
      dream.hasBiblicalMeaning ? "biblical" : "general",
    ].join("\t"));
  }
} else if (process.argv.includes("--summary")) {
  const reviewedSlugs = new Set(["peeing-the-bed", "not-finding-your-car", "hearing-someone-walking-in-the-dark"]);
  console.log(JSON.stringify({ ...report.summary, relatedReferences: report.relatedReferences.counts, rawUnresolvedRelatedReferences: report.relatedReferences.rawUnresolvedCount, reviewedDreams: report.dreams.filter((dream) => reviewedSlugs.has(dream.slug)) }, null, 2));
} else {
  console.log(JSON.stringify(report, null, 2));
}
