'use client';

import { useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

export function SiteMotion() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const fill = document.querySelector<HTMLElement>('.platform-phases__fill');
    const phases = document.querySelectorAll<HTMLElement>('.platform-phase');
    if (!fill || phases.length === 0) return;

    const update = () => {
      const viewportMark = window.innerHeight * 0.62;
      let active = 0;
      phases.forEach((phase, i) => {
        const mid = phase.getBoundingClientRect().top + phase.offsetHeight * 0.35;
        const inView = mid < viewportMark;
        phase.classList.toggle('is-active', inView);
        if (inView) active = i + 1;
      });
      const pct = (active / phases.length) * 100;
      fill.style.height = `${pct}%`;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [reduced]);

  return null;
}
