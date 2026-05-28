import type { Metadata } from 'next';
import { CompliancePageShell } from '@/components/compliance-page-shell';

export const metadata: Metadata = {
  title: 'SOC 2 for AI agents — ComplyAI',
  description:
    'CC7 system operations and CC6 access controls applied to AI agent actions. Identity-attributed audit trail, deny/approve at the action, SIEM-exportable.',
};

export default function Page() {
  return (
    <CompliancePageShell
      framework="SOC 2 Type II"
      shortName="SOC 2"
      badge="SOC 2 Type II · AI agents"
      hero="Your SOC 2 auditor is already asking about AI agents."
      heroEm="Do you have an answer that isn't a spreadsheet?"
      lede="Auditors now probe AI agent actions; most stacks can't answer. ComplyAI produces CC6/CC7-shaped evidence from the action boundary."
      whyNow="In 2026 audit cycles, AICPA-aligned auditors are explicitly probing for AI-system action records. Without a per-action audit trail with identity attribution, expect a qualification on system operations. The fix is not a policy update — it is instrumented evidence."
      mappings={[
        { control: 'CC6.1', requirement: 'Logical access controls protect against unauthorized access', how: 'Policy engine denies AI agent actions that fall outside declared scope, even when the underlying credential permits them.' },
        { control: 'CC6.6', requirement: 'Boundary protection between internal and external', how: 'Block destructive operations, secret-file reads, and out-of-scope API calls — at the action boundary.' },
        { control: 'CC6.8', requirement: 'Prevent or detect unauthorized software', how: 'MCP gateway and subagent guard prevent untrusted tools and prompts from entering the action surface.' },
        { control: 'CC7.1', requirement: 'Monitor system components for anomalies', how: 'Per-action audit ledger feeds your SIEM via OpenTelemetry. Anomaly detection runs in your existing pipeline.' },
        { control: 'CC7.2', requirement: 'Monitor for actual or attempted unauthorized activity', how: 'Every denied action recorded with rule name, risk score, identity, and model.' },
        { control: 'CC7.3', requirement: 'Evaluate security events for incidents', how: 'Replay-ready immutable ledger; webapp surfaces all denied actions filtered by user/team/rule.' },
      ]}
      artifacts={[
        'Pre-built policy mapped to CC6/CC7 controls',
        'Control-by-control mapping document (PDF + Markdown source)',
        'Audit-export template — JSONL ledger filtered to CC-relevant events',
        'Webapp access log: who viewed which session (audit-of-the-audit)',
        'Quarterly summary report template for the audit committee',
        'Bridge document for your existing SOC 2 narrative — what to add for AI',
      ]}
      faq={[
        { q: 'We already have a SOC 2 — do we need to re-cert?', a: 'No. ComplyAI produces AI-system evidence in SOC 2 CC6/CC7 format. Your auditor reviews this evidence as part of your existing audit scope. Your control narratives gain AI coverage; the rest is unchanged.' },
        { q: 'Is ComplyAI itself SOC 2 certified?', a: 'ComplyAI is not yet SOC 2 Type II certified. ComplyAI produces audit evidence in SOC 2-compatible format. For ComplyAI security posture details, contact sales.' },
        { q: 'Where does the evidence live?', a: 'On your infrastructure. No audit data leaves your environment unless you explicitly route it to your SIEM or provide it to your auditors.' },
      ]}
    />
  );
}
