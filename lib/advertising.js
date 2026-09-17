const AD_FREE_ROUTES = new Set([
  "/contact",
  "/disclaimer",
  "/privacy",
  "/terms",
]);

export function isAdFreeRoute(pathname = "") {
  const normalizedPath = pathname.length > 1
    ? pathname.replace(/\/+$/, "")
    : pathname;

  return (
    AD_FREE_ROUTES.has(normalizedPath) ||
    normalizedPath === "/admin" ||
    normalizedPath.startsWith("/admin/")
  );
}
