import type { Metadata } from 'next';
import { CompliancePageShell } from '@/components/compliance-page-shell';

export const metadata: Metadata = {
  title: 'NIST AI RMF for AI agents — ComplyAI',
  description:
    'GOVERN, MEASURE, MANAGE applied to AI agents in your environment. Policy as code, OpenTelemetry telemetry, real-time deny/approve path.',
};

export default function Page() {
  return (
    <CompliancePageShell
      framework="NIST AI RMF"
      shortName="NIST AI RMF"
      badge="NIST AI RMF · GOVERN · MEASURE · MANAGE"
      hero="NIST AI RMF tells you to GOVERN, MEASURE, and MANAGE."
      heroEm="What does that look like for agents running in your environment today?"
      lede="NIST AI RMF in one product: GOVERN (policy), MEASURE (telemetry), MANAGE (deny/approve at the action boundary)."
      whyNow="NIST AI RMF is referenced in OMB M-24-10 (federal AI use), Executive Order 14110, and the majority of Fortune 500 internal AI policies. Vendor procurement increasingly requires alignment. Today most AI tools cannot evidence the framework in any concrete way."
      mappings={[
        { control: 'GOVERN 1.1', requirement: 'Policies, processes, and procedures', how: 'Policy-as-code — versioned, reviewable, security-edited. The artifact GOVERN requires.' },
        { control: 'GOVERN 1.4', requirement: 'Mechanisms for AI risk management', how: 'Risk-scored rules (0.0–1.0), denial statistics, approval workflows. The mechanism.' },
        { control: 'MAP 4.1', requirement: 'Approaches to enhance AI system trustworthiness', how: 'Pre-built rule library covers the documented common AI agent failure modes.' },
        { control: 'MEASURE 2.7', requirement: 'AI system security and resilience', how: 'Per-action audit ledger; provider-authoritative cost telemetry; OpenTelemetry export.' },
        { control: 'MEASURE 2.8', requirement: 'AI risks and benefits documented', how: 'Quarterly denial-statistics report; per-rule fire counts; identity-attributed events.' },
        { control: 'MANAGE 2.3', requirement: 'Procedures to respond to and recover from incidents', how: 'Real-time denials + approval workflow + replay-ready audit. The response path.' },
      ]}
      artifacts={[
        'Pre-built policy mapped to NIST AI RMF functions',
        'GOVERN · MEASURE · MANAGE mapping document with example artifacts',
        'Quarterly RMF summary report template',
        'Risk register input template (machine-readable JSON)',
        'OMB M-24-10 alignment guide for federal customers',
      ]}
      faq={[
        { q: 'Is NIST AI RMF mandatory?', a: 'For U.S. federal agencies — effectively yes, via OMB M-24-10 and EO 14110. For private sector — increasingly required in vendor procurement, even where not legally mandated.' },
        { q: 'How does NIST AI RMF relate to the EU AI Act and ISO 42001?', a: 'They are complementary. NIST AI RMF is the framework; ISO 42001 is the certifiable management system; EU AI Act is the regulation. ComplyAI provides evidence for all three.' },
        { q: 'Does ComplyAI cover all four RMF functions?', a: 'Yes — see the mapping above. GOVERN, MAP, MEASURE, MANAGE all have direct artifacts in the platform.' },
      ]}
    />
  );
}
