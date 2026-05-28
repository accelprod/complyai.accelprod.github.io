import type { Metadata } from 'next';
import { ComplianceMap } from '@/components/compliance-map';
import { FinalCTA } from '@/components/final-cta';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Compliance — SOC 2, ISO 27001, NIST AI RMF for AI agents | ComplyAI',
  description:
    'AI agent compliance packs. Pre-built control mappings and audit evidence for SOC 2, ISO 27001, NIST AI RMF, and EU AI Act.',
};

export default function CompliancePage() {
  return (
    <main>
      <PageHero
        eyebrow="Compliance"
        title={
          <>
            The frameworks your auditor cares about, <em>shaped for AI agents.</em>
          </>
        }
        lede="Pre-built rule packs, control mappings, and audit-export templates per framework."
      />
      <ComplianceMap />
      <FinalCTA />
    </main>
  );
}
