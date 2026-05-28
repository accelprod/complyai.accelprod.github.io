/**
 * Diagram Primitives — R3
 * ------------------------------------------------------------
 * Shared visual grammar for ComplyAI's four marketing diagrams
 * (hero-diagram, blast-radius-diagram, agent-mesh-diagram,
 * hitl-triage-funnel).
 *
 * Goal: every diagram reads as a chapter of the same book.
 * Same shell, same node anatomy, same edge palette, same
 * caption rhythm. No content removed — only presentation
 * aligned.
 *
 * These primitives are opt-in. Each diagram picks the pieces
 * it needs; nothing is forced onto a layout that doesn't suit
 * it. Where a diagram already implements a piece with its own
 * SVG (e.g. hero-diagram's bespoke state machine), it should
 * still adopt the .dgm-* CSS classes for nodes and edges so
 * the visual rhythm aligns.
 *
 * Color palette discipline: maximum four colours per diagram —
 *   --risk (compromised paths)
 *   --accent (ComplyAI control surface)
 *   --accent-secondary (upstream / MCP infrastructure)
 *   --warn (credentials / sensitive data)
 * Everything else is muted white at 4–8% opacity.
 */

import type { CSSProperties, ReactNode } from 'react';

type Tone = 'risk' | 'accent' | 'secondary' | 'warn' | 'quiet';

/* ----------------------------------------------------------------
   DiagramShell
   ----------------------------------------------------------------
   Wraps the inner area of a diagram (below the section head).
   Provides consistent border, radius, padding, and a soft caption
   row above the diagram body.
---------------------------------------------------------------- */
export function DiagramShell({
  caption,
  subcaption,
  children,
  className = '',
}: {
  /** Short headline above the diagram body, in mono. */
  caption?: string;
  /** Single-sentence explanation under the caption. */
  subcaption?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`dgm-shell card ${className}`}>
      {(caption || subcaption) && (
        <header className="dgm-shell__head">
          {caption && <p className="dgm-shell__caption">{caption}</p>}
          {subcaption && <p className="dgm-shell__subcaption">{subcaption}</p>}
        </header>
      )}
      <div className="dgm-shell__body">{children}</div>
    </div>
  );
}

/* ----------------------------------------------------------------
   DiagramNode
   ----------------------------------------------------------------
   Standard node anatomy used across diagrams that render nodes as
   HTML (hero, hitl-funnel). SVG diagrams reach for the .dgm-svg__*
   text/rect classes instead.

   Layout:
     [4px coloured strip] | KICKER (mono, 9px, uppercase)
                          | Title (display, 13px)
                          | Detail (sans, 10.5px, muted)
---------------------------------------------------------------- */
export function DiagramNode({
  tone = 'accent',
  kicker,
  title,
  detail,
  children,
  style,
  ariaLabel,
}: {
  tone?: Tone;
  kicker?: string;
  title?: ReactNode;
  detail?: ReactNode;
  /** Optional extra body (chips, mini-charts) below detail. */
  children?: ReactNode;
  style?: CSSProperties;
  ariaLabel?: string;
}) {
  return (
    <div className={`dgm-node dgm-node--${tone}`} style={style} aria-label={ariaLabel}>
      <span className="dgm-node__strip" aria-hidden />
      <div className="dgm-node__body">
        {kicker && <span className="dgm-node__kicker">{kicker}</span>}
        {title && <span className="dgm-node__title">{title}</span>}
        {detail && <span className="dgm-node__detail">{detail}</span>}
        {children}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
   DiagramImpactRail
   ----------------------------------------------------------------
   The metrics strip beneath a diagram (Blast Radius uses it today).
   Standard: 3–5 numbers, each with a single label and a tone.
---------------------------------------------------------------- */
export type ImpactCell = {
  /** The number itself, kept as a string so "3" and "5+" work. */
  n: string;
  /** One line of context under the number. */
  label: string;
  tone?: Tone;
};

export function DiagramImpactRail({
  cells,
  trailing,
  className = '',
}: {
  cells: ImpactCell[];
  /** Optional rightmost block — e.g. a recommended-fix card. */
  trailing?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`dgm-impact ${className}`} data-reveal-stagger>
      {cells.map((c) => (
        <div key={c.label} className={`dgm-impact__cell dgm-impact__cell--${c.tone ?? 'quiet'}`}>
          <p className="dgm-impact__n">{c.n}</p>
          <p className="dgm-impact__label">{c.label}</p>
        </div>
      ))}
      {trailing && <div className="dgm-impact__trailing">{trailing}</div>}
    </div>
  );
}

/* ----------------------------------------------------------------
   Edge stroke + marker constants
   ----------------------------------------------------------------
   Use these inside SVG diagrams instead of inline colours so all
   diagrams share the same edge grammar. Pair with a marker
   definition that lives in the same SVG.
---------------------------------------------------------------- */
export const DGM_STROKES = {
  risk: { stroke: 'var(--risk)', strokeWidth: 1.6, opacity: 0.78 },
  flow: { stroke: 'var(--accent-secondary)', strokeWidth: 1.6, opacity: 0.78 },
  accent: { stroke: 'var(--accent)', strokeWidth: 1.6, opacity: 0.78 },
  quiet: { stroke: 'rgba(255,255,255,0.18)', strokeWidth: 1, opacity: 0.55 },
} as const;
