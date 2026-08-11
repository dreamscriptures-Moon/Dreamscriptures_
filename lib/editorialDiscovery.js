import { dreams } from "@/data/dreams";
import { emotionalHubs } from "@/data/emotionalHubs";
import { getAllGuideEntries } from "@/lib/guideCatalog";
import { formatCategory, normalizeCategory, shorten, uniqueDreams } from "@/lib/dreams";
import { normalizeSlug } from "@/lib/normalizeSlug";
import { isDreamIndexable } from "@/lib/seo";

export function getCategoryEntries() {
  const grouped = new Map();

  dreams.filter(isDreamIndexable).forEach((dream) => {
    (dream.categories || []).forEach((rawCategory) => {
      const key = normalizeCategory(rawCategory);
      if (!key) return;
      grouped.set(key, [...(grouped.get(key) || []), dream]);
    });
  });

  return [...grouped.entries()]
    .map(([slug, categoryDreams]) => ({
      slug: normalizeSlug(slug),
      key: slug,
      title: formatCategory(slug),
      dreams: uniqueDreams(categoryDreams),
      count: uniqueDreams(categoryDreams).length,
    }))
    .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title));
}

export function getCategoryEntry(slug) {
  const normalizedSlug = normalizeSlug(slug);
  return getCategoryEntries().find((entry) => entry.slug === normalizedSlug);
}

export function getCategoryDescription(categoryData) {
  return categoryData?.emotionalNature || "";
}

export function getDreamSummary(dream, maxLength = 155) {
  return shorten(
    dream.microSummary || dream.shortDescription || dream.summary || dream.description,
    maxLength
  );
}

function scoreText(item, terms) {
  const text = `${item.title || ""} ${item.description || ""} ${item.intro || ""}`.toLowerCase();
  return terms.reduce((score, term) => score + (text.includes(term) ? 1 : 0), 0);
}

export function getRelevantGuides(terms = [], limit = 3) {
  const normalizedTerms = terms.map((term) => String(term).toLowerCase()).filter(Boolean);
  return getAllGuideEntries()
    .map((guide) => ({ guide, score: scoreText(guide, normalizedTerms) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ guide }) => guide)
    .slice(0, limit);
}

export function getEmotionEntries() {
  return Object.entries(emotionalHubs).map(([slug, emotion]) => {
    const relatedDreams = dreams.filter((dream) =>
      (dream.emotionalConnections || []).includes(slug)
    );
    return { slug, ...emotion, dreams: uniqueDreams(relatedDreams), count: relatedDreams.length };
  });
}

export function getRepresentedEmotionsForDreams(categoryDreams = [], limit = 8) {
  const counts = new Map();
  categoryDreams.forEach((dream) =>
    (dream.emotionalConnections || []).forEach((slug) =>
      counts.set(slug, (counts.get(slug) || 0) + 1)
    )
  );
  return [...counts.entries()]
    .map(([slug, count]) => ({ slug, count, ...emotionalHubs[slug] }))
    .filter((item) => item.title)
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

export function getRelatedCategories(category, limit = 6) {
  const scores = new Map();
  category.dreams.forEach((dream) => {
    (dream.categories || []).forEach((rawCategory) => {
      const key = normalizeCategory(rawCategory);
      if (key !== category.key) scores.set(key, (scores.get(key) || 0) + 1);
    });
  });
  const entries = getCategoryEntries();
  return [...scores.entries()]
    .map(([key, score]) => ({ ...entries.find((entry) => entry.key === key), score }))
    .filter((entry) => entry.title)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export function getCategoriesForDreams(selectedDreams = [], limit = 6) {
  const counts = new Map();
  selectedDreams.forEach((dream) =>
    (dream.categories || []).forEach((value) => {
      const key = normalizeCategory(value);
      counts.set(key, (counts.get(key) || 0) + 1);
    })
  );
  return [...counts.entries()]
    .map(([key, count]) => ({ key, count, slug: normalizeSlug(key), title: formatCategory(key) }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}
