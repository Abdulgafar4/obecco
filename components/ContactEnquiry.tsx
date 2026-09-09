"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { s } from "@/lib/style";

export function ContactEnquiry() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div
      className="blueprint"
      style={s(
        "position:relative;background:var(--color-bg);padding:clamp(24px,3.2vw,48px);"
      )}
    >
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />

      {sent ? (
        <div
          style={s(
            "display:flex;flex-direction:column;gap:18px;min-height:clamp(380px,52vh,560px);justify-content:center;"
          )}
        >
          <span
            style={s("width:12px;height:12px;background:var(--color-accent);")}
          />
          <span
            style={s(
              "font-family:var(--font-heading);font-weight:600;font-size:clamp(28px,3.4vw,52px);line-height:1;letter-spacing:-0.028em;"
            )}
          >
            Message sent.
          </span>
          <span
            style={s(
              "font-size:15.5px;line-height:1.6;color:color-mix(in srgb, var(--color-text) 70%, transparent);max-width:40ch;"
            )}
          >
            Thanks — we have it. You will hear back from a person, not an
            autoresponder, within two working days.
          </span>
          <div
            style={s("display:flex;flex-wrap:wrap;gap:12px;margin-top:6px;")}
          >
            <Link
              href="/products"
              className="oh-contact-products"
              style={s(
                "display:inline-flex;align-items:center;gap:10px;text-decoration:none;color:var(--color-text);border:1px solid var(--color-divider);padding:12px 20px;font-family:var(--font-heading);font-weight:600;font-size:13.5px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;transition:border-color 260ms, color 260ms;"
              )}
            >
              See our products
            </Link>
            <button
              type="button"
              onClick={() => setSent(false)}
              style={s(
                "display:inline-flex;align-items:center;gap:10px;cursor:pointer;color:var(--color-accent-700);background:transparent;border:1px solid transparent;padding:12px 4px;font-family:var(--font-heading);font-weight:600;font-size:13.5px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;"
              )}
            >
              Send another
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          style={s(
            "display:flex;flex-direction:column;gap:clamp(18px,2.6vh,26px);"
          )}
        >
          <div style={s("display:flex;align-items:center;gap:12px;")}>
            <span
              style={s(
                "font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);"
              )}
            >
              Project enquiry
            </span>
            <span
              style={s("flex:1;height:1px;background:var(--color-divider);")}
            />
          </div>
          <div
            style={s(
              "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(200px,100%),1fr));gap:clamp(14px,2vw,22px);"
            )}
          >
            <div className="field">
              <label htmlFor="c-name">Your name</label>
              <input
                className="input"
                id="c-name"
                name="name"
                type="text"
                required
                placeholder="Jane Okonjo"
              />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input
                className="input"
                id="c-email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
              />
            </div>
          </div>
          <div
            style={s(
              "display:grid;grid-template-columns:repeat(auto-fit,minmax(min(200px,100%),1fr));gap:clamp(14px,2vw,22px);"
            )}
          >
            <div className="field">
              <label htmlFor="c-company">Company</label>
              <input
                className="input"
                id="c-company"
                name="company"
                type="text"
                placeholder="Optional"
              />
            </div>
            <div className="field">
              <label htmlFor="c-budget">Budget range</label>
              <select className="input" id="c-budget" name="budget">
                <option>Not sure yet</option>
                <option>Under $10k</option>
                <option>$10k – $30k</option>
                <option>$30k – $75k</option>
                <option>$75k+</option>
                <option>Monthly retainer</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label>What do you need?</label>
            <div
              style={s(
                "display:flex;flex-wrap:wrap;gap:12px 22px;padding-top:4px;"
              )}
            >
              {[
                ["website", "Website"],
                ["application", "Web application"],
                ["product", "Full product build"],
                ["design", "Design / UX"],
                ["commerce", "E-commerce"],
                ["other", "Something else"],
              ].map(([value, label], i) => (
                <label key={value} className="radio">
                  <input
                    type="radio"
                    name="kind"
                    value={value}
                    defaultChecked={i === 0}
                  />
                  <span className="dot" />
                  {label}
                </label>
              ))}
            </div>
          </div>
          <div className="field">
            <label htmlFor="c-timing">Timing</label>
            <select className="input" id="c-timing" name="timing">
              <option>As soon as possible</option>
              <option>Within a month</option>
              <option>This quarter</option>
              <option>Exploring for later</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="c-msg">What are you building?</label>
            <textarea
              className="input"
              id="c-msg"
              name="message"
              rows={5}
              required
              placeholder="The problem, who it is for, and anything already in place."
            />
          </div>
          <div
            style={s(
              "display:flex;flex-wrap:wrap;align-items:center;gap:16px;border-top:1px solid var(--color-divider);padding-top:clamp(16px,2.4vh,24px);"
            )}
          >
            <button
              type="submit"
              data-magnet="10"
              className="oh-contact-submit"
              style={s(
                "display:inline-flex;align-items:center;gap:14px;cursor:pointer;color:var(--color-bg);background:var(--color-accent);border:1px solid var(--color-accent);padding:15px 26px;font-family:var(--font-heading);font-weight:600;font-size:14px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;transition:background 280ms;"
              )}
            >
              Send enquiry
              <span
                style={s("width:16px;height:1px;background:currentColor;")}
              />
            </button>
            <span
              style={s(
                "font-size:13px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 52%, transparent);max-width:32ch;"
              )}
            >
              Or email us directly at{" "}
              <a href="mailto:hello@obecco.com">hello@obecco.com</a>.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
