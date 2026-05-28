import type { Metadata } from 'next';
import { DemoForm } from '@/components/demo-form';

export const metadata: Metadata = {
  title: 'Request early access — AI agent governance | ComplyAI',
  description:
    'Book a 30-minute session: agent surface review, live deny + audit demo, and a 14-day pilot scoped to your environment. We deploy live — not a sandbox.',
};

const AGENDA = [
  {
    n: '01',
    title: 'Agent surface review (10 min)',
    body: 'Map every agent in your environment — what they can do, what they are doing, and where the gaps are.',
  },
  {
    n: '02',
    title: 'Live deny + audit demo (10 min)',
    body: 'Block a destructive action live. Walk the audit record. Show cost telemetry. In your environment, not a sandbox.',
  },
  {
    n: '03',
    title: 'Pilot scoping (10 min)',
    body: 'Scope a 14-day pilot for your agent fleet — team, framework, SIEM. NDA in 24 hours.',
  },
];

export default function DemoPage() {
  return (
    <main>
      <section className="bay page-hero ai-dot-grid">
        <div className="shell">
          <div className="demo-hero">
            <div data-reveal>
              <span className="eyebrow">
                <span className="dot" />
                Request early access
              </span>
              <h1 className="display demo-hero__display">
                Find out what your agents can do — <em>before your auditor does.</em>
              </h1>
              <p className="lede">
                30 minutes with a founder: action-surface map, live deny + audit demo, 14-day pilot
                scope.
              </p>
              <ol className="demo-agenda" data-reveal-stagger>
                {AGENDA.map((a) => (
                  <li key={a.n}>
                    <span className="demo-agenda__n">{a.n}</span>
                    <div>
                      <strong>{a.title}</strong>
                      <p>{a.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div data-reveal>
              <DemoForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
