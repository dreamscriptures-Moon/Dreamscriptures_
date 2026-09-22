import { dreams } from "@/data/dreams";
import { emotionalHubs } from "@/data/emotionalHubs";
import { coreEmotions, coreEmotionBySlug } from "@/data/coreEmotions";
import { getDreamBySlug, uniqueDreams } from "@/lib/dreams";
import { normalizeSlug } from "@/lib/normalizeSlug";
import { isDreamIndexable } from "@/lib/seo";

// Aggregate for discovery only. Original hub content and dream connections stay intact.
export function getEmotionDreams(slug, allDreams = dreams) {
  const core = coreEmotionBySlug[slug];
  const associatedSlugs = new Set([slug, ...(core?.concepts || [])]);
  const explicit = [...associatedSlugs].flatMap((key) =>
    (emotionalHubs[key]?.connectedDreams || []).map((dreamSlug) => getDreamBySlug(dreamSlug, allDreams))
  ).filter(Boolean);
  const terms = new Set(core?.terms || []);
  const connected = allDreams.filter((dream) =>
    (dream.emotionalConnections || []).some((key) => associatedSlugs.has(key)) ||
    (core && (dream.emotionalStates || []).some((state) => terms.has(normalizeSlug(state))))
  );
  return uniqueDreams([...explicit, ...connected].filter(isDreamIndexable));
}

export function getCoreEmotionEntries() {
  return coreEmotions.map(({ slug }) => {
    const connectedDreams = getEmotionDreams(slug);
    return { ...emotionalHubs[slug], slug, dreams: connectedDreams, count: connectedDreams.length };
  });
}
