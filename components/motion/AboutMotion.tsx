"use client";

import { useEffect } from "react";
import "@/lib/obecco-motion.js";
import { q } from "@/lib/motion-utils";
import type { MotionInstance } from "@/lib/obecco-motion.d";

export function AboutMotion() {
  useEffect(() => {
    let m: MotionInstance | null = null;
    let t: ReturnType<typeof setTimeout> | undefined;

    const start = () => {
      if (!window.ObeccoMotion) {
        t = setTimeout(start, 40);
        return;
      }
      const OM = window.ObeccoMotion!;
      m = OM.boot(q("[data-ref='root']") ?? document);

      const items = ["pr1", "pr2", "pr3", "pr4"].map((id) =>
        q<HTMLElement>(`[data-ref='${id}']`)
      );
      const prinStage = q<HTMLElement>("[data-ref='prinStage']");
      const prinBar = q<HTMLElement>("[data-ref='prinBar']");
      const prinNum = q<HTMLElement>("[data-ref='prinNum']");

      if (!OM.reduced() && prinStage) {
        m.progress(prinStage, (p) => {
          const idx = Math.min(3, Math.floor(p * 4.0001));
          items.forEach((el, i) => {
            if (!el) return;
            const on = i === idx;
            el.style.opacity = on ? "1" : "0.24";
            el.style.transform = on ? "none" : "translate3d(0,6px,0)";
            (el as HTMLElement).style.borderLeftColor = on
              ? "var(--color-accent)"
              : "var(--color-divider)";
          });
          if (prinBar) prinBar.style.width = `${(p * 100).toFixed(1)}%`;
          if (prinNum) prinNum.textContent = `0${idx + 1} / 04`;
        }, "sticky");
      }

      m.sync();
    };

    start();
    return () => {
      if (t) clearTimeout(t);
      m?.destroy();
    };
  }, []);

  return null;
}
