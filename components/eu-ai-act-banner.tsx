'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { EU_AI_ACT_BANNER } from '@/lib/site-copy';

export function EuAiActBanner() {
  const { badge, headline, body, cta, ctaHref } = EU_AI_ACT_BANNER;
  const [dimmed, setDimmed] = useState(false);

  useEffect(() => {
    const onScroll = () => setDimmed(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      className={`eu-ai-act-banner${dimmed ? ' is-dimmed' : ''}`}
      aria-label="EU AI Act readiness"
    >
      <div className="shell">
        <div className="eu-ai-act-banner__row">
          <span className="eu-ai-act-banner__badge">
            <span className="dot" /> {badge}
          </span>
          <p className="eu-ai-act-banner__copy">
            <strong>{headline}</strong> <span>{body}</span>
          </p>
          <Link href={ctaHref} className="eu-ai-act-banner__cta">
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
