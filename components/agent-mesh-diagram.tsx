'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Agent Mesh — evidence-scoped path view across agents, MCP servers, packages, vulns, and tools.
 * Marketing-side static replica of the in-product graph.
 */
export function AgentMeshDiagram() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section className="bay bay--dark agent-mesh-bay" id="agent-mesh" aria-labelledby="agent-mesh-heading">
      <div className="shell shell--wide">
        <div className="section-head" data-reveal>
          <span className="eyebrow">
            <span className="dot" />
            Agent Mesh · Inside Audit
          </span>
          <h2 className="h2" id="agent-mesh-heading">
            One graph. <em>Every agent, every tool, every credential.</em>
          </h2>
          <p className="lede">
            Evidence-scoped path view across agents, MCP servers, packages, credential references, and
            findings. The highest-risk path is ranked first — and signed so it can&apos;t be tampered with.
          </p>
        </div>

        <div className="agent-mesh card" ref={ref} data-reveal>
          <header className="agent-mesh__head">
            <div className="agent-mesh__title-row">
              <h3 className="agent-mesh__title">Agent Mesh</h3>
              <div className="agent-mesh__tabs">
                <button type="button" className="agent-mesh__tab">Risk Map</button>
                <button type="button" className="agent-mesh__tab is-active">Dependency Flow</button>
                <button type="button" className="agent-mesh__tab">Spawn Tree</button>
              </div>
            </div>
            <p className="agent-mesh__sub">
              Default view ranks the highest-risk agent first and hides lower-priority nodes until you
              expand filters.
            </p>
          </header>

          <div className="agent-mesh__top-path">
            <span className="agent-mesh__top-tag">TOP EXPOSED PATH</span>
            <span className="agent-mesh__top-sev">CRITICAL</span>
            <code className="agent-mesh__top-trace">cursor → pillow@9.0.0 → CVE-2022-22817</code>
            <span className="agent-mesh__top-stats">
              risk <strong>10</strong> · hops <strong>6</strong> · agents <strong>1</strong> · tools{' '}
              <strong>3</strong> · creds <strong>2</strong> · fix <strong>9.0.1</strong>
            </span>
          </div>

          <div className="agent-mesh__filters">
            <span className="agent-mesh__filter is-on">Packages 5</span>
            <span className="agent-mesh__filter is-on">Vulns 5</span>
            <span className="agent-mesh__filter is-on">Creds 0</span>
            <span className="agent-mesh__filter is-on">Tools 3</span>
            <span className="agent-mesh__filter">High+</span>
            <span className="agent-mesh__filter">Vulnerable only</span>
          </div>

          <div className="agent-mesh__graph">
            <svg viewBox="0 0 1180 460" role="img" aria-labelledby="agent-mesh-svg-title" className="agent-mesh__svg">
              <title id="agent-mesh-svg-title">
                Cursor agent connects through database-server to pillow@9.0.0 which has CVE-2022-22817; execute_sql tool branches off
              </title>

              <defs>
                <marker id="am-arrow-risk" viewBox="0 0 8 6" refX="7" refY="3" markerWidth="8" markerHeight="6" orient="auto">
                  <path d="M0 0 L8 3 L0 6Z" fill="var(--risk)" opacity="0.8" />
                </marker>
                <marker id="am-arrow-ok" viewBox="0 0 8 6" refX="7" refY="3" markerWidth="8" markerHeight="6" orient="auto">
                  <path d="M0 0 L8 3 L0 6Z" fill="var(--ok)" opacity="0.8" />
                </marker>
                <marker id="am-arrow-purple" viewBox="0 0 8 6" refX="7" refY="3" markerWidth="8" markerHeight="6" orient="auto">
                  <path d="M0 0 L8 3 L0 6Z" fill="var(--accent-secondary)" opacity="0.8" />
                </marker>
              </defs>

              {/* edges */}
              <motion.path
                d="M260 380 C320 380, 360 220, 420 220"
                stroke="var(--ok)" strokeWidth="2" fill="none" opacity="0.7"
                initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                markerEnd="url(#am-arrow-ok)"
              />
              <motion.line
                x1="600" y1="220" x2="700" y2="220"
                stroke="var(--risk)" strokeWidth="2" opacity="0.85"
                initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                markerEnd="url(#am-arrow-risk)"
              />
              <motion.line
                x1="880" y1="220" x2="980" y2="220"
                stroke="var(--risk)" strokeWidth="2" opacity="0.85"
                initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                markerEnd="url(#am-arrow-risk)"
              />
              <motion.path
                d="M510 280 L580 340"
                stroke="var(--accent-secondary)" strokeWidth="2" fill="none" opacity="0.75"
                initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                markerEnd="url(#am-arrow-purple)"
              />

              {/* AGENT — cursor */}
              <g>
                <rect x="120" y="350" width="180" height="80" rx="14" fill="rgba(16, 185, 129, 0.08)" stroke="var(--ok)" />
                <text x="142" y="378" className="am-svg__type" fill="var(--ok)">AGENT</text>
                <text x="142" y="400" className="am-svg__label">cursor</text>
                <text x="142" y="418" className="am-svg__detail">2 srv · 6 pkg · 17 findings</text>
                <rect x="262" y="358" width="32" height="18" rx="9" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />
                <text x="278" y="371" textAnchor="middle" className="am-svg__pill" fill="var(--ok)">AG</text>
              </g>

              {/* SERVER */}
              <g>
                <rect x="420" y="180" width="220" height="80" rx="14" fill="rgba(93, 168, 255, 0.08)" stroke="var(--accent)" />
                <text x="442" y="208" className="am-svg__type" fill="var(--accent)">SERVER</text>
                <text x="442" y="230" className="am-svg__label">database-server</text>
                <text x="442" y="248" className="am-svg__detail">python -m mcp_database · 3 tools · 5 pkg</text>
              </g>

              {/* PACKAGE */}
              <g>
                <rect x="700" y="180" width="200" height="80" rx="14" fill="rgba(239, 68, 68, 0.06)" stroke="var(--risk)" />
                <text x="720" y="208" className="am-svg__type" fill="var(--risk)">PACKAGE</text>
                <text x="720" y="230" className="am-svg__label">pillow@9.0.0</text>
                <text x="720" y="248" className="am-svg__detail">9.0.0 · pypi · 7 findings</text>
              </g>

              {/* CVE */}
              <g>
                <rect x="980" y="180" width="180" height="80" rx="14" fill="rgba(239, 68, 68, 0.16)" stroke="var(--risk)" />
                <text x="1000" y="208" className="am-svg__type" fill="var(--risk)">CVE</text>
                <text x="1000" y="230" className="am-svg__label">CVE-2022-22817</text>
                <text x="1000" y="248" className="am-svg__detail">CRITICAL · CVSS 9.8</text>
              </g>

              {/* TOOL */}
              <g>
                <rect x="560" y="320" width="200" height="64" rx="14" fill="rgba(124, 92, 255, 0.08)" stroke="var(--accent-secondary)" />
                <text x="580" y="348" className="am-svg__type" fill="var(--accent-secondary)">TOOL</text>
                <text x="580" y="370" className="am-svg__label">execute_sql</text>
              </g>
            </svg>
          </div>

          <footer className="agent-mesh__foot">
            <span className="agent-mesh__foot-stat">
              <strong>1</strong> agent
            </span>
            <span className="agent-mesh__foot-stat">
              <strong>5</strong> packages
            </span>
            <span className="agent-mesh__foot-stat">
              <strong>5</strong> vulns
            </span>
            <span className="agent-mesh__foot-stat">
              <strong>3</strong> tools
            </span>
            <span className="agent-mesh__foot-stat agent-mesh__foot-stat--risk">
              <strong>1C</strong> critical · <strong>4H</strong> high
            </span>
            <span className="agent-mesh__foot-stat agent-mesh__foot-stat--accent">
              Manifest signed · drift verified
            </span>
          </footer>
        </div>
      </div>
    </section>
  );
}
