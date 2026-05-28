import { POSITIONING } from '@/lib/site-copy';

// Set NEXT_PUBLIC_SITE_URL in .env.local (and production env) to override.
// No trailing slash. Used by sitemap.xml, JSON-LD, and Open Graph URLs.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://complai.dev';

export const defaultDescription = POSITIONING.subhead;

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ComplyAI',
    alternateName: 'Complai',
    url: SITE_URL,
    description: POSITIONING.oneLiner,
    foundingDate: '2025',
    areaServed: 'Worldwide',
    knowsAbout: [
      'AI agents',
      'Agentic AI',
      'AI agent security',
      'AI agent governance',
      'Runtime governance',
      'SOC 2',
      'ISO 27001',
      'NIST AI RMF',
      'EU AI Act',
      'OpenTelemetry',
    ],
  };
}

export function softwareApplicationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ComplyAI',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'macOS, Windows, Linux',
    description: defaultDescription,
    url: SITE_URL,
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/pricing`,
    },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ComplyAI',
    url: SITE_URL,
  };
}

export function faqJsonLd(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}
