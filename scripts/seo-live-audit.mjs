import { writeFile } from "node:fs/promises";

const productionOrigin = "https://www.dreamscriptures.com";
const local = process.argv.includes("--local");
const origin = local ? "http://localhost:3009" : productionOrigin;
const sitemapResponse = await fetch(`${origin}/sitemap.xml`, {
  headers: { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125.0.0.0 Safari/537.36" },
  signal: AbortSignal.timeout(20000),
});
if (!sitemapResponse.ok) throw new Error(`Sitemap responded ${sitemapResponse.status}`);
const sitemapXml = await sitemapResponse.text();
const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) =>
  match[1].replaceAll("&amp;", "&").replace(productionOrigin, origin)
);
const sitemapSet = new Set(sitemapUrls);
const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36";

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"))?.[1] || "";
}

function metadata(html) {
  const tags = html.match(/<(?:meta|link)\b[^>]*>/gi) || [];
  const meta = (name) => {
    const tag = tags.find((item) => attribute(item, "property") === name || attribute(item, "name") === name);
    return tag ? attribute(tag, "content") : "";
  };
  const canonicalTag = tags.find((tag) => /^link\b/i.test(tag.slice(1)) && attribute(tag, "rel") === "canonical");
  const title = html.match(/<title>(.*?)<\/title>/i)?.[1] || "";
  const links = [...html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi)].map((match) => match[1]);
  return {
    title,
    canonical: canonicalTag ? attribute(canonicalTag, "href") : "",
    ogTitle: meta("og:title"),
    ogDescription: meta("og:description"),
    ogUrl: meta("og:url"),
    ogType: meta("og:type"),
    ogImage: meta("og:image"),
    description: meta("description"),
    robots: meta("robots"),
    links,
  };
}

async function inspect(url) {
  try {
    const response = await fetch(url, {
      redirect: "manual",
      headers: { "user-agent": userAgent, referer: origin + "/" },
      signal: AbortSignal.timeout(20000),
    });
    const html = response.headers.get("content-type")?.includes("text/html") ? await response.text() : "";
    return { url, status: response.status, location: response.headers.get("location"), ...(html ? metadata(html) : {}) };
  } catch (error) {
    return { url, status: 0, error: String(error) };
  }
}

async function pool(urls, concurrency = 12) {
  const results = new Array(urls.length);
  let next = 0;
  await Promise.all(Array.from({ length: concurrency }, async () => {
    while (next < urls.length) {
      const index = next++;
      results[index] = await inspect(urls[index]);
      if (index % 100 === 0) process.stderr.write(`Checked ${index + 1}/${urls.length}\n`);
    }
  }));
  return results;
}

const pages = await pool(sitemapUrls);
const linked = new Map();
for (const page of pages) {
  if (page.status !== 200) continue;
  for (const href of page.links || []) {
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    let target;
    try { target = new URL(href.replaceAll("&amp;", "&"), page.url); } catch { continue; }
    if (target.origin !== origin && target.origin !== productionOrigin) continue;
    if (local && target.origin === productionOrigin) target = new URL(target.pathname + target.search + target.hash, origin);
    target.hash = "";
    target.search = "";
    if (target.pathname.startsWith("/api/") || target.pathname.startsWith("/admin/") || target.pathname.startsWith("/cdn-cgi/") || /\.[a-z0-9]+$/i.test(target.pathname)) continue;
    const key = target.toString();
    const entry = linked.get(key) || { count: 0, sources: [] };
    entry.count++;
    if (entry.sources.length < 5) entry.sources.push(page.url);
    linked.set(key, entry);
  }
}

const extraUrls = [...linked.keys()].filter((url) => !sitemapSet.has(url));
const extraPages = await pool(extraUrls);
const report = {
  sitemapUrls: sitemapUrls.length,
  pages: pages.map(({ links, ...page }) => page),
  extraPages: extraPages.map(({ links, ...page }) => ({ ...page, linkCount: linked.get(page.url)?.count || 0, sources: linked.get(page.url)?.sources || [] })),
  incoming: Object.fromEntries(linked),
};
await writeFile(local ? ".seo-built-report.json" : ".seo-live-report.json", JSON.stringify(report, null, 2));
const invalid = report.pages.filter((page) => page.status !== 200 || page.canonical && page.canonical !== page.url.replace(origin, productionOrigin) || page.ogUrl && page.ogUrl !== page.canonical || /noindex/i.test(page.robots || ""));
const broken = report.extraPages.filter((page) => page.status >= 400 || page.status === 0);
process.stdout.write(JSON.stringify({ sitemap: sitemapUrls.length, invalidSitemap: invalid, brokenLinked: broken }, null, 2) + "\n");
if (local && (invalid.length > 0 || broken.length > 0)) process.exitCode = 1;
