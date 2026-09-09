"use client";

import { FormEvent, useState } from "react";
import { s } from "@/lib/style";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form
      data-reveal=""
      onSubmit={onSubmit}
      style={s(
        "flex:1 1 400px;min-width:280px;display:flex;flex-direction:column;gap:14px;background:#F5F5F1;border:1px solid #D4D6CD;border-radius:16px;padding:clamp(20px,2.5vw,30px)"
      )}
    >
      <label style={s("display:flex;flex-direction:column;gap:7px")}>
        <span
          style={s(
            "font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.07em;text-transform:uppercase;color:#5C6058"
          )}
        >
          Name
        </span>
        <input
          type="text"
          required
          placeholder="Your name"
          className="dc-focus-6a06b3"
          style={s(
            "font-family:Newsreader,Georgia,serif;font-size:17px;color:#16161A;background:#FDFDFB;border:1px solid #C6C9BF;border-radius:6px;padding:11px 13px;outline:none;width:100%"
          )}
        />
      </label>
      <label style={s("display:flex;flex-direction:column;gap:7px")}>
        <span
          style={s(
            "font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.07em;text-transform:uppercase;color:#5C6058"
          )}
        >
          Email
        </span>
        <input
          type="email"
          required
          placeholder="you@example.com"
          className="dc-focus-6a06b3"
          style={s(
            "font-family:Newsreader,Georgia,serif;font-size:17px;color:#16161A;background:#FDFDFB;border:1px solid #C6C9BF;border-radius:6px;padding:11px 13px;outline:none;width:100%"
          )}
        />
      </label>
      <label style={s("display:flex;flex-direction:column;gap:7px")}>
        <span
          style={s(
            "font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.07em;text-transform:uppercase;color:#5C6058"
          )}
        >
          Reason for contacting
        </span>
        <select
          className="dc-focus-6a06b3"
          style={s(
            "font-family:Newsreader,Georgia,serif;font-size:17px;color:#16161A;background:#FDFDFB;border:1px solid #C6C9BF;border-radius:6px;padding:11px 13px;outline:none;width:100%"
          )}
        >
          <option>Product question or bug</option>
          <option>Partnership</option>
          <option>Investment</option>
          <option>Press</option>
          <option>Building with Obecco</option>
          <option>Something else</option>
        </select>
      </label>
      <label style={s("display:flex;flex-direction:column;gap:7px")}>
        <span
          style={s(
            "font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.07em;text-transform:uppercase;color:#5C6058"
          )}
        >
          Message
        </span>
        <textarea
          rows={5}
          required
          placeholder="What can we help with?"
          className="dc-focus-6a06b3"
          style={s(
            "font-family:Newsreader,Georgia,serif;font-size:17px;color:#16161A;background:#FDFDFB;border:1px solid #C6C9BF;border-radius:6px;padding:11px 13px;outline:none;resize:vertical;width:100%"
          )}
        />
      </label>
      <button
        type="submit"
        className="dc-hover-bea3a5"
        style={s(
          "align-self:flex-start;background:#16161A;color:#F5F5F1;font-family:'IBM Plex Mono',monospace;font-size:12.5px;letter-spacing:0.07em;text-transform:uppercase;border:none;border-radius:6px;padding:14px 22px;cursor:pointer;transition:background .18s ease,transform .18s ease"
        )}
      >
        Send message
      </button>
      {sent ? (
        <p
          role="status"
          style={s(
            "margin:4px 0 0;border:1px solid #B5CFC3;border-radius:6px;background:#EBF3EF;padding:14px 16px;color:#16161A;font-size:16.5px"
          )}
        >
          Thanks for reaching out. This form does not send directly yet. Please
          email us at{" "}
          <a
            href="mailto:hello@obecco.com"
            className="dc-hover-1a52d8"
            style={s("color:#2F6B57;border-bottom:1px solid #B5CFC3")}
          >
            hello@obecco.com
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
