export function isDreamIndexable(dream = {}) {
  const status = String(dream.status || dream.seoStatus || "").toLowerCase();

  if (dream.noindex === true) return false;
  if (dream.isIndexed === false) return false;
  if (dream.index === false) return false;
  if (dream.robots?.index === false) return false;

  return !["draft", "merged", "noindex", "thin"].includes(status);
}

export function getDreamRobots(dream = {}) {
  if (!dream || isDreamIndexable(dream)) {
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
  return (
    dream.canonicalSlug ||
    dream.mergedInto ||
    dream.redirectTo ||
    dream.slug ||
    dream.title ||
    fallbackSlug
  );
}
