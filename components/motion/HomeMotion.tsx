"use client";

import { useEffect } from "react";
import "@/lib/obecco-motion.js";
import { q } from "@/lib/motion-utils";
import type { HeroFieldInstance, MotionInstance } from "@/lib/obecco-motion.d";

export function HomeMotion() {
  useEffect(() => {
    let m: MotionInstance | null = null;
    let field: HeroFieldInstance | null = null;
    let t: ReturnType<typeof setTimeout> | undefined;

    const start = () => {
      if (!window.ObeccoMotion) {
        t = setTimeout(start, 40);
        return;
      }
      const OM = window.ObeccoMotion!;
      const root = q("[data-ref='root']");
      const reduced = OM.reduced();
      m = OM.boot(root ?? document);

      const mobile = window.matchMedia("(max-width: 900px)").matches;
      /* Mobile: cover-scale so the field reads as a full-bleed section bg. */
      field = OM.heroField(q<HTMLCanvasElement>("[data-ref='canvas']"), {
        scale: mobile ? 2.35 : 0.78,
        cx: mobile ? 0.5 : 0.68,
        cy: mobile ? 0.5 : 0.42,
        alpha: mobile ? 2.8 : 1,
      });

      const hero = q<HTMLElement>("[data-ref='hero']");
      const canvasWrap = q<HTMLElement>("[data-ref='canvasWrap']");
      const heroInner = q<HTMLElement>("[data-ref='heroInner']");

      if (hero) {
        m.progress(hero, (p) => {
          field?.setDepth(p * 210);
          /* Keep mobile bg locked; desktop keeps the parallax drift. */
          if (canvasWrap && !reduced && !mobile) {
            canvasWrap.style.transform = `translate3d(0,${(p * 70).toFixed(1)}px,0) scale(${(1 + p * 0.07).toFixed(3)})`;
          }
          if (heroInner && !reduced) {
            heroInner.style.opacity = String(Math.max(0, 1 - p * 1.35));
            heroInner.style.transform = `translate3d(0,${(p * -80).toFixed(1)}px,0)`;
          }
        }, "exit");
      }

      const lines = ["p1", "p2", "p3"].map((id) =>
        q<HTMLElement>(`[data-ref='${id}']`)
      );
      const philStage = q<HTMLElement>("[data-ref='philStage']");
      const philRail = q<HTMLElement>("[data-ref='philRail']");

      if (philStage) {
        m.progress(philStage, (p) => {
          if (philRail) philRail.style.height = `${(p * 100).toFixed(1)}%`;
          const idx = p < 0.3 ? 0 : p < 0.62 ? 1 : 2;
          lines.forEach((el, i) => {
            if (!el) return;
            const on = i === idx;
            el.style.opacity = on ? "1" : i < idx ? "0.16" : "0.13";
            el.style.transform = on
              ? "none"
              : `translate3d(0,${i < idx ? -10 : 14}px,0)`;
          });
        }, "sticky");
      }

      const procStage = q<HTMLElement>("[data-ref='procStage']");
      const procSticky = q<HTMLElement>("[data-ref='procSticky']");
      const procTrack = q<HTMLElement>("[data-ref='procTrack']");
      const procBar = q<HTMLElement>("[data-ref='procBar']");

      if (procStage && procTrack) {
        if (reduced) {
          procTrack.style.flexWrap = "wrap";
          procStage.style.height = "auto";
          if (procSticky) {
            procSticky.style.position = "static";
            procSticky.style.height = "auto";
            procSticky.style.padding = "90px 0";
          }
        } else {
          m.progress(procStage, (p) => {
            const over = Math.max(0, procTrack.scrollWidth - procTrack.clientWidth);
            procTrack.style.transform = `translate3d(${(-over * p).toFixed(1)}px,0,0)`;
            if (procBar) procBar.style.width = `${(p * 100).toFixed(1)}%`;
          }, "sticky");
        }
      }

      const cmBar = q<HTMLElement>("[data-ref='cmBar']");
      if (cmBar) {
        m.once(cmBar, () => {
          cmBar.style.width = "62%";
        });
      }

      m.sync();
    };

    start();
    return () => {
      if (t) clearTimeout(t);
      m?.destroy();
      field?.destroy();
    };
  }, []);

  return null;
}
