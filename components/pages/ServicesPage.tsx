import { s } from '@/lib/style';
import Link from 'next/link';

export function ServicesPage() {
  return (
    <>
      <section data-screen-label="Services header" style={s("padding:clamp(130px,20vh,220px) 0 clamp(50px,7vh,90px);")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(420px,100%),1fr));gap:clamp(36px,5vw,90px);align-items:end;")}>
            <div style={s("display:flex;flex-direction:column;gap:clamp(20px,3vh,32px);")}>
              <div style={s("display:flex;align-items:center;gap:14px;")}>
                <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>Services</span>
                <span style={s("width:clamp(24px,3vw,54px);height:1px;background:var(--color-divider);")}></span>
                <span style={s("font-size:11px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 50%, transparent);")}>Seven ways we work</span>
              </div>
              <h1 data-reveal="up" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,7.4vw,124px);line-height:0.9;letter-spacing:-0.035em;max-width:15ch;")}>Everything between the idea and the release.</h1>
              <p data-reveal="up" data-reveal-delay="90" style={s("margin:0;max-width:50ch;font-size:clamp(16px,1.15vw,19px);line-height:1.6;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>Obecco can carry a company from strategy and UX through design, development, launch, and the iteration that follows — or step into one part of it. One team, start to finish, with no relay between agency, designer, and developer.</p>
            </div>
            <div data-reveal="up" data-reveal-delay="140" style={s("display:flex;flex-direction:column;border-top:1px solid var(--color-divider);")}>
              <a href="#website" style={s("display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding:11px 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);font-size:14.5px;transition:padding-left 380ms cubic-bezier(.19,1,.22,1), color 260ms;")} className="oh-0ac540"><span>Website Design &amp; Development</span><span style={s("font-size:11px;letter-spacing:0.14em;color:color-mix(in srgb, var(--color-text) 40%, transparent);")}>01</span></a>
              <a href="#apps" style={s("display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding:11px 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);font-size:14.5px;transition:padding-left 380ms cubic-bezier(.19,1,.22,1), color 260ms;")} className="oh-0ac540"><span>Custom Web Applications</span><span style={s("font-size:11px;letter-spacing:0.14em;color:color-mix(in srgb, var(--color-text) 40%, transparent);")}>02</span></a>
              <a href="#product" style={s("display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding:11px 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);font-size:14.5px;transition:padding-left 380ms cubic-bezier(.19,1,.22,1), color 260ms;")} className="oh-0ac540"><span>Product Engineering</span><span style={s("font-size:11px;letter-spacing:0.14em;color:color-mix(in srgb, var(--color-text) 40%, transparent);")}>03</span></a>
              <a href="#design" style={s("display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding:11px 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);font-size:14.5px;transition:padding-left 380ms cubic-bezier(.19,1,.22,1), color 260ms;")} className="oh-0ac540"><span>UI/UX &amp; Design Systems</span><span style={s("font-size:11px;letter-spacing:0.14em;color:color-mix(in srgb, var(--color-text) 40%, transparent);")}>04</span></a>
              <a href="#commerce" style={s("display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding:11px 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);font-size:14.5px;transition:padding-left 380ms cubic-bezier(.19,1,.22,1), color 260ms;")} className="oh-0ac540"><span>E-commerce</span><span style={s("font-size:11px;letter-spacing:0.14em;color:color-mix(in srgb, var(--color-text) 40%, transparent);")}>05</span></a>
              <a href="#integrations" style={s("display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding:11px 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);font-size:14.5px;transition:padding-left 380ms cubic-bezier(.19,1,.22,1), color 260ms;")} className="oh-0ac540"><span>Integrations &amp; Automation</span><span style={s("font-size:11px;letter-spacing:0.14em;color:color-mix(in srgb, var(--color-text) 40%, transparent);")}>06</span></a>
              <a href="#maintenance" style={s("display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding:11px 0;border-bottom:1px solid var(--color-divider);text-decoration:none;color:var(--color-text);font-size:14.5px;transition:padding-left 380ms cubic-bezier(.19,1,.22,1), color 260ms;")} className="oh-0ac540"><span>Maintenance &amp; Iteration</span><span style={s("font-size:11px;letter-spacing:0.14em;color:color-mix(in srgb, var(--color-text) 40%, transparent);")}>07</span></a>
            </div>
          </div>
        </section>

        <section data-screen-label="Engagement arc" style={s("padding:clamp(40px,6vh,70px) 0 clamp(60px,9vh,110px);")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);")}>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(180px,100%),1fr));gap:1px;background:var(--color-divider);border:1px solid var(--color-divider);")}>
              <div data-reveal="up" style={s("background:var(--color-bg);padding:clamp(18px,2.4vw,30px);display:flex;flex-direction:column;gap:10px;")}><span style={s("font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>Phase 01</span><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(19px,1.9vw,26px);")}>Strategy &amp; UX</span><span style={s("font-size:13.5px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 62%, transparent);")}>Goals, users, scope, and the shape of the thing.</span></div>
              <div data-reveal="up" data-reveal-delay="70" style={s("background:var(--color-bg);padding:clamp(18px,2.4vw,30px);display:flex;flex-direction:column;gap:10px;")}><span style={s("font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>Phase 02</span><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(19px,1.9vw,26px);")}>Design</span><span style={s("font-size:13.5px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 62%, transparent);")}>Interface, flows, and a system that scales.</span></div>
              <div data-reveal="up" data-reveal-delay="140" style={s("background:var(--color-bg);padding:clamp(18px,2.4vw,30px);display:flex;flex-direction:column;gap:10px;")}><span style={s("font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>Phase 03</span><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(19px,1.9vw,26px);")}>Development</span><span style={s("font-size:13.5px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 62%, transparent);")}>Reviewed increments you can see working.</span></div>
              <div data-reveal="up" data-reveal-delay="210" style={s("background:var(--color-bg);padding:clamp(18px,2.4vw,30px);display:flex;flex-direction:column;gap:10px;")}><span style={s("font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>Phase 04</span><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(19px,1.9vw,26px);")}>Launch</span><span style={s("font-size:13.5px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 62%, transparent);")}>Deploy, monitor, document, hand over.</span></div>
              <div data-reveal="up" data-reveal-delay="280" style={s("background:var(--color-bg);padding:clamp(18px,2.4vw,30px);display:flex;flex-direction:column;gap:10px;")}><span style={s("font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>Phase 05</span><span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(19px,1.9vw,26px);")}>Iteration</span><span style={s("font-size:13.5px;line-height:1.5;color:color-mix(in srgb, var(--color-text) 62%, transparent);")}>Measure, extend, keep it in service.</span></div>
            </div>
          </div>
        </section>

        <section id="website" data-screen-label="Service 01" style={s("border-top:1px solid var(--color-divider);padding:clamp(56px,8vh,110px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(360px,100%),1fr));gap:clamp(32px,5vw,100px);")}>
            <div style={s("align-self:start;position:sticky;top:clamp(96px,12vh,132px);display:flex;flex-direction:column;gap:16px;")}>
              <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,6vw,104px);line-height:0.8;letter-spacing:-0.04em;color:color-mix(in srgb, var(--color-accent) 32%, transparent);")}>01</span>
              <h2 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,3.6vw,58px);line-height:0.96;letter-spacing:-0.028em;")}>Website Design &amp; Development</h2>
              <p style={s("margin:0;max-width:40ch;font-size:clamp(15px,1.05vw,17.5px);line-height:1.62;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>Marketing sites and editorial experiences that load fast, read well, and stay editable by the people who own them.</p>
            </div>
            <div style={s("display:flex;flex-direction:column;gap:clamp(22px,3vh,34px);")}>
              <div style={s("display:flex;flex-direction:column;gap:12px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>What you get</span>
                <div data-reveal="up" style={s("display:flex;flex-direction:column;border-top:1px solid var(--color-divider);")}>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Sitemap, content model, and copy structure</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Wireframes, then page design at real content</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Responsive build across desktop, tablet, and mobile</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>CMS setup and a short editor walkthrough</span>
                  <span style={s("padding:12px 0;font-size:15px;")}>Analytics, metadata, and a performance budget</span>
                </div>
              </div>
              <div style={s("display:flex;align-items:flex-start;gap:14px;border-left:1px solid var(--color-accent);padding-left:18px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);padding-top:3px;")}>Outcome</span>
                <span style={s("font-size:clamp(16px,1.3vw,21px);line-height:1.45;font-family:var(--font-heading);font-weight:600;")}>A site your team can update without calling a developer.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="apps" data-screen-label="Service 02" style={s("border-top:1px solid var(--color-divider);padding:clamp(56px,8vh,110px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(360px,100%),1fr));gap:clamp(32px,5vw,100px);")}>
            <div style={s("align-self:start;position:sticky;top:clamp(96px,12vh,132px);display:flex;flex-direction:column;gap:16px;")}>
              <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,6vw,104px);line-height:0.8;letter-spacing:-0.04em;color:color-mix(in srgb, var(--color-accent) 32%, transparent);")}>02</span>
              <h2 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,3.6vw,58px);line-height:0.96;letter-spacing:-0.028em;")}>Custom Web Applications</h2>
              <p style={s("margin:0;max-width:40ch;font-size:clamp(15px,1.05vw,17.5px);line-height:1.62;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>Dashboards, portals, and internal tools built around the workflow your team actually follows — not the one a template assumes.</p>
            </div>
            <div style={s("display:flex;flex-direction:column;gap:clamp(22px,3vh,34px);")}>
              <div style={s("display:flex;flex-direction:column;gap:12px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>What you get</span>
                <div data-reveal="up" style={s("display:flex;flex-direction:column;border-top:1px solid var(--color-divider);")}>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Workflow mapping with the people doing the work</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Data model and API design</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Accounts, roles, and permissions</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>The application build, in reviewable slices</span>
                  <span style={s("padding:12px 0;font-size:15px;")}>Admin tooling, exports, and audit trails</span>
                </div>
              </div>
              <div style={s("display:flex;align-items:flex-start;gap:14px;border-left:1px solid var(--color-accent);padding-left:18px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);padding-top:3px;")}>Outcome</span>
                <span style={s("font-size:clamp(16px,1.3vw,21px);line-height:1.45;font-family:var(--font-heading);font-weight:600;")}>The manual process becomes software.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="product" data-screen-label="Service 03" style={s("border-top:1px solid var(--color-divider);padding:clamp(56px,8vh,110px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(360px,100%),1fr));gap:clamp(32px,5vw,100px);")}>
            <div style={s("align-self:start;position:sticky;top:clamp(96px,12vh,132px);display:flex;flex-direction:column;gap:16px;")}>
              <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,6vw,104px);line-height:0.8;letter-spacing:-0.04em;color:color-mix(in srgb, var(--color-accent) 32%, transparent);")}>03</span>
              <h2 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,3.6vw,58px);line-height:0.96;letter-spacing:-0.028em;")}>Product Engineering</h2>
              <p style={s("margin:0;max-width:40ch;font-size:clamp(15px,1.05vw,17.5px);line-height:1.62;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>A full product build — architecture, auth, data, payments, deployment — taken to a first release and then kept moving. The same work we do on our own products.</p>
            </div>
            <div style={s("display:flex;flex-direction:column;gap:clamp(22px,3vh,34px);")}>
              <div style={s("display:flex;flex-direction:column;gap:12px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>What you get</span>
                <div data-reveal="up" style={s("display:flex;flex-direction:column;border-top:1px solid var(--color-divider);")}>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Technical architecture and stack decisions, written down</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Authentication, payments, and the data layer</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Feature build in reviewed increments</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Automated tests and continuous integration</span>
                  <span style={s("padding:12px 0;font-size:15px;")}>Deployment, monitoring, and handover documentation</span>
                </div>
              </div>
              <div style={s("display:flex;align-items:flex-start;gap:14px;border-left:1px solid var(--color-accent);padding-left:18px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);padding-top:3px;")}>Outcome</span>
                <span style={s("font-size:clamp(16px,1.3vw,21px);line-height:1.45;font-family:var(--font-heading);font-weight:600;")}>A product in production, with solid ground under it.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="design" data-screen-label="Service 04" style={s("border-top:1px solid var(--color-divider);padding:clamp(56px,8vh,110px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(360px,100%),1fr));gap:clamp(32px,5vw,100px);")}>
            <div style={s("align-self:start;position:sticky;top:clamp(96px,12vh,132px);display:flex;flex-direction:column;gap:16px;")}>
              <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,6vw,104px);line-height:0.8;letter-spacing:-0.04em;color:color-mix(in srgb, var(--color-accent) 32%, transparent);")}>04</span>
              <h2 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,3.6vw,58px);line-height:0.96;letter-spacing:-0.028em;")}>UI/UX &amp; Design Systems</h2>
              <p style={s("margin:0;max-width:40ch;font-size:clamp(15px,1.05vw,17.5px);line-height:1.62;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>Research, flows, and interface design, ending in a component system that every future screen can inherit.</p>
            </div>
            <div style={s("display:flex;flex-direction:column;gap:clamp(22px,3vh,34px);")}>
              <div style={s("display:flex;flex-direction:column;gap:12px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>What you get</span>
                <div data-reveal="up" style={s("display:flex;flex-direction:column;border-top:1px solid var(--color-divider);")}>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>User and stakeholder interviews</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Flows and information architecture</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Interface design tested against real content</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Component library, tokens, and usage notes</span>
                  <span style={s("padding:12px 0;font-size:15px;")}>Accessibility review against WCAG AA targets</span>
                </div>
              </div>
              <div style={s("display:flex;align-items:flex-start;gap:14px;border-left:1px solid var(--color-accent);padding-left:18px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);padding-top:3px;")}>Outcome</span>
                <span style={s("font-size:clamp(16px,1.3vw,21px);line-height:1.45;font-family:var(--font-heading);font-weight:600;")}>One visual language, applied consistently.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="commerce" data-screen-label="Service 05" style={s("border-top:1px solid var(--color-divider);padding:clamp(56px,8vh,110px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(360px,100%),1fr));gap:clamp(32px,5vw,100px);")}>
            <div style={s("align-self:start;position:sticky;top:clamp(96px,12vh,132px);display:flex;flex-direction:column;gap:16px;")}>
              <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,6vw,104px);line-height:0.8;letter-spacing:-0.04em;color:color-mix(in srgb, var(--color-accent) 32%, transparent);")}>05</span>
              <h2 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,3.6vw,58px);line-height:0.96;letter-spacing:-0.028em;")}>E-commerce</h2>
              <p style={s("margin:0;max-width:40ch;font-size:clamp(15px,1.05vw,17.5px);line-height:1.62;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>Storefronts, catalogue, and checkout on a modern commerce stack — the same stack we are building Clevermart on.</p>
            </div>
            <div style={s("display:flex;flex-direction:column;gap:clamp(22px,3vh,34px);")}>
              <div style={s("display:flex;flex-direction:column;gap:12px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>What you get</span>
                <div data-reveal="up" style={s("display:flex;flex-direction:column;border-top:1px solid var(--color-divider);")}>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Catalogue structure and product data model</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Storefront design and build</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Checkout on Stripe or your platform of choice</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Shipping, tax, and fulfilment wiring</span>
                  <span style={s("padding:12px 0;font-size:15px;")}>Post-purchase and transactional email flows</span>
                </div>
              </div>
              <div style={s("display:flex;align-items:flex-start;gap:14px;border-left:1px solid var(--color-accent);padding-left:18px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);padding-top:3px;")}>Outcome</span>
                <span style={s("font-size:clamp(16px,1.3vw,21px);line-height:1.45;font-family:var(--font-heading);font-weight:600;")}>A store that takes payment and grows with the catalogue.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="integrations" data-screen-label="Service 06" style={s("border-top:1px solid var(--color-divider);padding:clamp(56px,8vh,110px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(360px,100%),1fr));gap:clamp(32px,5vw,100px);")}>
            <div style={s("align-self:start;position:sticky;top:clamp(96px,12vh,132px);display:flex;flex-direction:column;gap:16px;")}>
              <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,6vw,104px);line-height:0.8;letter-spacing:-0.04em;color:color-mix(in srgb, var(--color-accent) 32%, transparent);")}>06</span>
              <h2 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,3.6vw,58px);line-height:0.96;letter-spacing:-0.028em;")}>Integrations &amp; Automation</h2>
              <p style={s("margin:0;max-width:40ch;font-size:clamp(15px,1.05vw,17.5px);line-height:1.62;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>The quiet plumbing between the tools you already pay for, so information stops being copied by hand.</p>
            </div>
            <div style={s("display:flex;flex-direction:column;gap:clamp(22px,3vh,34px);")}>
              <div style={s("display:flex;flex-direction:column;gap:12px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>What you get</span>
                <div data-reveal="up" style={s("display:flex;flex-direction:column;border-top:1px solid var(--color-divider);")}>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>An audit of the systems and the data moving between them</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Integration design, including failure cases</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>API and webhook implementation</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Scheduled jobs and background queues</span>
                  <span style={s("padding:12px 0;font-size:15px;")}>Error handling, retries, and alerting</span>
                </div>
              </div>
              <div style={s("display:flex;align-items:flex-start;gap:14px;border-left:1px solid var(--color-accent);padding-left:18px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);padding-top:3px;")}>Outcome</span>
                <span style={s("font-size:clamp(16px,1.3vw,21px);line-height:1.45;font-family:var(--font-heading);font-weight:600;")}>Systems that talk to each other without a human in the middle.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="maintenance" data-screen-label="Service 07" style={s("border-top:1px solid var(--color-divider);padding:clamp(56px,8vh,110px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(360px,100%),1fr));gap:clamp(32px,5vw,100px);")}>
            <div style={s("align-self:start;position:sticky;top:clamp(96px,12vh,132px);display:flex;flex-direction:column;gap:16px;")}>
              <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(44px,6vw,104px);line-height:0.8;letter-spacing:-0.04em;color:color-mix(in srgb, var(--color-accent) 32%, transparent);")}>07</span>
              <h2 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,3.6vw,58px);line-height:0.96;letter-spacing:-0.028em;")}>Maintenance &amp; Iteration</h2>
              <p style={s("margin:0;max-width:40ch;font-size:clamp(15px,1.05vw,17.5px);line-height:1.62;color:color-mix(in srgb, var(--color-text) 70%, transparent);")}>Launch is the middle of the work, not the end. We stay on to release, watch, and improve.</p>
            </div>
            <div style={s("display:flex;flex-direction:column;gap:clamp(22px,3vh,34px);")}>
              <div style={s("display:flex;flex-direction:column;gap:12px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>What you get</span>
                <div data-reveal="up" style={s("display:flex;flex-direction:column;border-top:1px solid var(--color-divider);")}>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Dependency and security updates</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Uptime and error monitoring</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>A groomed backlog and a predictable release cadence</span>
                  <span style={s("padding:12px 0;border-bottom:1px solid var(--color-divider);font-size:15px;")}>Performance and accessibility passes</span>
                  <span style={s("padding:12px 0;font-size:15px;")}>A documented change log you can read</span>
                </div>
              </div>
              <div style={s("display:flex;align-items:flex-start;gap:14px;border-left:1px solid var(--color-accent);padding-left:18px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);padding-top:3px;")}>Outcome</span>
                <span style={s("font-size:clamp(16px,1.3vw,21px);line-height:1.45;font-family:var(--font-heading);font-weight:600;")}>Software that gets better instead of older.</span>
              </div>
            </div>
          </div>
        </section>

        <section data-screen-label="Engagement models" style={s("background:var(--color-surface);border-top:1px solid var(--color-divider);padding:clamp(70px,10vh,130px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(30px,5vh,54px);")}>
            <div style={s("display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:24px;")}>
              <h2 style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(30px,4.4vw,70px);line-height:0.96;letter-spacing:-0.03em;max-width:20ch;")}>Three ways to work with us.</h2>
              <p style={s("margin:0;max-width:38ch;font-size:clamp(14px,1vw,16.5px);line-height:1.6;color:color-mix(in srgb, var(--color-text) 64%, transparent);")}>Pick the shape that fits the problem. We will tell you honestly if a smaller one would do.</p>
            </div>
            <div style={s("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(280px,100%),1fr));gap:clamp(20px,2.5vw,40px);")}>
              <div data-reveal="up" className="blueprint" style={s("position:relative;padding:clamp(22px,2.6vw,34px);display:flex;flex-direction:column;gap:14px;background:var(--color-bg);")}>
                <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>Fixed scope</span>
                <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(22px,2.2vw,32px);line-height:1.06;")}>Project build</span>
                <span style={s("font-size:14.5px;line-height:1.58;color:color-mix(in srgb, var(--color-text) 68%, transparent);")}>A defined thing, delivered. Scope, milestones, and a fixed price agreed before we start. Best for websites, storefronts, and first releases.</span>
              </div>
              <div data-reveal="up" data-reveal-delay="90" className="blueprint" style={s("position:relative;padding:clamp(22px,2.6vw,34px);display:flex;flex-direction:column;gap:14px;background:var(--color-bg);")}>
                <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>Ongoing</span>
                <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(22px,2.2vw,32px);line-height:1.06;")}>Product partnership</span>
                <span style={s("font-size:14.5px;line-height:1.58;color:color-mix(in srgb, var(--color-text) 68%, transparent);")}>We act as your product and engineering team across releases — planning, designing, and building on a continuous cadence. Best for products still finding their shape.</span>
              </div>
              <div data-reveal="up" data-reveal-delay="180" className="blueprint" style={s("position:relative;padding:clamp(22px,2.6vw,34px);display:flex;flex-direction:column;gap:14px;background:var(--color-bg);")}>
                <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:var(--color-accent-700);")}>Retainer</span>
                <span style={s("font-family:var(--font-heading);font-weight:600;font-size:clamp(22px,2.2vw,32px);line-height:1.06;")}>Care &amp; iteration</span>
                <span style={s("font-size:14.5px;line-height:1.58;color:color-mix(in srgb, var(--color-text) 68%, transparent);")}>A monthly block of hours for maintenance, small features, and improvements on something already live — ours or someone else&apos;s build.</span>
              </div>
            </div>
            <div style={s("display:flex;flex-wrap:wrap;align-items:center;gap:clamp(14px,2vw,26px);border-top:1px solid var(--color-divider);padding-top:22px;")}>
              <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 45%, transparent);")}>Typical stack</span>
              <span style={s("font-size:14.5px;color:color-mix(in srgb, var(--color-text) 72%, transparent);")}>TypeScript &nbsp;·&nbsp; React &nbsp;·&nbsp; Next.js &nbsp;·&nbsp; Node &nbsp;·&nbsp; Postgres &nbsp;·&nbsp; Stripe &nbsp;·&nbsp; Vercel — chosen per project, not by habit.</span>
            </div>
          </div>
        </section>

        <section data-screen-label="Services CTA" style={s("position:relative;background:var(--color-accent-900);color:var(--color-bg);padding:clamp(80px,12vh,160px) 0;")}>
          <div style={s("max-width:1640px;margin:0 auto;padding:0 clamp(20px,3.6vw,56px);display:flex;flex-direction:column;gap:clamp(26px,4vh,48px);")}>
            <span style={s("font-size:11px;letter-spacing:0.22em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-bg) 58%, transparent);")}>Start a project</span>
            <h2 data-reveal="up" style={s("margin:0;font-family:var(--font-heading);font-weight:600;font-size:clamp(38px,7vw,124px);line-height:0.9;letter-spacing:-0.035em;max-width:18ch;")}>Tell us what you need built.</h2>
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
                <Link href="/products" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Products</Link>
                <Link href="/about" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>About</Link>
                <Link href="/contact" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Contact</Link>
              </div>
              <div style={s("display:flex;flex-direction:column;gap:10px;")}>
                <span style={s("font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;white-space:nowrap;color:color-mix(in srgb, var(--color-text) 42%, transparent);")}>Services</span>
                <a href="#website" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Websites</a>
                <a href="#apps" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Web applications</a>
                <a href="#product" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>Product engineering</a>
                <a href="#commerce" style={s("text-decoration:none;color:var(--color-text);font-size:14px;")}>E-commerce</a>
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
