import { s } from '@/lib/style';
import Link from 'next/link';

export function AboutPage() {
  return (
    <>
      <section data-screen-label="About header" style={s("padding:clamp(130px,20vh,220px) 0 clamp(50px,7vh,90px);")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(24px,4vh,44px);")}>
            <div style={s("display:flex;align-items:center;gap:14px;")}>
              <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>About</span>
              <span style={s("width:clamp(24px,3vw,54px);height:1px;background:var(--color-divider);")}></span>
              <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 50%, transparent);")}>Independent since 2026</span>
            </div>
            <h1 data-reveal="up" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,7.6vw,130px);line-height:0.88;letter-spacing:-0.035em;max-width:15ch;")}>A small studio that would rather ship than pitch.</h1>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(380px,100%),1fr));gap:clamp(28px,4vw,90px);")}>
              <p data-reveal="up" data-reveal-delay="80" style={s("margin:0;font-size:clamp(16px,1.15vw,19px);line-height:1.62;color:color-mix(in srgb, var(--color-text) 74%, transparent);")}>Obecco is an independent software company. We design and engineer digital products — for clients who need something built properly, and for ourselves when we think something should exist and does not.</p>
              <p data-reveal="up" data-reveal-delay="160" style={s("margin:0;font-size:clamp(16px,1.15vw,19px);line-height:1.62;color:color-mix(in srgb, var(--color-text) 74%, transparent);")}>There is no account layer between you and the people writing the code. The team that scopes the work is the team that builds it, launches it, and answers for it afterwards.</p>
            </div>
          </div>
        </section>

        <section data-screen-label="Numbers" style={s("padding:0 0 clamp(60px,9vh,110px);")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);")}>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(200px,100%),1fr));gap:clamp(20px,3vw,56px);border-top:1px solid var(--color-divider);padding-top:clamp(22px,3vh,34px);")}>
              <div data-reveal="up" style={s("display:flex;flex-direction:column;gap:9px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,5.4vw,92px);line-height:0.82;letter-spacing:-0.04em;")}>2026</span><span style={s("font-size:13.5px;color:color-mix(in srgb, var(--color-text) 62%, transparent);")}>Founded, and independent</span></div>
              <div data-reveal="up" data-reveal-delay="80" style={s("display:flex;flex-direction:column;gap:9px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,5.4vw,92px);line-height:0.82;letter-spacing:-0.04em;color:var(--color-accent-700);")}>04</span><span style={s("font-size:13.5px;color:color-mix(in srgb, var(--color-text) 62%, transparent);")}>Products of our own</span></div>
              <div data-reveal="up" data-reveal-delay="160" style={s("display:flex;flex-direction:column;gap:9px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,5.4vw,92px);line-height:0.82;letter-spacing:-0.04em;")}>07</span><span style={s("font-size:13.5px;color:color-mix(in srgb, var(--color-text) 62%, transparent);")}>Services we take on</span></div>
              <div data-reveal="up" data-reveal-delay="240" style={s("display:flex;flex-direction:column;gap:9px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,5.4vw,92px);line-height:0.82;letter-spacing:-0.04em;")}>01</span><span style={s("font-size:13.5px;color:color-mix(in srgb, var(--color-text) 62%, transparent);")}>Team, from scope to release</span></div>
            </div>
          </div>
        </section>

        <section data-ref="prinStage" data-screen-label="Principles" style={s("position:relative;height:300vh;border-top:1px solid var(--color-divider);")}>
          <div style={s("position:sticky;top:0;height:100svh;display:flex;align-items:center;overflow:hidden;")}>
            <div style={s("width:100%;max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr));gap:clamp(24px,4vw,80px);align-items:center;")}>
              <div style={s("display:flex;flex-direction:column;gap:clamp(16px,2.4vh,26px);")}>
                <div style={s("display:flex;align-items:center;gap:14px;")}>
                  <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>Principles</span>
                  <span style={s("flex:1;height:1px;background:var(--color-divider);")}></span>
                </div>
                <h2 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,4.2vw,68px);line-height:0.96;letter-spacing:-0.03em;max-width:16ch;")}>Four things we will not trade away.</h2>
                <div style={s("display:flex;align-items:center;gap:12px;")}>
                  <span style={s("display:block;width:clamp(60px,10vw,160px);height:1px;background:var(--color-divider);position:relative;")}><span data-ref="prinBar" style={s("position:absolute;left:0;top:0;height:1px;width:0%;background:var(--color-accent);")}></span></span>
                  <span data-ref="prinNum" style={s("font-size:11px;letter-spacing:0.16em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>01 / 04</span>
                </div>
              </div>
              <div style={s("display:flex;flex-direction:column;gap:clamp(10px,1.6vh,20px);")}>
                <div data-ref="pr1" style={s("display:flex;flex-direction:column;gap:8px;border-left:1px solid var(--color-accent);padding-left:clamp(16px,2vw,26px);transition:opacity 560ms cubic-bezier(.19,1,.22,1), transform 560ms cubic-bezier(.19,1,.22,1);")}>
                  <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(22px,2.6vw,40px);line-height:1.04;letter-spacing:-0.022em;")}>Clarity over cleverness</span>
                  <span style={s("font-size:clamp(14.5px,1.05vw,17px);line-height:1.58;color:color-mix(in srgb, var(--color-text) 68%, transparent);max-width:46ch;")}>The interesting solution is rarely the right one. Code and interfaces should be legible to the next person who opens them.</span>
                </div>
                <div data-ref="pr2" style={s("display:flex;flex-direction:column;gap:8px;border-left:1px solid var(--color-divider);padding-left:clamp(16px,2vw,26px);transition:opacity 560ms cubic-bezier(.19,1,.22,1), transform 560ms cubic-bezier(.19,1,.22,1);")}>
                  <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(22px,2.6vw,40px);line-height:1.04;letter-spacing:-0.022em;")}>Ship, then learn</span>
                  <span style={s("font-size:clamp(14.5px,1.05vw,17px);line-height:1.58;color:color-mix(in srgb, var(--color-text) 68%, transparent);max-width:46ch;")}>A small release in front of real users beats a large one in front of a review meeting. We plan for the second version from the start.</span>
                </div>
                <div data-ref="pr3" style={s("display:flex;flex-direction:column;gap:8px;border-left:1px solid var(--color-divider);padding-left:clamp(16px,2vw,26px);transition:opacity 560ms cubic-bezier(.19,1,.22,1), transform 560ms cubic-bezier(.19,1,.22,1);")}>
                  <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(22px,2.6vw,40px);line-height:1.04;letter-spacing:-0.022em;")}>Own the whole arc</span>
                  <span style={s("font-size:clamp(14.5px,1.05vw,17px);line-height:1.58;color:color-mix(in srgb, var(--color-text) 68%, transparent);max-width:46ch;")}>Strategy, design, engineering, and release in one team. Nothing is lost in a handoff that never happens.</span>
                </div>
                <div data-ref="pr4" style={s("display:flex;flex-direction:column;gap:8px;border-left:1px solid var(--color-divider);padding-left:clamp(16px,2vw,26px);transition:opacity 560ms cubic-bezier(.19,1,.22,1), transform 560ms cubic-bezier(.19,1,.22,1);")}>
                  <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(22px,2.6vw,40px);line-height:1.04;letter-spacing:-0.022em;")}>Say the honest thing</span>
                  <span style={s("font-size:clamp(14.5px,1.05vw,17px);line-height:1.58;color:color-mix(in srgb, var(--color-text) 68%, transparent);max-width:46ch;")}>Including when the honest thing is that you need less than you asked for, or that the deadline will not hold.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-screen-label="Two halves" style={s("border-top:1px solid var(--color-divider);background:var(--color-surface);padding:clamp(70px,10vh,130px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(30px,5vh,56px);")}>
            <h2 data-reveal="up" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(32px,4.6vw,76px);line-height:0.94;letter-spacing:-0.03em;max-width:22ch;")}>The studio runs on two halves that feed each other.</h2>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr));gap:clamp(24px,3vw,56px);")}>
              <div data-reveal="up" className="blueprint" style={s("position:relative;background:var(--color-bg);padding:clamp(24px,3vw,40px);display:flex;flex-direction:column;gap:16px;")}>
                <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>Half one</span>
                <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(24px,2.6vw,40px);line-height:1.04;")}>Client work</span>
                <span style={s("font-size:15px;line-height:1.6;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>Websites, applications, and full product builds for companies that need software they can rely on. It pays the bills and it keeps us in contact with problems we would never have invented ourselves.</span>
                <Link href="/services" style={s("display:inline-flex;align-items:center;gap:10px;align-self:flex-start;margin-top:auto;text-decoration:none;color:var(--color-accent-700);font-family:var(--font-heading);font-weight:600;font-size:13.5px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;border-bottom:1px solid var(--color-accent);padding-bottom:5px;")}>Services<span style={s("width:16px;height:1px;background:currentColor;")}></span></Link>
              </div>
              <div data-reveal="up" data-reveal-delay="110" className="blueprint" style={s("position:relative;background:var(--color-bg);padding:clamp(24px,3vw,40px);display:flex;flex-direction:column;gap:16px;")}>
                <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>Half two</span>
                <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(24px,2.6vw,40px);line-height:1.04;")}>Our own products</span>
                <span style={s("font-size:15px;line-height:1.6;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>Lien, ToolFerry, CleverJobs, and Clevermart. We carry their cost, their support load, and their mistakes — which is why our advice on your product comes from having lived it, not read it.</span>
                <Link href="/products" style={s("display:inline-flex;align-items:center;gap:10px;align-self:flex-start;margin-top:auto;text-decoration:none;color:var(--color-accent-700);font-family:var(--font-heading);font-weight:600;font-size:13.5px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;border-bottom:1px solid var(--color-accent);padding-bottom:5px;")}>Products<span style={s("width:16px;height:1px;background:currentColor;")}></span></Link>
              </div>
            </div>
          </div>
        </section>

        <section data-screen-label="Working with us" style={s("border-top:1px solid var(--color-divider);padding:clamp(70px,10vh,130px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(360px,100%),1fr));gap:clamp(32px,5vw,100px);align-items:start;")}>
            <div className="sticky-aside" style={s("align-self:start;position:sticky;top:clamp(96px,12vh,132px);display:flex;flex-direction:column;gap:16px;padding-bottom:clamp(12px,2vh,20px);")}>
              <div style={s("display:flex;align-items:center;gap:14px;")}>
                <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>In practice</span>
                <span style={s("width:clamp(24px,3vw,54px);height:1px;background:var(--color-divider);")}></span>
              </div>
              <h2 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,4.2vw,68px);line-height:0.96;letter-spacing:-0.03em;max-width:16ch;")}>What working with us is actually like.</h2>
              <p style={s("margin:0;max-width:40ch;font-size:clamp(15px,1.05vw,17.5px);line-height:1.62;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>No war rooms, no status theatre. A short weekly rhythm, written decisions, and something running you can click.</p>
            </div>
            <div style={s("display:flex;flex-direction:column;border-top:1px solid var(--color-divider);")}>
              <div data-reveal="up" style={s("display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(16px,2.4vw,34px);padding:clamp(16px,2.2vh,24px) 0;border-bottom:1px solid var(--color-divider);")}><span style={s("font-size:11px;letter-spacing:0.14em;color:var(--color-accent-700);")}>01</span><div style={s("display:flex;flex-direction:column;gap:7px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(19px,1.9vw,27px);")}>One weekly call, thirty minutes</span><span style={s("font-size:14.5px;line-height:1.55;color:color-mix(in srgb, var(--color-text) 66%, transparent);")}>Decisions, blockers, what shipped. Anything longer is usually a document instead.</span></div></div>
              <div data-reveal="up" data-reveal-delay="70" style={s("display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(16px,2.4vw,34px);padding:clamp(16px,2.2vh,24px) 0;border-bottom:1px solid var(--color-divider);")}><span style={s("font-size:11px;letter-spacing:0.14em;color:color-mix(in srgb, var(--color-text) 40%, transparent);")}>02</span><div style={s("display:flex;flex-direction:column;gap:7px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(19px,1.9vw,27px);")}>A live environment from week one</span><span style={s("font-size:14.5px;line-height:1.55;color:color-mix(in srgb, var(--color-text) 66%, transparent);")}>You watch the thing get built instead of receiving it at the end.</span></div></div>
              <div data-reveal="up" data-reveal-delay="140" style={s("display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(16px,2.4vw,34px);padding:clamp(16px,2.2vh,24px) 0;border-bottom:1px solid var(--color-divider);")}><span style={s("font-size:11px;letter-spacing:0.14em;color:color-mix(in srgb, var(--color-text) 40%, transparent);")}>03</span><div style={s("display:flex;flex-direction:column;gap:7px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(19px,1.9vw,27px);")}>Decisions written down, not remembered</span><span style={s("font-size:14.5px;line-height:1.55;color:color-mix(in srgb, var(--color-text) 66%, transparent);")}>Architecture and scope choices live in the repository, with the reasoning attached.</span></div></div>
              <div data-reveal="up" data-reveal-delay="210" style={s("display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(16px,2.4vw,34px);padding:clamp(16px,2.2vh,24px) 0;border-bottom:1px solid var(--color-divider);")}><span style={s("font-size:11px;letter-spacing:0.14em;color:color-mix(in srgb, var(--color-text) 40%, transparent);")}>04</span><div style={s("display:flex;flex-direction:column;gap:7px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(19px,1.9vw,27px);")}>You own everything</span><span style={s("font-size:14.5px;line-height:1.55;color:color-mix(in srgb, var(--color-text) 66%, transparent);")}>Code, accounts, infrastructure, and documentation are yours from the first commit.</span></div></div>
              <div data-reveal="up" data-reveal-delay="280" style={s("display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(16px,2.4vw,34px);padding:clamp(16px,2.2vh,24px) 0;")}><span style={s("font-size:11px;letter-spacing:0.14em;color:color-mix(in srgb, var(--color-text) 40%, transparent);")}>05</span><div style={s("display:flex;flex-direction:column;gap:7px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(19px,1.9vw,27px);")}>We stay reachable after launch</span><span style={s("font-size:14.5px;line-height:1.55;color:color-mix(in srgb, var(--color-text) 66%, transparent);")}>A launch is not an exit. Most of our work is with people we have already shipped for.</span></div></div>
            </div>
          </div>
        </section>

        <section data-screen-label="Stack" style={s("border-top:1px solid var(--color-divider);padding:clamp(60px,9vh,110px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(22px,3.4vh,36px);")}>
            <div style={s("display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:20px;")}>
              <h2 data-reveal="up" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(26px,3.4vw,52px);line-height:1;letter-spacing:-0.028em;")}>What we build with</h2>
              <span style={s("font-size:13.5px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 58%, transparent);max-width:40ch;")}>Chosen per project, not by habit — and boring on purpose where boring is safer.</span>
            </div>
            <div style={s("display:flex;flex-wrap:wrap;gap:10px;")}>
              <span className="tag tag-neutral" style={s("font-size:13px;padding:8px 14px;")}>TypeScript</span>
              <span className="tag tag-neutral" style={s("font-size:13px;padding:8px 14px;")}>React</span>
              <span className="tag tag-neutral" style={s("font-size:13px;padding:8px 14px;")}>Next.js</span>
              <span className="tag tag-neutral" style={s("font-size:13px;padding:8px 14px;")}>Node</span>
              <span className="tag tag-neutral" style={s("font-size:13px;padding:8px 14px;")}>Postgres</span>
              <span className="tag tag-neutral" style={s("font-size:13px;padding:8px 14px;")}>Prisma</span>
              <span className="tag tag-neutral" style={s("font-size:13px;padding:8px 14px;")}>Stripe</span>
              <span className="tag tag-neutral" style={s("font-size:13px;padding:8px 14px;")}>Vercel</span>
              <span className="tag tag-neutral" style={s("font-size:13px;padding:8px 14px;")}>Playwright</span>
              <span className="tag tag-neutral" style={s("font-size:13px;padding:8px 14px;")}>Figma</span>
            </div>
          </div>
        </section>

        <section data-screen-label="About CTA" style={s("background:var(--color-accent-900);color:var(--color-bg);padding:clamp(80px,12vh,160px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(26px,4vh,48px);")}>
            <span style={s("font-size:11px;letter-spacing:0.22em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-bg) 58%, transparent);")}>Start a project</span>
            <h2 data-reveal="up" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(38px,7vw,124px);line-height:0.9;letter-spacing:-0.035em;max-width:18ch;")}>Let&apos;s find out if we&apos;re a fit.</h2>
            <div style={s("display:flex;flex-wrap:wrap;align-items:center;gap:clamp(20px,3vw,48px);")}>
              <Link href="/contact" data-magnet="14" style={s("display:inline-flex;align-items:center;gap:14px;text-decoration:none;color:var(--color-accent-900);background:var(--color-bg);border:1px solid var(--color-bg);padding:16px 28px;font-family:var(--font-heading);font-weight:600;font-size:15px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;transition:background 280ms, color 280ms;")} className="oh-c783c2">Start a project<span style={s("width:18px;height:1px;background:currentColor;")}></span></Link>
              <a href="mailto:hello@obecco.com" style={s("text-decoration:none;color:color-mix(in srgb, var(--color-bg) 78%, transparent);font-size:15px;letter-spacing:0.08em;border-bottom:1px solid color-mix(in srgb, var(--color-bg) 40%, transparent);padding-bottom:4px;")}>hello@obecco.com</a>
            </div>
          </div>
        </section>

        <footer data-screen-label="Footer" style={s("background:var(--color-bg);padding:clamp(50px,7vh,80px) 0 clamp(30px,4vh,44px);")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(30px,5vh,56px);")}>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(200px,100%),1fr));gap:clamp(28px,4vw,64px);")}>
              <div style={s("display:flex;flex-direction:column;gap:12px;")}>
                <span style={s("font-family:var(--font-heading);font-weight:600;font-size:20px;letter-spacing:0.26em;text-transform:uppercase;")}>Obecco</span>
                <span style={s("font-size:13.5px;line-height:1.6;color:color-mix(in srgb, var(--color-text) 58%, transparent);max-width:26ch;")}>We build software that moves. Independent software company, founded 2026.</span>
              </div>
              <div style={s("display:flex;flex-direction:column;gap:10px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 42%, transparent);")}>Site</span>
                <Link href="/" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Home</Link>
                <Link href="/services" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Services</Link>
                <Link href="/products" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Products</Link>
                <Link href="/contact" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Contact</Link>
              </div>
              <div style={s("display:flex;flex-direction:column;gap:10px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 42%, transparent);")}>Products</span>
                <Link href="/products#lien" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Lien</Link>
                <Link href="/products#toolferry" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>ToolFerry</Link>
                <Link href="/products#cleverjobs" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>CleverJobs</Link>
                <Link href="/products#clevermart" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Clevermart</Link>
              </div>
              <div style={s("display:flex;flex-direction:column;gap:10px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 42%, transparent);")}>Contact</span>
                <a href="mailto:hello@obecco.com" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>hello@obecco.com</a>
                <Link href="/contact" style={s("text-decoration:none;color:var(--color-accent-700);font-size:14px;")}>Start a project</Link>
              </div>
            </div>
            <div style={s("display:flex;flex-wrap:wrap;justify-content:space-between;gap:14px;border-top:1px solid var(--color-divider);padding-top:20px;font-size:11.5px;letter-spacing:0.1em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 42%, transparent);")}>
              <span>© 2026 Obecco</span>
              <span>Designed and built in-house</span>
            </div>
          </div>
        </footer>
    </>
  );
}
