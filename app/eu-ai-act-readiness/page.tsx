import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { FinalCTA } from '@/components/final-cta';
// Original readiness-check copy is preserved in @/lib/site-copy as `EU_AI_ACT_READINESS`.
// import { EU_AI_ACT_READINESS } from '@/lib/site-copy';

/**
 * EU AI Act readiness — paused.
 *
 * The self-serve readiness check and gap-report email pipeline are not yet
 * delivered. Until they are, this page renders a holding state and is
 * excluded from search-engine indexing. The original page implementation is
 * preserved at the bottom of this file (commented) so reactivation is a
 * delete-the-block + revert-metadata operation.
 */
export const metadata: Metadata = {
  title: 'EU AI Act readiness — coming soon | ComplyAI',
  description:
    'A self-serve EU AI Act Article 12 readiness check is in the works. In the meantime, request early access and we will walk through it with you on a 30-minute call.',
  robots: { index: false, follow: false },
};

export default function EuAiActReadinessPage() {
  return (
    <main>
      <PageHero
        eyebrow="EU AI Act readiness"
        title={
          <>
            A self-serve readiness check is on the way. <em>For now, we&apos;ll walk it with you.</em>
          </>
        }
        lede="The 10-minute Article 12 readiness check and gap-report PDF aren't live yet. Until they are, request early access — we&apos;ll cover the same ground in a 30-minute conversation and send you a written summary."
      >
        <div className="page-hero__ctas">
          <Link href="/demo" className="btn btn--primary">
            Request early access <span className="arrow">→</span>
          </Link>
          <Link href="/compliance/eu-ai-act" className="btn btn--ghost">
            See Article 12 mapping
          </Link>
        </div>
      </PageHero>

      <FinalCTA />
    </main>
  );
}

/* =============================================================================
 * ORIGINAL READINESS-CHECK IMPLEMENTATION — paused, preserved for restoration.
 *
 * To bring the funnel back:
 *   1. Restore the `EU_AI_ACT_READINESS` import at the top of this file.
 *   2. Remove `robots: { index: false, follow: false }` from `metadata` and
 *      restore the original title / description below.
 *   3. Replace the holding-state `return (...)` above with the JSX block in
 *      this comment.
 *   4. Re-enable the EU AI Act banner in app/page.tsx and the readiness link
 *      in components/nav.tsx (both are also commented for restoration).
 *   5. Wire the form's POST destination to a real Formspree endpoint (the
 *      `/api/eu-ai-act-readiness` path is not implemented).
 *
 * Original metadata:
 *   title: 'EU AI Act readiness — 10-minute check | ComplyAI',
 *   description: 'Article 12 enforcement begins 2 August 2026. Run the 10-minute readiness check and get a gap report you can hand to legal, security, and platform engineering.',
 *
 * Original JSX (uncomment below to restore):
 *
 * const r = EU_AI_ACT_READINESS;
 * return (
 *   <main>
 *     <PageHero
 *       eyebrow={r.eyebrow}
 *       title={<>{r.hero} <em>{r.heroEm}</em></>}
 *       lede={r.lede}
 *     >
 *       <div className="page-hero__ctas">
 *         <a href="#start" className="btn btn--primary">
 *           {r.cta} <span className="arrow">→</span>
 *         </a>
 *         <Link href="/compliance/eu-ai-act" className="btn btn--ghost">
 *           See Article 12 mapping
 *         </Link>
 *       </div>
 *     </PageHero>
 *
 *     <section className="bay bay--surface" id="how-the-check-works">
 *       <div className="shell">
 *         <div className="section-head" data-reveal>
 *           <span className="eyebrow">
 *             <span className="dot" />
 *             What you get in 10 minutes
 *           </span>
 *           <h2 className="h2">
 *             Four steps. <em>One itemised gap report.</em>
 *           </h2>
 *         </div>
 *         <ol className="readiness-steps" data-reveal-stagger>
 *           {r.steps.map((s) => (
 *             <li key={s.n} className="readiness-step card">
 *               <span className="readiness-step__n">{s.n}</span>
 *               <h3 className="readiness-step__title">{s.title}</h3>
 *               <p className="readiness-step__detail">{s.detail}</p>
 *             </li>
 *           ))}
 *         </ol>
 *       </div>
 *     </section>
 *
 *     <section className="bay bay--dark" id="article-coverage">
 *       <div className="shell">
 *         <div className="section-head" data-reveal>
 *           <span className="eyebrow">
 *             <span className="dot" />
 *             Article coverage
 *           </span>
 *           <h2 className="h2">
 *             The three articles that decide whether your AI agents are{' '}
 *             <em>ready or exposed.</em>
 *           </h2>
 *         </div>
 *         <ul className="readiness-articles" data-reveal-stagger>
 *           {r.articles.map((a) => (
 *             <li key={a.id} className="readiness-article card">
 *               <p className="readiness-article__label">{a.label}</p>
 *               <h3 className="readiness-article__subject">{a.subject}</h3>
 *               <p className="readiness-article__coverage">{a.coverage}</p>
 *             </li>
 *           ))}
 *         </ul>
 *       </div>
 *     </section>
 *
 *     <section className="bay bay--surface" id="start">
 *       <div className="shell shell--content">
 *         <div className="section-head" data-reveal>
 *           <span className="eyebrow">
 *             <span className="dot" />
 *             Run the check
 *           </span>
 *           <h2 className="h2">
 *             Tell us about your deployment.{' '}
 *             <em>We&apos;ll send the gap report.</em>
 *           </h2>
 *           <p className="lede">
 *             Self-serve wizard ships in our next release. Until then: drop your details and we&apos;ll
 *             email the full readiness check (PDF) within one business day — no demo required.
 *           </p>
 *         </div>
 *
 *         <form
 *           className="readiness-form card"
 *           method="post"
 *           action="/api/eu-ai-act-readiness"
 *           data-reveal
 *         >
 *           ...form fields preserved in git history...
 *         </form>
 *       </div>
 *     </section>
 *
 *     <FinalCTA />
 *   </main>
 * );
 * ============================================================================= */
