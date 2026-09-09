import { s } from '@/lib/style';
import Link from 'next/link';

export function LienPage() {
  return (
    <>
      <section style={s("max-width:1240px;margin:0 auto;padding:clamp(40px,5vw,84px) 24px clamp(24px,3vw,40px)")}>
            <div style={s("display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start")}>
              <div data-reveal="" style={s("flex:0 0 116px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.08em;color:#8A8E86;text-transform:uppercase;padding-top:12px")}>
                <div style={s("color:#16161A")}>02</div>
                <div>Product</div>
              </div>
              <div style={s("flex:1 1 480px;min-width:0")}>
                <div data-reveal="" style={s("display:flex;align-items:center;gap:14px;flex-wrap:wrap")}>
                  <svg role="img" aria-label="Lien mark" viewBox="0 0 24 24" width={38} height="38" fill="none" stroke="#16161A" strokeWidth={1.6}><circle cx="9" cy="12" r="6" /><circle cx="15" cy="12" r="6" /></svg>
                  <h1 style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:clamp(34px,4.6vw,62px);line-height:1;letter-spacing:-0.035em")}>Lien</h1>
                  <span style={s("display:inline-flex;align-items:center;gap:7px;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#16161A;border:1px solid #B5CFC3;border-radius:6px;padding:6px 10px;background:#EBF3EF")}><span aria-hidden={true} style={s("width:7px;height:7px;border-radius:50%;background:#2F6B57")}></span>Live</span>
                </div>
                <p data-reveal="" style={s("margin:22px 0 0;max-width:58ch;font-size:20px;color:#3C403A")}>A verified, curated dating app for British Columbia. Lien is built around a more deliberate approach to dating: people apply for admission, identity is verified, and members receive a few curated introductions each day rather than being pushed through an endless swipe feed.</p>
                <div data-reveal="" style={s("display:flex;gap:12px;flex-wrap:wrap;margin-top:26px")}>
                  <a className="dc-hover-0f2f94" href="https://joinlien.com" style={s("background:#2F6B57;color:#F5F5F1;font-family:'IBM Plex Mono',monospace;font-size:12.5px;letter-spacing:0.07em;text-transform:uppercase;border-radius:6px;padding:14px 22px;transition:background .18s ease,transform .18s ease")}>Visit Lien →</a>
                  <Link href="/products" className="dc-hover-e70619" style={s("background:none;color:#16161A;font-family:'IBM Plex Mono',monospace;font-size:12.5px;letter-spacing:0.07em;text-transform:uppercase;border:1px solid #C6C9BF;border-radius:6px;padding:14px 22px;cursor:pointer;transition:border-color .18s ease")}>All products</Link>
                </div>
              </div>
              <aside data-reveal="" style={s("flex:0 1 250px;min-width:220px;max-width:300px;border:1px solid #D4D6CD;border-radius:10px;background:#F5F5F1;padding:20px")}>
                <div style={s("font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#9A9E94;padding-bottom:12px;border-bottom:1px solid #DCDED5")}>Key facts</div>
                <dl style={s("margin:0;display:flex;flex-direction:column;gap:13px;padding-top:14px;font-family:'IBM Plex Mono',monospace;font-size:12px")}>
                  <div><dt style={s("color:#9A9E94;text-transform:uppercase;font-size:10px;letter-spacing:0.07em")}>Index</dt><dd style={s("margin:4px 0 0;color:#3C403A")}>02</dd></div>
                  <div><dt style={s("color:#9A9E94;text-transform:uppercase;font-size:10px;letter-spacing:0.07em")}>Status</dt><dd style={s("margin:4px 0 0;color:#2F6B57")}>Live</dd></div>
                  <div><dt style={s("color:#9A9E94;text-transform:uppercase;font-size:10px;letter-spacing:0.07em")}>Category</dt><dd style={s("margin:4px 0 0;color:#3C403A")}>Dating app</dd></div>
                  <div><dt style={s("color:#9A9E94;text-transform:uppercase;font-size:10px;letter-spacing:0.07em")}>Region</dt><dd style={s("margin:4px 0 0;color:#3C403A")}>British Columbia</dd></div>
                  <div><dt style={s("color:#9A9E94;text-transform:uppercase;font-size:10px;letter-spacing:0.07em")}>Founding wave</dt><dd style={s("margin:4px 0 0;color:#3C403A")}>Vancouver</dd></div>
                  <div><dt style={s("color:#9A9E94;text-transform:uppercase;font-size:10px;letter-spacing:0.07em")}>Age requirement</dt><dd style={s("margin:4px 0 0;color:#3C403A")}>18+</dd></div>
                  <div><dt style={s("color:#9A9E94;text-transform:uppercase;font-size:10px;letter-spacing:0.07em")}>Website</dt><dd style={s("margin:4px 0 0")}><a className="dc-hover-1a52d8" href="https://joinlien.com" style={s("color:#2F6B57;border-bottom:1px solid #B5CFC3")}>joinlien.com</a></dd></div>
                </dl>
              </aside>
            </div>
          </section>

          <section style={s("background:#F5F5F1;border-top:1px solid #D4D6CD;border-bottom:1px solid #D4D6CD")}>
            <div style={s("max-width:1240px;margin:0 auto;padding:clamp(36px,4.5vw,68px) 24px")}>
              <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px")}>
                <article data-reveal="" style={s("border:1px solid #D4D6CD;border-radius:10px;background:#FBFBF9;padding:24px")}>
                  <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.08em;color:#9A9E94")}>01</span>
                  <h2 style={s("margin:10px 0 0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:22px;letter-spacing:-0.025em")}>Application-based admission</h2>
                  <p style={s("margin:12px 0 0;color:#3C403A;font-size:16.5px")}>People apply to join rather than simply entering an open swipe feed.</p>
                </article>
                <article data-reveal="" style={s("border:1px solid #D4D6CD;border-radius:10px;background:#FBFBF9;padding:24px")}>
                  <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.08em;color:#9A9E94")}>02</span>
                  <h2 style={s("margin:10px 0 0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:22px;letter-spacing:-0.025em")}>Identity verification</h2>
                  <p style={s("margin:12px 0 0;color:#3C403A;font-size:16.5px")}>Verification is part of admission, so members know who they are talking to.</p>
                </article>
                <article data-reveal="" style={s("border:1px solid #D4D6CD;border-radius:10px;background:#FBFBF9;padding:24px")}>
                  <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.08em;color:#9A9E94")}>03</span>
                  <h2 style={s("margin:10px 0 0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:22px;letter-spacing:-0.025em")}>Curated introductions</h2>
                  <p style={s("margin:12px 0 0;color:#3C403A;font-size:16.5px")}>The experience is a few introductions each day, not an endless feed to scroll.</p>
                </article>
                <article data-reveal="" style={s("border:1px solid #D4D6CD;border-radius:10px;background:#FBFBF9;padding:24px")}>
                  <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.08em;color:#9A9E94")}>04</span>
                  <h2 style={s("margin:10px 0 0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:22px;letter-spacing:-0.025em")}>Membership</h2>
                  <p style={s("margin:12px 0 0;color:#3C403A;font-size:16.5px")}>The core experience is free, with optional paid membership tiers.</p>
                </article>
              </div>
            </div>
          </section>

          <nav aria-label="Product index" style={s("max-width:1240px;margin:0 auto;padding:clamp(28px,3.5vw,52px) 24px;display:flex;gap:10px;flex-wrap:wrap;align-items:center")}>
            <span style={s("font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#9A9E94;margin-right:6px")}>Product index</span>
            <Link href="/toolferry" className="dc-hover-f5a9f7" data-pindex="toolferry" style={s("background:none;border:1px solid #C6C9BF;border-radius:6px;padding:9px 13px;cursor:pointer;font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#3C403A")}>01 ToolFerry</Link>
            <Link href="/lien" className="dc-hover-f5a9f7" data-pindex="lien" style={s("background:none;border:1px solid #C6C9BF;border-radius:6px;padding:9px 13px;cursor:pointer;font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#3C403A")}>02 Lien</Link>
            <Link href="/clevermart" className="dc-hover-f5a9f7" data-pindex="clevermart" style={s("background:none;border:1px solid #C6C9BF;border-radius:6px;padding:9px 13px;cursor:pointer;font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#3C403A")}>03 Clevermart</Link>
            <Link href="/cleverjobs" className="dc-hover-f5a9f7" data-pindex="cleverjobs" style={s("background:none;border:1px solid #C6C9BF;border-radius:6px;padding:9px 13px;cursor:pointer;font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#3C403A")}>04 CleverJobs</Link>
          </nav>
    </>
  );
}
