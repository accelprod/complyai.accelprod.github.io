import type { Metadata } from 'next';
import Link from 'next/link';
import { FinalCTA } from '@/components/final-cta';
import { CTAS } from '@/lib/site-copy';

export const metadata: Metadata = {
  title: 'Solutions — AI agent governance for every team | ComplyAI',
  description:
    'AI agent governance for CISOs, engineering leaders, and compliance teams — one control plane, evidence shaped for each stakeholder.',
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: 'Solutions — One platform. Three stakeholders. | ComplyAI',
    description:
      'CISO, engineering, compliance — every team on the hook for AI agents gets evidence shaped for them.',
    url: '/solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions — One platform. Three stakeholders. | ComplyAI',
    description:
      'CISO, engineering, compliance — every team on the hook for AI agents gets evidence shaped for them.',
  },
};

const CISO_OUTCOMES = [
  {
    title: 'Real-time deny before damage is done',
    body: 'Block destructive operations, secret-file reads, and out-of-scope API calls before they execute.',
  },
  {
    title: 'Every action tied to a signed-in identity',
    body: 'User, org, rule, and policy version on every decision. Append-only JSONL — no after-the-fact reconstruction.',
  },
  {
    title: 'SIEM-ready on day one',
    body: 'OpenTelemetry OTLP/JSON to Splunk, Datadog, Elastic, Grafana, or any OTel-compatible backend.',
  },
  {
    title: 'Board-ready quarterly summary',
    body: 'Actions run, denials, rules fired, identities involved — shaped for a security review.',
  },
];

const ENGINEERING_OUTCOMES = [
  {
    title: 'Provider-reported cost per session, developer, and org',
    body: 'Not estimates. Authoritative token and dollar telemetry — the number your finance team will accept.',
  },
  {
    title: 'Outlier sessions surfaced — not discovered at month-end',
    body: 'Runaway agent sessions caught in flight. Cost anomalies flagged before the invoice arrives.',
  },
  {
    title: 'Policy-as-code your security team owns',
    body: 'Zero dev friction. Your agents adopt governance without a code change.',
  },
  {
    title: 'Scales to your full agent fleet',
    body: 'No rearchitecting. Works across the agents and infrastructure your teams already use.',
  },
];

const APAC_OUTCOMES = [
  {
    title: 'Built for India/APAC BFSI from day one',
    body: 'Localised deployment patterns for RBI, MAS, and IRDAI agent guidance — not a US-shaped policy file translated after the fact.',
  },
  {
    title: 'Self-hosted in your data residency boundary',
    body: 'No data leaves your VPC. Sovereign-cloud and on-prem deployment supported for regulated workloads.',
  },
  {
    title: 'One ledger for SEBI, RBI cyber, and EU AI Act',
    body: 'A single audit substrate that satisfies multiple regional regimes — no parallel evidence pipelines.',
  },
  {
    title: 'Pilot in 4 weeks',
    body: 'Design-partner programme for BFSI in India: free pilot in exchange for co-development and reference rights.',
  },
];

const COMPLIANCE_OUTCOMES = [
  {
    title: 'Append-only evidence for every major framework',
    body: 'JSONL shaped for SOC 2 CC6/CC7, ISO 27001 A.5/A.8, NIST AI RMF, and EU AI Act Article 12.',
  },
  {
    title: 'Pre-built control mappings — no manual reconstruction',
    body: 'Each action maps to the controls your auditor will ask about. The work is already done.',
  },
  {
    title: 'Audit-of-the-audit: webapp access itself is logged',
    body: 'Know who reviewed which session, when, and what they saw — on the record.',
  },
  {
    title: 'One answer across four frameworks',
    body: 'SOC 2, ISO 27001, NIST AI RMF, EU AI Act — from a single ledger, not four separate workflows.',
  },
];

function OutcomeCard({ title, body }: { title: string; body: string }) {
  return (
    <li className="solutions-outcome card">
      <h4 className="solutions-outcome__title">{title}</h4>
      <p className="solutions-outcome__body">{body}</p>
    </li>
  );
}

export default function SolutionsPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="hero hero--page" aria-labelledby="solutions-heading">
        <div className="hero__shell ai-dot-grid">
          <div className="hero__copy hero__copy--centred">
            <span className="eyebrow hero__eyebrow hero__eyebrow--pill">
              <span className="dot" />
              For every team on the hook
            </span>
            <h1 className="display" id="solutions-heading">
              One platform. <em>Three stakeholders.</em>
              <br />
              All accountable for agents.
            </h1>
            <p className="hero__lede">
              Every team that gets asked &ldquo;what are your AI agents doing?&rdquo; needs a
              different answer. ComplyAI gives them all one.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1 — CISO */}
      <section className="bay bay--dark solutions-section" id="ciso">
        <div className="shell">
          <div className="section-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              For Security &amp; CISOs
            </span>
            <h2 className="h2">
              &ldquo;Your board is going to ask about AI agents.{' '}
              <em>You need an answer that doesn&apos;t start with &lsquo;we think&rsquo;.&rdquo;</em>
            </h2>
            <p className="lede">
              Real-time enforcement. Identity-attributed audit trail. SIEM-ready telemetry for
              every agent in your environment.
            </p>
          </div>
          <ul className="solutions-outcomes" data-reveal-stagger>
            {CISO_OUTCOMES.map((o) => (
              <OutcomeCard key={o.title} {...o} />
            ))}
          </ul>
          <p className="solutions-section__cta" data-reveal>
            <Link href="/demo" className="btn btn--primary">
              {CTAS.demo} — for security teams <span className="arrow">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 2 — ENGINEERING */}
      <section className="bay bay--surface solutions-section" id="engineering">
        <div className="shell">
          <div className="section-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              For Engineering Leadership
            </span>
            <h2 className="h2">
              &ldquo;Your teams are shipping with agents.{' '}
              <em>You&apos;re paying for actions nobody&apos;s tracking.&rdquo;</em>
            </h2>
            <p className="lede">
              Cost and activity attributed to the developer, session, and team — so engineering
              leadership and FinOps read from the same number.
            </p>
          </div>
          <ul className="solutions-outcomes" data-reveal-stagger>
            {ENGINEERING_OUTCOMES.map((o) => (
              <OutcomeCard key={o.title} {...o} />
            ))}
          </ul>
          <p className="solutions-section__cta" data-reveal>
            <Link href="/demo" className="btn btn--primary">
              {CTAS.demo} — for engineering leaders <span className="arrow">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 2.5 — INDIA/APAC BFSI */}
      <section className="bay bay--surface solutions-section" id="apac-bfsi">
        <div className="shell">
          <div className="section-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              For India &amp; APAC BFSI
            </span>
            <h2 className="h2">
              &ldquo;Your regulators are catching up to AI agents.{' '}
              <em>Your governance stack should read in their language.&rdquo;</em>
            </h2>
            <p className="lede">
              Banks, NBFCs, insurers, and payments platforms in India and APAC are deploying agents into
              underwriting, KYC, and servicing workflows. ComplyAI is built around the data residency,
              audit cadence, and regulator language those workflows are graded on.
            </p>
          </div>
          <ul className="solutions-outcomes" data-reveal-stagger>
            {APAC_OUTCOMES.map((o) => (
              <OutcomeCard key={o.title} {...o} />
            ))}
          </ul>
          <p className="solutions-section__cta" data-reveal>
            <Link href="/demo" className="btn btn--primary">
              {CTAS.demo} — for India/APAC BFSI <span className="arrow">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 3 — COMPLIANCE */}
      <section className="bay bay--dark solutions-section" id="compliance">
        <div className="shell">
          <div className="section-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              For Compliance &amp; Audit
            </span>
            <h2 className="h2">
              &ldquo;Your next audit will include a question about AI agents.{' '}
              <em>Most teams can&apos;t answer it yet.&rdquo;</em>
            </h2>
            <p className="lede">
              Control-mapped, identity-attributed evidence for SOC 2, ISO 27001, NIST AI RMF,
              and EU AI Act — from one ledger.
            </p>
          </div>
          <ul className="solutions-outcomes" data-reveal-stagger>
            {COMPLIANCE_OUTCOMES.map((o) => (
              <OutcomeCard key={o.title} {...o} />
            ))}
          </ul>
          <p className="solutions-section__cta" data-reveal>
            <Link href="/demo" className="btn btn--primary">
              {CTAS.demo} — for compliance teams <span className="arrow">→</span>
            </Link>
            <Link href="/compliance" className="btn btn--ghost">
              Compliance frameworks →
            </Link>
          </p>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
