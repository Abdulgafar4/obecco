import { s } from '@/lib/style';
import Link from 'next/link';
import { ProductPreview } from '@/components/ProductPreview';
import { products } from '@/lib/products';

const tf = products.toolferry;
const ln = products.lien;
const cj = products.cleverjobs;
const cm = products.clevermart;

export function HomePage() {
  return (
    <>
      <section data-ref="hero" data-screen-label="Hero" data-parallax-scope="1" style={s("position:relative;min-height:100svh;overflow:hidden;")}>
          <div data-ref="canvasWrap" className="hero-canvas">
            <canvas data-ref="canvas" style={s("display:block;width:100%;height:100%;")}></canvas>
          </div>
          <div data-ref="heroInner" style={s("position:relative;z-index:1;min-height:100svh;max-width:1640px;margin:0 auto;padding:clamp(104px,13vh,150px) clamp(20px,3.6vw,56px) clamp(28px,4vh,44px);display:grid;grid-template-rows:auto 1fr auto;gap:clamp(24px,4vh,52px);")}>
            <div style={s("display:flex;align-items:center;gap:clamp(14px,2vw,28px);")}>
              <span data-reveal="in" style={s("font-size:11.5px;letter-spacing:0.22em;text-transform:uppercase;color:color-mix(in srgb, var(--color-text) 52%, transparent);white-space:nowrap;")}>Independent software company</span>
              <span style={s("flex:1;height:1px;background:var(--color-divider);")}></span>
              <span data-reveal="in" data-reveal-delay="120" style={s("font-size:11.5px;letter-spacing:0.22em;text-transform:uppercase;color:color-mix(in srgb, var(--color-text) 52%, transparent);white-space:nowrap;")}>Est. 2026</span>
            </div>
            <div style={s("align-self:end;display:flex;flex-direction:column;gap:clamp(20px,3vh,38px);")}>
              <h1 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(52px,10.6vw,178px);line-height:0.88;letter-spacing:-0.035em;text-wrap:balance;")}>
                <span style={s("display:block;overflow:hidden;padding-bottom:0.02em;")}><span data-reveal="mask" data-reveal-dur="1300" style={s("display:block;")}>We build software</span></span>
                <span style={s("display:block;overflow:hidden;padding-bottom:0.04em;")}><span data-reveal="mask" data-reveal-dur="1300" data-reveal-delay="140" style={s("display:flex;align-items:baseline;gap:0.14em;")}>that moves<span style={s("display:block;width:clamp(10px,1.1vw,20px);height:clamp(10px,1.1vw,20px);background:var(--color-accent);")}></span></span></span>
              </h1>
              <div style={s("display:flex;flex-wrap:wrap;align-items:flex-end;gap:clamp(24px,4vw,80px);")}>
                <p data-reveal="up" data-reveal-delay="360" style={s("margin:0;max-width:42ch;font-size:clamp(16px,1.2vw,19px);line-height:1.58;color:color-mix(in srgb, var(--color-text) 74%, transparent);")}>Digital products, websites, and software engineered from idea to production.</p>
                <div data-reveal="up" data-reveal-delay="480" style={s("display:flex;flex-wrap:wrap;gap:12px;")}>
                  <Link href="/contact" data-magnet="12" style={s("display:inline-flex;align-items:center;gap:12px;text-decoration:none;color:var(--color-bg);background:var(--color-accent);border:1px solid var(--color-accent);padding:14px 24px;font-family:var(--font-heading);font-weight:600;font-size:14px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;transition:background 280ms;")} className="oh-c3a899">Start a project<span style={s("width:16px;height:1px;background:currentColor;")}></span></Link>
                  <Link href="/products" data-magnet="12" style={s("display:inline-flex;align-items:center;gap:12px;text-decoration:none;color:var(--color-text);background:transparent;border:1px solid var(--color-divider);padding:14px 24px;font-family:var(--font-heading);font-weight:600;font-size:14px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;transition:border-color 280ms, color 280ms;")} className="oh-6a8b37">See our products</Link>
                </div>
              </div>
            </div>
            <div style={s("display:flex;align-items:flex-end;justify-content:space-between;gap:24px;")}>
              <div data-reveal="in" data-reveal-delay="700" style={s("display:flex;align-items:center;gap:14px;")}>
                <span style={s("position:relative;display:block;width:1px;height:44px;background:var(--color-divider);overflow:hidden;")}><span style={s("position:absolute;inset:0;background:var(--color-accent);animation:obeccoCue 2600ms cubic-bezier(.5,0,.5,1) infinite;")}></span></span>
                <span style={s("font-size:10.5px;letter-spacing:0.24em;text-transform:uppercase;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>Scroll</span>
              </div>
              <span data-reveal="in" data-reveal-delay="700" style={s("font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:color-mix(in srgb, var(--color-text) 40%, transparent);text-align:right;max-width:26ch;")}>Software services &nbsp;/&nbsp; Our own products</span>
            </div>
          </div>
        </section>

        <section data-ref="philStage" data-screen-label="Philosophy" style={s("position:relative;height:320vh;background:var(--color-bg);")}>
          <div style={s("position:sticky;top:0;height:100svh;display:flex;align-items:center;overflow:hidden;")}>
            <div style={s("width:100%;max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;gap:clamp(20px,4vw,72px);")}>
              <div style={s("flex:none;width:clamp(48px,7vw,120px);padding-top:8px;display:flex;flex-direction:column;gap:16px;")}>
                <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>01</span>
                <span style={s("position:relative;display:block;width:1px;height:clamp(90px,16vh,180px);background:var(--color-divider);")}><span data-ref="philRail" style={s("position:absolute;top:0;left:0;width:1px;height:0%;background:var(--color-accent);")}></span></span>
              </div>
              <div style={s("flex:1;min-width:0;display:flex;flex-direction:column;gap:clamp(18px,3vh,34px);")}>
                <p style={s("margin:0;max-width:46ch;font-size:clamp(14px,1vw,16.5px);line-height:1.6;color:color-mix(in srgb, var(--color-text) 58%, transparent);")}>From first idea to production, Obecco designs and engineers digital products built to last.</p>
                <div style={s("display:flex;flex-direction:column;gap:clamp(4px,1vh,14px);font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,5.6vw,92px);line-height:1.02;letter-spacing:-0.03em;")}>
                  <span data-ref="p1" style={s("display:block;transition:opacity 620ms cubic-bezier(.19,1,.22,1), transform 620ms cubic-bezier(.19,1,.22,1);")}>Ideas become products.</span>
                  <span data-ref="p2" style={s("display:block;transition:opacity 620ms cubic-bezier(.19,1,.22,1), transform 620ms cubic-bezier(.19,1,.22,1);")}>Products become systems.</span>
                  <span data-ref="p3" style={s("display:block;transition:opacity 620ms cubic-bezier(.19,1,.22,1), transform 620ms cubic-bezier(.19,1,.22,1);")}>Systems move businesses forward.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-screen-label="Services" style={s("padding:clamp(80px,11vh,150px) 0 clamp(90px,13vh,170px);border-top:1px solid var(--color-divider);")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(400px,100%),1fr));gap:clamp(44px,6vw,110px);")}>
            <div className="sticky-aside" style={s("align-self:start;position:sticky;top:clamp(96px,12vh,140px);display:flex;flex-direction:column;gap:clamp(20px,3vh,34px);padding-bottom:clamp(16px,2vh,24px);")}>
              <div style={s("display:flex;align-items:center;gap:14px;")}>
                <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>02</span>
                <span style={s("width:clamp(24px,3vw,54px);height:1px;background:var(--color-divider);")}></span>
                <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 50%, transparent);")}>What we build</span>
              </div>
              <h2 data-reveal="up" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(38px,5.4vw,88px);line-height:0.94;letter-spacing:-0.032em;max-width:14ch;")}>From blank page to shipped product.</h2>
              <p data-reveal="up" data-reveal-delay="90" style={s("margin:0;max-width:44ch;font-size:clamp(15px,1.05vw,17.5px);line-height:1.64;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>Obecco takes a client from strategy and UX through design, development, launch, and the iteration that follows. One team for the whole arc — no handoff gaps, no vendor relay.</p>
              <Link href="/services" style={s("display:inline-flex;align-items:center;gap:12px;align-self:flex-start;text-decoration:none;color:var(--color-accent-700);font-family:var(--font-heading);font-weight:600;font-size:14px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;border-bottom:1px solid var(--color-accent);padding-bottom:6px;")}>All services<span style={s("width:18px;height:1px;background:currentColor;")}></span></Link>
            </div>
            <div style={s("display:flex;flex-direction:column;border-top:1px solid var(--color-divider);")}>
              <Link href="/services#website" data-reveal="up" style={s("display:grid;grid-template-columns:auto 1fr auto;align-items:baseline;gap:clamp(14px,2vw,28px);padding:clamp(18px,2.4vh,28px) 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);transition:padding-left 420ms cubic-bezier(.19,1,.22,1), color 300ms;")} className="oh-89d237">
                <span style={s("font-size:11px;letter-spacing:0.14em;color:var(--color-accent-700);")}>01</span>
                <span style={s("display:flex;flex-direction:column;gap:6px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(22px,2.5vw,38px);line-height:1.08;letter-spacing:-0.02em;")}>Website Design &amp; Development</span><span style={s("font-size:14px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 60%, transparent);max-width:44ch;")}>Marketing sites and editorial experiences that load fast and read well.</span></span>
                <span style={s("width:20px;height:1px;background:var(--color-divider);")}></span>
              </Link>
              <Link href="/services#apps" data-reveal="up" style={s("display:grid;grid-template-columns:auto 1fr auto;align-items:baseline;gap:clamp(14px,2vw,28px);padding:clamp(18px,2.4vh,28px) 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);transition:padding-left 420ms cubic-bezier(.19,1,.22,1), color 300ms;")} className="oh-89d237">
                <span style={s("font-size:11px;letter-spacing:0.14em;color:var(--color-accent-700);")}>02</span>
                <span style={s("display:flex;flex-direction:column;gap:6px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(22px,2.5vw,38px);line-height:1.08;letter-spacing:-0.02em;")}>Custom Web Applications</span><span style={s("font-size:14px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 60%, transparent);max-width:44ch;")}>Dashboards, portals, and internal tools built around a real workflow.</span></span>
                <span style={s("width:20px;height:1px;background:var(--color-divider);")}></span>
              </Link>
              <Link href="/services#product" data-reveal="up" style={s("display:grid;grid-template-columns:auto 1fr auto;align-items:baseline;gap:clamp(14px,2vw,28px);padding:clamp(18px,2.4vh,28px) 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);transition:padding-left 420ms cubic-bezier(.19,1,.22,1), color 300ms;")} className="oh-89d237">
                <span style={s("font-size:11px;letter-spacing:0.14em;color:var(--color-accent-700);")}>03</span>
                <span style={s("display:flex;flex-direction:column;gap:6px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(22px,2.5vw,38px);line-height:1.08;letter-spacing:-0.02em;")}>Product Engineering</span><span style={s("font-size:14px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 60%, transparent);max-width:44ch;")}>Full product builds — architecture, auth, data, payments, deployment.</span></span>
                <span style={s("width:20px;height:1px;background:var(--color-divider);")}></span>
              </Link>
              <Link href="/services#design" data-reveal="up" style={s("display:grid;grid-template-columns:auto 1fr auto;align-items:baseline;gap:clamp(14px,2vw,28px);padding:clamp(18px,2.4vh,28px) 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);transition:padding-left 420ms cubic-bezier(.19,1,.22,1), color 300ms;")} className="oh-89d237">
                <span style={s("font-size:11px;letter-spacing:0.14em;color:var(--color-accent-700);")}>04</span>
                <span style={s("display:flex;flex-direction:column;gap:6px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(22px,2.5vw,38px);line-height:1.08;letter-spacing:-0.02em;")}>UI/UX &amp; Design Systems</span><span style={s("font-size:14px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 60%, transparent);max-width:44ch;")}>Research, flows, interface design, and a component system that holds.</span></span>
                <span style={s("width:20px;height:1px;background:var(--color-divider);")}></span>
              </Link>
              <Link href="/services#commerce" data-reveal="up" style={s("display:grid;grid-template-columns:auto 1fr auto;align-items:baseline;gap:clamp(14px,2vw,28px);padding:clamp(18px,2.4vh,28px) 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);transition:padding-left 420ms cubic-bezier(.19,1,.22,1), color 300ms;")} className="oh-89d237">
                <span style={s("font-size:11px;letter-spacing:0.14em;color:var(--color-accent-700);")}>05</span>
                <span style={s("display:flex;flex-direction:column;gap:6px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(22px,2.5vw,38px);line-height:1.08;letter-spacing:-0.02em;")}>E-commerce</span><span style={s("font-size:14px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 60%, transparent);max-width:44ch;")}>Storefronts, checkout, and catalogue on a modern commerce stack.</span></span>
                <span style={s("width:20px;height:1px;background:var(--color-divider);")}></span>
              </Link>
              <Link href="/services#integrations" data-reveal="up" style={s("display:grid;grid-template-columns:auto 1fr auto;align-items:baseline;gap:clamp(14px,2vw,28px);padding:clamp(18px,2.4vh,28px) 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);transition:padding-left 420ms cubic-bezier(.19,1,.22,1), color 300ms;")} className="oh-89d237">
                <span style={s("font-size:11px;letter-spacing:0.14em;color:var(--color-accent-700);")}>06</span>
                <span style={s("display:flex;flex-direction:column;gap:6px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(22px,2.5vw,38px);line-height:1.08;letter-spacing:-0.02em;")}>Integrations &amp; Automation</span><span style={s("font-size:14px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 60%, transparent);max-width:44ch;")}>APIs, webhooks, and the quiet plumbing that removes manual work.</span></span>
                <span style={s("width:20px;height:1px;background:var(--color-divider);")}></span>
              </Link>
              <Link href="/services#maintenance" data-reveal="up" style={s("display:grid;grid-template-columns:auto 1fr auto;align-items:baseline;gap:clamp(14px,2vw,28px);padding:clamp(18px,2.4vh,28px) 0;text-decoration:none;color:var(--color-text);transition:padding-left 420ms cubic-bezier(.19,1,.22,1), color 300ms;")} className="oh-89d237">
                <span style={s("font-size:11px;letter-spacing:0.14em;color:var(--color-accent-700);")}>07</span>
                <span style={s("display:flex;flex-direction:column;gap:6px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(22px,2.5vw,38px);line-height:1.08;letter-spacing:-0.02em;")}>Maintenance &amp; Iteration</span><span style={s("font-size:14px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 60%, transparent);max-width:44ch;")}>Ongoing releases, monitoring, and improvements long after launch.</span></span>
                <span style={s("width:20px;height:1px;background:var(--color-divider);")}></span>
              </Link>
            </div>
          </div>
        </section>

        <section data-screen-label="Products" style={s("padding:clamp(80px,11vh,150px) 0 clamp(60px,8vh,110px);background:var(--color-surface);border-top:1px solid var(--color-divider);")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);")}>
            <div style={s("display:flex;align-items:center;gap:14px;margin-bottom:clamp(24px,4vh,44px);")}>
              <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>03</span>
              <span style={s("width:clamp(24px,3vw,54px);height:1px;background:var(--color-divider);")}></span>
              <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 50%, transparent);")}>Built by Obecco</span>
            </div>
            <h2 data-reveal="up" style={s("margin:0 0 clamp(20px,3vh,32px);font-family:var(--font-heading);font-weight:600;font-size:clamp(34px,5.2vw,86px);line-height:0.96;letter-spacing:-0.032em;max-width:24ch;")}>We don&apos;t only build software for others. We build the things we believe should exist.</h2>
            <p data-reveal="up" data-reveal-delay="90" style={s("margin:0;max-width:52ch;font-size:clamp(15px,1.05vw,17.5px);line-height:1.64;color:color-mix(in srgb, var(--color-text) 68%, transparent);")}>Four products in the studio. Three live and in production, one in motion. The same team, the same standard as our client work.</p>
          </div>

          <div style={s("max-width:1640px;margin:clamp(56px,9vh,120px) auto 0;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(64px,10vh,140px);")}>

            <article data-parallax-scope="1" style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(380px,100%),1fr));gap:clamp(32px,4.5vw,80px);align-items:center;")}>
              <div style={s("display:flex;flex-direction:column;gap:clamp(14px,2vh,22px);")}>
                <div style={s("display:flex;align-items:baseline;gap:clamp(14px,2vw,26px);")}>
                  <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(46px,7vw,116px);line-height:0.8;letter-spacing:-0.04em;color:color-mix(in srgb, var(--color-accent) 34%, transparent);")}>{ln.index}</span>
                  <span className="tag tag-accent" style={s("letter-spacing:0.14em;text-transform:uppercase;font-size:10px;white-space:nowrap;")}>Shipped / In production</span>
                </div>
                <h3 data-reveal="up" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(38px,5vw,80px);line-height:0.94;letter-spacing:-0.03em;")}>{ln.name}</h3>
                <p data-reveal="up" data-reveal-delay="80" style={s("margin:0;max-width:44ch;font-size:clamp(15px,1.05vw,17.5px);line-height:1.64;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>{ln.homeDescription}</p>
                <Link href="/products#lien" data-magnet="10" style={s("display:inline-flex;align-items:center;gap:12px;align-self:flex-start;margin-top:6px;text-decoration:none;color:var(--color-bg);background:var(--color-accent);border:1px solid var(--color-accent);padding:13px 22px;font-family:var(--font-heading);font-weight:600;font-size:13.5px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;transition:background 280ms;")} className="oh-c3a899">Explore Lien<span style={s("width:16px;height:1px;background:currentColor;")}></span></Link>
              </div>
              <ProductPreview src={ln.preview} alt={`${ln.name} — ${ln.tagline}`} label={ln.previewLabel} aspectRatio="16/11" parallax={34} follow={16} />
            </article>

            <article data-parallax-scope="1" style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(380px,100%),1fr));gap:clamp(32px,4.5vw,80px);align-items:center;")}>
              <ProductPreview src={tf.preview} alt={`${tf.name} — ${tf.tagline}`} label={tf.previewLabel} aspectRatio="16/11" parallax={34} follow={16} />
              <div style={s("display:flex;flex-direction:column;gap:clamp(14px,2vh,22px);")}>
                <div style={s("display:flex;align-items:baseline;gap:clamp(14px,2vw,26px);")}>
                  <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(46px,7vw,116px);line-height:0.8;letter-spacing:-0.04em;color:color-mix(in srgb, var(--color-accent) 34%, transparent);")}>{tf.index}</span>
                  <span className="tag tag-accent" style={s("letter-spacing:0.14em;text-transform:uppercase;font-size:10px;white-space:nowrap;")}>Shipped / In production</span>
                </div>
                <h3 data-reveal="up" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(38px,5vw,80px);line-height:0.94;letter-spacing:-0.03em;")}>{tf.name}</h3>
                <p data-reveal="up" data-reveal-delay="80" style={s("margin:0;max-width:44ch;font-size:clamp(15px,1.05vw,17.5px);line-height:1.64;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>{tf.homeDescription}</p>
                <Link href="/products#toolferry" data-magnet="10" style={s("display:inline-flex;align-items:center;gap:12px;align-self:flex-start;margin-top:6px;text-decoration:none;color:var(--color-bg);background:var(--color-accent);border:1px solid var(--color-accent);padding:13px 22px;font-family:var(--font-heading);font-weight:600;font-size:13.5px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;transition:background 280ms;")} className="oh-c3a899">Explore ToolFerry<span style={s("width:16px;height:1px;background:currentColor;")}></span></Link>
              </div>
            </article>

            <article data-parallax-scope="1" style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(380px,100%),1fr));gap:clamp(32px,4.5vw,80px);align-items:center;")}>
              <ProductPreview src={cj.preview} alt={`${cj.name} — ${cj.tagline}`} label={cj.previewLabel} aspectRatio="16/11" parallax={24} />
              <div style={s("display:flex;flex-direction:column;gap:clamp(14px,2vh,22px);")}>
                <div style={s("display:flex;align-items:baseline;gap:clamp(14px,2vw,26px);")}>
                  <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(46px,7vw,116px);line-height:0.8;letter-spacing:-0.04em;color:color-mix(in srgb, var(--color-accent) 34%, transparent);")}>{cj.index}</span>
                  <span className="tag tag-accent" style={s("letter-spacing:0.14em;text-transform:uppercase;font-size:10px;white-space:nowrap;")}>Shipped / In production</span>
                </div>
                <h3 data-reveal="up" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(38px,5vw,80px);line-height:0.94;letter-spacing:-0.03em;")}>{cj.name}</h3>
                <p data-reveal="up" data-reveal-delay="80" style={s("margin:0;max-width:44ch;font-size:clamp(15px,1.05vw,17.5px);line-height:1.64;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>{cj.homeDescription}</p>
                <Link href="/products#cleverjobs" data-magnet="10" style={s("display:inline-flex;align-items:center;gap:12px;align-self:flex-start;margin-top:6px;text-decoration:none;color:var(--color-bg);background:var(--color-accent);border:1px solid var(--color-accent);padding:13px 22px;font-family:var(--font-heading);font-weight:600;font-size:13.5px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;transition:background 280ms;")} className="oh-c3a899">Explore CleverJobs<span style={s("width:16px;height:1px;background:currentColor;")}></span></Link>
              </div>
            </article>

            <article data-parallax-scope="1" style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(380px,100%),1fr));gap:clamp(32px,4.5vw,80px);align-items:center;")}>
              <div style={s("display:flex;flex-direction:column;gap:clamp(14px,2vh,22px);")}>
                <div style={s("display:flex;align-items:baseline;gap:clamp(14px,2vw,26px);")}>
                  <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(46px,7vw,116px);line-height:0.8;letter-spacing:-0.04em;color:color-mix(in srgb, var(--color-text) 16%, transparent);")}>{cm.index}</span>
                  <span className="tag tag-outline" style={s("letter-spacing:0.14em;text-transform:uppercase;font-size:10px;white-space:nowrap;")}>In progress</span>
                </div>
                <h3 data-reveal="up" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(38px,5vw,80px);line-height:0.94;letter-spacing:-0.03em;")}>{cm.name}</h3>
                <p data-reveal="up" data-reveal-delay="80" style={s("margin:0;max-width:44ch;font-size:clamp(15px,1.05vw,17.5px);line-height:1.64;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>{cm.homeDescription}</p>
                <Link href="/products#clevermart" data-magnet="10" style={s("display:inline-flex;align-items:center;gap:12px;align-self:flex-start;margin-top:6px;text-decoration:none;color:var(--color-text);background:transparent;border:1px solid var(--color-divider);padding:13px 22px;font-family:var(--font-heading);font-weight:600;font-size:13.5px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;transition:border-color 280ms, color 280ms;")} className="oh-6a8b37">View progress<span style={s("width:16px;height:1px;background:currentColor;")}></span></Link>
              </div>
              <div data-follow="14" data-parallax="30" style={s("position:relative;")}>
                <div data-follow-target="1" className="blueprint" style={s("position:relative;aspect-ratio:16/11;background:var(--color-bg);transition:transform 200ms linear;")}>
                  <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
                  <div style={s("position:absolute;inset:0;background-image:repeating-linear-gradient(135deg, color-mix(in srgb, var(--color-text) 5%, transparent) 0 1px, transparent 1px 9px);")}></div>
                  <div style={s("position:absolute;inset:0;padding:clamp(16px,2vw,30px);display:flex;flex-direction:column;gap:clamp(12px,1.6vw,20px);")}>
                    <div style={s("display:flex;align-items:center;gap:10px;")}>
                      <span style={s("font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:color-mix(in srgb, var(--color-text) 48%, transparent);")}>{cm.previewLabel}</span>
                      <span style={s("flex:1;height:1px;background:var(--color-divider);")}></span>
                    </div>
                    <div style={s("flex:1;display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(8px,1vw,14px);")}>
                      <div style={s("border:1px solid var(--color-divider);background:var(--color-bg);display:flex;flex-direction:column;justify-content:flex-end;gap:5px;padding:8px;")}><span style={s("width:64%;height:2px;background:color-mix(in srgb, var(--color-text) 26%, transparent);")}></span><span style={s("width:34%;height:2px;background:var(--color-accent);")}></span></div>
                      <div style={s("border:1px solid var(--color-divider);background:var(--color-bg);display:flex;flex-direction:column;justify-content:flex-end;gap:5px;padding:8px;")}><span style={s("width:52%;height:2px;background:color-mix(in srgb, var(--color-text) 26%, transparent);")}></span><span style={s("width:28%;height:2px;background:var(--color-accent);")}></span></div>
                      <div style={s("border:1px dashed color-mix(in srgb, var(--color-text) 26%, transparent);display:grid;place-items:center;")}><span style={s("font-size:9.5px;letter-spacing:0.16em;text-transform:uppercase;color:color-mix(in srgb, var(--color-text) 34%, transparent);")}>Next</span></div>
                    </div>
                    <div style={s("display:flex;flex-direction:column;gap:7px;")}>
                      <div style={s("height:2px;background:color-mix(in srgb, var(--color-text) 12%, transparent);")}><div data-ref="cmBar" style={s("width:0%;height:2px;background:var(--color-accent);transition:width 1600ms cubic-bezier(.19,1,.22,1);")}></div></div>
                      <div style={s("display:flex;justify-content:space-between;font-size:9.5px;letter-spacing:0.16em;text-transform:uppercase;color:color-mix(in srgb, var(--color-text) 38%, transparent);")}><span>Catalogue</span><span>Checkout</span><span>Launch</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section data-screen-label="Production vs in progress" style={s("background:var(--color-surface);padding:clamp(60px,9vh,120px) 0 clamp(80px,11vh,150px);")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);")}>
            <div style={s("height:1px;background:var(--color-divider);margin-bottom:clamp(30px,5vh,56px);")}></div>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr));gap:clamp(32px,5vw,90px);")}>
              <div data-reveal="up" style={s("display:flex;flex-direction:column;gap:18px;")}>
                <div style={s("display:flex;align-items:baseline;justify-content:space-between;gap:16px;")}>
                  <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>In production</span>
                  <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(34px,4vw,62px);line-height:0.8;letter-spacing:-0.03em;color:var(--color-accent-700);")}>03</span>
                </div>
                <div style={s("height:1px;background:var(--color-accent);")}></div>
                <div style={s("display:flex;flex-direction:column;")}>
                  <div style={s("display:flex;flex-direction:column;gap:5px;padding:16px 0;border-bottom:1px solid var(--color-divider);")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(20px,2vw,28px);")}>{ln.name}</span><span style={s("font-size:14px;color:color-mix(in srgb, var(--color-text) 60%, transparent);")}>Live. {ln.tagline}</span></div>
                  <div style={s("display:flex;flex-direction:column;gap:5px;padding:16px 0;border-bottom:1px solid var(--color-divider);")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(20px,2vw,28px);")}>{tf.name}</span><span style={s("font-size:14px;color:color-mix(in srgb, var(--color-text) 60%, transparent);")}>Live. {tf.tagline}</span></div>
                  <div style={s("display:flex;flex-direction:column;gap:5px;padding:16px 0;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(20px,2vw,28px);")}>{cj.name}</span><span style={s("font-size:14px;color:color-mix(in srgb, var(--color-text) 60%, transparent);")}>Live. {cj.tagline}</span></div>
                </div>
              </div>
              <div data-reveal="up" data-reveal-delay="120" style={s("display:flex;flex-direction:column;gap:18px;")}>
                <div style={s("display:flex;align-items:baseline;justify-content:space-between;gap:16px;")}>
                  <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 50%, transparent);")}>In progress</span>
                  <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(34px,4vw,62px);line-height:0.8;letter-spacing:-0.03em;color:color-mix(in srgb, var(--color-text) 30%, transparent);")}>01</span>
                </div>
                <div style={s("height:1px;background:var(--color-divider);")}></div>
                <div style={s("display:flex;flex-direction:column;")}>
                  <div style={s("display:flex;flex-direction:column;gap:5px;padding:16px 0;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(20px,2vw,28px);")}>{cm.name}</span><span style={s("font-size:14px;color:color-mix(in srgb, var(--color-text) 60%, transparent);")}>Active build. Storefront and checkout in progress.</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section data-ref="procStage" data-screen-label="How we work" style={s("position:relative;height:340vh;background:var(--color-bg);border-top:1px solid var(--color-divider);")}>
          <div data-ref="procSticky" style={s("position:sticky;top:0;height:100svh;display:flex;flex-direction:column;justify-content:center;gap:clamp(24px,5vh,54px);overflow:hidden;")}>
            <div style={s("max-width:1640px;width:100%;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:20px;")}>
              <div style={s("display:flex;flex-direction:column;gap:14px;")}>
                <div style={s("display:flex;align-items:center;gap:14px;")}>
                  <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>04</span>
                  <span style={s("width:clamp(24px,3vw,54px);height:1px;background:var(--color-divider);")}></span>
                  <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 50%, transparent);")}>How we work</span>
                </div>
                <h2 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(32px,4.6vw,74px);line-height:0.96;letter-spacing:-0.03em;")}>Six steps, every time.</h2>
              </div>
              <p style={s("margin:0;max-width:38ch;font-size:clamp(14px,1vw,16.5px);line-height:1.6;color:color-mix(in srgb, var(--color-text) 64%, transparent);")}>The same sequence whether we are building for a client or for ourselves. It is what keeps a build predictable.</p>
            </div>
            <div style={s("width:100%;overflow:hidden;")}>
              <div data-ref="procTrack" style={s("display:flex;gap:clamp(20px,2.4vw,40px);padding:0 clamp(20px,3.6vw,56px);will-change:transform;")}>
                <div style={s("flex:none;width:clamp(230px,26vw,340px);display:flex;flex-direction:column;gap:14px;border-top:1px solid var(--color-accent);padding-top:18px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,3.4vw,52px);line-height:0.85;color:var(--color-accent-700);")}>01</span><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(20px,2vw,30px);")}>Discover</span><span style={s("font-size:14px;line-height:1.56;color:color-mix(in srgb, var(--color-text) 66%, transparent);")}>We learn the business, the users, and the constraints before proposing anything.</span></div>
                <div style={s("flex:none;width:clamp(230px,26vw,340px);display:flex;flex-direction:column;gap:14px;border-top:1px solid var(--color-divider);padding-top:18px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,3.4vw,52px);line-height:0.85;color:color-mix(in srgb, var(--color-text) 26%, transparent);")}>02</span><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(20px,2vw,30px);")}>Define</span><span style={s("font-size:14px;line-height:1.56;color:color-mix(in srgb, var(--color-text) 66%, transparent);")}>Scope, architecture, and success criteria written down. No surprises later.</span></div>
                <div style={s("flex:none;width:clamp(230px,26vw,340px);display:flex;flex-direction:column;gap:14px;border-top:1px solid var(--color-divider);padding-top:18px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,3.4vw,52px);line-height:0.85;color:color-mix(in srgb, var(--color-text) 26%, transparent);")}>03</span><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(20px,2vw,30px);")}>Design</span><span style={s("font-size:14px;line-height:1.56;color:color-mix(in srgb, var(--color-text) 66%, transparent);")}>Interface, flows, and a component system that survives real content.</span></div>
                <div style={s("flex:none;width:clamp(230px,26vw,340px);display:flex;flex-direction:column;gap:14px;border-top:1px solid var(--color-divider);padding-top:18px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,3.4vw,52px);line-height:0.85;color:color-mix(in srgb, var(--color-text) 26%, transparent);")}>04</span><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(20px,2vw,30px);")}>Build</span><span style={s("font-size:14px;line-height:1.56;color:color-mix(in srgb, var(--color-text) 66%, transparent);")}>Typed, reviewed, tested code — written to be handed over and extended.</span></div>
                <div style={s("flex:none;width:clamp(230px,26vw,340px);display:flex;flex-direction:column;gap:14px;border-top:1px solid var(--color-divider);padding-top:18px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,3.4vw,52px);line-height:0.85;color:color-mix(in srgb, var(--color-text) 26%, transparent);")}>05</span><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(20px,2vw,30px);")}>Ship</span><span style={s("font-size:14px;line-height:1.56;color:color-mix(in srgb, var(--color-text) 66%, transparent);")}>Deploy, monitor, document. A launch is a checklist, not an event.</span></div>
                <div style={s("flex:none;width:clamp(230px,26vw,340px);display:flex;flex-direction:column;gap:14px;border-top:1px solid var(--color-divider);padding-top:18px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,3.4vw,52px);line-height:0.85;color:color-mix(in srgb, var(--color-text) 26%, transparent);")}>06</span><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(20px,2vw,30px);")}>Improve</span><span style={s("font-size:14px;line-height:1.56;color:color-mix(in srgb, var(--color-text) 66%, transparent);")}>Measure, iterate, extend. Software is never finished, only in service.</span></div>
              </div>
            </div>
            <div style={s("max-width:1640px;width:100%;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);")}>
              <div style={s("height:1px;background:var(--color-divider);position:relative;")}><div data-ref="procBar" style={s("position:absolute;top:0;left:0;height:1px;width:0%;background:var(--color-accent);")}></div></div>
            </div>
          </div>
        </section>

        <section data-screen-label="Proof" style={s("padding:clamp(80px,11vh,150px) 0;border-top:1px solid var(--color-divider);")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(30px,5vh,54px);")}>
            <div style={s("display:flex;align-items:center;gap:14px;")}>
              <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>05</span>
              <span style={s("width:clamp(24px,3vw,54px);height:1px;background:var(--color-divider);")}></span>
              <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 50%, transparent);")}>Where we stand</span>
            </div>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr));gap:clamp(24px,3vw,56px);")}>
              <div data-reveal="up" style={s("display:flex;flex-direction:column;gap:10px;border-top:1px solid var(--color-divider);padding-top:20px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(56px,7vw,120px);line-height:0.82;letter-spacing:-0.04em;")}>04</span><span style={s("font-size:13.5px;letter-spacing:0.06em;color:color-mix(in srgb, var(--color-text) 62%, transparent);")}>Products in our studio</span></div>
              <div data-reveal="up" data-reveal-delay="90" style={s("display:flex;flex-direction:column;gap:10px;border-top:1px solid var(--color-divider);padding-top:20px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(56px,7vw,120px);line-height:0.82;letter-spacing:-0.04em;color:var(--color-accent-700);")}>02</span><span style={s("font-size:13.5px;letter-spacing:0.06em;color:color-mix(in srgb, var(--color-text) 62%, transparent);")}>Shipped and in production</span></div>
              <div data-reveal="up" data-reveal-delay="180" style={s("display:flex;flex-direction:column;gap:10px;border-top:1px solid var(--color-divider);padding-top:20px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(56px,7vw,120px);line-height:0.82;letter-spacing:-0.04em;")}>02</span><span style={s("font-size:13.5px;letter-spacing:0.06em;color:color-mix(in srgb, var(--color-text) 62%, transparent);")}>In progress or development</span></div>
              <div data-reveal="up" data-reveal-delay="270" style={s("display:flex;flex-direction:column;gap:10px;border-top:1px solid var(--color-divider);padding-top:20px;")}><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(56px,7vw,120px);line-height:0.82;letter-spacing:-0.04em;")}>07</span><span style={s("font-size:13.5px;letter-spacing:0.06em;color:color-mix(in srgb, var(--color-text) 62%, transparent);")}>Services we take on</span></div>
            </div>
          </div>
        </section>

        <section data-screen-label="Final CTA" style={s("position:relative;background:var(--color-accent-900);color:var(--color-bg);padding:clamp(90px,14vh,180px) 0;overflow:hidden;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(28px,5vh,54px);")}>
            <span data-reveal="up" style={s("font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:color-mix(in srgb, var(--color-bg) 58%, transparent);")}>Start a project</span>
            <h2 data-reveal="up" data-reveal-delay="80" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(42px,8vw,142px);line-height:0.9;letter-spacing:-0.035em;max-width:18ch;")}>Have something worth building?</h2>
            <div style={s("display:flex;flex-wrap:wrap;align-items:center;gap:clamp(20px,3vw,48px);")}>
              <Link href="/contact" data-magnet="14" data-reveal="up" data-reveal-delay="160" style={s("display:inline-flex;align-items:center;gap:14px;text-decoration:none;color:var(--color-accent-900);background:var(--color-bg);border:1px solid var(--color-bg);padding:16px 28px;font-family:var(--font-heading);font-weight:600;font-size:15px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;transition:background 280ms, color 280ms;")} className="oh-c783c2">Let&apos;s build it<span style={s("width:18px;height:1px;background:currentColor;")}></span></Link>
              <a href="mailto:hello@obecco.com" data-reveal="up" data-reveal-delay="220" style={s("text-decoration:none;color:color-mix(in srgb, var(--color-bg) 78%, transparent);font-size:15px;letter-spacing:0.08em;border-bottom:1px solid color-mix(in srgb, var(--color-bg) 40%, transparent);padding-bottom:4px;")}>hello@obecco.com</a>
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
                <Link href="/services" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Services</Link>
                <Link href="/products" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Products</Link>
                <Link href="/about" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>About</Link>
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
