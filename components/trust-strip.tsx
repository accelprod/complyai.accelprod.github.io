import Link from 'next/link';
import { TRUST_BADGES } from '@/lib/site-copy';

export function TrustStrip() {
  return (
    <section className="bay bay--compact trust-strip-bay" id="standards-alignment">
      <div className="shell">
        <div className="trust-strip">
          <p className="trust-strip__label" data-reveal>
            <span className="dot" />
            Aligned with:
          </p>
          <ul className="trust-strip__frameworks trust-strip__frameworks--badges" data-reveal-stagger>
            {TRUST_BADGES.map((badge) => (
              <li
                key={badge.label}
                title={badge.title}
                className={'highlight' in badge && badge.highlight ? 'is-highlight' : ''}
              >
                <Link
                  href={'highlight' in badge && badge.highlight ? '/compliance/eu-ai-act' : '/compliance'}
                  className={`trust-strip__badge${'highlight' in badge && badge.highlight ? ' trust-strip__badge--highlight' : ''}`}
                >
                  {badge.label}
                  {'highlight' in badge && badge.highlight ? (
                    <span className="trust-strip__badge-sub">Aug 2 · Art. 9 + 12 + 14</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
