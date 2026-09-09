import { s } from '@/lib/style';
import Link from 'next/link';

export function ToolFerryPage() {
  return (
    <>
      <section style={s("max-width:1240px;margin:0 auto;padding:clamp(40px,5vw,84px) 24px clamp(24px,3vw,40px)")}>
            <div style={s("display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start")}>
              <div data-reveal="" style={s("flex:0 0 116px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.08em;color:#8A8E86;text-transform:uppercase;padding-top:12px")}>
                <div style={s("color:#16161A")}>01</div>
                <div>Product</div>
              </div>
              <div style={s("flex:1 1 480px;min-width:0")}>
                <div data-reveal="" style={s("display:flex;align-items:center;gap:14px;flex-wrap:wrap")}>
                  <svg role="img" aria-label="ToolFerry mark" viewBox="0 0 24 24" width={38} height="38" fill="none" stroke="#16161A" strokeWidth={1.6}><rect x="3" y="3" width="7.5" height="7.5" rx="1" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="1" /><rect x="3" y="13.5" width="7.5" height="7.5" rx="1" /><circle cx="17.25" cy="17.25" r="3.75" /></svg>
                  <h1 style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:clamp(34px,4.6vw,62px);line-height:1;letter-spacing:-0.035em")}>ToolFerry</h1>
                  <span style={s("display:inline-flex;align-items:center;gap:7px;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#16161A;border:1px solid #B5CFC3;border-radius:6px;padding:6px 10px;background:#EBF3EF")}><span aria-hidden={true} style={s("width:7px;height:7px;border-radius:50%;background:#2F6B57")}></span>Live</span>
                </div>
                <p data-reveal="" style={s("margin:22px 0 0;max-width:58ch;font-size:20px;color:#3C403A")}>A multi-tool web platform. ToolFerry brings practical web tools together in one hub, so the small jobs that normally send you to five different sites happen in one place.</p>
                <div data-reveal="" style={s("display:flex;gap:12px;flex-wrap:wrap;margin-top:26px")}>
                  <a className="dc-hover-0f2f94" href="#" style={s("background:#2F6B57;color:#F5F5F1;font-family:'IBM Plex Mono',monospace;font-size:12.5px;letter-spacing:0.07em;text-transform:uppercase;border-radius:6px;padding:14px 22px;transition:background .18s ease,transform .18s ease")}>Use ToolFerry →</a>
                  <Link href="/products" className="dc-hover-e70619" style={s("background:none;color:#16161A;font-family:'IBM Plex Mono',monospace;font-size:12.5px;letter-spacing:0.07em;text-transform:uppercase;border:1px solid #C6C9BF;border-radius:6px;padding:14px 22px;cursor:pointer;transition:border-color .18s ease")}>All products</Link>
                </div>
              </div>
              <aside data-reveal="" style={s("flex:0 1 250px;min-width:220px;max-width:300px;border:1px solid #D4D6CD;border-radius:10px;background:#F5F5F1;padding:20px")}>
                <div style={s("font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#9A9E94;padding-bottom:12px;border-bottom:1px solid #DCDED5")}>Key facts</div>
                <dl style={s("margin:0;display:flex;flex-direction:column;gap:13px;padding-top:14px;font-family:'IBM Plex Mono',monospace;font-size:12px")}>
                  <div><dt style={s("color:#9A9E94;text-transform:uppercase;font-size:10px;letter-spacing:0.07em")}>Index</dt><dd style={s("margin:4px 0 0;color:#3C403A")}>01</dd></div>
                  <div><dt style={s("color:#9A9E94;text-transform:uppercase;font-size:10px;letter-spacing:0.07em")}>Status</dt><dd style={s("margin:4px 0 0;color:#2F6B57")}>Live</dd></div>
                  <div><dt style={s("color:#9A9E94;text-transform:uppercase;font-size:10px;letter-spacing:0.07em")}>Category</dt><dd style={s("margin:4px 0 0;color:#3C403A")}>Multi-tool web platform</dd></div>
                  <div><dt style={s("color:#9A9E94;text-transform:uppercase;font-size:10px;letter-spacing:0.07em")}>Tool groups</dt><dd style={s("margin:4px 0 0;color:#3C403A")}>Media, converters, PDF, documents, utilities</dd></div>
                </dl>
              </aside>
            </div>
          </section>

          <section style={s("background:#F5F5F1;border-top:1px solid #D4D6CD;border-bottom:1px solid #D4D6CD")}>
            <div style={s("max-width:1240px;margin:0 auto;padding:clamp(36px,4.5vw,68px) 24px;display:flex;flex-direction:column;gap:36px")}>

              <div data-reveal="" style={s("display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start")}>
                <div style={s("flex:0 0 116px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.08em;color:#8A8E86;text-transform:uppercase;padding-top:6px")}>Media</div>
                <div style={s("flex:1 1 460px;min-width:0")}>
                  <h2 style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:clamp(21px,2.2vw,28px);letter-spacing:-0.025em")}>Media tools</h2>
                  <p style={s("margin:12px 0 0;max-width:58ch;color:#3C403A;font-size:17px")}>The YouTube downloader is the flagship. A universal social downloader handles other platforms, and dedicated per-platform downloader pages exist for people who arrive knowing exactly what they need.</p>
                  <div style={s("display:flex;gap:8px;flex-wrap:wrap;margin-top:16px")}>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>YouTube downloader</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Universal social downloader</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Per-platform pages</span>
                  </div>
                </div>
              </div>

              <div data-reveal="" style={s("display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start;border-top:1px solid #DFE1DA;padding-top:32px")}>
                <div style={s("flex:0 0 116px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.08em;color:#8A8E86;text-transform:uppercase;padding-top:6px")}>Converters</div>
                <div style={s("flex:1 1 460px;min-width:0")}>
                  <h2 style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:clamp(21px,2.2vw,28px);letter-spacing:-0.025em")}>Converters</h2>
                  <p style={s("margin:12px 0 0;max-width:58ch;color:#3C403A;font-size:17px")}>Format work for video, audio, and images, plus the edits that usually go with it: compression, trimming, and GIF making.</p>
                  <div style={s("display:flex;gap:8px;flex-wrap:wrap;margin-top:16px")}>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Video</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Audio</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Image</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Compress</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Trim</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>GIF maker</span>
                  </div>
                </div>
              </div>

              <div data-reveal="" style={s("display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start;border-top:1px solid #DFE1DA;padding-top:32px")}>
                <div style={s("flex:0 0 116px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.08em;color:#8A8E86;text-transform:uppercase;padding-top:6px")}>PDF</div>
                <div style={s("flex:1 1 460px;min-width:0")}>
                  <h2 style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:clamp(21px,2.2vw,28px);letter-spacing:-0.025em")}>PDF tools</h2>
                  <p style={s("margin:12px 0 0;max-width:58ch;color:#3C403A;font-size:17px")}>The PDF jobs that come up in ordinary work, handled in the browser rather than through a desktop install.</p>
                  <div style={s("display:flex;gap:8px;flex-wrap:wrap;margin-top:16px")}>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Merge</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Split</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Compress</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Convert</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Watermark</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Protect</span>
                  </div>
                </div>
              </div>

              <div data-reveal="" style={s("display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start;border-top:1px solid #DFE1DA;padding-top:32px")}>
                <div style={s("flex:0 0 116px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.08em;color:#8A8E86;text-transform:uppercase;padding-top:6px")}>Documents</div>
                <div style={s("flex:1 1 460px;min-width:0")}>
                  <h2 style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:clamp(21px,2.2vw,28px);letter-spacing:-0.025em")}>Document tools</h2>
                  <p style={s("margin:12px 0 0;max-width:58ch;color:#3C403A;font-size:17px")}>Straight conversions into PDF, for the formats people actually write in.</p>
                  <div style={s("display:flex;gap:8px;flex-wrap:wrap;margin-top:16px")}>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>DOCX to PDF</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Markdown to PDF</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>TXT to PDF</span>
                  </div>
                </div>
              </div>

              <div data-reveal="" style={s("display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start;border-top:1px solid #DFE1DA;padding-top:32px")}>
                <div style={s("flex:0 0 116px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.08em;color:#8A8E86;text-transform:uppercase;padding-top:6px")}>Utilities</div>
                <div style={s("flex:1 1 460px;min-width:0")}>
                  <h2 style={s("margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:clamp(21px,2.2vw,28px);letter-spacing:-0.025em")}>Utilities</h2>
                  <p style={s("margin:12px 0 0;max-width:58ch;color:#3C403A;font-size:17px")}>Small developer and everyday tools that are annoying to hunt down one by one.</p>
                  <div style={s("display:flex;gap:8px;flex-wrap:wrap;margin-top:16px")}>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>QR codes</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Hashes</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Base64</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>JSON formatter</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>YAML formatter</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Regex tester</span>
                    <span style={s("font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#16161A;border:1px solid #D4D6CD;border-radius:6px;padding:6px 10px;background:#FBFBF9")}>Metadata stripping</span>
                  </div>
                </div>
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
