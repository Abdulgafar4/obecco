import { s } from '@/lib/style';
import Link from 'next/link';

export function HomePage() {
  return (
    <>
      <section style={s("max-width:1240px;margin:0 auto;padding:clamp(48px,7vw,112px) 24px clamp(32px,4vw,56px)")}>
            <div style={s("display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start")}>
              <div data-reveal="" style={s("flex:0 0 116px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.08em;color:#8A8E86;text-transform:uppercase;padding-top:12px")}>
                <div style={s("color:#16161A")}>00</div>
                <div>Obecco</div>
                <div style={s("margin-top:6px")}>Founded 2026</div>
              </div>
              <div style={s("flex:1 1 520px;min-width:0")}>
                <h1 data-reveal="" style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:clamp(34px,5.6vw,80px);line-height:0.99;letter-spacing:-0.035em;text-wrap:balance")}>We design, build, and ship software people can actually use.</h1>
                <p data-reveal="" style={s("margin:26px 0 0;max-width:58ch;font-size:clamp(18px,1.4vw,21px);color:#3C403A")}>Obecco is a software company building and operating digital products from the ground up. We stay close to the product, own the work end to end, and build around what people actually need.</p>
                <div data-reveal="" style={s("display:flex;gap:12px;flex-wrap:wrap;margin-top:32px")}>
                  <Link href="/products" className="dc-hover-329bd0" style={s("background:#2F6B57;color:#F5F5F1;font-family:'IBM Plex Mono',monospace;font-size:12.5px;letter-spacing:0.07em;text-transform:uppercase;border:none;border-radius:6px;padding:14px 22px;cursor:pointer;transition:background .18s ease,transform .18s ease")}>Explore our products</Link>
                  <Link href="/contact" className="dc-hover-20c521" style={s("background:none;color:#16161A;font-family:'IBM Plex Mono',monospace;font-size:12.5px;letter-spacing:0.07em;text-transform:uppercase;border:1px solid #C6C9BF;border-radius:6px;padding:14px 22px;cursor:pointer;transition:border-color .18s ease,transform .18s ease")}>Work with us</Link>
                </div>
              </div>
            </div>
          </section>

          <section style={s("max-width:1240px;margin:0 auto;padding:0 24px clamp(40px,5vw,72px)")}>
            <div style={s("display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start;border-top:1px solid #D4D6CD;padding-top:clamp(28px,3.5vw,48px)")}>
              <div data-reveal="" style={s("flex:0 0 116px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.08em;color:#8A8E86;text-transform:uppercase")}>
                <div style={s("color:#16161A")}>01</div>
                <div>What we build</div>
              </div>
              <p data-reveal="" style={s("flex:1 1 440px;margin:0;max-width:60ch;font-size:20px;color:#3C403A")}>We build products ourselves, from the first idea through implementation and into real use. Some are live today. Others are still being built. The standard stays the same: make something useful, make it well, and ship it.</p>
              <div data-reveal="" style={s("flex:0 1 260px;min-width:230px;display:flex;gap:12px")}>
                <div style={s("flex:1;border:1px solid #D4D6CD;border-radius:10px;background:#F5F5F1;padding:18px")}>
                  <div style={s("font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:34px;letter-spacing:-0.03em;line-height:1")}>02</div>
                  <div style={s("font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#2F6B57;margin-top:6px")}>Live</div>
                </div>
                <div style={s("flex:1;border:1px solid #D4D6CD;border-radius:10px;background:#F5F5F1;padding:18px")}>
                  <div style={s("font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:34px;letter-spacing:-0.03em;line-height:1;color:#6C7068")}>02</div>
                  <div style={s("font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#6C7068;margin-top:6px")}>In development</div>
                </div>
              </div>
            </div>
          </section>

          <section style={s("background:#F5F5F1;border-top:1px solid #D4D6CD;border-bottom:1px solid #D4D6CD")}>
            <div style={s("max-width:1240px;margin:0 auto;padding:clamp(40px,5vw,76px) 24px")}>
              <div data-reveal="" style={s("display:flex;gap:32px;flex-wrap:wrap;align-items:baseline;margin-bottom:24px")}>
                <div style={s("flex:0 0 116px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.08em;color:#8A8E86;text-transform:uppercase")}>
                  <div style={s("color:#16161A")}>02</div>
                  <div>Products</div>
                </div>
                <h2 style={s("flex:1 1 380px;margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:clamp(24px,2.7vw,34px);letter-spacing:-0.03em;line-height:1.12")}>The Obecco product index.</h2>
              </div>
              <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:16px")}>

                <article className="dc-hover-550436" data-reveal="" style={s("border:1px solid #D4D6CD;border-radius:10px;background:#FBFBF9;padding:22px;display:flex;flex-direction:column;gap:14px;transition:transform .2s ease,border-color .2s ease")}>
                  <div style={s("display:flex;align-items:center;justify-content:space-between;gap:12px")}>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.08em;color:#9A9E94")}>01</span>
                    <svg role="img" aria-label="ToolFerry mark" viewBox="0 0 24 24" width={30} height="30" fill="none" stroke="#16161A" strokeWidth={1.6}><rect x="3" y="3" width="7.5" height="7.5" rx="1" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="1" /><rect x="3" y="13.5" width="7.5" height="7.5" rx="1" /><circle cx="17.25" cy="17.25" r="3.75" /></svg>
                  </div>
                  <h3 style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:24px;letter-spacing:-0.025em;line-height:1")}>ToolFerry</h3>
                  <div style={s("display:flex;align-items:center;gap:8px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#16161A")}><span aria-hidden={true} style={s("width:8px;height:8px;border-radius:50%;background:#2F6B57")}></span>Live<span style={s("color:#9A9E94;letter-spacing:0.06em")}>/ Multi-tool web platform</span></div>
                  <p style={s("margin:0;color:#3C403A;font-size:16.5px")}>Media tools, converters, PDF tools, document tools, and utilities in one hub.</p>
                  <Link href="/toolferry" className="dc-hover-1a52d8" style={s("align-self:flex-start;margin-top:auto;background:none;border:none;padding:0;cursor:pointer;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.07em;text-transform:uppercase;color:#2F6B57;border-bottom:1px solid #B5CFC3;padding-bottom:3px")}>Explore ToolFerry →</Link>
                </article>

                <article className="dc-hover-550436" data-reveal="" style={s("border:1px solid #D4D6CD;border-radius:10px;background:#FBFBF9;padding:22px;display:flex;flex-direction:column;gap:14px;transition:transform .2s ease,border-color .2s ease")}>
                  <div style={s("display:flex;align-items:center;justify-content:space-between;gap:12px")}>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.08em;color:#9A9E94")}>02</span>
                    <svg role="img" aria-label="Lien mark" viewBox="0 0 24 24" width={30} height="30" fill="none" stroke="#16161A" strokeWidth={1.6}><circle cx="9" cy="12" r="6" /><circle cx="15" cy="12" r="6" /></svg>
                  </div>
                  <h3 style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:24px;letter-spacing:-0.025em;line-height:1")}>Lien</h3>
                  <div style={s("display:flex;align-items:center;gap:8px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#16161A")}><span aria-hidden={true} style={s("width:8px;height:8px;border-radius:50%;background:#2F6B57")}></span>Live<span style={s("color:#9A9E94;letter-spacing:0.06em")}>/ Dating app</span></div>
                  <p style={s("margin:0;color:#3C403A;font-size:16.5px")}>A verified, curated dating app for British Columbia, built on applications, identity verification, and curated introductions.</p>
                  <Link href="/lien" className="dc-hover-1a52d8" style={s("align-self:flex-start;margin-top:auto;background:none;border:none;padding:0;cursor:pointer;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.07em;text-transform:uppercase;color:#2F6B57;border-bottom:1px solid #B5CFC3;padding-bottom:3px")}>Explore Lien →</Link>
                </article>

                <article className="dc-hover-550436" data-reveal="" style={s("border:1px solid #D4D6CD;border-radius:10px;background:#F1F2EE;padding:22px;display:flex;flex-direction:column;gap:14px;transition:transform .2s ease,border-color .2s ease")}>
                  <div style={s("display:flex;align-items:center;justify-content:space-between;gap:12px")}>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.08em;color:#9A9E94")}>03</span>
                    <svg role="img" aria-label="Clevermart mark" viewBox="0 0 24 24" width={30} height="30" fill="none" stroke="#6C7068" strokeWidth={1.6}><rect x="3" y="8" width="18" height="13" rx="1.5" /><path d="M8 8V4.5h8V8" /></svg>
                  </div>
                  <h3 style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:24px;letter-spacing:-0.025em;line-height:1")}>Clevermart</h3>
                  <div style={s("display:flex;align-items:center;gap:8px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#6C7068")}><span aria-hidden={true} style={s("width:8px;height:8px;border-radius:50%;border:1.5px solid #9A9E94")}></span>In development<span style={s("color:#9A9E94;letter-spacing:0.06em")}>/ E-commerce</span></div>
                  <p style={s("margin:0;color:#3C403A;font-size:16.5px")}>A dropshipping e-commerce store, currently being built with Next.js and a modern commerce stack.</p>
                  <Link href="/clevermart" className="dc-hover-1a52d8" style={s("align-self:flex-start;margin-top:auto;background:none;border:none;padding:0;cursor:pointer;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.07em;text-transform:uppercase;color:#4E524C;border-bottom:1px solid #C6C9BF;padding-bottom:3px")}>View product →</Link>
                </article>

                <article className="dc-hover-550436" data-reveal="" style={s("border:1px solid #D4D6CD;border-radius:10px;background:#F1F2EE;padding:22px;display:flex;flex-direction:column;gap:14px;transition:transform .2s ease,border-color .2s ease")}>
                  <div style={s("display:flex;align-items:center;justify-content:space-between;gap:12px")}>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.08em;color:#9A9E94")}>04</span>
                    <svg role="img" aria-label="CleverJobs mark" viewBox="0 0 24 24" width={30} height="30" fill="none" stroke="#6C7068" strokeWidth={1.6}><rect x="3" y="3" width="18" height="18" rx="1.5" /><circle cx="12" cy="12" r="3" /></svg>
                  </div>
                  <h3 style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:24px;letter-spacing:-0.025em;line-height:1")}>CleverJobs</h3>
                  <div style={s("display:flex;align-items:center;gap:8px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#6C7068")}><span aria-hidden={true} style={s("width:8px;height:8px;border-radius:50%;border:1.5px solid #9A9E94")}></span>In development</div>
                  <p style={s("margin:0;color:#3C403A;font-size:16.5px")}>Details to follow.</p>
                  <Link href="/cleverjobs" className="dc-hover-1a52d8" style={s("align-self:flex-start;margin-top:auto;background:none;border:none;padding:0;cursor:pointer;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.07em;text-transform:uppercase;color:#4E524C;border-bottom:1px solid #C6C9BF;padding-bottom:3px")}>View product →</Link>
                </article>

              </div>
            </div>
          </section>

          <section style={s("max-width:1240px;margin:0 auto;padding:clamp(44px,6vw,88px) 24px")}>
            <div style={s("display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start")}>
              <div data-reveal="" style={s("flex:0 0 116px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.08em;color:#8A8E86;text-transform:uppercase;padding-top:8px")}>
                <div style={s("color:#16161A")}>03</div>
                <div>How we work</div>
              </div>
              <div style={s("flex:1 1 520px;min-width:0")}>
                <h2 data-reveal="" style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:clamp(24px,2.8vw,38px);letter-spacing:-0.03em;line-height:1.14;max-width:32ch")}>We build, ship, and learn from the product.</h2>
                <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:26px 32px;margin-top:36px")}>
                  <div data-reveal="">
                    <div style={s("font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#2F6B57")}>Close to the product</div>
                    <p style={s("margin:9px 0 0;color:#3C403A;font-size:17px")}>The people making decisions are the people building and running the product.</p>
                  </div>
                  <div data-reveal="">
                    <div style={s("font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#2F6B57")}>Build, not just plan</div>
                    <p style={s("margin:9px 0 0;color:#3C403A;font-size:17px")}>We spend our time on working software rather than on documents about it.</p>
                  </div>
                  <div data-reveal="">
                    <div style={s("font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#2F6B57")}>Focused products</div>
                    <p style={s("margin:9px 0 0;color:#3C403A;font-size:17px")}>Each product keeps a narrow purpose, so it stays clear and easy to use.</p>
                  </div>
                  <div data-reveal="">
                    <div style={s("font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#2F6B57")}>Implementation is ours</div>
                    <p style={s("margin:9px 0 0;color:#3C403A;font-size:17px")}>Design, engineering, launch, and operation stay in house, end to end.</p>
                  </div>
                  <div data-reveal="">
                    <div style={s("font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#2F6B57")}>Attention to real use</div>
                    <p style={s("margin:9px 0 0;color:#3C403A;font-size:17px")}>How a product is actually used decides what we change next.</p>
                  </div>
                  <div data-reveal="">
                    <div style={s("font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#2F6B57")}>Launch is not the finish</div>
                    <p style={s("margin:9px 0 0;color:#3C403A;font-size:17px")}>A live product keeps getting work. Shipping is the start of the real feedback.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={s("background:#16161A;color:#E9EAE5")}>
            <div style={s("max-width:1240px;margin:0 auto;padding:clamp(44px,6vw,84px) 24px")}>
              <div style={s("display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start")}>
                <div data-reveal="" style={s("flex:0 0 116px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.08em;color:#7C8078;text-transform:uppercase;padding-top:8px")}>
                  <div style={s("color:#E9EAE5")}>04</div>
                  <div>In progress</div>
                </div>
                <div style={s("flex:1 1 520px;min-width:0")}>
                  <h2 data-reveal="" style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:clamp(24px,2.8vw,38px);letter-spacing:-0.03em;line-height:1.14")}>What&apos;s being built now</h2>
                  <p data-reveal="" style={s("margin:16px 0 0;max-width:56ch;color:#C8CAC3")}>Two products are in development. We publish details when the product is real, not before.</p>
                  <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px;margin-top:30px")}>
                    <article data-reveal="" style={s("border:1px solid #33343A;border-radius:10px;background:#1C1D22;padding:22px;display:flex;flex-direction:column;gap:12px")}>
                      <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.08em;color:#7C8078")}>03</span>
                      <h3 style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:23px;letter-spacing:-0.025em")}>Clevermart</h3>
                      <div style={s("display:flex;align-items:center;gap:8px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#A9ACA4")}><span aria-hidden={true} style={s("width:8px;height:8px;border-radius:50%;border:1.5px solid #7C8078")}></span>In development</div>
                      <p style={s("margin:0;color:#C8CAC3;font-size:16.5px")}>A dropshipping e-commerce store, in development on Next.js 14, Tailwind, Stripe, the CJ Dropshipping API, Prisma, and Zustand.</p>
                      <Link href="/clevermart" className="dc-hover-a9891f" style={s("align-self:flex-start;margin-top:4px;background:none;border:none;padding:0 0 3px;cursor:pointer;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.07em;text-transform:uppercase;color:#8FBFA9;border-bottom:1px solid #3C5A4E")}>View product →</Link>
                    </article>
                    <article data-reveal="" style={s("border:1px solid #33343A;border-radius:10px;background:#1C1D22;padding:22px;display:flex;flex-direction:column;gap:12px")}>
                      <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.08em;color:#7C8078")}>04</span>
                      <h3 style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:23px;letter-spacing:-0.025em")}>CleverJobs</h3>
                      <div style={s("display:flex;align-items:center;gap:8px;font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#A9ACA4")}><span aria-hidden={true} style={s("width:8px;height:8px;border-radius:50%;border:1.5px solid #7C8078")}></span>In development</div>
                      <p style={s("margin:0;color:#C8CAC3;font-size:16.5px")}>Details to follow.</p>
                      <Link href="/cleverjobs" className="dc-hover-a9891f" style={s("align-self:flex-start;margin-top:4px;background:none;border:none;padding:0 0 3px;cursor:pointer;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.07em;text-transform:uppercase;color:#8FBFA9;border-bottom:1px solid #3C5A4E")}>View product →</Link>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={s("max-width:1240px;margin:0 auto;padding:clamp(44px,6vw,88px) 24px")}>
            <div style={s("display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start")}>
              <div data-reveal="" style={s("flex:0 0 116px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.08em;color:#8A8E86;text-transform:uppercase;padding-top:8px")}>
                <div style={s("color:#16161A")}>05</div>
                <div>Build with us</div>
              </div>
              <div data-reveal="" style={s("flex:1 1 520px;min-width:0;border:1px solid #D4D6CD;border-radius:16px;background:#F5F5F1;padding:clamp(24px,3vw,40px)")}>
                <h2 style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:clamp(24px,2.8vw,36px);letter-spacing:-0.03em;line-height:1.14;max-width:26ch")}>Want to build with us?</h2>
                <p style={s("margin:18px 0 0;max-width:58ch;color:#3C403A")}>We build our own products, which means the work is close to the product itself. If you are interested in working on software that moves from an idea to something people can actually use, we would like to hear from you.</p>
                <p style={s("margin:14px 0 0;max-width:58ch;color:#6C7068;font-size:16.5px")}>We are not advertising specific roles right now. Tell us what you build and we will keep the conversation going.</p>
                <Link href="/contact" className="dc-hover-329bd0" style={s("margin-top:24px;background:#2F6B57;color:#F5F5F1;font-family:'IBM Plex Mono',monospace;font-size:12.5px;letter-spacing:0.07em;text-transform:uppercase;border:none;border-radius:6px;padding:14px 22px;cursor:pointer;transition:background .18s ease,transform .18s ease")}>Start a conversation →</Link>
              </div>
            </div>
          </section>

          <section style={s("background:#F5F5F1;border-top:1px solid #D4D6CD")}>
            <div style={s("max-width:1240px;margin:0 auto;padding:clamp(44px,6vw,80px) 24px")}>
              <div style={s("display:flex;gap:32px;flex-wrap:wrap;align-items:flex-end;justify-content:space-between")}>
                <div data-reveal="" style={s("flex:1 1 460px;min-width:0")}>
                  <p style={s("margin:0;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.08em;text-transform:uppercase;color:#8A8E86")}>Customers. Partners. Investors. Press. Potential hires.</p>
                  <h2 style={s("margin:14px 0 0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:clamp(26px,3.2vw,44px);letter-spacing:-0.03em;line-height:1.06;max-width:24ch")}>Whatever brings you here, this is the place to start.</h2>
                  <a className="dc-hover-1a52d8" href="mailto:hello@obecco.com" style={s("display:inline-block;margin-top:20px;font-family:'IBM Plex Mono',monospace;font-size:14px;letter-spacing:0.04em;color:#2F6B57;border-bottom:1px solid #B5CFC3;padding-bottom:2px")}>hello@obecco.com</a>
                </div>
                <Link href="/contact" className="dc-hover-bea3a5" data-reveal="" style={s("background:#16161A;color:#F5F5F1;font-family:'IBM Plex Mono',monospace;font-size:12.5px;letter-spacing:0.07em;text-transform:uppercase;border:none;border-radius:6px;padding:15px 24px;cursor:pointer;transition:background .18s ease,transform .18s ease")}>Get in touch →</Link>
              </div>
            </div>
          </section>
    </>
  );
}
