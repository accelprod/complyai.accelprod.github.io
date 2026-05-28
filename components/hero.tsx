'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HeroDiagram } from '@/components/hero-diagram';
import { CTAS, HERO } from '@/lib/site-copy';
import { easeOut, fadeUp } from '@/lib/motion';

function useMinWidth(px: number) {
  const query = `(min-width: ${px}px)`;
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const onChange = () => setMatches(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

export function Hero() {
  const reduced = useReducedMotion();
  const isWide = useMinWidth(900);
  const copyMotion = reduced
    ? {}
    : {
        initial: 'hidden' as const,
        animate: 'visible' as const,
        variants: fadeUp,
        transition: { duration: 0.6, ease: easeOut },
      };
  const visualMotion = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, ease: easeOut, delay: 0.2 },
      };

  return (
    <section className="hero" id="ai-agent-security" aria-labelledby="hero-heading">
      <div className="hero__shell ai-dot-grid">
        <div className="hero__grid">
          <motion.div className="hero__copy" {...copyMotion}>
            <span className="eyebrow hero__eyebrow hero__eyebrow--pill">
              <span className="dot" />
              {HERO.eyebrow}
            </span>
            <h1 className="display display--stack" id="hero-heading">
              {HERO.h1} <em>{HERO.h1Em}</em>
            </h1>
            <p className="hero__lede">{HERO.lede}</p>
            <div className="hero__ctas">
              <Link
                href="/demo"
                className="btn btn--primary plausible-event-name=cta_click plausible-event-location=hero"
              >
                {CTAS.demo} <span className="arrow">→</span>
              </Link>
            </div>
          </motion.div>

          <motion.div className="hero__visual" {...visualMotion}>
            <HeroDiagram animate={!reduced && isWide} compact={!isWide} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
