import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Page not found · ComplyAI',
  description: 'The page you were looking for has moved or never existed. Pick a destination below.',
  robots: { index: false, follow: false },
};

const SUGGESTED_LINKS = [
  {
    href: '/platform',
    title: 'Platform',
    detail: 'The seven-module control plane.',
  },
  {
    href: '/compliance',
    title: 'Compliance',
    detail: 'SOC 2 · ISO 27001 · NIST AI RMF · EU AI Act.',
  },
  {
    href: '/demo',
    title: 'Request early access',
    detail: '30-minute discovery call with the team.',
  },
];

export default function NotFound() {
  return (
    <main>
      <PageHero
        eyebrow="404"
        title={
          <>
            That page isn&apos;t here. <em>The ones that are, are below.</em>
          </>
        }
        lede="The link may have moved, retired, or never existed. Pick a destination — or head back to the home page."
      >
        <div className="page-hero__ctas">
          <Link href="/" className="btn btn--primary">
            Back to home <span className="arrow">→</span>
          </Link>
          <Link href="/demo" className="btn btn--ghost">
            Request early access
          </Link>
        </div>
      </PageHero>

      <section className="bay bay--surface" aria-labelledby="not-found-suggestions">
        <div className="shell">
          <div className="section-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              Where to next
            </span>
            <h2 className="h2" id="not-found-suggestions">
              Three places <em>most visitors are looking for.</em>
            </h2>
          </div>
          <ul className="not-found__grid" data-reveal-stagger>
            {SUGGESTED_LINKS.map((link) => (
              <li key={link.href} className="not-found__card card">
                <h3 className="not-found__card-title">{link.title}</h3>
                <p className="not-found__card-detail">{link.detail}</p>
                <Link href={link.href} className="not-found__card-link">
                  Go to {link.title.toLowerCase()} <span className="arrow">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
