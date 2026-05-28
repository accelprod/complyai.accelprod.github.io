'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { easeOut } from '@/lib/motion';

export function FocalNumber() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px' });
  const reduced = useReducedMotion();
  const [ms, setMs] = useState(100);

  useEffect(() => {
    if (!inView || reduced) {
      setMs(100);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const from = 118;
    const to = 99;
    const duration = 880;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      setMs(Math.round(from + (to - from) * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced]);

  const motionProps = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-12% 0px' },
        transition: { duration: 0.55, ease: easeOut },
      };

  return (
    <section className="bay figure-bay bay--dark" id="decision-latency">
      <div className="shell">
        <motion.div className="figure" ref={ref} {...motionProps}>
          <div className="figure__n">
            &lt;<em>{ms}</em>ms
          </div>
          <p className="figure__label">Decision latency at the action boundary.</p>
          <p className="figure__sub">Runtime-local enforcement. No proxy to bypass.</p>
        </motion.div>
      </div>
    </section>
  );
}
