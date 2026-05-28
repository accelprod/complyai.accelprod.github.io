'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export const DECISIONS = [
  {
    key: 'deny',
    className: 'hero-diagram__decision--deny',
    ide: 'shell',
    cmd: 'DROP DATABASE prod',
    tag: 'DENY',
  },
  {
    key: 'ask',
    className: 'hero-diagram__decision--ask',
    ide: 'mcp',
    cmd: 'github.create_repo',
    tag: 'ASK',
  },
  {
    key: 'allow',
    className: 'hero-diagram__decision--allow',
    ide: 'tool',
    cmd: 'Read src/billing.ts',
    tag: 'ALLOW',
  },
] as const;

export const AGENT_LINES = [
  'tool call',
  'shell command',
  'file read / edit',
  'MCP call',
] as const;

const LATENCY_MS = [42, 87, 99] as const;
const STATIC_DECISION = 1;
const TYPE_CHAR_MS = 24;

const PHASE_DURATIONS = {
  agent: 700,
  flow: 600,
  scan: 700,
  hold: 1200,
} as const;

export type HeroDiagramPhase = 'agent' | 'flow' | 'scan' | 'decide' | 'hold';

export type HeroDiagramSequence = {
  phase: HeroDiagramPhase;
  activeDecision: number;
  activeAgentLine: number;
  typedCmd: string;
  latencyMs: number | null;
};

export function useHeroDiagramSequence(animate: boolean): HeroDiagramSequence {
  const [phase, setPhase] = useState<HeroDiagramPhase>(animate ? 'agent' : 'hold');
  const [activeDecision, setActiveDecision] = useState(animate ? 0 : STATIC_DECISION);
  const [activeAgentLine, setActiveAgentLine] = useState(0);
  const [typedCmd, setTypedCmd] = useState(
    animate ? '' : DECISIONS[STATIC_DECISION].cmd,
  );
  const [latencyMs, setLatencyMs] = useState<number | null>(null);
  const decisionRef = useRef(0);

  const runDecisionCycle = useCallback((decisionIndex: number, schedule: (fn: () => void, ms: number) => void) => {
    const cmd = DECISIONS[decisionIndex].cmd;
    const agentLineMs = Math.floor(PHASE_DURATIONS.agent / AGENT_LINES.length);

    setActiveDecision(decisionIndex);
    setPhase('agent');
    setTypedCmd('');
    setLatencyMs(null);
    setActiveAgentLine(0);

    AGENT_LINES.forEach((_, i) => {
      if (i === 0) return;
      schedule(() => setActiveAgentLine(i), agentLineMs * i);
    });

    const flowAt = PHASE_DURATIONS.agent;
    const scanAt = flowAt + PHASE_DURATIONS.flow;
    const decideAt = scanAt + PHASE_DURATIONS.scan;
    const typeDuration = cmd.length * TYPE_CHAR_MS;
    const holdAt = decideAt + typeDuration + 80;
    const nextAt = holdAt + PHASE_DURATIONS.hold;

    schedule(() => setPhase('flow'), flowAt);
    schedule(() => setPhase('scan'), scanAt);
    schedule(() => {
      setPhase('decide');
      let i = 0;
      const typeStep = () => {
        i += 1;
        setTypedCmd(cmd.slice(0, i));
        if (i < cmd.length) schedule(typeStep, TYPE_CHAR_MS);
        else setLatencyMs(LATENCY_MS[decisionIndex]);
      };
      typeStep();
    }, decideAt);
    schedule(() => setPhase('hold'), holdAt);
    schedule(() => {
      const next = (decisionIndex + 1) % DECISIONS.length;
      decisionRef.current = next;
      runDecisionCycle(next, schedule);
    }, nextAt);
  }, []);

  useEffect(() => {
    if (!animate) {
      setPhase('hold');
      setActiveDecision(STATIC_DECISION);
      setActiveAgentLine(0);
      setTypedCmd(DECISIONS[STATIC_DECISION].cmd);
      setLatencyMs(null);
      return;
    }

    let cancelled = false;
    const timeouts: number[] = [];

    const schedule = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timeouts.push(id);
    };

    decisionRef.current = 0;
    runDecisionCycle(0, schedule);

    return () => {
      cancelled = true;
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [animate, runDecisionCycle]);

  return { phase, activeDecision, activeAgentLine, typedCmd, latencyMs };
}
