export function isDreamIndexable(dream = {}) {
  const status = String(dream.status || dream.seoStatus || "").toLowerCase();

  if (dream.noindex === true) return false;
  if (dream.isIndexed === false) return false;
  if (dream.index === false) return false;
  if (dream.robots?.index === false) return false;

  return !["draft", "merged", "noindex", "thin"].includes(status);
}

export function getDreamRobots(dream = {}) {
  if (!dream) {
    return {
      index: false,
      follow: true,
    };
  }

  if (isDreamIndexable(dream)) {
    return {
      index: true,
      follow: true,
    };
  }

  return {
    index: false,
    follow: true,
  };
}

export function getCanonicalDreamSlug(dream = {}, fallbackSlug = "") {
  const resolvedDream = dream || {};
  return (
    resolvedDream.canonicalSlug ||
    resolvedDream.mergedInto ||
    resolvedDream.redirectTo ||
    resolvedDream.slug ||
    resolvedDream.title ||
    fallbackSlug
  );
}

export function getCanonicalDreamPath(dream = {}, fallbackSlug = "") {
  const resolvedDream = dream || {};
  if (resolvedDream.canonicalPath) return resolvedDream.canonicalPath;
  return `/dreams/${getCanonicalDreamSlug(resolvedDream, fallbackSlug)}`;
}

const SITE_URL = "https://www.dreamscriptures.com";
const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: "DreamScriptures",
};

export function createPageMetadata({ title, description, path, type = "website", ogTitle, ogDescription, image = DEFAULT_OG_IMAGE }) {
  const canonicalUrl = path === "/" ? SITE_URL : new URL(path, SITE_URL).toString();
  const socialTitle = ogTitle || (typeof title === "string" ? title : title?.absolute) || "DreamScriptures";
  const socialDescription = ogDescription || description;

  return {
    title: typeof title === "string" && title.includes("DreamScriptures")
      ? { absolute: title }
      : title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url: canonicalUrl,
      siteName: "DreamScriptures",
      type,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [image.url],
    },
  };
}
