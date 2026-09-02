import { clusters } from "@/data/clusters";
import { dreams } from "@/data/dream";
import { normalizeSlug } from "@/lib/normalizeSlug";

function getGuideSlug(cluster = {}, fallbackKey = "") {
  const guidePath = cluster.guide || `/guides/${fallbackKey}`;
  return guidePath.split("/").filter(Boolean).at(-1) || fallbackKey;
}

function sentenceCase(value = "") {
  const text = String(value).trim();
  return text ? `${text.charAt(0).toUpperCase()}${text.slice(1)}` : text;
}

function getDreamsByCluster(cluster = {}) {
  const clusterDreamSlugs = new Set((cluster.dreams || []).map(normalizeSlug));

  return dreams.filter((dream) =>
    clusterDreamSlugs.has(normalizeSlug(dream.slug || dream.title))
  );
}

function getEmotionalPatterns(cluster = {}, clusterDreams = []) {
  if (cluster.emotionalPatterns?.length > 0) {
    return cluster.emotionalPatterns;
  }

  const categories = clusterDreams.flatMap((dream) => dream.categories || []);
  const patterns = [...new Set(categories)]
    .filter((category) =>
      [
        "Anxiety",
        "Fear",
        "Hidden Emotions",
        "Inner Conflict",
        "Transitions",
        "Transformation",
        "Vulnerability",
      ].includes(category)
    )
    .slice(0, 6);

  return patterns.length > 0
    ? patterns
    : ["Anxiety", "Fear", "Pressure", "Uncertainty"];
}

function getRelatedPathways(cluster = {}, clusterDreams = []) {
  if (cluster.relatedPathways?.length > 0) {
    return cluster.relatedPathways;
  }

  const categories = [...new Set(clusterDreams.flatMap((dream) => dream.categories || []))]
    .slice(0, 5)
    .map((category) => ({
      title: `${sentenceCase(category)} dreams`,
      href: `/categories/${normalizeSlug(category)}`,
      description: `Explore dream meanings connected to ${category.toLowerCase()} and the emotional patterns around them.`,
    }));

  return categories;
}

function getClusterIntro(cluster, clusterDreams) {
  if (cluster.intro) return cluster.intro;

  const title = cluster.title || "These dreams";
  const dreamTitles = clusterDreams
    .slice(0, 3)
    .map((dream) => dream.title.toLowerCase())
    .join(", ");

  return `${title} often gather around the feeling that something is difficult to hold, direct, escape, or steady emotionally. The details may change, but dreams like ${dreamTitles} usually share an underlying pattern of pressure, urgency, vulnerability, or losing stability in a situation that matters.`;
}

export function getClusterGuides() {
  return Object.entries(clusters).map(([key, cluster]) => {
    const slug = normalizeSlug(getGuideSlug(cluster, key));
    const clusterDreams = getDreamsByCluster(cluster);
    const title = cluster.title || sentenceCase(key.replace(/-/g, " "));

    return {
      key,
      slug,
      title,
      description:
        cluster.description ||
        `Explore ${title.toLowerCase()} through connected dream meanings, emotional patterns, and related pathways.`,
      intro: getClusterIntro({ ...cluster, title }, clusterDreams),
      dreams: clusterDreams,
      editorialAnchor: cluster.editorialAnchor || "",
      principles: cluster.principles || [],
      groups: (cluster.groups || []).map((group) => ({
        ...group,
        dreams: (group.dreams || []).map((slug) => dreams.find((dream) => normalizeSlug(dream.slug) === normalizeSlug(slug))).filter(Boolean),
      })).filter((group) => group.dreams.length > 0),
      frameworkNote: cluster.frameworkNote || "",
      compassPrompt: cluster.compassPrompt || "",
      reflectionQuestions: cluster.reflectionQuestions || [],
      emotionalPatterns: getEmotionalPatterns(cluster, clusterDreams),
      relatedPathways: getRelatedPathways(cluster, clusterDreams),
    };
  });
}

export function getClusterGuideBySlug(slug) {
  const cleanSlug = normalizeSlug(Array.isArray(slug) ? slug[0] : slug);

  return getClusterGuides().find((guide) => guide.slug === cleanSlug) || null;
}
