import { s } from "@/lib/style";
import { ContactForm } from "@/components/ContactForm";

export function ContactPage() {
  return (
    <>
      <section
        style={s(
          "max-width:1240px;margin:0 auto;padding:clamp(44px,6vw,96px) 24px clamp(32px,4vw,52px)"
        )}
      >
        <div
          style={s(
            "display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start"
          )}
        >
          <div
            data-reveal=""
            style={s(
              "flex:0 0 116px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.08em;color:#8A8E86;text-transform:uppercase;padding-top:12px"
            )}
          >
            <div style={s("color:#16161A")}>Contact</div>
            <div>One inbox</div>
          </div>
          <div style={s("flex:1 1 480px;min-width:0")}>
            <h1
              data-reveal=""
              style={s(
                "margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:clamp(34px,4.8vw,64px);line-height:1;letter-spacing:-0.035em"
              )}
            >
              Let&apos;s talk.
            </h1>
            <p
              data-reveal=""
              style={s(
                "margin:22px 0 0;max-width:56ch;font-size:20px;color:#3C403A"
              )}
            >
              Clients, people looking for work, and people who want to
              collaborate — start here. Say which of those you are and what you
              want to make.
            </p>
            <a
              className="dc-hover-1a52d8"
              href="mailto:hello@obecco.com"
              data-reveal=""
              style={s(
                "display:inline-block;margin-top:22px;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:clamp(20px,2.2vw,28px);letter-spacing:-0.02em;color:#2F6B57;border-bottom:1px solid #B5CFC3;padding-bottom:2px"
              )}
            >
              hello@obecco.com
            </a>
          </div>
        </div>
      </section>

      <section
        style={s(
          "max-width:1240px;margin:0 auto;padding:0 24px clamp(48px,6vw,88px)"
        )}
      >
        <div
          style={s(
            "display:flex;gap:clamp(24px,3.5vw,48px);flex-wrap:wrap;align-items:flex-start"
          )}
        >
          <div
            data-reveal=""
            style={s(
              "flex:1 1 360px;min-width:0;display:flex;flex-direction:column;gap:0;border-top:1px solid #D4D6CD"
            )}
          >
            <div
              style={s(
                "display:flex;gap:16px;padding:18px 0;border-bottom:1px solid #DFE1DA"
              )}
            >
              <span
                style={s(
                  "flex:0 0 96px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#9A9E94;padding-top:4px"
                )}
              >
                Clients
              </span>
              <p style={s("margin:0;color:#3C403A;font-size:17px")}>
                New work. Tell us what you need built and where you are in the
                process.
              </p>
            </div>
            <div
              style={s(
                "display:flex;gap:16px;padding:18px 0;border-bottom:1px solid #DFE1DA"
              )}
            >
              <span
                style={s(
                  "flex:0 0 96px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#9A9E94;padding-top:4px"
                )}
              >
                Jobs
              </span>
              <p style={s("margin:0;color:#3C403A;font-size:17px")}>
                Want to join. Send what you have shipped and the kind of work
                you want to do.
              </p>
            </div>
            <div
              style={s(
                "display:flex;gap:16px;padding:18px 0;border-bottom:1px solid #DFE1DA"
              )}
            >
              <span
                style={s(
                  "flex:0 0 96px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#9A9E94;padding-top:4px"
                )}
              >
                Collaborate
              </span>
              <p style={s("margin:0;color:#3C403A;font-size:17px")}>
                Partnership, co-build, or a specific skill you want to bring.
              </p>
            </div>
            <div
              style={s(
                "display:flex;gap:16px;padding:18px 0;border-bottom:1px solid #DFE1DA"
              )}
            >
              <span
                style={s(
                  "flex:0 0 96px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#9A9E94;padding-top:4px"
                )}
              >
                Other
              </span>
              <p style={s("margin:0;color:#3C403A;font-size:17px")}>
                Press, investment, or a question about existing work. Fine —
                just say so.
              </p>
            </div>
            <p
              style={s(
                "margin:18px 0 0;font-family:'IBM Plex Mono',monospace;font-size:12px;color:#6C7068"
              )}
            >
              All routes lead to{" "}
              <a
                className="dc-hover-1a52d8"
                href="mailto:hello@obecco.com"
                style={s("color:#2F6B57;border-bottom:1px solid #B5CFC3")}
              >
                hello@obecco.com
              </a>
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
