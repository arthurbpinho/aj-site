// Resolves an absolute asset path against Vite's BASE_URL so it works
// both in dev ('/') and on GitHub Pages project pages ('/aj-site/').
export function asset(path) {
  const base = import.meta.env.BASE_URL || "/";
  if (!path) return base;
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return base + clean;
}
