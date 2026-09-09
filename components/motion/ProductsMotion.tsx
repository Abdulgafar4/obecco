"use client";

import { useEffect } from "react";
import "@/lib/obecco-motion.js";
import { bootMotion, q } from "@/lib/motion-utils";
import type { MotionInstance } from "@/lib/obecco-motion.d";

export function ProductsMotion() {
  useEffect(() => {
    let m: MotionInstance | null = null;
    let t: ReturnType<typeof setTimeout> | undefined;

    const start = () => {
      if (!window.ObeccoMotion) {
        t = setTimeout(start, 40);
        return;
      }
      m = bootMotion(q("[data-ref='root']") ?? document);
      const cmBar = q<HTMLElement>("[data-ref='cmBar']");
      if (cmBar) {
        m?.once(cmBar, () => {
          cmBar.style.width = "62%";
        });
      }
      m?.sync();
    };

    start();
    return () => {
      if (t) clearTimeout(t);
      m?.destroy();
    };
  }, []);

  return null;
}
