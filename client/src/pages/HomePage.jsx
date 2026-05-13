import { Link } from 'react-router-dom';
import hawaiiPublicDomainMap from '../assets/hawaii-public-domain.svg';

const CHART_BARS = [42, 58, 47, 71, 55, 84, 67, 92];

const services = [
  { icon: 'store', title: 'Akamai Solutions', body: 'For Restaurant, Bar, Retail, Wholesale, Professional Services and much more!' },
  { icon: 'credit_card', title: 'Payments', body: 'Secure Credit Card Systems with Terminal, Web Site, Mobile App, Link Sharing & Text.' },
  { icon: 'schedule', title: 'Time Clock', body: 'Options include Card, PIN, Fingerprint, Hand, Facial Recognition, Phone and Web.' },
  { icon: 'point_of_sale', title: 'Self Ordering Kiosk', body: 'Affordable Time Saving Systems for Customer Self Ordering tailored for all business types.' },
  { icon: 'smartphone', title: 'Mobile Ordering', body: 'Increase sales & attract new customers with Web Site, Tablet and Phone App Ordering.' },
  { icon: 'code', title: 'Custom Software', body: 'Extend your existing system or build a new system to lower costs and increase revenue.' },
  { icon: 'bolt', title: 'Lightning Easy Fast', body: "You don't need to be an expert. Our solutions are always super fast and easy to use." },
  { icon: 'cloud', title: 'Cloud Management', body: 'Control your system from anywhere no matter where you may be!' },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero container">
        <p className="eyebrow">Ready With Aloha and Akamai</p>
        <h1>The POS system <span>built for Hawaii</span> and beyond.</h1>
        <p className="lead">
          AkamaiPOS delivers cost-saving, revenue-growing systems for retail,
          restaurants, warehouses, and professional services with expert support wherever you are.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="button button-primary">Start Your Rollout</Link>
          <Link to="/hardware" className="button button-ghost">Explore Hardware</Link>
        </div>
        {/* <div className="hero-showcase">
          <article className="device-card device-main">
            <p>Live Sales</p><h3>$82,410</h3><small>+18.2% vs last month</small>
          </article>
          <article className="device-card device-side">
            <p>Active Terminals</p><h3>128</h3><small>99.99% uptime</small>
          </article>
          <article className="device-card device-side-alt">
            <p>Avg. Checkout Time</p><h3>21s</h3><small>-34% after onboarding</small>
          </article>
        </div> */}
      </section>

      {/* ── Ticker Band 1 ── */}
      <div className="ticker-band ticker-band--teal">
        <div className="ticker-band__track">
          <div className="ticker-band__inner">
            {['Point of Sale','Credit Cards','Gift Cards','Mobile Ordering','Inventory Control','Barcoding','Time Clock','Custom Software'].map((item, i) => (
              <span key={i} className="ticker-pill">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ══ SECTION 1 — Cost Saving + Finance Visual ══ */}
      <section className="hp-split container">
        {/* LEFT: finance dashboard */}
        <div className="finance-visual">
          <div className="fv-inner">
            <div className="fv-topbar">
              <span className="fv-dot fv-dot--red" />
              <span className="fv-dot fv-dot--yellow" />
              <span className="fv-dot fv-dot--green" />
              <span className="fv-app-name">AkamaiPOS Analytics</span>
            </div>
            <div className="fv-kpis">
              <div className="fv-kpi">
                <span>Monthly Revenue</span>
                <strong>$84,291</strong>
                <em className="fv-trend fv-trend--up">up 24%</em>
              </div>
              <div className="fv-kpi">
                <span>Cost Savings</span>
                <strong>$18,450</strong>
                <em className="fv-trend fv-trend--up">up 18%</em>
              </div>
              <div className="fv-kpi">
                <span>Transactions</span>
                <strong>4,820</strong>
                <em className="fv-trend fv-trend--up">up 12%</em>
              </div>
            </div>
            <div className="fv-chart-area">
              <div className="fv-chart-bars">
                {CHART_BARS.map((h, i) => (
                  <div key={i} className="fv-bar" style={{ '--bar-h': `${h}%` }} />
                ))}
              </div>
              <div className="fv-chart-label">Revenue Trend — Last 8 Months</div>
            </div>
            <div className="fv-detail-row">
              <div className="fv-detail">
                <span>Retail</span>
                <div className="fv-prog"><div className="fv-prog-fill" style={{ '--pw': '78%' }} /></div>
              </div>
              <div className="fv-detail">
                <span>Restaurant</span>
                <div className="fv-prog"><div className="fv-prog-fill" style={{ '--pw': '65%' }} /></div>
              </div>
              <div className="fv-detail">
                <span>Warehouse</span>
                <div className="fv-prog"><div className="fv-prog-fill" style={{ '--pw': '52%' }} /></div>
              </div>
              <div className="fv-detail">
                <span>Services</span>
                <div className="fv-prog"><div className="fv-prog-fill" style={{ '--pw': '84%' }} /></div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: text */}
        <div className="hp-split__text">
          <p className="eyebrow">What We Do</p>
          <h2>Cost Saving Revenue Growth Systems</h2>
          <p>
            AkamaiPOS provides automatic business calculations to make sure your
            company's finances are easy to manage and forecast.
          </p>
          <p>
            For Retail, Restaurant, Warehouse, Professional Services and just about any
            business type — Point of Sale, Credit Cards, Gift Cards, Mobile Ordering,
            Inventory Control, Barcoding, Time Clock, Accounting Software, Custom
            Software and so much more!
          </p>
          <div className="hp-stat-pair">
            <div className="hp-stat">
              <h3>20<sup>+</sup></h3>
              <p>Years Solving Challenges</p>
            </div>
            <div className="hp-stat">
              <h3>60<sup>+</sup></h3>
              <p>Trusted Supplier Partners</p>
            </div>
          </div>
          <Link to="/contact" className="button button-primary">Talk to an Expert</Link>
        </div>
      </section>

      {/* ══ SECTION 2 — Our Experience ══ */}
      <section className="hp-split container">
        {/* LEFT: text */}
        <div className="hp-split__text">
          <p className="eyebrow">Our Experience</p>
          <h2>Expert technicians ready to help.</h2>
          <p>
            Our Expert Technicians have helped countless companies from established to
            startup. Whether you have problems to solve or a new project, we will come
            up with a great solution for you!
          </p>
          <div className="hp-badge-row">
            <span className="hp-badge">Retail</span>
            <span className="hp-badge">Restaurant</span>
            <span className="hp-badge">Hospitality</span>
            <span className="hp-badge">Healthcare</span>
            <span className="hp-badge">Wholesale</span>
            <span className="hp-badge">Professional Services</span>
          </div>
          <Link to="/contact" className="button button-primary">Get a Free Consultation</Link>
        </div>

        {/* RIGHT: experience / orbit visual */}
        <div className="exp-visual">
          <div className="ev-ring ev-ring--outer">
            <div className="ev-ring ev-ring--mid">
              <div className="ev-core">
                <h3>20<sup>+</sup></h3>
                <p>Years</p>
              </div>
            </div>
          </div>
          <div className="ev-orbit ev-orbit--1"><span>POS</span></div>
          <div className="ev-orbit ev-orbit--2"><span>ERP</span></div>
          <div className="ev-orbit ev-orbit--3"><span>Cloud</span></div>
          <div className="ev-orbit ev-orbit--4"><span>Pay</span></div>
          <p className="ev-label">Solving Challenges Since 2005</p>
        </div>
      </section>

      {/* ── Coverage Band ── */}
      <div className="coverage-band">
        <div className="coverage-band__inner container">
          <p className="coverage-band__label">Serving Everywhere You Are</p>
          <div className="coverage-band__chips">
            {['Oahu','Maui','Kauai','Big Island','Molokai','Lanai','Guam','Mainland US','And More'].map((loc) => (
              <span key={loc} className="coverage-chip">
                <span className="coverage-chip__dot" />
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══ SECTION 3 — Service Area ══ */}
      <section className="hp-split hp-split--flip container">
        {/* LEFT: Hawaii SVG map — Projection: X=(160.8-lon)*90  Y=(22.65-lat)*90 */}
        <div className="map-visual">
          <div className="mv-inner">
            <div className="mv-map-wrap">
              <img
                src={hawaiiPublicDomainMap}
                alt="Hawaii islands map (public domain)"
                className="mv-hawaii-svg"
                loading="lazy"
              />
            </div>
            <div className="mv-islands">
              <span>OAHU</span><span>MAUI</span><span>KAUAI</span>
              <span>BIG ISLAND</span><span>MOLOKAI</span><span>LANAI</span>
              <span>GUAM</span><span>BEYOND</span>
            </div>
          </div>
        </div>

        {/* RIGHT: text */}
        <div className="hp-split__text">
          <p className="eyebrow">Service Area</p>
          <h2>We are here wherever you may be.</h2>
          <p>
            We provide fast, friendly, best-of-class support — wherever you may be in
            our wonderful world! With the power of technology, we are here to help you
            at a moment's notice.
          </p>
          <p>
            Serving all Hawaiian Islands, Guam, and clients across the mainland and
            internationally. Onsite visits, remote support, and phone assistance
            available now.
          </p>
          <a href="tel:+18088438000" className="button button-primary">Call (808) 843-8000</a>
        </div>
      </section>

      {/* ══ SECTION 4 — Third-party Systems ══ */}
      <section className="hp-split hp-split--flip container">
        {/* LEFT: text */}
        <div className="hp-split__text">
          <p className="eyebrow">Own a Third-party System?</p>
          <h2>Don't despair — we can help!</h2>
          <p>
            We support various systems out there by utilizing our expertise and
            industry partnerships. Give us a call today for an expert evaluation —
            often there is hope!
          </p>
          <p>
            Our technicians work with systems from Oracle, NCR, Toshiba, Posiflex,
            POSX, PCAmerica and many more. No matter the brand, we bring solutions.
          </p>
          <Link to="/suppliers" className="button button-primary">View Our Partners</Link>
        </div>

        {/* RIGHT: third-party brands visual */}
        <div className="brands-visual">
          <div className="bv-grid">
            {['Oracle','NCR','Toshiba','Posiflex','POSX','Epson','Zebra','Honeywell','Verifone','Ingenico','Star','Elo'].map((b) => (
              <div key={b} className="bv-chip">{b}</div>
            ))}
          </div>
          <p className="bv-note">...and many more systems supported</p>
        </div>
      </section>

      {/* ── Dev Band ── */}
      <div className="dev-band">
        <div className="dev-band__inner container">
          {[
            { icon: 'code', label: 'Custom Programming' },
            { icon: 'extension', label: 'Software Expansion' },
            { icon: 'rocket_launch', label: 'New System Development' },
            { icon: 'manage_search', label: 'Expert Evaluation' },
          ].map(({ icon, label }) => (
            <div key={label} className="dev-band__item">
              <span className="material-symbols-outlined dev-band__icon">{icon}</span>
              <span className="dev-band__label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ SECTION 5 — Custom Programming ══ */}
      <section className="hp-split hp-split--flip container">
        {/* LEFT: code editor visual */}
        <div className="code-visual">
          <div className="cv-inner">
            <div className="cv-topbar">
              <span className="cv-dot cv-dot--red" />
              <span className="cv-dot cv-dot--yellow" />
              <span className="cv-dot cv-dot--green" />
              <span className="cv-filename">custom_solution.js</span>
            </div>
            <div className="cv-code">
              <div className="cv-line"><span className="cv-kw">const</span> <span className="cv-var">solution</span> = <span className="cv-fn">buildCustomPOS</span>({'{'}</div>
              <div className="cv-line cv-indent"><span className="cv-prop">inventory</span>: <span className="cv-bool">true</span>,</div>
              <div className="cv-line cv-indent"><span className="cv-prop">payments</span>: <span className="cv-str">'multi-terminal'</span>,</div>
              <div className="cv-line cv-indent"><span className="cv-prop">reporting</span>: <span className="cv-str">'real-time'</span>,</div>
              <div className="cv-line cv-indent"><span className="cv-prop">integrations</span>: <span className="cv-str">'unlimited'</span>,</div>
              <div className="cv-line cv-indent"><span className="cv-prop">support</span>: <span className="cv-str">'24/7 Akamai'</span>,</div>
              <div className="cv-line">{'}'});</div>
              <div className="cv-line cv-blank" />
              <div className="cv-line cv-comment">// Your vision. Our expertise.</div>
              <div className="cv-line"><span className="cv-kw">return</span> solution.<span className="cv-fn">deploy</span>();</div>
            </div>
            <div className="cv-cursor" />
          </div>
        </div>

        {/* RIGHT: text */}
        <div className="hp-split__text">
          <p className="eyebrow">Custom Programming</p>
          <h2>We build the software of your dreams.</h2>
          <p>
            AkamaiPOS has an expert team of programmers ready to build any software
            you can imagine! With our powerful programming magic, we can expand your
            existing system or build an entirely new custom solution.
          </p>
          <p>
            Why are you waiting — let's get started today!
          </p>
          <Link to="/contact" className="button button-primary">Start a Project</Link>
        </div>
      </section>

      {/* ══ SECTION 6 — Computer Support + Cloud ══ */}
      <section className="hp-split hp-split--flip container">
        {/* LEFT: text */}
        <div className="hp-split__text">
          <p className="eyebrow">Computer Support</p>
          <h2>Full IT support — hardware to cloud.</h2>
          <p>
            We offer a full range of computer and network support services: Computer
            and Server Setup, Hardware Repair, Cabling, Wireless, Cloud Systems,
            Email, Backup, Anti-virus, Firewalls, Remote Access and so much more.
          </p>
          <p>
            AkamaiPOS performs automatic cloud storage backups to ensure your company
            is safe from any malicious attacks or unforeseen events.
          </p>
          <Link to="/contact" className="button button-primary">Get IT Support</Link>
        </div>

        {/* RIGHT: cloud/server visual */}
        <div className="cloud-visual">
          <div className="clv-inner">
            <div className="clv-rack">
              {[1,2,3,4].map((n) => (
                <div key={n} className="clv-server">
                  <span className="clv-led clv-led--on" />
                  <span className="clv-label">SRV-0{n}</span>
                  <div className="clv-bar-mini">
                    <div className="clv-bar-fill" style={{ '--bw': `${[72,45,88,61][n-1]}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="clv-cloud-row">
              <div className="clv-cloud-icon">
                <svg viewBox="0 0 48 32" fill="none" aria-hidden="true">
                  <path d="M38 28H10a8 8 0 1 1 1.4-15.9A12 12 0 1 1 38 28z" fill="rgba(0,153,204,0.35)" stroke="rgba(0,153,204,0.7)" strokeWidth="1.5"/>
                </svg>
                <div className="clv-upload-arrow">
                  <span /><span /><span />
                </div>
              </div>
              <div className="clv-cloud-stats">
                <div className="clv-cstat"><strong>Auto Backup</strong><small>Daily</small></div>
                <div className="clv-cstat clv-cstat--green"><strong>Secure</strong><small>Encrypted</small></div>
                <div className="clv-cstat"><strong>Recovery</strong><small>Instant</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Support Stats Band ── */}
      <div className="support-stats-band">
        <div className="support-stats-band__inner container">
          {[
            { stat: '< 2 min', label: 'Response Time' },
            { stat: '99.99%', label: 'System Uptime' },
            { stat: '24 / 7', label: 'Expert Support' },
            { stat: '12,400+', label: 'Tickets Resolved' },
            { stat: '98%', label: 'Satisfaction Rate' },
          ].map(({ stat, label }) => (
            <div key={label} className="ssb-item">
              <strong className="ssb-stat">{stat}</strong>
              <span className="ssb-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ SECTION 7 — Services Grid ══ */}
      <section className="home-services">
        <div className="container">
          <div className="home-services__header">
            <p className="eyebrow">Our Services</p>
            <h2>Everything your business needs in one system.</h2>
            <p className="home-services__sub">Purpose-built tools for operations, payments, staffing, and growth.</p>
          </div>
          <div className="home-services__grid">
            {services.map((svc) => (
              <article key={svc.title} className="svc-card">
                <div className="svc-card__head">
                  <span className="svc-icon-wrap">
                    <span className="material-symbols-outlined svc-icon">{svc.icon}</span>
                  </span>
                  <h3>{svc.title}</h3>
                </div>
                <p className="svc-card__body">{svc.body}</p>
                <div className="svc-card__foot">Included in tailored deployments</div>
              </article>
            ))}
          </div>

          <div className="home-services__graphic" aria-hidden="true">
            <svg className="home-services__svg" viewBox="0 0 1000 180" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="svcTrack" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0099cc" stopOpacity="0.12" />
                  <stop offset="50%" stopColor="#00b3a4" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#ff6600" stopOpacity="0.14" />
                </linearGradient>
                <linearGradient id="svcStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0099cc" />
                  <stop offset="100%" stopColor="#ff6600" />
                </linearGradient>
              </defs>

              <rect x="8" y="8" width="984" height="164" rx="22" fill="url(#svcTrack)" />

              <path
                d="M70 95 C160 38, 290 38, 380 95 C470 152, 600 152, 690 95 C780 38, 900 38, 950 88"
                fill="none"
                stroke="url(#svcStroke)"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.9"
              />

              <g fill="#00334d">
                <circle cx="120" cy="78" r="10" fill="#0099cc" />
                <circle cx="280" cy="55" r="10" fill="#00b3a4" />
                <circle cx="500" cy="122" r="10" fill="#00b3a4" />
                <circle cx="710" cy="76" r="10" fill="#0099cc" />
                <circle cx="900" cy="58" r="10" fill="#ff6600" />
              </g>

              <g fill="#ffffff" fontFamily="Outfit, sans-serif" fontSize="16" fontWeight="700" textAnchor="middle">
                <text x="120" y="112">POS</text>
                <text x="280" y="89">PAY</text>
                <text x="500" y="156">CLOUD</text>
                <text x="710" y="110">SUPPORT</text>
                <text x="900" y="92">GROWTH</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <div className="cta-band">
        <div className="cta-band__inner container">
          <div className="cta-band__text">
            <p className="cta-band__eyebrow">Available 24 / 7</p>
            <p className="cta-band__headline">Expert support, always ready.</p>
          </div>
          <div className="cta-band__action">
            <a href="tel:+18088438000" className="cta-band__phone">
              <span className="material-symbols-outlined cta-band__phone-icon">phone_in_talk</span>
              <span>(808) 843-8000</span>
            </a>
            <p className="cta-band__sub">Onsite · Remote · All Islands · Guam · Mainland</p>
          </div>
        </div>
      </div>

      {/* ══ SECTION 8 — Support ══ */}
      <section className="hp-split container">
        {/* LEFT: text */}
        <div className="hp-split__text">
          <p className="eyebrow">Expert Support</p>
          <h2>We're always here when you need us.</h2>
          <p>
            24/7 support means that we are here with you every step of the way!
            Our technicians are fast, friendly and ready to help no matter
            what the situation may be.
          </p>
          <p>
            Give us a call anytime — we answer quickly and resolve issues fast
            so your business never skips a beat.
          </p>
          <a href="tel:+18088438000" className="button button-primary">Call (808) 843-8000</a>
        </div>

        {/* RIGHT: monitor visual */}
        <div className="monitor-visual">
          <div className="mon-screen">
            <div className="mon-topbar">
              <span className="mon-dot" /><span className="mon-dot" /><span className="mon-dot" />
              <span className="mon-title">AkamaiPOS Support</span>
            </div>
            <div className="mon-body">
              <div className="mon-status mon-status--ok">
                <span className="material-symbols-outlined">check_circle</span>
                <span>All Systems Operational</span>
              </div>
              <div className="mon-grid">
                <div className="mon-row"><span>Response Time</span><strong className="mon-green">{'< 2 min'}</strong></div>
                <div className="mon-row"><span>Uptime</span><strong className="mon-green">99.99%</strong></div>
                <div className="mon-row"><span>Tickets Resolved</span><strong>12,400+</strong></div>
                <div className="mon-row"><span>Satisfaction</span><strong className="mon-green">98%</strong></div>
              </div>
              <div className="mon-foot">Live monitoring · 24/7 response team</div>
            </div>
          </div>
          <div className="mon-stand" />
          <div className="mon-base" />
        </div>
      </section>

      {/* ── Islands Footer Strip ── */}
      <div className="islands-strip">
        <div className="islands-strip__inner container">
          <span className="islands-strip__icon material-symbols-outlined">location_on</span>
          <span className="islands-strip__label">Serving:</span>
          {['Oahu','Maui','Kauai','Big Island','Molokai','Lanai','Guam','Mainland US','International'].map((loc, i, arr) => (
            <span key={loc} className="islands-strip__group">
              <span className="islands-strip__loc">{loc}</span>
              {i < arr.length - 1 && <span className="islands-strip__sep" aria-hidden="true" />}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
