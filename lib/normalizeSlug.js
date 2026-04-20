export function normalizeSlug(value = "") {
  return String(value || "").toLowerCase().trim().replace(/\s+/g, "-");
}
