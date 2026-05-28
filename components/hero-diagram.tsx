'use client';

import { motion } from 'framer-motion';
import { easeOut } from '@/lib/motion';
import {
  AGENT_LINES,
  DECISIONS,
  useHeroDiagramSequence,
} from '@/hooks/use-hero-diagram-sequence';

type HeroDiagramProps = {
  animate: boolean;
  compact?: boolean;
};

function DecisionLatency({
  latencyMs,
  settled,
}: {
  latencyMs: number | null;
  settled?: boolean;
}) {
  if (latencyMs == null) return <>sub-100ms</>;
  return (
    <span className={`hero-diagram__latency${settled ? ' is-settled' : ''}`}>{latencyMs}ms</span>
  );
}

export function HeroDiagram({ animate, compact = false }: HeroDiagramProps) {
  const { phase, activeDecision, activeAgentLine, typedCmd, latencyMs } =
    useHeroDiagramSequence(animate);

  // Entrance fade is handled by the `hero__visual` container in hero.tsx.
  // The diagram's motion comes from the live sequence (command typing, scan
  // sweep, decision cycling). The boxes themselves stay visible so they can
  // never get stuck in framer-motion's `hidden` variant across the
  // compact↔wide remount — the bug that left the boxes invisible.
  const diagramMotion = {};
  const piece = {};
  const boxMotion = {};

  const ariaLabel =
    'Agent tools flow through ComplyAI to DENY, ASK, or ALLOW at the action boundary in sub-100ms';

  const agentLineLit = (i: number) =>
    animate && (phase === 'agent' || phase === 'flow') && activeAgentLine === i;

  const denyActive =
    activeDecision === 0 && (phase === 'decide' || phase === 'hold' || !animate);
  const chipState = denyActive ? 'deny' : animate ? 'cycle' : 'ask';

  const rootClass = [
    'hero-diagram',
    'hero-diagram--premium',
    compact ? 'hero-diagram--compact' : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (compact) {
    const d = DECISIONS[activeDecision];
    const cmdDisplay = animate ? typedCmd || '\u00a0' : d.cmd;

    return (
      <div
        className={rootClass}
        role="img"
        aria-label={ariaLabel}
        data-phase={phase}
      >
        <div className="hero-diagram__compact-latency" aria-hidden>
          <span className="hero-diagram__box-h">Decision · </span>
          <DecisionLatency latencyMs={latencyMs} settled={phase === 'hold'} />
        </div>
        <motion.div className="hero-diagram__row--compact" {...diagramMotion}>
          <motion.div className="hero-diagram__box hero-diagram__box--compact" {...boxMotion}>
            <div className="hero-diagram__box-h">Agent</div>
            <div className="hero-diagram__box-name">Your agents in production</div>
          </motion.div>

          <motion.span className="hero-diagram__arrow hero-diagram__arrow--inline" aria-hidden {...piece}>
            <span className="hero-diagram__flow-dot" />
            →
          </motion.span>

          <motion.div
            className={`hero-diagram__box hero-diagram__box--center hero-diagram__box--compact${phase === 'scan' ? ' is-scanning' : ''}`}
            {...boxMotion}
          >
            <div className="hero-diagram__box-h">ComplyAI</div>
            <div className="hero-diagram__box-name">Action control plane</div>
          </motion.div>

          <motion.span className="hero-diagram__arrow hero-diagram__arrow--inline" aria-hidden {...piece}>
            <span className="hero-diagram__flow-dot" />
            →
          </motion.span>

          <motion.div
            className={`hero-diagram__decision hero-diagram__decision--chip ${d.className} is-active`}
            layout={animate}
            {...boxMotion}
          >
            <span className="hero-diagram__decision-ide">{d.ide}</span>
            <span className="hero-diagram__decision-cmd">{cmdDisplay}</span>
            <span className="hero-diagram__decision-tag">{d.tag}</span>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={rootClass} role="img" aria-label={ariaLabel} data-phase={phase}>
      <motion.div className="hero-diagram__title" {...piece}>
        Every action under your control
      </motion.div>
      <motion.div className="hero-diagram__row" {...diagramMotion}>
        <div className="hero-diagram__flow">
          <motion.div className="hero-diagram__box" {...boxMotion}>
            <div className="hero-diagram__box-h">Agent</div>
            <div className="hero-diagram__box-name">Your agents in production</div>
            <ul className="hero-diagram__box-list">
              {AGENT_LINES.map((label, i) => (
                <li key={label} className={agentLineLit(i) ? 'is-lit' : undefined}>
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="hero-diagram__arrow" aria-hidden {...piece}>
            <span className="hero-diagram__flow-dot" />
            →
          </motion.div>

          <motion.div
            className={`hero-diagram__box hero-diagram__box--center${phase === 'scan' ? ' is-scanning' : ''}`}
            {...boxMotion}
          >
            <div className="hero-diagram__box-h">ComplyAI</div>
            <div className="hero-diagram__box-name">Action control plane</div>
            <ul className="hero-diagram__box-list">
              <li>Guard · Insight</li>
              <li>Scanner · Sandbox</li>
              <li>Ledger · Meter</li>
            </ul>
          </motion.div>
        </div>

        <div className="hero-diagram__connector" aria-hidden>
          <span className="hero-diagram__flow-dot" />
        </div>

        <motion.div className="hero-diagram__box hero-diagram__box--decisions" {...boxMotion}>
          <div className="hero-diagram__box-h">
            Decision · <DecisionLatency latencyMs={latencyMs} settled={phase === 'hold'} />
          </div>
          {DECISIONS.map((d, i) => {
            const isActive = activeDecision === i;
            const cmdText = isActive && animate ? typedCmd || '\u00a0' : d.cmd;
            return (
              <motion.div
                key={d.key}
                className={`hero-diagram__decision ${d.className}${isActive ? ' is-active' : ''}`}
                layout={animate && isActive}
                transition={{ duration: 0.35, ease: easeOut }}
              >
                <span className="hero-diagram__decision-ide">{d.ide}</span>
                <span className="hero-diagram__decision-cmd">{cmdText}</span>
                <span className="hero-diagram__decision-tag">{d.tag}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
