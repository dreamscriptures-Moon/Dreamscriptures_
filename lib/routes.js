import { normalizeSlug } from "@/lib/normalizeSlug";

export function getDreamHref(dreamOrSlug = "") {
  const slug =
    typeof dreamOrSlug === "string"
      ? dreamOrSlug
      : dreamOrSlug?.slug || dreamOrSlug?.title || "";

  return `/dreams/${normalizeSlug(slug)}`;
}

export function getCategoryHref(category = "") {
  return `/categories/${normalizeSlug(category)}`;
}
