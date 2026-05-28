import Link from 'next/link';
import { POSITIONING, CTAS } from '@/lib/site-copy';

const COLS = [
  {
    heading: 'Platform',
    links: [
      ['/platform', 'Platform overview'],
      ['/runtime-governance', 'Runtime Governance'],
      ['/platform#architecture', 'Architecture'],
    ],
  },
  {
    heading: 'Solutions',
    links: [
      ['/solutions#ciso', 'For Security & CISOs'],
      ['/solutions#engineering', 'For Engineering Leaders'],
      ['/solutions#compliance', 'For Compliance & Audit'],
    ],
  },
  {
    heading: 'Compliance',
    links: [
      ['/compliance/soc2', 'SOC 2'],
      ['/compliance/iso-27001', 'ISO 27001'],
      ['/compliance/nist-ai-rmf', 'NIST AI RMF'],
      ['/compliance/eu-ai-act', 'EU AI Act'],
    ],
  },
  {
    heading: 'Company',
    links: [
      ['/about', 'About'],
      ['/pricing', 'Pricing'],
      ['/demo', 'Request early access'],
      ['mailto:hi@complai.dev', 'hi@complai.dev'],
    ],
  },
];

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="foot__col">
      <h5>{heading}</h5>
      <ul>
        {links.map(({ href, label }) => (
          <li key={String(label)}>
            {String(href).startsWith('mailto:') ? (
              <a href={String(href)}>{label}</a>
            ) : (
              <Link href={String(href)}>{label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot__grid">
          <div className="foot__col foot__brand">
            <Link href="/" className="nav__logo" aria-label="ComplyAI home">
              <span className="nav__mark" aria-hidden>
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <rect width="28" height="28" rx="7" fill="var(--accent)" />
                  <path
                    d="M20 8 A 7 7 0 1 0 20 20"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <circle cx="20" cy="14" r="2.4" fill="#fff" />
                </svg>
              </span>
              <span className="nav__wordmark">ComplyAI</span>
            </Link>
            <p>{POSITIONING.oneLiner}</p>
            <Link href="/demo" className="btn btn--primary foot__demo-cta">
              {CTAS.demo} <span className="arrow">→</span>
            </Link>
            <ul className="foot__badges">
              <li>NIST AI RMF aligned</li>
              <li>ISO/IEC 27001 aligned</li>
              <li>EU AI Act aligned</li>
              <li>OpenTelemetry-native</li>
            </ul>
          </div>

          {COLS.map((c) => (
            <FooterCol
              key={c.heading}
              heading={c.heading}
              links={c.links.map(([href, label]) => ({ href, label }))}
            />
          ))}
        </div>

        <div className="foot__legal-row">
          <ul>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
            <li>
              <a href="mailto:security@complai.dev">security@complai.dev</a>
            </li>
          </ul>
        </div>

        <div className="foot__bottom">
          <span>© 2026 ComplyAI · {POSITIONING.category}</span>
        </div>
      </div>
    </footer>
  );
}
