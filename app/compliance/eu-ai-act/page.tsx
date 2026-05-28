import type { Metadata } from 'next';
import { CompliancePageShell } from '@/components/compliance-page-shell';

export const metadata: Metadata = {
  title: 'EU AI Act Article 12 — ComplyAI',
  description:
    'Per-action immutable record with identity, decision, and model — the shape Article 12 (record-keeping) of the EU AI Act requires. August 2026 deadline.',
  alternates: { canonical: '/compliance/eu-ai-act' },
  openGraph: {
    title: 'EU AI Act Article 12 record-keeping for AI agents | ComplyAI',
    description:
      'Article 12 enforcement begins August 2026. ComplyAI produces the per-action record shape the regulation requires.',
    url: '/compliance/eu-ai-act',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EU AI Act Article 12 record-keeping for AI agents | ComplyAI',
    description:
      'Article 12 enforcement begins August 2026. ComplyAI produces the per-action record shape the regulation requires.',
  },
};

export default function Page() {
  return (
    <CompliancePageShell
      framework="EU AI Act"
      shortName="EU AI Act"
      badge="EU AI Act · Article 12 record-keeping"
      hero="August 2026. Article 12 enforcement begins."
      heroEm="€15M or 3% of global turnover. Your AI agents are in scope. The record-keeping requirement isn't optional."
      lede="Article 12 requires per-action records with identity and decisions. ComplyAI produces that shape for AI agents in your environment on day one."
      whyNow="Article 12 enforcement begins 2 August 2026 for high-risk systems. AI agents acting on production systems routinely qualify as high-risk (Annex III, points 6 and 8). The fine schedule starts at €15M or 3% of global turnover. Not sure if your deployment is in scope? Run the free 10-minute readiness check at /eu-ai-act-readiness — a gap report lands in your inbox within one business day."
      mappings={[
        { control: 'Art. 12(1)', requirement: 'Automatic recording of events while system is operating', how: 'Append-only JSONL ledger captures every AI agent action — automatically, with no developer-side intervention.' },
        { control: 'Art. 12(2)(a)', requirement: 'Period of each use, date/time, output', how: 'Each event timestamped; session start/end captured; agent response and reasoning blocks logged.' },
        { control: 'Art. 12(2)(b)', requirement: 'Identification of natural persons involved', how: 'Every event stamped with user identity and organisation ID from the signed-in account.' },
        { control: 'Art. 12(2)(c)', requirement: 'Reference database against which input data was checked', how: 'Policy file path + version stamped on every decision. Replay-ready against historical policy versions.' },
        { control: 'Art. 12(2)(d)', requirement: 'Input data leading to system output', how: 'User prompts logged (with optional redaction). Tool arguments logged. Action payload preserved.' },
        { control: 'Art. 12(2)(e)', requirement: 'Identification of natural persons who verified output', how: 'Approval workflow records the approving identity; deny/allow decision records the rule and risk score.' },
      ]}
      artifacts={[
        'Pre-built policy mapped to Article 12 subsections',
        'Article 12 mapping document with example ledger entries per subsection',
        'Audit-export template — JSONL filtered to Article 12-relevant fields',
        'Risk classification questionnaire (Annex III) — does my deployment qualify?',
        'Customer-managed encryption keys configuration guide (Article 12(3) retention)',
        'Bridge document for your existing AI Act conformity assessment',
      ]}
      faq={[
        { q: 'Are AI agents in production environments in scope for the EU AI Act?', a: 'It depends on the use case (Annex III). If your AI agents touch production systems in critical infrastructure, employment, education, law enforcement, justice, or biometric ID — likely yes. We provide a classification questionnaire in the pack.' },
        { q: 'What about Article 13 (transparency to deployers) and Article 14 (human oversight)?', a: 'ComplyAI primarily addresses Article 12 (record-keeping) and Article 14 (human oversight — via approval workflows). Article 13 transparency is upstream of us and depends on the foundation model provider.' },
        { q: 'Does the retention requirement (six months minimum, or contractually longer) apply?', a: 'Yes — Article 12(3). Configure ComplyAI to write to durable storage with your retention policy.' },
      ]}
    />
  );
}
