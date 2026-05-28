export interface ModuleDetail {
  slug: string;
  name: string;
  phase: string;
  icon: string;
  headline: string;
  body: string;
  capabilities: string[];
  outputs: string;
}

export const PLATFORM_MODULE_DETAILS: ModuleDetail[] = [
  {
    slug: 'scanner',
    name: 'Scanner',
    phase: 'Onboard · Supply chain',
    icon: 'scanner',
    headline: 'Scan every skill, MCP server, and prompt before it enters your environment.',
    body: 'Every component your agent depends on is scanned against known threat patterns. Approved components get an Agent SBOM. The rest are blocked at intake.',
    capabilities: [
      'Prompt-injection pattern detection',
      'Embedded-secret discovery',
      'Malicious tool-definition flagging',
      'Agent SBOM — signed, versioned, traceable',
      'MCP allowlist gateway',
    ],
    outputs: 'SBOM JSON · scan report · webhook on policy violation',
  },
  {
    slug: 'sandbox',
    name: 'Sandbox',
    phase: 'Onboard · Dry run',
    icon: 'sandbox',
    headline: 'Validate an agent against your policy before it ships.',
    body: 'Replay historical session traffic against new configuration and report which actions would have been allowed, denied, or sent for approval.',
    capabilities: [
      'Dry-run agent against current policy.yaml',
      'Replay historical session traffic',
      'Diff: new policy vs. previous policy',
      'Pass/fail gate for CI/CD',
    ],
    outputs: 'Dry-run report · CI exit code · diff document',
  },
  {
    slug: 'identity',
    name: 'Identity',
    phase: 'Onboard · Non-human identity',
    icon: 'identity',
    headline: 'Issue scoped, time-bound credentials to agents and MCP servers.',
    body: 'Scoped identities per agent and MCP server, federated with Okta, Entra, or Google Workspace. Subagents inherit parent scope.',
    capabilities: [
      'Per-agent identity issuance',
      'MCP server authentication',
      'Time-bound access with auto-rotation',
      'Federation via OIDC, SAML 2.0',
    ],
    outputs: 'OIDC tokens · audit events to SIEM',
  },
  {
    slug: 'guard',
    name: 'Guard',
    phase: 'Govern · Runtime',
    icon: 'guard',
    headline: 'Allow, deny, or approve every action at the runtime boundary. Sub-100ms.',
    body: 'Policy evaluates every tool call before execution—IDE, CLI, cloud, or MCP. Allow, deny, or ask in under 100ms. Runtime-local. No proxy to bypass.',
    capabilities: [
      'Sub-100ms decision at the action boundary',
      'Adapters for IDE agents, CLI, cloud, MCP',
      'YAML policy as code — versioned, reviewable',
      'Approval workflows for shell, MCP, file ops',
    ],
    outputs: 'Allow / Deny / Ask + reason · feeds Ledger',
  },
  {
    slug: 'insight',
    name: 'Insight',
    phase: 'Govern · Behavior',
    icon: 'insight',
    headline: "Detect when the agent's session diverges from its declared purpose.",
    body: 'Guard answers "is this single action authorized?" Insight answers "is this trajectory authorized?"',
    capabilities: [
      'Session trajectory monitoring',
      'Drift detection vs. declared purpose',
      'Anomaly scoring',
      'Session replay for incident review',
    ],
    outputs: 'Anomaly events · session replay timeline',
  },
  {
    slug: 'ledger',
    name: 'Ledger',
    phase: 'Account · Audit',
    icon: 'ledger',
    headline: 'Append-only, identity-attributed audit trail.',
    body: 'Every action, every decision, every actor—machine-readable JSONL for SIEM ingest and human-readable exports for review.',
    capabilities: [
      'Append-only JSONL ledger',
      'Identity stamp on every event',
      'SOC 2 · ISO 27001 · NIST AI RMF mappings',
      'Replay-ready chain of custody',
    ],
    outputs: 'JSONL · plain text · OpenTelemetry records to SIEM',
  },
  {
    slug: 'meter',
    name: 'Meter',
    phase: 'Account · Cost',
    icon: 'meter',
    headline: 'Provider-authoritative token and dollar telemetry.',
    body: 'Captured at the source—never estimated. Cache reads and cache creation broken out for FinOps attribution.',
    capabilities: [
      'Provider-reported tokens',
      'Per-session, per-user, per-team rollups',
      'Outlier session detection',
      'OpenTelemetry export',
    ],
    outputs: 'Per-session rollup JSON · OpenTelemetry exports',
  },
];

export const PHASE_TAGLINES: Record<string, string> = {
  Onboard: 'Vet the agent. Issue its non-human identity. Validate before it touches production.',
  Govern: 'Enforce zero trust at the action boundary. Detect behavioral drift in flight.',
  Account: 'Continuous compliance evidence. Attribute every token and dollar to a team.',
};

export const DEPLOYMENT_MODELS = [
  {
    name: 'Cloud-hosted control plane',
    body: 'Managed ComplyAI control plane with SSO, dashboards, and compliance packs.',
  },
  {
    name: 'Self-hosted',
    body: 'Run Guard, Ledger, and Meter on your infrastructure with adapters for your agent environment.',
  },
  {
    name: 'Hybrid',
    body: 'Runtime enforcement on developer machines or VPC; ledger and policy sync to your SIEM and IdP.',
  },
] as const;
