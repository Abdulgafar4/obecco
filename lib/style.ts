import type { CSSProperties } from "react";

/** Convert a CSS declaration string to a React style object. */
export function s(css: string): CSSProperties {
  const out: Record<string, string> = {};
  for (const chunk of css.split(";")) {
    const part = chunk.trim();
    if (!part) continue;
    const i = part.indexOf(":");
    if (i === -1) continue;
    const prop = part.slice(0, i).trim();
    const value = part.slice(i + 1).trim();
    if (!prop) continue;
    const camel = prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[camel] = value;
  }
  return out as CSSProperties;
}
