import type { Metadata } from 'next';
import Link from 'next/link';
import { FinalCTA } from '@/components/final-cta';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'About — ComplyAI',
  description:
    'ComplyAI is building the control plane for AI agents — governing the action layer between IAM and the model.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title={
          <>
            IAM ends at the API. <em>We govern what comes next.</em>
          </>
        }
        lede="Every enterprise has spent years governing what humans can access. Nobody is governing what AI agents can do — at the action layer, in real time, against declared purpose."
      />

      <section className="bay bay--surface">
        <div className="shell shell--content about-prose" data-reveal>
          <h2 className="h2">Thesis</h2>
          <p className="lede">
            That gap is where every agentic incident happens. Agents inherit human credentials and
            act at machine speed — often without scope, purpose checks, or an audit trail auditors
            can use. We close it.
          </p>

          <h2 className="h2">What we build</h2>
          <p>
            Seven modules. Three phases. Onboard → Govern → Account.
          </p>
          <p>
            Sub-100ms enforcement. Identity-attributed audit. Cost telemetry. Ready for your next
            framework audit on day one.
          </p>

          <h2 className="h2">Design partners</h2>
          <p>
            We&apos;re working directly with security and engineering teams. 14-day pilots. NDA in
            24 hours. We deploy in your environment — not a sandbox, your real agent fleet.
          </p>

          <div className="page-hero__ctas">
            <Link href="/demo" className="btn btn--primary">
              Request early access <span className="arrow">→</span>
            </Link>
            <Link href="/platform" className="btn btn--ghost">
              See the platform →
            </Link>
          </div>

          <p className="about-prose__contact">
            General: <a href="mailto:hi@complai.dev">hi@complai.dev</a> · Security:{' '}
            <a href="mailto:security@complai.dev">security@complai.dev</a>
          </p>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
