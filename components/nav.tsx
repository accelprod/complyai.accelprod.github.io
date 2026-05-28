'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { BrandMark } from '@/components/brand-mark';
import { CTAS } from '@/lib/site-copy';

type NavLink = { href: string; label: string; note?: string };
type Group = { label: string; links: NavLink[] };

const PLATFORM: Group = {
  label: 'Platform',
  links: [
    { href: '/platform', label: 'Overview', note: 'Control plane architecture' },
    { href: '/platform#agent-mesh', label: 'Agent Mesh', note: 'Evidence-scoped path view' },
    { href: '/platform#blast-radius', label: 'Blast Radius', note: 'Cascade simulation before deploy' },
    { href: '/runtime-governance', label: 'Runtime Governance', note: 'Action-boundary enforcement' },
    { href: '/runtime-governance#drift-guard', label: 'Reasoning Drift Guard', note: 'Pre-execution interception' },
    { href: '/platform#why-complai', label: 'Why ComplyAI', note: 'Four designed-in capabilities' },
  ],
};

const SOLUTIONS: Group = {
  label: 'Solutions',
  links: [
    { href: '/solutions#ciso', label: 'For Security & CISOs' },
    { href: '/solutions#engineering', label: 'For Engineering Leaders' },
    { href: '/solutions#compliance', label: 'For Compliance & Audit' },
  ],
};

const COMPLIANCE: Group = {
  label: 'Compliance',
  links: [
    { href: '/compliance/soc2', label: 'SOC 2', note: 'AI agent audit evidence' },
    { href: '/compliance/iso-27001', label: 'ISO 27001', note: 'ISMS blind spots, closed' },
    { href: '/compliance/nist-ai-rmf', label: 'NIST AI RMF', note: 'GOVERN · MEASURE · MANAGE' },
    { href: '/compliance/eu-ai-act', label: 'EU AI Act', note: 'Article 12 · August 2026' },
    // EU AI Act readiness funnel paused — restore by uncommenting this entry.
    // { href: '/eu-ai-act-readiness', label: '10-min Readiness Check', note: 'Get a gap report — no demo required' },
  ],
};

const TOP_LINKS: [string, string][] = [
  ['/pricing', 'Pricing'],
];

function linkActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  const base = href.split('#')[0];
  return pathname.startsWith(base);
}

export function Nav() {
  const pathname = usePathname();
  const navGradientId = useId().replace(/:/g, '');
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) document.body.classList.add('nav--menu-open');
    else document.body.classList.remove('nav--menu-open');
    return () => document.body.classList.remove('nav--menu-open');
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen && !open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setOpen(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen, open]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(null);
    };
    window.addEventListener('mousedown', onClick);
    return () => window.removeEventListener('mousedown', onClick);
  }, []);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const renderGroup = (g: Group) => (
    <li key={g.label} className={`nav__menu${open === g.label ? ' is-open' : ''}`}>
      <button
        type="button"
        className="nav__menu-btn"
        aria-expanded={open === g.label}
        onClick={() => setOpen((o) => (o === g.label ? null : g.label))}
      >
        {g.label}
        <span className="nav__menu-caret" aria-hidden>
          ▾
        </span>
      </button>
      <div className="nav__menu-panel" role="menu">
        <ul>
          {g.links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} role="menuitem">
                <span className="nav__menu-label">{l.label}</span>
                {l.note ? <span className="nav__menu-note">{l.note}</span> : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );

  return (
    <nav
      className={`nav${menuOpen ? ' nav--drawer-open' : ''}${scrolled ? ' nav--scrolled' : ''}`}
      ref={rootRef}
    >
      <div className="nav__inner">
        <Link href="/" className="nav__logo" aria-label="ComplyAI home">
          <span className="nav__mark" aria-hidden>
            <BrandMark gradientId={navGradientId} />
          </span>
          <span className="nav__wordmark">ComplyAI</span>
        </Link>
        <ul className="nav__links nav__links--desktop">
          {renderGroup(PLATFORM)}
          {renderGroup(SOLUTIONS)}
          {renderGroup(COMPLIANCE)}
          {TOP_LINKS.map(([href, label]) => (
            <li key={href}>
              <Link href={href} className={linkActive(pathname, href) ? 'is-active' : ''}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav__cta">
          <Link href="/demo" className="btn btn--primary nav__wait-desktop">
            {CTAS.demo} <span className="arrow">→</span>
          </Link>
          <button
            type="button"
            className="nav__burger"
            aria-expanded={menuOpen}
            aria-controls="nav-mobile-panel"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="nav__burger-lines" aria-hidden />
            <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      <div
        id="nav-mobile-panel"
        className={`nav__drawer${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="nav__drawer-backdrop" onClick={() => setMenuOpen(false)} aria-hidden />
        <div className="nav__drawer-panel">
          {[PLATFORM, SOLUTIONS, COMPLIANCE].map((g) => (
            <section key={g.label} className="nav__drawer-section">
              <p className="nav__drawer-heading">{g.label}</p>
              <ul>
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section className="nav__drawer-section">
            <p className="nav__drawer-heading">More</p>
            <ul>
              {TOP_LINKS.map(([href, label]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <Link href="/demo" className="btn btn--primary nav__drawer-wait">
            {CTAS.demo} <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
