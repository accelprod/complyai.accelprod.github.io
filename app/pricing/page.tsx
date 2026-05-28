import type { Metadata } from 'next';
import Link from 'next/link';
import { FinalCTA } from '@/components/final-cta';
import { PageHero } from '@/components/page-hero';
import { faqJsonLd } from '@/lib/seo';
import { CTAS } from '@/lib/site-copy';

export const metadata: Metadata = {
  title: 'Pricing — Enterprise AI agent governance | ComplyAI',
  description:
    'ComplyAI pricing scales with agent volume and deployment model. Start with a free time-limited pilot — we deploy in your environment in a single session.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing — Free pilot, scoped enterprise | ComplyAI',
    description:
      'Start free with a time-limited pilot. Enterprise pricing scales with agent volume and deployment model.',
    url: '/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Free pilot, scoped enterprise | ComplyAI',
    description:
      'Start free with a time-limited pilot. Enterprise pricing scales with agent volume and deployment model.',
  },
};

const FAQ = [
  {
    q: 'What does the pilot include?',
    a: 'Full enforcement, audit output, and cost telemetry in your environment — no cut-down version. You see exactly what enterprise looks like before committing to anything.',
  },
  {
    q: 'How long does deployment take?',
    a: 'One session. Most teams are live — with real enforcement and audit output — the same day.',
  },
  {
    q: 'What is the enterprise pricing model?',
    a: 'Pricing is based on agent volume, deployment model (cloud, on-prem, air-gapped), and modules required. We scope it on a 30-minute call — no commitment required.',
  },
  {
    q: 'Do you support on-premises deployment?',
    a: 'Yes. ComplyAI can run fully on-prem or in an air-gapped environment. No data leaves your infrastructure unless you explicitly route it to your SIEM.',
  },
];

export default function PricingPage() {
  const faqSchema = faqJsonLd(FAQ);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Built for enterprise teams. <em>Scoped to your deployment.</em>
          </>
        }
        lede="Pricing is based on agent volume, deployment model, and modules required. We scope it on a 30-minute call."
      />

      <section className="bay bay--surface">
        <div className="shell">
          <div className="pricing-dual" data-reveal-stagger>
            <article className="card pricing-tier">
              <span className="eyebrow">Pilot</span>
              <h2 className="h2">Free · Time-limited</h2>
              <p className="lede">
                Get ComplyAI running in your environment in a single session.
              </p>
              <ul className="pricing-tier__list">
                <li>Real enforcement — not a demo sandbox</li>
                <li>Full audit output from day one</li>
                <li>Real cost telemetry across your agent fleet</li>
                <li>We deploy with you — live, in your environment</li>
              </ul>
              <p className="pricing-tier__note">
                See real governance before you commit to anything.
              </p>
              <Link href="/demo" className="btn btn--primary">
                {CTAS.pilot} <span className="arrow">→</span>
              </Link>
            </article>

            <article className="card pricing-tier pricing-tier--highlight">
              <span className="eyebrow">Enterprise</span>
              <h2 className="h2">Custom pricing</h2>
              <p className="lede">
                For production deployments across your full agent fleet.
              </p>
              <ul className="pricing-tier__list">
                <li>SLAs, SSO, dedicated support</li>
                <li>On-prem and air-gapped options</li>
                <li>SOC 2, ISO 27001, NIST AI RMF, EU AI Act packs</li>
                <li>Scanner · Sandbox · Identity · Insight</li>
              </ul>
              <p className="pricing-tier__note">
                Most enterprise teams start with a scoped pilot.
              </p>
              <Link href="/demo" className="btn btn--primary">
                {CTAS.sales} <span className="arrow">→</span>
              </Link>
            </article>
          </div>

          <p className="pricing-note" data-reveal>
            Pricing scales with agent volume and deployment model. We scope it in 30 minutes — no
            commitment required.
          </p>
        </div>
      </section>

      <section className="bay bay--surface">
        <div className="shell shell--content">
          <div className="section-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              Pricing FAQ
            </span>
            <h2 className="h2">Common questions</h2>
          </div>
          <div className="faq-list" data-reveal-stagger>
            {FAQ.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p className="faq-item__a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
