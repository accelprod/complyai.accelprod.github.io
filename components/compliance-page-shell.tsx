import Link from 'next/link';
import { FinalCTA } from '@/components/final-cta';
import { PageHero } from '@/components/page-hero';
import { faqJsonLd } from '@/lib/seo';

export interface CompliancePageProps {
  framework: string;
  shortName: string;
  badge: string;
  hero: string;
  heroEm: string;
  lede: string;
  whyNow: string;
  mappings: { control: string; requirement: string; how: string }[];
  artifacts: string[];
  faq: { q: string; a: string }[];
}

export function CompliancePageShell(p: CompliancePageProps) {
  const faqSchema = faqJsonLd(p.faq);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow={p.badge}
        title={
          <>
            {p.hero} <em>{p.heroEm}</em>
          </>
        }
        lede={<span className="compliance-page__lede">{p.lede}</span>}
        shellClass="shell shell--narrow"
      >
        <div className="page-hero__ctas">
          <Link href="/demo" className="btn btn--primary">
            Request the {p.shortName} pack <span className="arrow">→</span>
          </Link>
          <Link href="/platform" className="btn btn--ghost">
            See the platform
          </Link>
        </div>
      </PageHero>

      <section className="bay bay--surface">
        <div className="shell shell--content">
          <div data-reveal>
            <div className="eyebrow">
              <span className="dot" />
              Why now
            </div>
            <p className="compliance-page__whynow">{p.whyNow}</p>
          </div>
        </div>
      </section>

      <section className="bay bay--dark">
        <div className="shell">
          <div className="section-head section-head--wide" data-reveal>
            <div className="eyebrow">
              <span className="dot" />
              Control mapping
            </div>
            <h2 className="h2">
              {p.shortName} controls <em>↔</em> ComplyAI capabilities.
            </h2>
          </div>
          <div className="rules-table">
            <div className="rules-table__scroll">
              <table>
                <colgroup>
                  <col className="rules-table__col-control" />
                  <col className="rules-table__col-req" />
                  <col className="rules-table__col-how" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">{p.shortName} control</th>
                    <th scope="col">Requirement</th>
                    <th scope="col">How ComplyAI satisfies it</th>
                  </tr>
                </thead>
                <tbody data-reveal-stagger>
                  {p.mappings.map((m) => (
                    <tr key={m.control}>
                      <td><code>{m.control}</code></td>
                      <td>{m.requirement}</td>
                      <td>{m.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bay bay--surface">
        <div className="shell shell--content">
          <div className="section-head" data-reveal>
            <div className="eyebrow">
              <span className="dot" />
              What you get in the pack
            </div>
            <h2 className="h2">
              Artifacts your auditor <em>can run with.</em>
            </h2>
          </div>
          <ul className="compliance-page__artifacts" data-reveal-stagger>
            {p.artifacts.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bay bay--surface">
        <div className="shell shell--content">
          <div className="section-head" data-reveal>
            <div className="eyebrow">
              <span className="dot" />
              FAQ
            </div>
            <h2 className="h2">
              Common questions on <em>{p.framework}.</em>
            </h2>
          </div>
          <div className="faq-list" data-reveal-stagger>
            {p.faq.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p className="faq-item__a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
