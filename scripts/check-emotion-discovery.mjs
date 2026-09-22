import assert from "node:assert/strict";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { registerHooks } from "node:module";

const root = new URL("../", import.meta.url);
registerHooks({
  resolve(specifier, context, next) {
    if (specifier.startsWith("@/")) specifier = new URL(specifier.slice(2), root).href;
    if (specifier.startsWith("file:") || specifier.startsWith(".")) {
      const url = new URL(specifier, context.parentURL);
      if (!existsSync(url) && existsSync(new URL(`${url.href}.js`))) specifier = `${url.href}.js`;
    }
    return next(specifier, context);
  },
});

const { dreams } = await import("../data/dreams.js");
const { emotionalHubs } = await import("../data/emotionalHubs.js");
const { getDreamBySlug } = await import("../lib/dreams.js");
const { isDreamIndexable } = await import("../lib/seo.js");
const baselinePath = new URL(".cache/emotion-discovery-before.json", root);
const previousDreamsFor = (slug) => [...new Set([
  ...(emotionalHubs[slug].connectedDreams || []).map((s) => getDreamBySlug(s, dreams)),
  ...dreams.filter((d) => d.emotionalConnections?.includes(slug)),
].filter(Boolean).filter(isDreamIndexable).map((d) => d.slug))];

if (process.argv.includes("--snapshot")) {
  mkdirSync(new URL(".cache/", root), { recursive: true });
  writeFileSync(baselinePath, JSON.stringify({
    hubs: Object.fromEntries(Object.keys(emotionalHubs).map((s) => [s, previousDreamsFor(s)])),
    connections: Object.fromEntries(dreams.map((d) => [d.slug, d.emotionalConnections])),
  }));
  console.log(`Saved baseline: ${Object.keys(emotionalHubs).length} hubs, ${dreams.length} dreams.`);
} else {
  const { coreEmotions, coreEmotionBySlug } = await import("../data/coreEmotions.js");
  const { getEmotionDreams, getCoreEmotionEntries } = await import("../lib/emotions/discovery.js");
  assert.equal(coreEmotions.length, 28);
  assert.equal(new Set(coreEmotions.map((e) => e.slug)).size, 28);
  const entries = getCoreEmotionEntries();
  for (const entry of entries) {
    assert.ok(emotionalHubs[entry.slug], `Missing route: ${entry.slug}`);
    assert.ok(entry.dreams.length, `No related dreams: ${entry.slug}`);
    assert.equal(entry.count, getEmotionDreams(entry.slug).length);
    assert.equal(new Set(entry.dreams.map((d) => d.slug)).size, entry.count);
    assert.ok(entry.dreams.every(isDreamIndexable));
    assert.ok(emotionalHubs[entry.slug].deepInterpretation.length);
    for (const concept of coreEmotionBySlug[entry.slug].concepts) {
      assert.ok(emotionalHubs[concept], `Unknown preserved concept: ${concept}`);
      const combined = new Set(entry.dreams.map((d) => d.slug));
      for (const dream of getEmotionDreams(concept)) assert.ok(combined.has(dream.slug), `${concept} lost ${dream.slug}`);
    }
  }
  for (const slug of ["life-transition", "past-relationships", "letting-go", "fear-of-failure", "detachment", "emotional-healing"]) {
    assert.ok(emotionalHubs[slug]);
    assert.ok(!entries.some((e) => e.slug === slug), `Non-core discovery option: ${slug}`);
  }
  // Exact emotional-state matching must not infer feelings from unrelated prose.
  const joyDream = { slug: "joy-fixture", emotionalStates: ["joy"], emotionalConnections: [] };
  const negatedDream = { slug: "negated-fixture", description: "This is not joy.", emotionalConnections: [] };
  assert.deepEqual(getEmotionDreams("joy", [joyDream, negatedDream]).map((d) => d.slug), ["joy-fixture"]);
  assert.equal(getEmotionDreams("joy", [{ ...joyDream, noindex: true }]).length, 0);
  if (existsSync(baselinePath)) {
    const baseline = JSON.parse(readFileSync(baselinePath, "utf8"));
    for (const dream of dreams) assert.deepEqual(dream.emotionalConnections, baseline.connections[dream.slug], `Changed original connections: ${dream.slug}`);
    for (const [slug, oldDreams] of Object.entries(baseline.hubs)) {
      assert.ok(emotionalHubs[slug], `Lost route: ${slug}`);
      const current = new Set(getEmotionDreams(slug).map((d) => d.slug));
      for (const dream of oldDreams) assert.ok(current.has(dream), `Lost ${slug} association: ${dream}`);
    }
    console.log(`Preserved all ${Object.keys(baseline.hubs).length} original routes and dream relationships.`);
  }
  if (process.argv.includes("--built")) {
    const builtRoot = new URL(".next/server/app/", root);
    const landing = readFileSync(new URL("emotions.html", builtRoot), "utf8").replace(/<!--.*?-->/gs, "");
    assert.ok(landing.includes("How did your dream make you feel?"));
    const mainChoices = landing.split('<section id="dream-themes"')[0];
    const choices = [...mainChoices.matchAll(/href="\/emotions\/([^"#]+)"/g)].map((match) => match[1]);
    assert.deepEqual([...choices].sort(), coreEmotions.map((e) => e.slug).sort());
    assert.ok(landing.includes("<details"));
    for (const [slug] of Object.entries(emotionalHubs)) {
      const html = readFileSync(new URL(`emotions/${slug}.html`, builtRoot), "utf8").replace(/<!--.*?-->/gs, "");
      assert.ok(html.includes(`rel="canonical" href="https://www.dreamscriptures.com/emotions/${slug}"`), `Canonical: ${slug}`);
      const count = getEmotionDreams(slug).length;
      if (count) assert.ok(html.includes(`Explore ${count} related ${count === 1 ? "dream" : "dreams"}`), `Rendered count: ${slug}`);
      if (coreEmotionBySlug[slug]) assert.ok(html.replaceAll("&#x27;", "'").replaceAll("&quot;", '"').replaceAll("&amp;", "&").includes(coreEmotionBySlug[slug].detail), `Core description: ${slug}`);
      else assert.ok(html.includes("Dream theme and experience"), `Theme label: ${slug}`);
    }
    const sitemap = readFileSync(new URL("sitemap.xml.body", builtRoot), "utf8");
    for (const slug of Object.keys(emotionalHubs)) assert.ok(sitemap.includes(`/emotions/${slug}</loc>`), `Sitemap: ${slug}`);
    console.log(`Verified generated HTML for all ${Object.keys(emotionalHubs).length} emotion routes, 28 landing choices, counts, canonicals, and sitemap.`);
  }
  console.table(entries.map(({ slug, count }) => ({ slug, count })));
  console.log("PASS: 28 core emotions, valid routes, deduplicated counts, consolidated associations, exact matching, and indexability.");
}
