"use client";

import { useEffect } from "react";
import "@/lib/obecco-motion.js";
import { bootMotion } from "@/lib/motion-utils";

export function PageMotion() {
  useEffect(() => {
    let m = bootMotion(document.querySelector("[data-ref='root']"));
    let t: ReturnType<typeof setTimeout> | undefined;
    const start = () => {
      if (!window.ObeccoMotion) {
        t = setTimeout(start, 40);
        return;
      }
      m = bootMotion(document.querySelector("[data-ref='root']"));
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
