import Link from 'next/link';
import { WHO_ITS_FOR } from '@/lib/site-copy';

export function WhoItsFor() {
  const { eyebrow, heading, headingEm, personas } = WHO_ITS_FOR;

  return (
    <section className="bay bay--dark who-its-for-bay" id="who-its-for">
      <div className="shell">
        <div className="section-head" data-reveal>
          <span className="eyebrow">
            <span className="dot" />
            {eyebrow}
          </span>
          <h2 className="h2">
            {heading} <em>{headingEm}</em>
          </h2>
        </div>

        <ul className="who-its-for__list" data-reveal-stagger>
          {personas.map((p) => (
            <li key={p.id} className="who-its-for__row">
              <div className="who-its-for__role">{p.role}</div>
              <blockquote className="who-its-for__quote">{p.quote}</blockquote>
              <div className="who-its-for__outcome">
                <span className="who-its-for__arrow" aria-hidden>→</span>
                {p.outcome}
              </div>
              <Link href={p.href} className="who-its-for__link lede-link">
                {p.cta} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
