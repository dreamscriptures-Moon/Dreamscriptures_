const NATIVE_BANNER_ROUTES = new Set([
  "/",
  "/about",
  "/author",
  "/categories",
  "/dream-compass",
  "/dreams",
  "/editorial-standards",
  "/emotions",
  "/faq",
  "/guides",
  "/methodology",
]);

export function supportsNativeBannerAdvertising(pathname = "") {
  return (
    NATIVE_BANNER_ROUTES.has(pathname) ||
    pathname.startsWith("/categories/") ||
    pathname.startsWith("/dreams/") ||
    pathname.startsWith("/emotions/") ||
    pathname.startsWith("/guides/")
  );
}
