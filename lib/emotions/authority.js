import {
  authorityDreamSlugs,
  authoritySearchAliases,
  dreamAuthorityProfiles,
  emotionalAuthorityClusters,
} from "@/data/emotionalAuthority";
import { normalizeSlug } from "@/lib/normalizeSlug";

const profileEntries = Object.entries(dreamAuthorityProfiles);

export function getDreamAuthorityProfile(slug = "") {
  const normalizedSlug = normalizeSlug(slug);

  return profileEntries.find(([, profile]) => {
    const slugs = [profile.canonicalSlug, ...(profile.alternateSlugs || [])].map(
      normalizeSlug
    );

    return slugs.includes(normalizedSlug);
  })?.[1];
}

export function isAuthorityDream(slug = "") {
  return authorityDreamSlugs.includes(normalizeSlug(slug));
}

export function getAuthorityPriority(dream = {}) {
  const slug = normalizeSlug(dream.slug || dream.title);

  if (isAuthorityDream(slug)) return 0.9;
  if ((dream.relatedDreams || []).some((item) => isAuthorityDream(item?.slug || item))) {
    return 0.75;
  }

  return 0.7;
}

export function getAuthorityClustersForProfile(profile) {
  return (profile?.clusterKeys || [])
    .map((key) => ({
      key,
      ...emotionalAuthorityClusters[key],
    }))
    .filter((cluster) => cluster.title);
}

function normalizeReference(value = "") {
  return normalizeSlug(value).replace(/-dreams?$/, "");
}

function getAuthorityParentSlug(dream = {}) {
  return normalizeSlug(
    dream.parent ||
      dream.cluster ||
      dream.authorityParent ||
      dream.authorityCluster ||
      dream.parentSlug ||
      dream.clusterSlug ||
      ""
  );
}

function getTypeLabel(type = {}) {
  return String(type.type || type.title || type.label || "").trim();
}

export function getAuthorityAnchorId(item = {}) {
  return normalizeSlug(item.anchorId || item.slug || getTypeLabel(item));
}

export function getAuthorityTypeRegistrations(profile, allDreams = []) {
  if (!profile?.canonicalSlug) return [];

  const canonicalSlug = normalizeSlug(profile.canonicalSlug);
  const authorityDream = allDreams.find(
    (dream) => normalizeSlug(dream.slug || dream.title) === canonicalSlug
  );
  const registrations = [];
(authorityDream?.types || []).forEach((type) => {
  const anchorId = getAuthorityAnchorId(type);
  const label = getTypeLabel(type);

  if (!anchorId || !label) return;

  const typeSlug = normalizeSlug(type.slug || anchorId);

  const standaloneDream = allDreams.find(
    (dream) =>
      normalizeSlug(dream.slug || dream.title) === typeSlug
  );

  registrations.push({
    anchorId,
    label,
    source: "authority-type",

    href: standaloneDream
      ? `/dreams/${typeSlug}`
      : `/dreams/${canonicalSlug}#${anchorId}`,

    dreamSlug: standaloneDream
      ? typeSlug
      : canonicalSlug,
  });
});

  allDreams.forEach((dream) => {
    const dreamSlug = normalizeSlug(dream.slug || dream.title);
    const parentSlug = getAuthorityParentSlug(dream);

    if (!dreamSlug || dreamSlug === canonicalSlug || parentSlug !== canonicalSlug) {
      return;
    }

    registrations.push({
      anchorId: getAuthorityAnchorId(dream),
      label: dream.title || dreamSlug.replace(/-/g, " "),
      source: "authority-child",
    href: `/dreams/${dreamSlug}`,
     dreamSlug,
    });
  });

  const seen = new Set();

  return registrations.filter((item) => {
    if (!item.anchorId || seen.has(item.anchorId)) return false;
    seen.add(item.anchorId);
    return true;
  });
}

export function getLongTailSectionsForProfile(profile = {}) {
  return (profile.longTailSections || []).filter((section) => section.id && section.title);
}

export function getAuthoritySearchAliasItems() {
  return authoritySearchAliases.map(([query, target]) => {
    const [slug, anchor] = String(target).split("#");

    return {
      query,
      normalizedQuery: normalizeReference(query),
      title: query.replace(/\b\w/g, (char) => char.toUpperCase()),
      href: `/dreams/${normalizeSlug(slug)}${anchor ? `#${normalizeSlug(anchor)}` : ""}`,
    };
  });
}

export function getAutomaticAuthorityAliases(allDreams = []) {
  return profileEntries.flatMap(([, profile]) =>
    getAuthorityTypeRegistrations(profile, allDreams).map((item) => ({
      query: item.label,
      normalizedQuery: normalizeReference(item.label),
      title: item.label,
      href: item.href,
    }))
  );
}

export function getAuthorityProfilesForEmotion(emotionSlug = "") {
  const normalizedSlug = normalizeSlug(emotionSlug);

  return profileEntries
    .map(([, profile]) => ({
      ...profile,
      clusters: getAuthorityClustersForProfile(profile).filter((cluster) =>
        (cluster.emotionSlugs || []).includes(normalizedSlug)
      ),
    }))
    .filter((profile) => profile.clusters.length > 0);
}
