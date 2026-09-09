import type { MotionInstance } from "./obecco-motion.d";

let motionLoad: Promise<void> | null = null;

export function loadMotionScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.ObeccoMotion) return Promise.resolve();
  if (!motionLoad) {
    motionLoad = import("./obecco-motion.js").then(() => undefined);
  }
  return motionLoad;
}

export function q<T extends Element>(
  sel: string,
  root?: ParentNode | null
): T | null {
  return (root ?? document).querySelector(sel) as T | null;
}

export function bootMotion(root?: ParentNode | null): MotionInstance | null {
  if (typeof window === "undefined" || !window.ObeccoMotion) return null;
  return window.ObeccoMotion.boot((root as Element) ?? document);
}
