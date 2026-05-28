'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { DiagramShell, DiagramImpactRail } from '@/components/diagram-primitives';

/**
 * Dark-theme port of the Blast Radius attack-path drilldown.
 * Columns: Package → CVE → MCP Servers → Agents → (Credentials + Tools).
 */
export function BlastRadiusDiagram() {
  const ref = useRef<SVGSVGElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  const stroke = inView ? 1 : 0;

  return (
    <section className="bay bay--surface blast-radius-bay" id="blast-radius" aria-labelledby="blast-radius-heading">
      <div className="shell shell--wide">
        <div className="section-head" data-reveal>
          <span className="eyebrow">
            <span className="dot" />
            Blast Radius Simulation · Inside Account
          </span>
          <h2 className="h2" id="blast-radius-heading">
            Know the blast radius — <em>before the blast.</em>
          </h2>
          <p className="lede">
            One vulnerable package, one compromised tool, one hijacked prompt — and the cascade is already
            in motion. ComplyAI traces every attack path from package to agent and quantifies the impact
            before it lands.
          </p>
        </div>

        <DiagramShell
          className="blast-radius"
          caption="Attack-path drilldown from one vulnerable package"
          subcaption="package → vulnerability → MCP server (tools + credential refs) → connected agents — so remediation is fix-first, not guess-first."
        >
          <div className="blast-radius__columns" aria-hidden>
            <span>Package</span>
            <span>Vulnerability</span>
            <span>MCP Servers</span>
            <span>AI Agents</span>
            <span>Blast Radius</span>
          </div>

          <svg
            ref={ref}
            viewBox="0 0 960 440"
            role="img"
            aria-labelledby="blast-radius-svg-title"
            className="blast-radius__svg"
          >
            <title id="blast-radius-svg-title">
              Attack path from better-sqlite3 v9.0.0 through two MCP servers to three AI agents
            </title>

            <defs>
              <marker id="br-arrow-risk" viewBox="0 0 8 6" refX="7" refY="3" markerWidth="8" markerHeight="6" orient="auto">
                <path d="M0 0 L8 3 L0 6Z" fill="var(--risk)" opacity="0.7" />
              </marker>
              <marker id="br-arrow-server" viewBox="0 0 8 6" refX="7" refY="3" markerWidth="8" markerHeight="6" orient="auto">
                <path d="M0 0 L8 3 L0 6Z" fill="var(--accent-secondary)" opacity="0.7" />
              </marker>
            </defs>

            {/* edges */}
            <motion.line
              x1="148" y1="200" x2="186" y2="200"
              stroke="var(--risk)" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: stroke }}
              transition={{ duration: 0.5, delay: 0.1 }}
              markerEnd="url(#br-arrow-risk)"
            />
            <motion.path
              d="M316 200 C340 200, 352 124, 372 124"
              stroke="var(--risk)" strokeWidth="1.5" fill="none" opacity="0.55"
              initial={{ pathLength: 0 }} animate={{ pathLength: stroke }}
              transition={{ duration: 0.6, delay: 0.25 }}
              markerEnd="url(#br-arrow-risk)"
            />
            <motion.path
              d="M316 200 C340 200, 352 282, 372 282"
              stroke="var(--risk)" strokeWidth="1.5" fill="none" opacity="0.55"
              initial={{ pathLength: 0 }} animate={{ pathLength: stroke }}
              transition={{ duration: 0.6, delay: 0.35 }}
              markerEnd="url(#br-arrow-risk)"
            />
            <motion.path
              d="M512 124 C530 124, 542 88, 560 88"
              stroke="var(--accent-secondary)" strokeWidth="1.5" fill="none" opacity="0.55"
              initial={{ pathLength: 0 }} animate={{ pathLength: stroke }}
              transition={{ duration: 0.55, delay: 0.5 }}
              markerEnd="url(#br-arrow-server)"
            />
            <motion.path
              d="M512 124 C530 124, 542 206, 560 206"
              stroke="var(--accent-secondary)" strokeWidth="2" fill="none" opacity="0.85"
              initial={{ pathLength: 0 }} animate={{ pathLength: stroke }}
              transition={{ duration: 0.55, delay: 0.6 }}
              markerEnd="url(#br-arrow-server)"
            />
            <motion.path
              d="M512 282 C530 282, 542 206, 560 206"
              stroke="var(--accent-secondary)" strokeWidth="2" fill="none" opacity="0.85"
              initial={{ pathLength: 0 }} animate={{ pathLength: stroke }}
              transition={{ duration: 0.55, delay: 0.7 }}
              markerEnd="url(#br-arrow-server)"
            />
            <motion.path
              d="M512 282 C530 282, 542 330, 560 330"
              stroke="var(--accent-secondary)" strokeWidth="1.5" fill="none" opacity="0.55"
              initial={{ pathLength: 0 }} animate={{ pathLength: stroke }}
              transition={{ duration: 0.55, delay: 0.8 }}
              markerEnd="url(#br-arrow-server)"
            />

            {/* PACKAGE */}
            <g>
              <rect x="28" y="168" width="120" height="64" rx="10" fill="rgba(245, 158, 11, 0.06)" stroke="rgba(245, 158, 11, 0.45)" />
              <rect x="28" y="168" width="4" height="64" rx="2" fill="var(--warn)" />
              <text x="48" y="186" className="br-svg__type" fill="var(--warn)">PACKAGE</text>
              <text x="48" y="202" className="br-svg__label">better-sqlite3</text>
              <text x="48" y="218" className="br-svg__detail">npm · v9.0.0</text>
            </g>

            {/* CVE */}
            <g>
              <rect x="186" y="168" width="130" height="64" rx="10" fill="rgba(239, 68, 68, 0.08)" stroke="rgba(239, 68, 68, 0.5)" />
              <rect x="186" y="168" width="4" height="64" rx="2" fill="var(--risk)" />
              <text x="206" y="186" className="br-svg__type" fill="var(--risk)">CVE · CRITICAL</text>
              <text x="206" y="202" className="br-svg__label">CVE-2025-54136</text>
              <text x="206" y="218" className="br-svg__detail">MCPoison · CVSS 9.8</text>
            </g>

            {/* SERVER A */}
            <g>
              <rect x="372" y="92" width="140" height="64" rx="10" fill="rgba(124, 92, 255, 0.06)" stroke="rgba(124, 92, 255, 0.45)" />
              <rect x="372" y="92" width="4" height="64" rx="2" fill="var(--accent-secondary)" />
              <text x="392" y="110" className="br-svg__type" fill="var(--accent-secondary)">MCP SERVER</text>
              <text x="392" y="126" className="br-svg__label">sqlite-mcp</text>
              <text x="392" y="142" className="br-svg__detail">unverified · 3 tools · root</text>
            </g>

            {/* SERVER B */}
            <g>
              <rect x="372" y="250" width="140" height="64" rx="10" fill="rgba(124, 92, 255, 0.06)" stroke="rgba(124, 92, 255, 0.45)" />
              <rect x="372" y="250" width="4" height="64" rx="2" fill="var(--accent-secondary)" />
              <text x="392" y="268" className="br-svg__type" fill="var(--accent-secondary)">MCP SERVER</text>
              <text x="392" y="284" className="br-svg__label">db-tools</text>
              <text x="392" y="300" className="br-svg__detail">verified · 5 tools</text>
            </g>

            {/* AGENT 1 */}
            <g>
              <rect x="560" y="60" width="130" height="56" rx="10" fill="rgba(93, 168, 255, 0.06)" stroke="rgba(93, 168, 255, 0.45)" />
              <rect x="560" y="60" width="4" height="56" rx="2" fill="var(--accent)" />
              <text x="580" y="78" className="br-svg__type" fill="var(--accent)">AI AGENT</text>
              <text x="580" y="94" className="br-svg__label">Cursor IDE</text>
              <text x="580" y="108" className="br-svg__detail">4 servers · 12 tools</text>
            </g>

            {/* AGENT 2 — double exposure */}
            <g>
              <rect x="560" y="178" width="130" height="56" rx="10" fill="rgba(93, 168, 255, 0.06)" stroke="var(--risk)" strokeOpacity="0.5" />
              <rect x="560" y="178" width="4" height="56" rx="2" fill="var(--accent)" />
              <text x="580" y="196" className="br-svg__type" fill="var(--accent)">AI AGENT</text>
              <text x="580" y="212" className="br-svg__label">Claude Desktop</text>
              <text x="580" y="226" className="br-svg__detail">3 servers · 8 tools</text>
              <rect x="658" y="178" width="30" height="16" rx="8" fill="rgba(239, 68, 68, 0.18)" stroke="var(--risk)" strokeOpacity="0.5" />
              <text x="673" y="190" textAnchor="middle" className="br-svg__chip">2x</text>
            </g>

            {/* AGENT 3 */}
            <g>
              <rect x="560" y="302" width="130" height="56" rx="10" fill="rgba(93, 168, 255, 0.06)" stroke="rgba(93, 168, 255, 0.45)" />
              <rect x="560" y="302" width="4" height="56" rx="2" fill="var(--accent)" />
              <text x="580" y="320" className="br-svg__type" fill="var(--accent)">AI AGENT</text>
              <text x="580" y="336" className="br-svg__label">Windsurf</text>
              <text x="580" y="350" className="br-svg__detail">2 servers · 6 tools</text>
            </g>

            {/* CREDS */}
            <g>
              <rect x="732" y="68" width="118" height="26" rx="6" fill="rgba(245, 158, 11, 0.08)" stroke="rgba(245, 158, 11, 0.4)" />
              <circle cx="746" cy="81" r="4" fill="var(--warn)" opacity="0.6" />
              <text x="758" y="85" className="br-svg__cred">ANTHROPIC_KEY</text>

              <rect x="732" y="102" width="118" height="26" rx="6" fill="rgba(245, 158, 11, 0.08)" stroke="rgba(245, 158, 11, 0.4)" />
              <circle cx="746" cy="115" r="4" fill="var(--warn)" opacity="0.6" />
              <text x="758" y="119" className="br-svg__cred">DB_URL</text>

              <rect x="732" y="136" width="118" height="26" rx="6" fill="rgba(245, 158, 11, 0.08)" stroke="rgba(245, 158, 11, 0.4)" />
              <circle cx="746" cy="149" r="4" fill="var(--warn)" opacity="0.6" />
              <text x="758" y="153" className="br-svg__cred">AWS_SECRET</text>
            </g>

            {/* TOOLS */}
            <text x="732" y="188" className="br-svg__section">TOOLS AT RISK</text>
            <g>
              <rect x="732" y="196" width="100" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
              <text x="782" y="212" textAnchor="middle" className="br-svg__tool">query_db</text>
              <rect x="840" y="196" width="100" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
              <text x="890" y="212" textAnchor="middle" className="br-svg__tool">read_file</text>
              <rect x="732" y="228" width="100" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
              <text x="782" y="244" textAnchor="middle" className="br-svg__tool">write_file</text>
              <rect x="840" y="228" width="100" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
              <text x="890" y="244" textAnchor="middle" className="br-svg__tool">exec_sql</text>
              <rect x="732" y="260" width="100" height="24" rx="6" fill="rgba(239, 68, 68, 0.12)" stroke="var(--risk)" />
              <text x="782" y="276" textAnchor="middle" className="br-svg__tool br-svg__tool--risk">run_shell</text>
              <text x="850" y="276" className="br-svg__exec">EXECUTION TOOL</text>
            </g>
          </svg>

          <DiagramImpactRail
            cells={[
              { n: '3', label: 'agents compromised', tone: 'risk' },
              { n: '3', label: 'credentials exposed', tone: 'warn' },
              { n: '5', label: 'tools reachable', tone: 'quiet' },
              { n: '1', label: 'exec-capable tool', tone: 'risk' },
            ]}
            trailing={
              <div className="blast-radius__fix">
                <p className="blast-radius__fix-label">RECOMMENDED FIX</p>
                <p className="blast-radius__fix-cmd">upgrade better-sqlite3 → 11.7.0</p>
                <p className="blast-radius__fix-detail">Resolves all 3 agent exposures in one upgrade.</p>
              </div>
            }
          />
        </DiagramShell>
      </div>
    </section>
  );
}
