export const PRODUCT_PRIMARY: Record<string, string> = {
  toolferry: "products",
  lien: "products",
  clevermart: "products",
  cleverjobs: "products",
};

export function navKeyFromPath(pathname: string): string {
  const seg = pathname.replace(/\/$/, "") || "/";
  if (seg === "/") return "home";
  const key = seg.slice(1);
  return PRODUCT_PRIMARY[key] || key;
}

export function productKeyFromPath(pathname: string): string | null {
  const key = pathname.replace(/^\//, "").replace(/\/$/, "");
  if (key in PRODUCT_PRIMARY) return key;
  return null;
}
