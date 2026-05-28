import Link from 'next/link';
import { HOW_IT_WORKS, HOW_IT_WORKS_HOME } from '@/lib/site-copy';

type HowItWorksProps = {
  variant?: 'full' | 'home';
};

export function HowItWorks({ variant = 'full' }: HowItWorksProps) {
  const copy = variant === 'home' ? HOW_IT_WORKS_HOME : HOW_IT_WORKS;
  const { eyebrow, heading, headingEm, lede, layers } = copy;

  return (
    <section className="bay bay--surface" id="how-it-works">
      <div className="shell">
        <div className="section-head" data-reveal>
          <span className="eyebrow">
            <span className="dot" />
            {eyebrow}
          </span>
          <h2 className="h2">
            {heading} {headingEm ? <em>{headingEm}</em> : null}
          </h2>
          <p className="lede">{lede}</p>
        </div>
        <ol className="layers-stack" data-reveal-stagger>
          {layers.map((l) => (
            <li key={l.n} className="layers-stack__item card">
              <span className="layers-stack__n">{l.n}</span>
              <div>
                <h3 className="h3">{l.name}</h3>
                <p className="card__body">{l.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        {variant === 'home' ? (
          <div className="how-it-works__more" data-reveal>
            <Link href={HOW_IT_WORKS_HOME.ctaHref} className="btn btn--primary">
              {HOW_IT_WORKS_HOME.cta}
            </Link>
            <p className="how-it-works__sub">{HOW_IT_WORKS_HOME.ctaSub}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
