export const POSITIONING = {
  category: 'Enterprise AI Governance',
  oneLiner: 'AI Governance for Every Agent in Your Environment',
  moat:
    'Runtime governance at the action boundary — wherever AI agents execute — not post-hoc API monitoring. Pre-execution interception, intelligent triage, and cryptographic tool integrity, in one control plane.',
  subhead:
    'ComplyAI gives enterprises real-time policy enforcement, immutable audit trails, and cost accountability for every AI agent action across your environment.',
} as const;

export const KEYWORDS =
  'AI agent governance, enterprise AI governance, AI control plane, runtime governance, policy enforcement, immutable audit trail, AI agent security, OpenTelemetry, SOC 2 AI agents, NIST AI RMF, AI agent cost telemetry, EU AI Act, EU AI Act readiness, ISO 27001 AI agents, MCP security, AI agent blast radius, agent reasoning drift, cryptographic MCP schema, HITL triage, tool poisoning';

// Used in TrustStrip — framework alignment badges, no social proof
export const TRUST_BADGES = [
  { label: 'EU AI Act', title: 'Aligned to EU AI Act Articles 9, 12, 14 — Aug 2026 ready', highlight: true },
  { label: 'NIST AI RMF', title: 'Aligned to NIST AI Risk Management Framework' },
  { label: 'ISO/IEC 27001', title: 'Aligned to ISO/IEC 27001:2022' },
  { label: 'SOC 2', title: 'Aligned to SOC 2 Type II controls' },
  { label: 'OpenTelemetry', title: 'OpenTelemetry-native telemetry pipeline' },
] as const;

export const HERO = {
  eyebrow: POSITIONING.category,
  h1: 'Your agents are in production.',
  h1Em: 'Is anyone watching?',
  lede:
    'ComplyAI enforces policy, captures audit evidence, and attributes cost for every AI agent action across your environment — before the action runs, not after. Built for the EU AI Act August 2026 deadline.',
} as const;

export const EU_AI_ACT_BANNER = {
  badge: 'EU AI Act',
  headline: 'Article 12 enforcement begins 2 August 2026.',
  body: 'Penalties up to €15M or 3% of global turnover. Run the 10-minute readiness check.',
  cta: 'Run readiness check →',
  ctaHref: '/eu-ai-act-readiness',
} as const;

export const WHAT_WE_DO = {
  eyebrow: 'What ComplyAI does',
  heading: 'Three guarantees.',
  headingEm: 'No caveats.',
  cards: [
    {
      id: 'govern',
      title: 'Govern',
      subClaim: 'Intercept before the action runs — not after.',
      lines: [
        'Every agent action evaluated against your policy before it executes.',
        'Allow. Deny. Escalate.',
        'No proxy to bypass. No post-hoc alerts.',
      ],
      chips: ['Reasoning Drift Guard', 'HITL Smart Triage'],
    },
    {
      id: 'audit',
      title: 'Audit',
      subClaim: 'Cryptographically verifiable — not just immutable.',
      lines: [
        'An immutable record of every action, every decision, every agent —',
        'timestamped, identity-tagged, and ready for your next framework audit.',
      ],
      chips: ['Cryptographic MCP Signing', 'Tool-poisoning resistant'],
    },
    {
      id: 'account',
      title: 'Account',
      subClaim: 'Quantify exposure before it cascades.',
      lines: [
        'Every token, every dollar, attributed to the agent, session, and team that spent it.',
        'No estimates. No month-end surprises.',
      ],
      chips: ['Blast Radius Simulation', 'Cost & risk attribution'],
    },
  ],
  cta: 'See the full architecture',
  ctaHref: '/platform',
} as const;

export const WHITESPACE = {
  eyebrow: 'Designed in. Not bolted on.',
  heading: 'Four capabilities',
  headingEm: 'that change what AI governance can catch.',
  lede:
    'Most controls catch agent actions after they happen. ComplyAI was designed around four moves that have to land before the action runs, before the audit, and before the cascade.',
  capabilities: [
    {
      id: 'hitl-triage',
      pillar: 'Govern',
      title: 'HITL Smart Triage',
      tagline: 'Approval queues that don\'t cause alert fatigue.',
      body:
        'A constrained companion model pre-audits the review queue, synthesises actions in plain English, auto-approves routine low-risk events, and escalates only genuine anomalies. Denials feed back into the agent system prompt automatically.',
      proof:
        'In published evaluations of constrained-model triage, roughly nine in ten review queue items resolve without a human stopping to read them.',
    },
    {
      id: 'drift-guard',
      pillar: 'Govern',
      title: 'Pre-Execution Reasoning Drift Guard',
      tagline: 'Stop the bad action before the tool is ever called.',
      body:
        'Most controls catch the call after the agent has already decided. ComplyAI watches the decision form, against the original objective, and ends the chain when it drifts.',
      proof:
        'Step-level reasoning guardrails have been shown to reduce harmful tool calls by about two thirds, before any tool is ever invoked.',
    },
    {
      id: 'mcp-signing',
      pillar: 'Audit',
      title: 'Cryptographic MCP Schema Signing',
      tagline: 'Trust the tool manifest, not the tool name.',
      body:
        'Tool Metadata Poisoning is OWASP MCP03:2025 and assigned CVE-2025-54136. ComplyAI binds every agent call to a signed manifest tied to a verified developer identity. Tools whose live metadata no longer matches the signed manifest stop being callable.',
      proof:
        'Public reference: OWASP MCP03:2025 · CVE-2025-54136.',
    },
    {
      id: 'blast-radius',
      pillar: 'Account',
      title: 'Multi-Agent Blast Radius Simulation',
      tagline: 'Quantify the cascade before the cascade.',
      body:
        'A shadow-infrastructure simulator mirrors your production agent topology. Inject a compromised tool, a hijacked prompt, or a privilege escalation, and watch the cascade across the full agent network. Output: maximum data exposure, dollar impact, and downstream system damage.',
      proof:
        'Industry research has measured downstream contamination across multi-agent fleets at roughly 87% within four hours of a single compromise. ComplyAI lets you measure your own number before the compromise.',
    },
  ],
} as const;

export const EU_AI_ACT_READINESS = {
  eyebrow: 'EU AI Act readiness',
  hero: 'Article 12 enforcement begins August 2026.',
  heroEm: 'Run the 10-minute readiness check.',
  lede:
    'Enforcement begins 2 August 2026. Penalties up to €15M or 3% of global turnover. Most enterprises don\'t know if their AI agents qualify as high-risk under Annex III — let alone whether they meet the Article 12 record-keeping requirement.',
  steps: [
    {
      n: '01',
      title: 'Classify your deployment',
      detail: 'Annex III screening — does your AI agent qualify as high-risk?',
    },
    {
      n: '02',
      title: 'Audit your record-keeping',
      detail: 'Article 12 sub-section by sub-section: timestamps, identity, input data, verifier.',
    },
    {
      n: '03',
      title: 'Score human oversight',
      detail: 'Article 14 — is your HITL real, or rubber-stamped?',
    },
    {
      n: '04',
      title: 'Get your gap report',
      detail: 'Itemised remediation list — what to fix, in what order, by August.',
    },
  ],
  articles: [
    { id: 'art-9', label: 'Article 9', subject: 'Risk management', coverage: 'Pre-execution drift guard + blast-radius simulation' },
    { id: 'art-12', label: 'Article 12', subject: 'Record-keeping', coverage: 'Append-only JSONL ledger per action, identity-stamped' },
    { id: 'art-14', label: 'Article 14', subject: 'Human oversight', coverage: 'HITL Smart Triage with auditable approval chain' },
  ],
  cta: 'Start the 10-min check',
  ctaHref: '/eu-ai-act-readiness#start',
} as const;

export const HOW_IT_WORKS_HOME = {
  eyebrow: 'How it works',
  heading: 'You set the rules.',
  headingEm: 'We make sure agents follow them.',
  lede: 'Three steps from agent surface to operator control.',
  layers: [
    {
      n: '01',
      name: 'Connect',
      detail:
        'Point ComplyAI at the agents in your environment. No rearchitecting. No dev-side changes. Works across the tools your teams already use.',
    },
    {
      n: '02',
      name: 'Define',
      detail:
        'Write your rules in plain language. Your security team owns the policy. Your agents are bound by it.',
    },
    {
      n: '03',
      name: 'Govern',
      detail:
        'Every action checked. Every decision logged. High-risk actions escalated to the right human. Your compliance team gets evidence they can use.',
    },
  ],
  cta: 'See it in your environment →',
  ctaHref: '/demo',
  ctaSub: '30 minutes. We\'ll map your agent surface live.',
} as const;

export const HOW_IT_WORKS = {
  eyebrow: 'How it works',
  heading: 'How It Works',
  headingEm: 'One control layer.',
  lede: 'A single control layer connecting AI agents to enterprise policy, audit, and cost systems.',
  layers: [
    {
      n: '01',
      name: 'Agent connectors',
      detail:
        'Capture meaningful AI activity across agents in your environment through supported hooks and telemetry streams.',
    },
    {
      n: '02',
      name: 'Policy engine',
      detail:
        'Evaluate each action against plain-language rules and return allow, deny, or ask decisions in real time.',
    },
    {
      n: '03',
      name: 'Audit ledger',
      detail:
        'Store append-only trace data for every tool call, file action, prompt, response, and policy decision.',
    },
    {
      n: '04',
      name: 'Cost telemetry layer',
      detail:
        'Ingest authoritative provider-reported token and cost data, including prompt-cache reads and writes.',
    },
    {
      n: '05',
      name: 'Operator console',
      detail:
        'Present live activity, session detail, governance controls, denied actions, and cost dashboards for operators.',
    },
    {
      n: '06',
      name: 'Enterprise integrations',
      detail: 'Export telemetry to SIEM and observability backends using OpenTelemetry-native formats.',
    },
  ],
} as const;

export const WHO_ITS_FOR = {
  eyebrow: 'Built for the teams accountable when agents go wrong',
  heading: 'The question is different for every stakeholder.',
  headingEm: 'The answer is the same platform.',
  personas: [
    {
      id: 'ciso',
      role: 'CISO & Security',
      quote:
        '"Prove to my board that no agent can exfiltrate source code or delete production data."',
      outcome: 'Real-time enforcement + SIEM-ready audit trail',
      cta: 'For security teams',
      href: '/solutions#ciso',
    },
    {
      id: 'engineering',
      role: 'Engineering Leadership',
      quote:
        '"Let my teams ship with agents without creating the next incident I read about in a post-mortem."',
      outcome: 'Policy-as-code, zero dev friction, cost visibility',
      cta: 'For engineering leaders',
      href: '/solutions#engineering',
    },
    {
      id: 'compliance',
      role: 'Compliance & Audit',
      quote:
        '"Give me evidence that our AI systems operated within policy — and make it audit-shaped."',
      outcome: 'SOC 2, ISO 27001, NIST AI RMF, EU AI Act packs',
      cta: 'For compliance teams',
      href: '/solutions#compliance',
    },
  ],
} as const;

export const FINAL_CTA = {
  eyebrow: 'Early access',
  heading: 'Your agents are already taking actions.',
  headingEm: 'Governance shouldn\'t be an afterthought.',
  lede:
    'ComplyAI is in early access. We\'re working directly with security and engineering teams to deploy, configure, and demonstrate value in their environment — in a single session.',
} as const;

export const CTAS = {
  demo: 'Request early access',
  architecture: 'See the platform',
  platform: 'Explore platform',
  docs: 'Read documentation',
  governance: 'See governance in action',
  observability: 'Connect your observability stack',
  pricing: 'View pricing',
  sales: 'Contact sales',
  pilot: 'Request early access',
} as const;
