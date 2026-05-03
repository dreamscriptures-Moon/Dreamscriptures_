import { dreams } from "@/data/dream";

export default function sitemap() {
  const baseUrl = "https://www.dreamscriptures.com";

  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-04-01"),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/dreams`,
      lastModified: new Date("2026-04-01"),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date("2026-04-01"),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-04-01"),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date("2026-04-01"),
      priority: 0.7,
    },
  ];

  const dreamPages = dreams.map((dream) => ({
    url: `${baseUrl}/dreams/${dream.slug}`,
    lastModified: dream.updatedAt
      ? new Date(dream.updatedAt)
      : new Date("2026-05-03"),
    priority: 0.7,
  }));

  return [...staticPages, ...dreamPages];
}