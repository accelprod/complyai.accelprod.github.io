import { WHITESPACE } from '@/lib/site-copy';

export function WhyComplai() {
  const { eyebrow, heading, headingEm, lede, capabilities } = WHITESPACE;
  return (
    <section className="bay bay--surface why-complai-bay" id="why-complai" aria-labelledby="why-complai-heading">
      <div className="shell">
        <div className="section-head" data-reveal>
          <span className="eyebrow">
            <span className="dot" />
            {eyebrow}
          </span>
          <h2 className="h2" id="why-complai-heading">
            {heading} <em>{headingEm}</em>
          </h2>
          <p className="lede">{lede}</p>
        </div>

        <ul className="why-complai__grid" data-reveal-stagger>
          {capabilities.map((c) => (
            <li key={c.id} className="why-complai__card card">
              <span className="why-complai__pillar">{c.pillar}</span>
              <h3 className="why-complai__title">{c.title}</h3>
              <p className="why-complai__tagline">{c.tagline}</p>
              <p className="why-complai__body">{c.body}</p>
              <p className="why-complai__proof">{c.proof}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
