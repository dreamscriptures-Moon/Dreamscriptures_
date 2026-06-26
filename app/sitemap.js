import { dreams } from "@/data/dreams";
import { emotionalHubs } from "@/data/emotionalHubs";
import { getClusterGuides } from "@/lib/clusterGuides";
import { getAuthorityPriority } from "@/lib/emotions/authority";
import { normalizeSlug } from "@/lib/normalizeSlug";
import { isDreamIndexable } from "@/lib/seo";

export default function sitemap() {
  const baseUrl = "https://www.dreamscriptures.com";
  const now = new Date();

  /* -----------------------------
     Static Pages
  ----------------------------- */

  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/dreams`,
      lastModified: now,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: now,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/emotions`,
      lastModified: now,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: now,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/editorial-standards`,
      lastModified: now,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: now,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      priority: 0.4,
    },
  ];

  /* -----------------------------
     Dream Library Guides
  ----------------------------- */

  const staticGuidePages = [
    {
      url: `${baseUrl}/guides/basics`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/interpretation`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/history-culture`,
      lastModified: now,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/psychology`,
      lastModified: now,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/science`,
      lastModified: now,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/research`,
      lastModified: now,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/spirituality`,
      lastModified: now,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/wellness`,
      lastModified: now,
      priority: 0.75,
    },
  ];

  /* -----------------------------
     Generated Cluster Guides
  ----------------------------- */

  const clusterGuidePages = getClusterGuides().map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: now,
    priority: 0.75,
  }));

  /* -----------------------------
     Dream Pages
  ----------------------------- */

  const indexedDreams = dreams.filter(isDreamIndexable);

  const dreamPages = indexedDreams.map((dream) => ({
    url: `${baseUrl}/dreams/${normalizeSlug(dream.slug || dream.title)}`,
    lastModified: dream.updatedAt
      ? new Date(dream.updatedAt)
      : now,
    priority: getAuthorityPriority(dream),
  }));

  /* -----------------------------
     Category Pages
  ----------------------------- */

  const categories = [
    ...new Set(
      indexedDreams.flatMap(
        (dream) => dream.categories || []
      )
    ),
  ];

  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/categories/${normalizeSlug(category)}`,
    lastModified: now,
    priority: 0.8,
  }));

  /* -----------------------------
     Emotion Pages
  ----------------------------- */

  const emotionPages = Object.keys(emotionalHubs).map((slug) => ({
    url: `${baseUrl}/emotions/${slug}`,
    lastModified: now,
    priority: 0.85,
  }));

  /* -----------------------------
     Sitemap
  ----------------------------- */

  return [
    ...staticPages,
    ...staticGuidePages,
    ...emotionPages,
    ...categoryPages,
    ...clusterGuidePages,
    ...dreamPages,
  ];
}