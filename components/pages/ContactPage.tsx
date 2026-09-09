import { s } from '@/lib/style';
import Link from 'next/link';
import { ContactEnquiry } from '@/components/ContactEnquiry';

export function ContactPage() {
  return (
    <>
      <section data-screen-label="Contact header" style={s("padding:clamp(130px,20vh,210px) 0 clamp(40px,6vh,70px);")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(22px,3.4vh,40px);")}>
            <div style={s("display:flex;align-items:center;gap:14px;")}>
              <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>Contact</span>
              <span style={s("width:clamp(24px,3vw,54px);height:1px;background:var(--color-divider);")}></span>
              <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 50%, transparent);")}>Reply within two working days</span>
            </div>
            <h1 data-reveal="up" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,7.4vw,124px);line-height:0.88;letter-spacing:-0.035em;max-width:14ch;")}>Tell us what you want built.</h1>
            <p data-reveal="up" data-reveal-delay="80" style={s("margin:0;max-width:50ch;font-size:clamp(16px,1.15vw,19px);line-height:1.6;color:color-mix(in srgb, var(--color-text) 74%, transparent);")}>A few lines is enough to start. If it is not a fit, we will say so quickly and point you somewhere better.</p>
          </div>
        </section>

        <section data-screen-label="Contact form" style={s("padding:0 0 clamp(70px,10vh,130px);")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(380px,100%),1fr));gap:clamp(36px,5vw,100px);align-items:start;")}>

            <ContactEnquiry />

            <div style={s("display:flex;flex-direction:column;gap:clamp(30px,5vh,52px);")}>
              <div style={s("display:flex;flex-direction:column;gap:14px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>Direct</span>
                <a href="mailto:hello@obecco.com" style={s("text-decoration:none;color:var(--color-text);font-family:var(--font-heading);font-weight:600;font-size:clamp(24px,3.2vw,46px);line-height:1.02;letter-spacing:-0.028em;border-bottom:1px solid var(--color-accent);align-self:flex-start;padding-bottom:6px;")}>hello@obecco.com</a>
                <span style={s("font-size:14.5px;line-height:1.6;color:color-mix(in srgb, var(--color-text) 66%, transparent);max-width:38ch;")}>Read by the people who would do the work. No ticket queue.</span>
              </div>

              <div style={s("display:flex;flex-direction:column;gap:16px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>What happens next</span>
                <div style={s("display:flex;flex-direction:column;border-top:1px solid var(--color-divider);")}>
                  <div data-reveal="up" style={s("display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(14px,2vw,26px);padding:15px 0;border-bottom:1px solid var(--color-divider);")}><span style={s("font-size:11px;letter-spacing:0.14em;color:var(--color-accent-700);")}>01</span><div style={s("display:flex;flex-direction:column;gap:5px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(17px,1.6vw,22px);")}>We read it and reply</span><span style={s("font-size:14px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 64%, transparent);")}>Within two working days, with an honest first reaction.</span></div></div>
                  <div data-reveal="up" data-reveal-delay="70" style={s("display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(14px,2vw,26px);padding:15px 0;border-bottom:1px solid var(--color-divider);")}><span style={s("font-size:11px;letter-spacing:0.14em;color:color-mix(in srgb, var(--color-text) 40%, transparent);")}>02</span><div style={s("display:flex;flex-direction:column;gap:5px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(17px,1.6vw,22px);")}>A thirty-minute call</span><span style={s("font-size:14px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 64%, transparent);")}>Enough to understand the problem and the constraints.</span></div></div>
                  <div data-reveal="up" data-reveal-delay="140" style={s("display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(14px,2vw,26px);padding:15px 0;border-bottom:1px solid var(--color-divider);")}><span style={s("font-size:11px;letter-spacing:0.14em;color:color-mix(in srgb, var(--color-text) 40%, transparent);")}>03</span><div style={s("display:flex;flex-direction:column;gap:5px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(17px,1.6vw,22px);")}>A written proposal</span><span style={s("font-size:14px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 64%, transparent);")}>Scope, approach, timeline, and price. One document, no deck.</span></div></div>
                  <div data-reveal="up" data-reveal-delay="210" style={s("display:grid;grid-template-columns:auto minmax(0,1fr);gap:clamp(14px,2vw,26px);padding:15px 0;")}><span style={s("font-size:11px;letter-spacing:0.14em;color:color-mix(in srgb, var(--color-text) 40%, transparent);")}>04</span><div style={s("display:flex;flex-direction:column;gap:5px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(17px,1.6vw,22px);")}>We start</span><span style={s("font-size:14px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 64%, transparent);")}>Usually within two weeks of signing.</span></div></div>
                </div>
              </div>

              <div style={s("display:flex;flex-direction:column;gap:14px;border-top:1px solid var(--color-divider);padding-top:clamp(20px,3vh,30px);")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>Good fits</span>
                <div style={s("display:flex;flex-direction:column;gap:9px;")}>
                  <span style={s("font-size:15px;line-height:1.55;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>Founders with a product to get into production.</span>
                  <span style={s("font-size:15px;line-height:1.55;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>Teams whose internal process has outgrown spreadsheets.</span>
                  <span style={s("font-size:15px;line-height:1.55;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>Companies whose site no longer matches the business.</span>
                  <span style={s("font-size:15px;line-height:1.55;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>Anyone inheriting a build that needs a steady hand.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer data-screen-label="Footer" style={s("background:var(--color-bg);border-top:1px solid var(--color-divider);padding:clamp(50px,7vh,80px) 0 clamp(30px,4vh,44px);")}>
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
                <Link href="/about" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>About</Link>
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
