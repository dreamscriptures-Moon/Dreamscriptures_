import { normalizeSlug } from "@/lib/normalizeSlug";
import { dreamCanonicalPaths, dreamSlugAliases, dreamTitleAliases, normalizeCategory } from "@/lib/routeAliases";

export function getDreamHref(dreamOrSlug = "") {
  const dream = typeof dreamOrSlug === "string" ? null : dreamOrSlug;
  if (dream?.canonicalPath) return dream.canonicalPath;

  const slug = normalizeSlug(
    dream?.canonicalSlug || dream?.mergedInto || dream?.redirectTo ||
    (typeof dreamOrSlug === "string" ? dreamOrSlug : dream?.slug || dream?.title || "")
  );
  const canonicalSlug = Object.hasOwn(dreamSlugAliases, slug)
    ? dreamSlugAliases[slug]
    : Object.hasOwn(dreamTitleAliases, slug) ? dreamTitleAliases[slug] : slug;

  return Object.hasOwn(dreamCanonicalPaths, canonicalSlug)
    ? dreamCanonicalPaths[canonicalSlug]
    : `/dreams/${canonicalSlug}`;
}

export function getCategoryHref(category = "") {
  return `/categories/${normalizeSlug(normalizeCategory(category))}`;
}
