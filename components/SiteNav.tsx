"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { s } from "@/lib/style";

const links = [
  { href: "/services", key: "services", label: "Services" },
  { href: "/products", key: "products", label: "Products" },
  { href: "/about", key: "about", label: "About" },
] as const;

export function SiteNav() {
  const pathname = usePathname();
  const active =
    pathname === "/"
      ? "home"
      : pathname.startsWith("/contact")
        ? "contact"
        : pathname.replace(/^\//, "").split("/")[0];

  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const b1Ref = useRef<HTMLSpanElement>(null);
  const b2Ref = useRef<HTMLSpanElement>(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 24;
      const bar = barRef.current;
      const inner = innerRef.current;
      if (!bar || !inner) return;
      bar.style.background = scrolled
        ? "color-mix(in srgb, var(--color-bg) 88%, transparent)"
        : "transparent";
      bar.style.backdropFilter = scrolled ? "saturate(140%) blur(14px)" : "none";
      bar.style.borderBottomColor = scrolled
        ? "var(--color-divider)"
        : "transparent";
      inner.style.height = scrolled ? "62px" : "78px";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const apply = () => {
      const mobile = mq.matches;
      const linksEl = barRef.current?.querySelector("[data-nav-links]");
      const cta = barRef.current?.querySelector("[data-nav-cta]");
      const burger = barRef.current?.querySelector("[data-nav-burger]");
      if (linksEl instanceof HTMLElement)
        linksEl.style.display = mobile ? "none" : "flex";
      if (cta instanceof HTMLElement)
        cta.style.display = mobile ? "none" : "inline-flex";
      if (burger instanceof HTMLElement)
        burger.style.display = mobile ? "flex" : "none";
      if (!mobile) setOpen(false);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    const mobile = window.matchMedia("(max-width: 900px)").matches;
    if (panel) panel.style.display = open && mobile ? "flex" : "none";
    if (b1Ref.current)
      b1Ref.current.style.transform = open
        ? "translateY(3.5px) rotate(45deg)"
        : "none";
    if (b2Ref.current)
      b2Ref.current.style.transform = open
        ? "translateY(-3.5px) rotate(-45deg)"
        : "none";
  }, [open]);

  return (
    <header
      ref={barRef}
      style={s(
        "position:fixed;top:0;left:0;right:0;z-index:400;background:transparent;border-bottom:1px solid transparent;transition:background 500ms cubic-bezier(.19,1,.22,1), border-color 500ms cubic-bezier(.19,1,.22,1), backdrop-filter 500ms;font-family:var(--font-body);"
      )}
    >
      <div
        ref={innerRef}
        style={s(
          "max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);height:78px;display:flex;align-items:center;gap:clamp(20px,3vw,44px);transition:height 500ms cubic-bezier(.19,1,.22,1);"
        )}
      >
        <Link
          href="/"
          onClick={closeMenu}
          style={s(
            "display:flex;align-items:baseline;gap:9px;text-decoration:none;color:var(--color-text);margin-right:auto;"
          )}
        >
          <span
            style={s(
              "font-family:var(--font-heading);font-weight:600;font-size:20px;letter-spacing:0.26em;text-transform:uppercase;line-height:1;"
            )}
          >
            Obecco
          </span>
          <span
            style={s(
              "width:5px;height:5px;background:var(--color-accent);display:block;transform:translateY(-1px);"
            )}
          />
        </Link>

        <nav
          data-nav-links=""
          style={s(
            "display:flex;align-items:center;gap:clamp(18px,2.4vw,38px);"
          )}
        >
          {links.map((item) => {
            const on = active === item.key;
            return (
              <Link
                key={item.key}
                href={item.href}
                data-page={item.key}
                style={{
                  ...s(
                    "text-decoration:none;font-size:13.5px;letter-spacing:0.10em;text-transform:uppercase;padding:6px 0;border-bottom:1px solid transparent;transition:color 260ms, border-color 260ms;"
                  ),
                  color: on ? "var(--color-accent-700)" : "var(--color-text)",
                  borderBottomColor: on ? "var(--color-accent)" : "transparent",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          data-nav-cta=""
          data-magnet="10"
          style={s(
            "position:relative;display:inline-flex;align-items:center;gap:10px;text-decoration:none;color:var(--color-bg);background:var(--color-accent);border:1px solid var(--color-accent);padding:11px 20px;font-family:var(--font-heading);font-weight:600;font-size:13.5px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;transition:background 260ms;"
          )}
          className="oh-nav-cta"
        >
          Start a project
          <span
            style={s("display:block;width:14px;height:1px;background:currentColor;")}
          />
        </Link>

        <button
          type="button"
          data-nav-burger=""
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          style={s(
            "display:none;flex-direction:column;justify-content:center;gap:6px;width:44px;height:44px;padding:0;background:transparent;border:1px solid var(--color-divider);cursor:pointer;"
          )}
        >
          <span
            ref={b1Ref}
            style={s(
              "display:block;width:20px;height:1px;background:var(--color-text);margin:0 auto;transition:transform 380ms cubic-bezier(.19,1,.22,1);"
            )}
          />
          <span
            ref={b2Ref}
            style={s(
              "display:block;width:20px;height:1px;background:var(--color-text);margin:0 auto;transition:transform 380ms cubic-bezier(.19,1,.22,1);"
            )}
          />
        </button>
      </div>

      <div
        ref={panelRef}
        style={s(
          "display:none;flex-direction:column;gap:2px;padding:clamp(24px,6vw,44px) clamp(20px,3.6vw,56px) 40px;background:var(--color-bg);border-top:1px solid var(--color-divider);"
        )}
      >
        {links.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            onClick={closeMenu}
            style={s(
              "text-decoration:none;color:var(--color-text);font-family:var(--font-heading);font-weight:600;font-size:clamp(34px,10vw,52px);letter-spacing:-0.02em;line-height:1.16;border-bottom:1px solid var(--color-divider);padding:10px 0;"
            )}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={closeMenu}
          style={s(
            "text-decoration:none;color:var(--color-accent-700);font-family:var(--font-heading);font-weight:600;font-size:clamp(34px,10vw,52px);letter-spacing:-0.02em;line-height:1.16;padding:10px 0;"
          )}
        >
          Start a project
        </Link>
        <span
          style={s(
            "margin-top:18px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:color-mix(in srgb, var(--color-text) 50%, transparent);"
          )}
        >
          hello@obecco.com
        </span>
      </div>
    </header>
  );
}
