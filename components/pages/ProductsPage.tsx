import { s } from '@/lib/style';
import Link from 'next/link';
import { ProductPreview } from '@/components/ProductPreview';
import { products } from '@/lib/products';

const tf = products.toolferry;
const ln = products.lien;
const cj = products.cleverjobs;
const cm = products.clevermart;

export function ProductsPage() {
  return (
    <>
      <section data-screen-label="Products header" style={s("padding:clamp(130px,20vh,220px) 0 clamp(44px,6vh,80px);")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(24px,4vh,44px);")}>
            <div style={s("display:flex;align-items:center;gap:14px;")}>
              <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>Products</span>
              <span style={s("width:clamp(24px,3vw,54px);height:1px;background:var(--color-divider);")}></span>
              <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 50%, transparent);")}>Built by Obecco</span>
            </div>
            <h1 data-reveal="up" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,7.6vw,130px);line-height:0.88;letter-spacing:-0.035em;max-width:16ch;")}>Four products, in our own studio.</h1>
            <p data-reveal="up" data-reveal-delay="90" style={s("margin:0;max-width:52ch;font-size:clamp(16px,1.15vw,19px);line-height:1.6;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>Three live and in production, one in motion. We fund them ourselves, ship them under our own name, and hold them to the same standard as client work — which is how we know the standard holds.</p>
          </div>
        </section>

        <section data-screen-label="Product index" style={s("padding:0 0 clamp(50px,7vh,90px);")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);")}>
            <div data-reveal="up" style={s("display:flex;flex-direction:column;border-top:1px solid var(--color-divider);")}>
              <a href="#lien" style={s("display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:baseline;gap:clamp(14px,2.4vw,34px);padding:clamp(13px,1.6vh,18px) 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);transition:padding-left 380ms cubic-bezier(.19,1,.22,1), color 260ms;")} className="oh-e8c858">
                <span style={s("font-size:11px;letter-spacing:0.14em;color:var(--color-accent-700);")}>{ln.index}</span>
                <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(20px,2.2vw,32px);letter-spacing:-0.02em;")}>{ln.name}</span>
                <span className="tag tag-accent" style={s("letter-spacing:0.14em;text-transform:uppercase;font-size:10px;white-space:nowrap;")}>In production</span>
              </a>
              <a href="#toolferry" style={s("display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:baseline;gap:clamp(14px,2.4vw,34px);padding:clamp(13px,1.6vh,18px) 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);transition:padding-left 380ms cubic-bezier(.19,1,.22,1), color 260ms;")} className="oh-e8c858">
                <span style={s("font-size:11px;letter-spacing:0.14em;color:var(--color-accent-700);")}>{tf.index}</span>
                <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(20px,2.2vw,32px);letter-spacing:-0.02em;")}>{tf.name}</span>
                <span className="tag tag-accent" style={s("letter-spacing:0.14em;text-transform:uppercase;font-size:10px;white-space:nowrap;")}>In production</span>
              </a>
              <a href="#cleverjobs" style={s("display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:baseline;gap:clamp(14px,2.4vw,34px);padding:clamp(13px,1.6vh,18px) 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);transition:padding-left 380ms cubic-bezier(.19,1,.22,1), color 260ms;")} className="oh-e8c858">
                <span style={s("font-size:11px;letter-spacing:0.14em;color:var(--color-accent-700);")}>{cj.index}</span>
                <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(20px,2.2vw,32px);letter-spacing:-0.02em;")}>{cj.name}</span>
                <span className="tag tag-accent" style={s("letter-spacing:0.14em;text-transform:uppercase;font-size:10px;white-space:nowrap;")}>In production</span>
              </a>
              <a href="#clevermart" style={s("display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:baseline;gap:clamp(14px,2.4vw,34px);padding:clamp(13px,1.6vh,18px) 0;text-decoration:none;color:var(--color-text);transition:padding-left 380ms cubic-bezier(.19,1,.22,1), color 260ms;")} className="oh-e8c858">
                <span style={s("font-size:11px;letter-spacing:0.14em;color:color-mix(in srgb, var(--color-text) 40%, transparent);")}>{cm.index}</span>
                <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(20px,2.2vw,32px);letter-spacing:-0.02em;")}>{cm.name}</span>
                <span className="tag tag-outline" style={s("letter-spacing:0.14em;text-transform:uppercase;font-size:10px;white-space:nowrap;")}>In progress</span>
              </a>
            </div>
          </div>
        </section>

        <section id="lien" data-screen-label="Lien" data-parallax-scope="1" style={s("border-top:1px solid var(--color-divider);padding:clamp(56px,8vh,110px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(32px,5vh,60px);")}>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(380px,100%),1fr));gap:clamp(28px,4vw,80px);align-items:end;")}>
              <div style={s("display:flex;flex-direction:column;gap:16px;")}>
                <div style={s("display:flex;align-items:baseline;gap:clamp(14px,2vw,26px);")}>
                  <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,6vw,104px);line-height:0.8;letter-spacing:-0.04em;color:color-mix(in srgb, var(--color-accent) 32%, transparent);")}>{ln.index}</span>
                  <span className="tag tag-accent" style={s("letter-spacing:0.14em;text-transform:uppercase;font-size:10px;white-space:nowrap;")}>Shipped / In production</span>
                </div>
                <h2 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(38px,5.4vw,88px);line-height:0.92;letter-spacing:-0.032em;")}>{ln.name}</h2>
                <p style={s("margin:0;max-width:46ch;font-size:clamp(16px,1.15vw,19px);line-height:1.6;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>{ln.description}</p>
                <a href={ln.url} target="_blank" rel="noopener noreferrer" style={s("display:inline-flex;align-items:center;gap:10px;align-self:flex-start;text-decoration:none;color:var(--color-accent-700);font-size:13px;letter-spacing:0.08em;border-bottom:1px solid var(--color-accent);padding-bottom:4px;")}>Visit joinlien.com<span style={s("width:14px;height:1px;background:currentColor;")}></span></a>
              </div>
              <ProductPreview src={ln.preview} alt={`${ln.name} — ${ln.tagline}`} label={ln.previewLabel} parallax={26} follow={14} />
            </div>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr));gap:1px;background:var(--color-divider);border:1px solid var(--color-divider);")}>
              {ln.steps!.map((step) => (
                <div key={step.title} data-reveal="up" data-reveal-delay={step.delay} style={s("background:var(--color-bg);padding:clamp(18px,2.2vw,28px);display:flex;flex-direction:column;gap:9px;")}>
                  <span style={s(`font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;white-space:nowrap;color:${step.label === "Step 01" ? "var(--color-accent-700)" : "color-mix(in srgb, var(--color-text) 45%, transparent)"};`)}>{step.label}</span>
                  <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(18px,1.8vw,25px);")}>{step.title}</span>
                  <span style={s("font-size:14.5px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>{step.description}</span>
                </div>
              ))}
            </div>
            <div style={s("display:flex;flex-wrap:wrap;align-items:center;gap:clamp(16px,2.4vw,32px);border-top:1px solid var(--color-divider);padding-top:22px;")}>
              <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>Status</span>
              <span style={s("font-size:15px;color:color-mix(in srgb, var(--color-text) 74%, transparent);")}>{ln.statusNote}</span>
            </div>
          </div>
        </section>

        <section id="toolferry" data-screen-label="ToolFerry" data-parallax-scope="1" style={s("border-top:1px solid var(--color-divider);background:var(--color-surface);padding:clamp(56px,8vh,110px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(32px,5vh,60px);")}>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(380px,100%),1fr));gap:clamp(28px,4vw,80px);align-items:end;")}>
              <ProductPreview src={tf.preview} alt={`${tf.name} — ${tf.tagline}`} label={tf.previewLabel} parallax={26} follow={14} />
              <div style={s("display:flex;flex-direction:column;gap:16px;")}>
                <div style={s("display:flex;align-items:baseline;gap:clamp(14px,2vw,26px);")}>
                  <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,6vw,104px);line-height:0.8;letter-spacing:-0.04em;color:color-mix(in srgb, var(--color-accent) 32%, transparent);")}>{tf.index}</span>
                  <span className="tag tag-accent" style={s("letter-spacing:0.14em;text-transform:uppercase;font-size:10px;white-space:nowrap;")}>Shipped / In production</span>
                </div>
                <h2 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(38px,5.4vw,88px);line-height:0.92;letter-spacing:-0.032em;")}>{tf.name}</h2>
                <p style={s("margin:0;max-width:46ch;font-size:clamp(16px,1.15vw,19px);line-height:1.6;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>{tf.description}</p>
                <a href={tf.url} target="_blank" rel="noopener noreferrer" style={s("display:inline-flex;align-items:center;gap:10px;align-self:flex-start;text-decoration:none;color:var(--color-accent-700);font-size:13px;letter-spacing:0.08em;border-bottom:1px solid var(--color-accent);padding-bottom:4px;")}>Visit toolferry.org<span style={s("width:14px;height:1px;background:currentColor;")}></span></a>
              </div>
            </div>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(230px,100%),1fr));gap:1px;background:var(--color-divider);border:1px solid var(--color-divider);")}>
              {tf.features!.map((f) => (
                <div key={f.label} data-reveal="up" data-reveal-delay={f.delay} style={s("background:var(--color-bg);padding:clamp(18px,2.2vw,28px);display:flex;flex-direction:column;gap:9px;")}>
                  <span style={s("font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>{f.label}</span>
                  <span style={s("font-size:14.5px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>{f.description}</span>
                </div>
              ))}
            </div>
            <div style={s("display:flex;flex-wrap:wrap;align-items:center;gap:clamp(16px,2.4vw,32px);border-top:1px solid var(--color-divider);padding-top:22px;")}>
              <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>Status</span>
              <span style={s("font-size:15px;color:color-mix(in srgb, var(--color-text) 74%, transparent);")}>{tf.statusNote}</span>
            </div>
          </div>
        </section>

        <section id="cleverjobs" data-screen-label="CleverJobs" data-parallax-scope="1" style={s("border-top:1px solid var(--color-divider);padding:clamp(56px,8vh,110px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(32px,5vh,60px);")}>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(380px,100%),1fr));gap:clamp(28px,4vw,80px);align-items:end;")}>
              <div style={s("display:flex;flex-direction:column;gap:16px;")}>
                <div style={s("display:flex;align-items:baseline;gap:clamp(14px,2vw,26px);")}>
                  <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,6vw,104px);line-height:0.8;letter-spacing:-0.04em;color:color-mix(in srgb, var(--color-accent) 32%, transparent);")}>{cj.index}</span>
                  <span className="tag tag-accent" style={s("letter-spacing:0.14em;text-transform:uppercase;font-size:10px;white-space:nowrap;")}>Shipped / In production</span>
                </div>
                <h2 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(38px,5.4vw,88px);line-height:0.92;letter-spacing:-0.032em;")}>{cj.name}</h2>
                <p style={s("margin:0;max-width:46ch;font-size:clamp(16px,1.15vw,19px);line-height:1.6;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>{cj.description}</p>
                <a href={cj.url} target="_blank" rel="noopener noreferrer" style={s("display:inline-flex;align-items:center;gap:10px;align-self:flex-start;text-decoration:none;color:var(--color-accent-700);font-size:13px;letter-spacing:0.08em;border-bottom:1px solid var(--color-accent);padding-bottom:4px;")}>Visit cleverjobs.vercel.app<span style={s("width:14px;height:1px;background:currentColor;")}></span></a>
              </div>
              <ProductPreview src={cj.preview} alt={`${cj.name} — ${cj.tagline}`} label={cj.previewLabel} parallax={22} />
            </div>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(230px,100%),1fr));gap:1px;background:var(--color-divider);border:1px solid var(--color-divider);")}>
              {cj.features!.map((f) => (
                <div key={f.label} data-reveal="up" data-reveal-delay={f.delay} style={s("background:var(--color-bg);padding:clamp(18px,2.2vw,28px);display:flex;flex-direction:column;gap:9px;")}>
                  <span style={s("font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>{f.label}</span>
                  <span style={s("font-size:14.5px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>{f.description}</span>
                </div>
              ))}
            </div>
            <div style={s("display:flex;flex-wrap:wrap;align-items:center;gap:clamp(16px,2.4vw,32px);border-top:1px solid var(--color-divider);padding-top:22px;")}>
              <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>Status</span>
              <span style={s("font-size:15px;color:color-mix(in srgb, var(--color-text) 74%, transparent);")}>{cj.statusNote}</span>
            </div>
          </div>
        </section>

        <section id="clevermart" data-screen-label="Clevermart" data-parallax-scope="1" style={s("border-top:1px solid var(--color-divider);background:var(--color-surface);padding:clamp(56px,8vh,110px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(32px,5vh,60px);")}>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(380px,100%),1fr));gap:clamp(28px,4vw,80px);align-items:end;")}>
              <div style={s("display:flex;flex-direction:column;gap:16px;")}>
                <div style={s("display:flex;align-items:baseline;gap:clamp(14px,2vw,26px);")}>
                  <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,6vw,104px);line-height:0.8;letter-spacing:-0.04em;color:color-mix(in srgb, var(--color-text) 16%, transparent);")}>{cm.index}</span>
                  <span className="tag tag-outline" style={s("letter-spacing:0.14em;text-transform:uppercase;font-size:10px;white-space:nowrap;")}>In progress</span>
                </div>
                <h2 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(38px,5.4vw,88px);line-height:0.92;letter-spacing:-0.032em;")}>{cm.name}</h2>
                <p style={s("margin:0;max-width:46ch;font-size:clamp(16px,1.15vw,19px);line-height:1.6;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>{cm.description}</p>
              </div>
              <div data-parallax="22" style={s("position:relative;")}>
                <div className="blueprint" style={s("position:relative;aspect-ratio:16/10;background:var(--color-bg);")}>
                  <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
                  <div style={s("position:absolute;inset:0;background-image:repeating-linear-gradient(135deg, color-mix(in srgb, var(--color-text) 5%, transparent) 0 1px, transparent 1px 9px);")}></div>
                  <div style={s("position:absolute;inset:0;padding:clamp(16px,2vw,30px);display:flex;flex-direction:column;gap:clamp(12px,1.6vw,20px);")}>
                    <div style={s("display:flex;align-items:center;gap:10px;")}>
                      <span style={s("font-size:10px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 48%, transparent);")}>{cm.previewLabel}</span>
                      <span style={s("flex:1;height:1px;background:var(--color-divider);")}></span>
                    </div>
                    <div style={s("flex:1;display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(8px,1vw,14px);")}>
                      <div style={s("border:1px solid var(--color-divider);background:var(--color-bg);display:flex;flex-direction:column;justify-content:flex-end;gap:5px;padding:8px;")}><span style={s("width:64%;height:2px;background:color-mix(in srgb, var(--color-text) 26%, transparent);")}></span><span style={s("width:34%;height:2px;background:var(--color-accent);")}></span></div>
                      <div style={s("border:1px solid var(--color-divider);background:var(--color-bg);display:flex;flex-direction:column;justify-content:flex-end;gap:5px;padding:8px;")}><span style={s("width:52%;height:2px;background:color-mix(in srgb, var(--color-text) 26%, transparent);")}></span><span style={s("width:28%;height:2px;background:var(--color-accent);")}></span></div>
                      <div style={s("border:1px dashed color-mix(in srgb, var(--color-text) 26%, transparent);display:grid;place-items:center;")}><span style={s("font-size:9.5px;letter-spacing:0.16em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 34%, transparent);")}>Next</span></div>
                    </div>
                    <div style={s("display:flex;flex-direction:column;gap:7px;")}>
                      <div style={s("height:2px;background:color-mix(in srgb, var(--color-text) 12%, transparent);")}><div data-ref="cmBar" style={s("width:0%;height:2px;background:var(--color-accent);transition:width 1600ms cubic-bezier(.19,1,.22,1);")}></div></div>
                      <div style={s("display:flex;justify-content:space-between;font-size:9.5px;letter-spacing:0.16em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 38%, transparent);")}><span>Catalogue</span><span>Checkout</span><span>Launch</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(230px,100%),1fr));gap:1px;background:var(--color-divider);border:1px solid var(--color-divider);")}>
              <div data-reveal="up" style={s("background:var(--color-bg);padding:clamp(18px,2.2vw,28px);display:flex;flex-direction:column;gap:9px;")}><span style={s("font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>Done</span><span style={s("font-size:14.5px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>Catalogue structure and product data model.</span></div>
              <div data-reveal="up" data-reveal-delay="70" style={s("background:var(--color-bg);padding:clamp(18px,2.2vw,28px);display:flex;flex-direction:column;gap:9px;")}><span style={s("font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>Done</span><span style={s("font-size:14.5px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>Design system and storefront layouts.</span></div>
              <div data-reveal="up" data-reveal-delay="140" style={s("background:var(--color-bg);padding:clamp(18px,2.2vw,28px);display:flex;flex-direction:column;gap:9px;")}><span style={s("font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>In build</span><span style={s("font-size:14.5px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>Checkout, payments, and order handling.</span></div>
              <div data-reveal="up" data-reveal-delay="210" style={s("background:var(--color-bg);padding:clamp(18px,2.2vw,28px);display:flex;flex-direction:column;gap:9px;")}><span style={s("font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>Next</span><span style={s("font-size:14.5px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>Fulfilment wiring, then a quiet launch.</span></div>
            </div>
          </div>
        </section>

        <section data-screen-label="Why we build" style={s("border-top:1px solid var(--color-divider);padding:clamp(70px,10vh,130px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(400px,100%),1fr));gap:clamp(32px,5vw,100px);align-items:start;")}>
            <h2 data-reveal="up" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(32px,4.6vw,76px);line-height:0.94;letter-spacing:-0.03em;max-width:18ch;")}>Our own products keep us honest.</h2>
            <div style={s("display:flex;flex-direction:column;gap:20px;")}>
              <p data-reveal="up" style={s("margin:0;font-size:clamp(16px,1.15vw,19px);line-height:1.62;color:color-mix(in srgb, var(--color-text) 74%, transparent);")}>Running our own software means we live with every decision we would otherwise hand to a client: the migration that was rushed, the abstraction that was clever instead of clear, the launch that shipped without monitoring.</p>
              <p data-reveal="up" data-reveal-delay="90" style={s("margin:0;font-size:clamp(16px,1.15vw,19px);line-height:1.62;color:color-mix(in srgb, var(--color-text) 74%, transparent);")}>It is the cheapest possible education, and clients get the benefit of it without paying the tuition.</p>
              <Link href="/services" data-magnet="10" style={s("display:inline-flex;align-items:center;gap:12px;align-self:flex-start;margin-top:6px;text-decoration:none;color:var(--color-bg);background:var(--color-accent);border:1px solid var(--color-accent);padding:14px 24px;font-family:var(--font-heading);font-weight:600;font-size:14px;letter-spacing:0.09em;text-transform:uppercase;white-space:nowrap;transition:background 280ms;")} className="oh-c3a899">See what we offer<span style={s("width:16px;height:1px;background:currentColor;")}></span></Link>
            </div>
          </div>
        </section>

        <section data-screen-label="Products CTA" style={s("background:var(--color-accent-900);color:var(--color-bg);padding:clamp(80px,12vh,160px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(26px,4vh,48px);")}>
            <span style={s("font-size:11px;letter-spacing:0.22em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-bg) 58%, transparent);")}>Start a project</span>
            <h2 data-reveal="up" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(38px,7vw,124px);line-height:0.9;letter-spacing:-0.035em;max-width:18ch;")}>Want one of these built for you?</h2>
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
                <Link href="/about" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>About</Link>
                <Link href="/contact" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Contact</Link>
              </div>
              <div style={s("display:flex;flex-direction:column;gap:10px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 42%, transparent);")}>Products</span>
                <a href="#lien" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Lien</a>
                <a href="#toolferry" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>ToolFerry</a>
                <a href="#cleverjobs" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>CleverJobs</a>
                <a href="#clevermart" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Clevermart</a>
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
