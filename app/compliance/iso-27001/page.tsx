import type { Metadata } from 'next';
import { CompliancePageShell } from '@/components/compliance-page-shell';

export const metadata: Metadata = {
  title: 'ISO/IEC 27001:2022 for AI agents — ComplyAI',
  description:
    'A.5 security policies and A.8 asset & data handling, applied to AI agents in your environment. Policy as code, identity-attributed audit, SIEM export.',
};

export default function Page() {
  return (
    <CompliancePageShell
      framework="ISO/IEC 27001:2022"
      shortName="ISO 27001"
      badge="ISO/IEC 27001:2022 · A.5 · A.8"
      hero="ISO/IEC 27001 was written for human operators."
      heroEm="Your agents aren't human. Your ISMS has a blind spot."
      lede="ISO/IEC 27001 assumes human operators; agents break that model. ComplyAI extends your ISMS to the agent action layer."
      whyNow="ISO 27001 surveillance audits are increasingly probing for AI-system handling. The forthcoming ISO/IEC 42001 (AI management system) builds on top of 27001 — getting AI agent coverage in place now positions you for 42001 certification later."
      mappings={[
        { control: 'A.5.1', requirement: 'Policies for information security', how: 'Policy-as-code is the security-edited written policy. Versioned. Approval gated. Auditable.' },
        { control: 'A.5.7', requirement: 'Threat intelligence', how: 'Pre-built rule library based on observed AI agent threat patterns (Replit, PocketOS, Samsung, etc.).' },
        { control: 'A.5.15', requirement: 'Access control', how: 'AI agent action policy enforced at the action boundary; the agent cannot exceed declared scope.' },
        { control: 'A.8.2', requirement: 'Privileged access rights', how: 'Shell ask + MCP safe-default rules treat AI privileged actions as privileged actions.' },
        { control: 'A.8.10', requirement: 'Information deletion', how: 'Block destructive shell rules prevent agent-initiated destruction; audited if allowed.' },
        { control: 'A.8.15', requirement: 'Logging', how: 'Append-only JSONL ledger + OpenTelemetry export — satisfies the logging control for AI agent actions.' },
        { control: 'A.8.16', requirement: 'Monitoring activities', how: 'Live activity dashboard surfaces denied actions and outlier sessions in real time.' },
      ]}
      artifacts={[
        'Pre-built policy mapped to ISO 27001 Annex A controls',
        'Statement of Applicability (SoA) bridge document — what to add for AI',
        'A.5 and A.8 mapping documentation with example ledger entries',
        'Audit-export template — JSONL filtered to ISMS-relevant events',
        'Transition guide for upcoming ISO/IEC 42001 (AI management system)',
      ]}
      faq={[
        { q: 'How does this fit into our existing ISMS?', a: 'As a documented extension. Your existing SoA gains AI-system coverage; A.5 and A.8 narratives gain AI-agent specifics. The ISMS structure does not change.' },
        { q: 'Is ComplyAI itself ISO 27001 certified?', a: 'ComplyAI is not yet ISO 27001 certified. ComplyAI produces audit evidence in ISO 27001-compatible format for A.5 and A.8 controls. For ComplyAI security posture details, contact sales.' },
        { q: 'What about ISO/IEC 42001?', a: 'ComplyAI is designed to support 42001 compliance. Customers planning 42001 certification typically start with audit evidence collection 6–12 months before the cert window.' },
      ]}
    />
  );
}
