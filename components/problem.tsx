import Link from 'next/link';

const MONO = 'var(--font-mono), ui-monospace, monospace';
const DISPLAY = "var(--font-display), system-ui, sans-serif";
const INK3 = '#94a3b8';
const SURFACE = '#111827';
const SURFACE_BORDER = 'rgba(255,255,255,0.12)';
const BG_GRAD_START = '#0e131b';
const BG_GRAD_END = '#141821';

const INCIDENTS = [
  {
    company: 'Replit',
    when: 'July 2025',
    summary:
      'Agent ignored "do not change code" 11 times, fabricated test data, and deleted the live production database.',
    damage: 'Public CEO apology. Lasting trust damage.',
    answer:
      'ComplyAI: destructive ops require approval; "do not change" becomes a policy rule—blocked before execution.',
    art: 'replit',
  },
  {
    company: 'PocketOS',
    when: 'Late 2025',
    summary:
      'An AI agent deleted production and backups in 9 seconds via a Railway API call. 30+ hours of downtime.',
    damage: 'Manual recovery. Lost revenue. Permanent data loss.',
    answer:
      'ComplyAI: Railway calls scoped to staging; prod credentials blocked before execution.',
    art: 'pocketos',
  },
  {
    company: 'Samsung',
    when: '2023, ongoing pattern',
    summary:
      'Engineers pasted proprietary code into ChatGPT to debug—no purpose boundary on the agent side.',
    damage: 'Permanent IP exfiltration. Industry-wide AI tool bans.',
    answer:
      'ComplyAI: file-read scopes block /src/proprietary/; external API calls flagged at the action.',
    art: 'samsung',
  },
];

const FEATURED = INCIDENTS[1];

const INCIDENT_ARIA: Record<string, string> = {
  replit: 'Replit incident: agent ignored do-not-change directive and deleted production database',
  pocketos: 'PocketOS incident: AI agent deleted production database and backups in nine seconds',
  samsung: 'Samsung incident: proprietary source code exfiltrated via ChatGPT debugging',
};

function IncidentArt({ kind }: { kind: string }) {
  if (kind === 'replit') {
    return (
      <svg
        className="incident-card__art"
        viewBox="0 0 320 180"
        role="img"
        aria-label={INCIDENT_ARIA[kind]}
      >
        <defs>
          <linearGradient id="rep-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={BG_GRAD_START} />
            <stop offset="100%" stopColor={BG_GRAD_END} />
          </linearGradient>
        </defs>
        <rect width="320" height="180" fill="url(#rep-bg)" />
        {/* terminal frame */}
        <rect x="40" y="30" width="240" height="120" rx="8" fill={SURFACE} stroke={SURFACE_BORDER} />
        <circle cx="54" cy="42" r="3.5" fill="#d06a4a" />
        <circle cx="66" cy="42" r="3.5" fill="#e8b54b" />
        <circle cx="78" cy="42" r="3.5" fill="#6ea780" />
        {/* code lines */}
        <text x="56" y="72" fontFamily={MONO} fontSize="11" fill={INK3}>
          $ DELETE FROM users;
        </text>
        <text x="56" y="92" fontFamily={MONO} fontSize="11" fill={INK3}>
          $ DROP DATABASE prod;
        </text>
        <text x="56" y="112" fontFamily={MONO} fontSize="11" fill="#d06a4a" fontWeight="600">
          ✗ ignored: do not change code
        </text>
        <text x="56" y="132" fontFamily={MONO} fontSize="11" fill="#d06a4a" fontWeight="600">
          ✗ fabricated test data: 11×
        </text>
        {/* diagonal strike */}
        <line x1="40" y1="30" x2="280" y2="150" stroke="#d06a4a" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
      </svg>
    );
  }
  if (kind === 'pocketos') {
    return (
      <svg
        className="incident-card__art"
        viewBox="0 0 320 180"
        role="img"
        aria-label={INCIDENT_ARIA[kind]}
      >
        <defs>
          <linearGradient id="po-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={BG_GRAD_START} />
            <stop offset="100%" stopColor={BG_GRAD_END} />
          </linearGradient>
        </defs>
        <rect width="320" height="180" fill="url(#po-bg)" />
        {/* database cylinder */}
        <g transform="translate(50 40)">
          <ellipse cx="40" cy="14" rx="40" ry="10" fill={SURFACE} stroke={SURFACE_BORDER} strokeWidth="1.5" />
          <path d="M0 14 L0 70 A40 10 0 0 0 80 70 L80 14" fill={SURFACE} stroke={SURFACE_BORDER} strokeWidth="1.5" />
          <ellipse cx="40" cy="34" rx="40" ry="10" fill="none" stroke={SURFACE_BORDER} strokeWidth="1.5" />
          <ellipse cx="40" cy="54" rx="40" ry="10" fill="none" stroke={SURFACE_BORDER} strokeWidth="1.5" />
          {/* big X overlay */}
          <line x1="6" y1="14" x2="74" y2="78" stroke="#d06a4a" strokeWidth="3" strokeLinecap="round" />
          <line x1="74" y1="14" x2="6" y2="78" stroke="#d06a4a" strokeWidth="3" strokeLinecap="round" />
        </g>
        {/* clock with 9s */}
        <g transform="translate(190 60)">
          <circle cx="40" cy="40" r="40" fill={SURFACE} stroke={SURFACE_BORDER} strokeWidth="1.5" />
          <text x="40" y="36" textAnchor="middle" fontFamily={DISPLAY} fontSize="34" fill="#f1f5f9">9s</text>
          <text x="40" y="58" textAnchor="middle" fontFamily={MONO} fontSize="10" fill={INK3} letterSpacing="0.1em">TO DELETE</text>
        </g>
      </svg>
    );
  }
  // samsung
  return (
    <svg
      className="incident-card__art"
      viewBox="0 0 320 180"
      role="img"
      aria-label={INCIDENT_ARIA[kind]}
    >
      <defs>
        <linearGradient id="ss-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={BG_GRAD_START} />
          <stop offset="100%" stopColor={BG_GRAD_END} />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#ss-bg)" />
      {/* code block */}
      <g transform="translate(28 36)">
        <rect width="140" height="108" rx="6" fill={SURFACE} stroke={SURFACE_BORDER} />
        <rect x="14" y="18" width="64" height="6" rx="2" fill="rgba(255,255,255,0.14)" />
        <rect x="14" y="32" width="100" height="6" rx="2" fill="rgba(255,255,255,0.14)" />
        <rect x="14" y="46" width="78" height="6" rx="2" fill="rgba(255,255,255,0.14)" />
        <rect x="14" y="60" width="112" height="6" rx="2" fill="#5DA8FF" opacity="0.6" />
        <rect x="14" y="74" width="86" height="6" rx="2" fill="#5DA8FF" opacity="0.6" />
        <rect x="14" y="88" width="60" height="6" rx="2" fill="rgba(255,255,255,0.14)" />
        <text x="14" y="-4" fontFamily={MONO} fontSize="10" fill={INK3} letterSpacing="0.12em">/src/proprietary/</text>
      </g>
      {/* arrows leaving */}
      <g stroke="#d06a4a" strokeWidth="1.5" fill="none">
        <path d="M168 56 L222 56" />
        <path d="M168 90 L222 90" />
        <path d="M168 124 L222 124" />
        <path d="M218 52 L222 56 L218 60" />
        <path d="M218 86 L222 90 L218 94" />
        <path d="M218 120 L222 124 L218 128" />
      </g>
      {/* external service blob */}
      <g transform="translate(232 50)">
        <path d="M0 30 Q0 10 22 10 Q30 -4 46 4 Q60 -2 64 14 Q80 14 80 32 Q80 50 60 50 L20 50 Q0 50 0 30 Z"
              fill={SURFACE} stroke={SURFACE_BORDER} strokeWidth="1.5" />
        <text x="40" y="34" textAnchor="middle" fontFamily={MONO} fontSize="10" fill="#d06a4a" letterSpacing="0.1em">EXTERNAL</text>
      </g>
    </svg>
  );
}

export function Problem({ full = false }: { full?: boolean }) {
  return (
    <section className="bay bay--dark problem-bay" id="ai-agent-security-incidents">
      <div className="shell">
        <div className="section-head section-head--split section-head--otel problem-head" data-reveal>
          <span className="eyebrow">
            <span className="dot" />
            The problem
          </span>
          <h2 className="h2">
            They inherited your credentials. <em>They don&apos;t self-limit.</em>
          </h2>
          <p className="lede">
            AI agents act at machine speed with system-level access across files, databases, APIs,
            and cloud services. Every action looks legitimate to your existing stack.
            IAM sees a valid credential. The agent sees no boundary.{' '}
            <Link href="/solutions#ciso" className="lede-link">
              For security teams →
            </Link>
          </p>
        </div>

        {full ? (
          <>
            <ol className="problem-grid" data-reveal-stagger>
              {INCIDENTS.map((i) => (
                <li key={i.company} className="incident-card card">
                  <IncidentArt kind={i.art} />
                  <div className="incident-card__body">
                    <header className="incident-card__head">
                      <span className="incident-card__company">{i.company}</span>
                      <span className="incident-card__when">{i.when}</span>
                    </header>
                    <p className="incident-card__summary">{i.summary}</p>
                    <p className="incident-card__damage">{i.damage}</p>
                    <p className="incident-card__answer">{i.answer}</p>
                  </div>
                </li>
              ))}
            </ol>
            <blockquote className="problem-pullquote" data-reveal>
              <p>
                &ldquo;The gap isn&apos;t in your IAM. It&apos;s in the layer IAM doesn&apos;t reach —
                and every agent in your environment is operating in that gap right now.&rdquo;
              </p>
            </blockquote>
          </>
        ) : (
          <>
            <article className="incident-card problem-featured card problem-featured--alert" data-reveal>
              <IncidentArt kind={FEATURED.art} />
              <div className="incident-card__body">
                <header className="incident-card__head">
                  <span className="incident-card__company">{FEATURED.company}</span>
                  <span className="incident-card__when">{FEATURED.when}</span>
                </header>
                <p className="incident-card__summary">{FEATURED.summary}</p>
                <p className="incident-card__damage">{FEATURED.damage}</p>
                <p className="incident-card__answer">{FEATURED.answer}</p>
              </div>
            </article>
            <blockquote className="problem-pullquote">
              <p>
                &ldquo;The gap isn&apos;t in your IAM. It&apos;s in the layer IAM doesn&apos;t reach —
                and every agent in your environment is operating in that gap right now.&rdquo;
              </p>
            </blockquote>
          </>
        )}
      </div>
    </section>
  );
}
