"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { productKeyFromPath } from "@/lib/routes";

export function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);

    const product = productKeyFromPath(pathname);
    document.querySelectorAll<HTMLElement>("[data-pindex]").forEach((el) => {
      const on = product !== null && el.getAttribute("data-pindex") === product;
      el.style.borderColor = on ? "#16161A" : "#C6C9BF";
      el.style.color = on ? "#16161A" : "#3C403A";
      el.style.background = on ? "#E1E3DC" : "none";
      if (on) el.setAttribute("aria-current", "page");
      else el.removeAttribute("aria-current");
    });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scope = document.getElementById("main");
    if (!scope) return;

    const items = Array.from(
      scope.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (reduce) {
      items.forEach((el) => {
        el.style.opacity = "";
        el.style.animation = "none";
      });
      return;
    }

    items.forEach((el) => {
      el.style.animation = "none";
      el.style.opacity = "";
    });

    const play = (el: HTMLElement, i: number) => {
      el.style.opacity = "";
      el.style.animation = "rise .5s cubic-bezier(.2,.7,.2,1) both";
      el.style.animationDelay = `${Math.min(i, 5) * 0.05}s`;
    };

    const vh = window.innerHeight;
    const above = items.filter(
      (el) => el.getBoundingClientRect().top < vh * 0.95
    );
    above.forEach(play);
    const rest = items.filter((el) => !above.includes(el));
    rest.forEach((el) => {
      el.style.opacity = "0";
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            play(e.target as HTMLElement, i);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    rest.forEach((el) => io.observe(el));

    const failsafe = window.setTimeout(() => {
      rest.forEach((el) => {
        el.style.opacity = "";
      });
    }, 3000);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
