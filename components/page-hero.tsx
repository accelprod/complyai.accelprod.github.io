'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { easeOut } from '@/lib/motion';

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  shellClass?: string;
  centered?: boolean;
  aside?: ReactNode;
  /** Long multi-line headlines (solution role pages) */
  compact?: boolean;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  lede,
  shellClass = 'shell',
  centered = false,
  aside,
  compact = false,
  children,
}: PageHeroProps) {
  const reduced = useReducedMotion();
  const heroFade = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  };
  const motionProps = reduced
    ? {}
    : {
        initial: 'hidden' as const,
        animate: 'visible' as const,
        variants: heroFade,
        transition: { duration: 0.6, ease: easeOut },
      };

  return (
    <section
      className={`bay page-hero ai-dot-grid${aside ? ' page-hero--split' : ''}${compact ? ' page-hero--compact' : ''}`}
    >
      <div className={shellClass}>
        <motion.div
          className={aside ? 'page-hero__split' : undefined}
          {...motionProps}
        >
          <div className={`page-hero__inner${centered ? ' page-hero__inner--center' : ''}`}>
            <span className="eyebrow">
              <span className="dot" />
              {eyebrow}
            </span>
            <h1 className="display">{title}</h1>
            {lede ? <p className="lede">{lede}</p> : null}
            {children}
          </div>
          {aside ? <div className="page-hero__aside">{aside}</div> : null}
        </motion.div>
      </div>
    </section>
  );
}
