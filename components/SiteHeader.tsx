"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { s } from "@/lib/style";
import { navKeyFromPath } from "@/lib/routes";

const primaryLinks = [
  { href: "/", key: "home", label: "Home" },
  { href: "/products", key: "products", label: "Products" },
  { href: "/about", key: "about", label: "About" },
  { href: "/contact", key: "contact", label: "Contact" },
] as const;

const productLinks = [
  { href: "/toolferry", label: "01 \u00a0ToolFerry" },
  { href: "/lien", label: "02 \u00a0Lien" },
  { href: "/clevermart", label: "03 \u00a0Clevermart" },
  { href: "/cleverjobs", label: "04 \u00a0CleverJobs" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const active = navKeyFromPath(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={s(
        "position:sticky;top:0;z-index:40;background:rgba(233,234,229,0.9);backdrop-filter:blur(10px);border-bottom:1px solid #D4D6CD"
      )}
    >
      <div
        style={s(
          "max-width:1240px;margin:0 auto;padding:13px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap"
        )}
      >
        <Link
          href="/"
          onClick={closeMenu}
          style={s(
            "display:flex;align-items:baseline;gap:10px;background:none;border:none;padding:0;cursor:pointer;color:#16161A;text-align:left;text-decoration:none"
          )}
        >
          <span
            style={s(
              "font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:21px;letter-spacing:-0.02em"
            )}
          >
            Obecco
          </span>
          <span
            data-tag=""
            style={s(
              "font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#8A8E86"
            )}
          >
            Software company
          </span>
        </Link>

        <div
          data-desktop-nav=""
          style={s("display:flex;align-items:center;gap:24px")}
        >
          <nav
            aria-label="Primary"
            style={s(
              "display:flex;gap:22px;font-family:'IBM Plex Mono',monospace;font-size:12.5px;letter-spacing:0.06em;text-transform:uppercase"
            )}
          >
            {primaryLinks.map((item) => {
              const on = active === item.key;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className="dc-hover-20b93d"
                  aria-current={on ? "page" : undefined}
                  style={{
                    ...s(
                      "background:none;border:none;padding:3px 0;cursor:pointer;font:inherit;letter-spacing:inherit;text-transform:inherit;text-decoration:none"
                    ),
                    color: on ? "#16161A" : "#4E524C",
                    boxShadow: on ? "inset 0 -1px 0 #16161A" : "none",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/contact"
            className="dc-hover-2ee9b1"
            style={s(
              "background:#2F6B57;color:#F5F5F1;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.07em;text-transform:uppercase;border:none;border-radius:6px;padding:10px 16px;cursor:pointer;transition:background .18s ease,transform .18s ease;text-decoration:none;display:inline-block"
            )}
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          data-hamburger=""
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          style={s(
            "display:none;align-items:center;gap:9px;background:none;border:1px solid #C6C9BF;border-radius:6px;padding:9px 13px;cursor:pointer;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.07em;text-transform:uppercase;color:#16161A"
          )}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span
            aria-hidden={true}
            style={s("display:flex;flex-direction:column;gap:3px")}
          >
            <span
              style={s(
                "width:15px;height:1.5px;background:#16161A;display:block"
              )}
            />
            <span
              style={s(
                "width:15px;height:1.5px;background:#16161A;display:block"
              )}
            />
          </span>
        </button>
      </div>

      <div
        data-mobile-menu=""
        data-open={menuOpen ? "true" : "false"}
        style={s(
          "display:none;flex-direction:column;border-top:1px solid #D4D6CD;background:#F1F2EE;padding:10px 24px 20px"
        )}
      >
        <nav
          aria-label="Mobile"
          style={s(
            "display:flex;flex-direction:column;font-family:'IBM Plex Mono',monospace;font-size:14px;letter-spacing:0.05em;text-transform:uppercase"
          )}
        >
          {primaryLinks.map((item, i) => {
            const on = active === item.key;
            const last = i === primaryLinks.length - 1;
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={closeMenu}
                aria-current={on ? "page" : undefined}
                style={{
                  ...s(
                    "background:none;border:none;padding:14px 0;cursor:pointer;font:inherit;letter-spacing:inherit;text-transform:inherit;text-align:left;text-decoration:none"
                  ),
                  borderBottom: last ? "none" : "1px solid #DFE1DA",
                  color: on ? "#2F6B57" : "#16161A",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div
          style={s(
            "display:flex;flex-direction:column;gap:2px;padding-top:14px;border-top:1px solid #DFE1DA;margin-top:4px"
          )}
        >
          <span
            style={s(
              "font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#9A9E94;padding-bottom:6px"
            )}
          >
            Product index
          </span>
          {productLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              style={s(
                "background:none;border:none;padding:9px 0;cursor:pointer;color:#3C403A;font-family:'IBM Plex Mono',monospace;font-size:12.5px;text-align:left;text-decoration:none"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
