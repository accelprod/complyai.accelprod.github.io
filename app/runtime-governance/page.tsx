import type { Metadata } from 'next';
import Link from 'next/link';
import { FinalCTA } from '@/components/final-cta';
import { PageHero } from '@/components/page-hero';
import { HitlTriageFunnel } from '@/components/hitl-triage-funnel';
import { CTAS, POSITIONING } from '@/lib/site-copy';

export const metadata: Metadata = {
  title: 'Runtime Governance — Policy at the action boundary | ComplyAI',
  description:
    'Real-time policy enforcement for AI agents: allow, deny, ask, and approval workflows. Policy-as-code across IDE, CLI, cloud, MCP, and self-hosted runtimes.',
  alternates: { canonical: '/runtime-governance' },
  openGraph: {
    title: 'Runtime Governance — Policy at the action boundary | ComplyAI',
    description:
      'Allow · deny · ask — every agent action checked before it executes. Versioned YAML. Reviewable in CI.',
    url: '/runtime-governance',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Runtime Governance — Policy at the action boundary | ComplyAI',
    description:
      'Allow · deny · ask — every agent action checked before it executes. Versioned YAML. Reviewable in CI.',
  },
};

const MODES = [
  { mode: 'Allow', detail: 'Action proceeds; decision logged to Ledger.' },
  { mode: 'Deny', detail: 'Action blocked at the boundary—no proxy bypass.' },
  { mode: 'Ask', detail: 'Step-up approval for shell, MCP, or sensitive file ops.' },
];

const POLICY_YAML = `rules:
  - id: block-prod-shell
    match:
      action: shell.exec
      env: production
    effect: deny
    reason: "Destructive shell in production requires approval"

  - id: mcp-egress
    match:
      action: mcp.call
      destination: external
    effect: ask
    approvers: [security-oncall]`;

export default function RuntimeGovernancePage() {
  return (
    <main>
      <PageHero
        eyebrow="Runtime Governance"
        title={
          <>
            Policy at the <em>action boundary.</em>
          </>
        }
        lede={POSITIONING.moat}
      >
        <div className="page-hero__ctas">
          <Link href="/demo" className="btn btn--primary">
            {CTAS.governance} <span className="arrow">→</span>
          </Link>
          <Link href="/platform#guard" className="btn btn--ghost">
            Guard module
          </Link>
        </div>
      </PageHero>

      <section className="bay bay--surface">
        <div className="shell shell--wide">
          <div className="governance-grid">
            <div className="governance-copy" data-reveal>
              <span className="eyebrow">
                <span className="dot" />
                Enforcement modes
              </span>
              <h2 className="h2">
                Allow · deny · ask — <em>every action.</em>
              </h2>
              <ul className="governance-modes">
                {MODES.map((m) => (
                  <li key={m.mode} className="card governance-mode">
                    <strong>{m.mode}</strong>
                    <p>{m.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bay bay--surface">
        <div className="shell shell--content">
          <div className="section-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              Policy-as-code
            </span>
            <h2 className="h2">
              Versioned YAML. <em>Reviewable in CI.</em>
            </h2>
          </div>
          <div className="governance-yaml-row" data-reveal>
            <pre className="policy-yaml card">
              <code>{POLICY_YAML}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="bay bay--dark" id="drift-guard">
        <div className="shell">
          <div className="section-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              Pre-Execution Reasoning Drift Guard
            </span>
            <h2 className="h2">
              Catch the bad action <em>before the tool is called.</em>
            </h2>
            <p className="lede">
              Most controls catch the tool call after the agent has already decided. ComplyAI watches the
              decision form, against the original objective, and ends the reasoning chain when it drifts —
              before any tool is invoked.
            </p>
          </div>

          <div className="drift-guard" data-reveal>
            <ol className="drift-guard__steps">
              <li>
                <span className="drift-guard__n">01</span>
                <h3>Objective anchor</h3>
                <p>System prompt and policy intent locked at session start.</p>
              </li>
              <li>
                <span className="drift-guard__n">02</span>
                <h3>Continuous drift score</h3>
                <p>Every reasoning step scored against the anchor on three axes — semantic, coordination, and behavioural drift.</p>
              </li>
              <li>
                <span className="drift-guard__n">03</span>
                <h3>Pre-execution terminate</h3>
                <p>If ASI breaches threshold, the chain ends before any tool is invoked. Full reasoning trace logged.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <HitlTriageFunnel />

      <FinalCTA />
    </main>
  );
}
