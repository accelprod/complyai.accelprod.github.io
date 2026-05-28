import Link from 'next/link';
import type { ReactNode } from 'react';
import { PageHero } from '@/components/page-hero';

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <main>
      <PageHero eyebrow="Legal" title={title} lede={`Last updated ${updated}`} shellClass="shell shell--prose" />
      <section className="bay bay--surface">
        <div className="shell shell--prose legal-page__body about-prose" data-reveal>
          {children}
          <p className="legal-page__contact">
            Questions?{' '}
            <a href="mailto:hi@complai.dev">hi@complai.dev</a> · Security:{' '}
            <a href="mailto:security@complai.dev">security@complai.dev</a>
          </p>
          <p className="legal-page__back">
            <Link href="/">← Back to home</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
