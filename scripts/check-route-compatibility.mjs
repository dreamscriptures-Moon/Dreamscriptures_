import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { registerHooks } from "node:module";

const root = new URL("../", import.meta.url);
const loaded = new Set();
// Resolve the application's @ alias for this standalone Node check.
registerHooks({
  resolve(specifier, context, next) {
    if (specifier.startsWith("@/")) specifier = new URL(specifier.slice(2), root).href;
    if (specifier.startsWith("file:") || specifier.startsWith(".")) {
      const url = new URL(specifier, context.parentURL);
      if (!existsSync(url) && existsSync(new URL(`${url.href}.js`))) specifier = `${url.href}.js`;
    }
    return next(specifier, context);
  },
  load(url, context, next) {
    loaded.add(url);
    return next(url, context);
  },
});

const { getDreamHref, getCategoryHref } = await import("../lib/routes.js");
assert.deepEqual([...loaded].map((url) => url.replace(root.href, "")).sort(), [
  "lib/normalizeSlug.js", "lib/routeAliases.js", "lib/routes.js",
]);

const { dreams } = await import("../data/dreams.js");
const { getDreamBySlug, getDreamKeys, normalizeCategory } = await import("../lib/dreams.js");
const { getCanonicalDreamPath } = await import("../lib/seo.js");
const { normalizeSlug } = await import("../lib/normalizeSlug.js");
let references = 0;
for (const dream of dreams) {
  for (const input of [dream, { slug: dream.slug }, { title: dream.title }, ...getDreamKeys(dream)]) {
    const slug = typeof input === "string" ? input : input.slug || input.title;
    const previousDream = getDreamBySlug(slug) || (typeof input === "string" ? null : input);
    const expected = getCanonicalDreamPath(previousDream, normalizeSlug(slug));
    assert.equal(getDreamHref(input), expected, `Changed route for ${slug}`);
    references++;
  }
  for (const category of dream.categories || []) {
    assert.equal(getCategoryHref(category), `/categories/${normalizeSlug(normalizeCategory(category))}`);
  }
}
for (const field of ["canonicalSlug", "mergedInto", "redirectTo"]) {
  assert.equal(getDreamHref({ slug: "old-route", [field]: "new-route" }), "/dreams/new-route");
}
assert.equal(getDreamHref({ slug: "old-route", canonicalPath: "/guides/example", canonicalSlug: "ignored" }), "/guides/example");
assert.equal(getDreamHref("unknown-valid-slug"), "/dreams/unknown-valid-slug");
assert.equal(getDreamHref("constructor"), "/dreams/constructor");
assert.equal(getCategoryHref(" Relationships "), "/categories/relationship");
assert.equal(getCategoryHref("Emotions"), "/categories/emotion");
console.log(`PASS: lightweight import graph; ${dreams.length} dreams; ${references} compatible references; canonical fields and categories.`);
