const FOOTER_AD_ROUTES = new Set([
  "/",
  "/about",
  "/author",
  "/categories",
  "/editorial-standards",
  "/emotions",
  "/guides",
  "/methodology",
]);

export function supportsFooterAdvertising(pathname = "") {
  return (
    FOOTER_AD_ROUTES.has(pathname) ||
    pathname.startsWith("/categories/")
  );
}
