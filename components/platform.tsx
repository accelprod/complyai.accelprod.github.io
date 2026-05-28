import { PLATFORM_MODULE_DETAILS, PHASE_TAGLINES } from '@/lib/platform-modules';

function ModuleIcon({ name }: { name: string }) {
  const stroke = { stroke: 'currentColor', fill: 'none', strokeWidth: 1.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (name) {
    case 'scanner':
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden>
          <rect x="8" y="14" width="46" height="52" rx="4" {...stroke} opacity="0.5" />
          <path d="M16 24h30M16 32h22M16 40h26M16 48h18" {...stroke} opacity="0.5" />
          <circle cx="50" cy="46" r="14" {...stroke} strokeWidth="1.8" />
          <path d="M60 56l10 10" {...stroke} strokeWidth="2" />
          <circle cx="50" cy="46" r="4" fill="currentColor" opacity="0.18" />
        </svg>
      );
    case 'sandbox':
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden>
          <rect x="10" y="14" width="60" height="52" rx="5" {...stroke} strokeDasharray="3 3" />
          <rect x="18" y="22" width="44" height="36" rx="3" {...stroke} />
          <path d="M26 32h28M26 40h20M26 48h24" {...stroke} opacity="0.5" />
          <circle cx="60" cy="20" r="4" fill="currentColor" opacity="0.6" />
          <path d="M58 20l1.5 1.5L62 19" stroke="#fff" strokeWidth="1.4" fill="none" />
        </svg>
      );
    case 'identity':
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden>
          <circle cx="40" cy="30" r="11" {...stroke} strokeWidth="1.6" />
          <path d="M22 60c2-9 8-13 18-13s16 4 18 13" {...stroke} strokeWidth="1.6" />
          <circle cx="62" cy="22" r="9" fill="currentColor" opacity="0.18" />
          <path d="M58 22l3 3 5-6" {...stroke} stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case 'guard':
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden>
          <path d="M40 8l24 10v16c0 14-10 22-24 26-14-4-24-12-24-26V18l24-10z" {...stroke} strokeWidth="1.8" />
          <path d="M40 8l24 10v16c0 14-10 22-24 26-14-4-24-12-24-26V18l24-10z" fill="currentColor" opacity="0.06" />
          <path d="M30 38l8 8 14-16" {...stroke} strokeWidth="2.5" />
        </svg>
      );
    case 'insight':
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden>
          <path d="M10 60V20M10 60h60" {...stroke} opacity="0.5" />
          <path d="M14 48l10-8 12 12 14-22 10 16" {...stroke} strokeWidth="1.8" />
          <circle cx="50" cy="18" r="6" fill="currentColor" opacity="0.18" />
          <circle cx="50" cy="18" r="3" fill="currentColor" />
        </svg>
      );
    case 'ledger':
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden>
          <rect x="12" y="14" width="50" height="56" rx="4" {...stroke} strokeWidth="1.6" />
          <rect x="18" y="8" width="50" height="56" rx="4" {...stroke} strokeWidth="1.6" opacity="0.55" />
          <path d="M22 26h32M22 34h32M22 42h28M22 50h24" {...stroke} opacity="0.55" />
          <circle cx="56" cy="58" r="6" fill="currentColor" opacity="0.18" />
          <path d="M52 58l3 3 6-6" {...stroke} strokeWidth="1.6" />
        </svg>
      );
    case 'meter':
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden>
          <path d="M10 56a30 30 0 0 1 60 0" {...stroke} strokeWidth="1.6" />
          <path d="M10 56a30 30 0 0 1 30-30" {...stroke} strokeWidth="3.5" />
          <line x1="40" y1="56" x2="58" y2="36" {...stroke} strokeWidth="2.4" />
          <circle cx="40" cy="56" r="4" fill="currentColor" />
        </svg>
      );
  }
  return null;
}

export function Platform() {
  // Reorganize PLATFORM_MODULE_DETAILS into phase groups
  const phaseNames = ['Onboard', 'Govern', 'Account'] as const;
  const phases = phaseNames.map((phaseName) => {
    const modules = PLATFORM_MODULE_DETAILS.filter((m) => m.phase.startsWith(phaseName)).map((m) => ({
      ...m,
      tag: m.phase.split(' · ')[1] || m.name, // Use the phase descriptor as tag (e.g., "Supply chain" from "Onboard · Supply chain")
    }));
    return {
      phase: phaseName,
      tagline: PHASE_TAGLINES[phaseName],
      modules,
    };
  });

  return (
    <section className="bay platform-bay" id="platform-modules">
      <div className="shell shell--wide">
        <div className="section-head section-head--split section-head--otel platform-head" data-reveal>
          <span className="eyebrow">
            <span className="dot" />
            The platform
          </span>
          <h2 className="h2">
            Seven modules. <em>One control plane.</em> Three lifecycle phases.
          </h2>
          <p className="lede">
            Onboard, govern, and account—seven modules for autonomous development across every
            runtime you operate.
          </p>
        </div>

        <div className="platform-bay__panel bay--dark">
          <div className="platform-phases">
            <div className="platform-phases__rail" aria-hidden>
              <div className="platform-phases__fill" />
            </div>
            {phases.map((phase) => {
              const isBento = phase.phase === 'Govern';
              return (
                <div key={phase.phase} className="platform-phase">
                  <div className="platform-phase__head" data-reveal>
                    <span className="platform-phase__label">{phase.phase}</span>
                    <p className="platform-phase__tagline">{phase.tagline}</p>
                  </div>
                  <div
                    className={`platform-phase__row platform-phase__row--${phase.modules.length}${isBento ? ' platform-phase__row--bento' : ''}`}
                    data-reveal-stagger
                  >
                    {phase.modules.map((m) => (
                      <article
                        key={m.name}
                        id={m.slug}
                        className={`module-card card${
                          phase.phase === 'Govern' && (m.name === 'Guard' || m.name === 'Insight')
                            ? ' module-card--span-2'
                            : ''
                        }`}
                      >
                        <span className="module-card__icon" aria-hidden>
                          <ModuleIcon name={m.icon} />
                        </span>
                        <div>
                          <span className="module-card__name">{m.name}</span>
                          <span className="module-card__tag">
                            {phase.phase} · {m.tag}
                          </span>
                        </div>
                        <p className="module-card__body">{m.body}</p>
                        <ul className="module-card__bullets">
                          {m.capabilities.map((c) => (
                            <li key={c}>{c}</li>
                          ))}
                        </ul>
                        <p className="module-card__outputs">
                          <span className="module-card__outputs-label">Outputs</span>
                          <span>{m.outputs}</span>
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
