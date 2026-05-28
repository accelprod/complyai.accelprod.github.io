import Link from 'next/link';
import { CTAS, FINAL_CTA } from '@/lib/site-copy';

export function FinalCTA() {
  const { eyebrow, heading, headingEm, lede } = FINAL_CTA;

  return (
    <section className="bay bay--pad-loose final-cta" id="request-demo">
      <div className="shell">
        <div className="final-cta__card" data-reveal>
          <div className="final-cta__copy">
            <div className="eyebrow">
              <span className="dot" />
              {eyebrow}
            </div>
            <h2 className="h2">
              {heading} <em>{headingEm}</em>
            </h2>
            <p className="lede">{lede}</p>
          </div>
          <div className="final-cta__actions">
            <Link
              href="/demo"
              className="btn btn--primary plausible-event-name=cta_click plausible-event-location=final-cta"
            >
              {CTAS.demo} <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/platform" className="btn btn--ghost">
              {CTAS.architecture}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
