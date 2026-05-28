import Link from 'next/link';
import { WHAT_WE_DO } from '@/lib/site-copy';

export function WhatWeDo() {
  const { eyebrow, heading, headingEm, cards, cta, ctaHref } = WHAT_WE_DO;

  return (
    <section className="bay bay--surface what-we-do-bay" id="what-we-do">
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

        <ul className="what-we-do__grid" data-reveal-stagger>
          {cards.map((card) => (
            <li key={card.id} className={`what-we-do__card card what-we-do__card--${card.id}`}>
              <h3 className="what-we-do__title">{card.title}</h3>
              {card.subClaim ? (
                <p className="what-we-do__sub-claim">{card.subClaim}</p>
              ) : null}
              <div className="what-we-do__body">
                {card.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              {card.chips && card.chips.length > 0 ? (
                <ul className="what-we-do__chips" aria-label={`${card.title} differentiators`}>
                  {card.chips.map((chip) => (
                    <li key={chip} className="what-we-do__chip">
                      <span className="what-we-do__chip-dot" aria-hidden /> {chip}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>

        <p className="what-we-do__cta" data-reveal>
          <Link href={ctaHref} className="btn btn--ghost">
            {cta} <span className="arrow">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
