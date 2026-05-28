import type { Metadata } from 'next';
import Link from 'next/link';
import { Platform } from '@/components/platform';
import { FocalNumber } from '@/components/focal-number';
import { HowItWorks } from '@/components/how-it-works';
import { FinalCTA } from '@/components/final-cta';
import { PageHero } from '@/components/page-hero';
import { AgentMeshDiagram } from '@/components/agent-mesh-diagram';
import { BlastRadiusDiagram } from '@/components/blast-radius-diagram';
import { WhyComplai } from '@/components/why-complai';
import { DEPLOYMENT_MODELS } from '@/lib/platform-modules';
import { POSITIONING } from '@/lib/site-copy';

export const metadata: Metadata = {
  title: 'Platform — Control plane architecture | ComplyAI',
  description:
    'Seven modules across onboard, govern, and account phases. Designed around four capabilities the existing tool stack misses: HITL triage, pre-execution reasoning guard, cryptographic MCP signing, and blast-radius simulation.',
  alternates: { canonical: '/platform' },
  openGraph: {
    title: 'Platform — Control plane architecture | ComplyAI',
    description:
      'Seven modules. One control plane. Three lifecycle phases — Onboard, Govern, Account.',
    url: '/platform',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform — Control plane architecture | ComplyAI',
    description:
      'Seven modules. One control plane. Three lifecycle phases — Onboard, Govern, Account.',
  },
};


export default function PlatformPage() {
  return (
    <main>
      <PageHero
        eyebrow="Platform"
        title={<>{POSITIONING.oneLiner}</>}
        lede="Seven modules, three phases — Onboard, Govern, Account. Deploy in your environment or ours."
      >
        <div className="page-hero__ctas">
          <Link href="/demo" className="btn btn--primary">
            Request early access <span className="arrow">→</span>
          </Link>
          <Link href="/runtime-governance" className="btn btn--ghost">
            Runtime Governance
          </Link>
        </div>
      </PageHero>

      <section className="bay bay--surface" id="architecture">
        <div className="shell">
          <div className="section-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              Architecture
            </span>
            <h2 className="h2">
              Deploy where <em>your agents run.</em>
            </h2>
          </div>
          <ul className="deployment-models" data-reveal-stagger>
            {DEPLOYMENT_MODELS.map((d) => (
              <li key={d.name} className="card deployment-model">
                <h3>{d.name}</h3>
                <p>{d.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AgentMeshDiagram />

      <WhyComplai />

      <Platform />

      <BlastRadiusDiagram />

      <FocalNumber />

      <HowItWorks variant="full" />

      <FinalCTA />
    </main>
  );
}
