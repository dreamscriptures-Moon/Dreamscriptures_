import { dreams } from "@/data/dream";

export default function sitemap() {
  const baseUrl = "https://www.dreamscriptures.com";

  const staticPages = [
    "",
    "/dreams",
    "/guides",
    "/about",
    "/categories",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const dreamPages = dreams.map((dream) => ({
    url: `${baseUrl}/dreams/${dream.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...dreamPages];
}