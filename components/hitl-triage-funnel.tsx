'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const STAGES = [
  {
    id: 'inbound',
    label: 'Agent actions per day',
    value: '100,000',
    detail: 'Across your full agent fleet — tool calls, file ops, MCP requests, shell, API.',
    tone: 'neutral' as const,
  },
  {
    id: 'policy',
    label: 'Policy engine — pre-execution',
    value: '~96,000 allowed inline',
    detail: 'Routine, in-scope, identity-clean actions allowed at the action boundary in <10ms.',
    tone: 'ok' as const,
  },
  {
    id: 'triage',
    label: 'HITL Smart Triage',
    value: '~3,200 auto-approved',
    detail: 'Constrained companion model summarises action context, applies precedent, auto-approves low-risk.',
    tone: 'accent' as const,
  },
  {
    id: 'human',
    label: 'Genuine human review queue',
    value: '~800 actions',
    detail: 'Plain-English summaries. Single click. Denials auto-update agent system prompt.',
    tone: 'warn' as const,
  },
  {
    id: 'escalated',
    label: 'Blocked or escalated',
    value: '~80 actions',
    detail: 'Drift detected, signature mismatch, blast-radius breach, or policy deny — full audit chain captured.',
    tone: 'risk' as const,
  },
];

export function HitlTriageFunnel() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section className="bay bay--dark hitl-funnel-bay" id="hitl-triage" aria-labelledby="hitl-triage-heading">
      <div className="shell">
        <div className="section-head" data-reveal>
          <span className="eyebrow">
            <span className="dot" />
            HITL Smart Triage · Inside Govern
          </span>
          <h2 className="h2" id="hitl-triage-heading">
            100,000 actions in.{' '}
            <em>800 land on a human — by design.</em>
          </h2>
          <p className="lede">
            Approval queues only work if a human actually reads them. At fleet scale, they don&apos;t. ComplyAI&apos;s
            triage layer pre-audits the queue and surfaces the small share that genuinely needs a decision.
          </p>
        </div>

        <div className="hitl-funnel" ref={ref}>
          <ol className="hitl-funnel__stages" data-reveal-stagger>
            {STAGES.map((stage, i) => (
              <motion.li
                key={stage.id}
                className={`hitl-funnel__stage hitl-funnel__stage--${stage.tone}`}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={
                  {
                    // tapered widths to suggest funnel shape on desktop
                    ['--hitl-funnel-width' as string]: `${100 - i * 12}%`,
                  } as React.CSSProperties
                }
              >
                <div className="hitl-funnel__stage-head">
                  <span className="hitl-funnel__stage-n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="hitl-funnel__stage-label">{stage.label}</span>
                </div>
                <p className="hitl-funnel__stage-value">{stage.value}</p>
                <p className="hitl-funnel__stage-detail">{stage.detail}</p>
              </motion.li>
            ))}
          </ol>

          <aside className="hitl-funnel__pull" data-reveal>
            <p className="hitl-funnel__pull-num">99.2%</p>
            <p className="hitl-funnel__pull-label">
              of actions handled without human review — auditable, reversible, attributable.
            </p>
            <p className="hitl-funnel__pull-foot">
              Published evaluations of constrained-model triage report large reductions in mean time to insight.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
