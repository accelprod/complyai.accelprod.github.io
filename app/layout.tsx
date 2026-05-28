import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Inter_Tight, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import './market-intel-2026.css';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { RevealObserver } from '@/components/reveal';
import { ScrollProgress } from '@/components/scroll-progress';
import { SiteMotion } from '@/components/site-motion';
import { KEYWORDS, POSITIONING } from '@/lib/site-copy';
import {
  defaultDescription,
  organizationJsonLd,
  SITE_URL,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from '@/lib/seo';

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const siteTitle = `ComplyAI — ${POSITIONING.category}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteTitle,
  description: defaultDescription,
  keywords: KEYWORDS,
  robots: 'index, follow',
  openGraph: {
    title: siteTitle,
    description: defaultDescription,
    type: 'website',
    siteName: 'ComplyAI',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [organizationJsonLd(), softwareApplicationJsonLd(), websiteJsonLd()];

  return (
    <html
      lang="en"
      className={`${interTight.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        {/*
          Content-Security-Policy via meta tag — lightweight in-document
          policy (real HTTP headers will be set by the eventual host).
          Allows: self + inline scripts (Next.js needs them) + Plausible
          analytics + Formspree form submission + Google Fonts CSS.
        */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={[
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com data:",
            "img-src 'self' data: blob:",
            "connect-src 'self' https://plausible.io https://formspree.io",
            "form-action 'self' https://formspree.io",
            "frame-ancestors 'none'",
            "base-uri 'self'",
          ].join('; ')}
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        {/* Favicons are emitted via app/icon.tsx and app/apple-icon.tsx (auto-linked by Next.js). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {plausibleDomain ? (
          <>
            <Script
              defer
              data-domain={plausibleDomain}
              src="https://plausible.io/js/script.tagged-events.js"
              strategy="afterInteractive"
            />
            <Script id="plausible-init" strategy="afterInteractive">
              {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
            </Script>
          </>
        ) : null}
      </head>
      <body>
        <ScrollProgress />
        <Nav />
        {children}
        <Footer />
        <RevealObserver />
        <SiteMotion />
      </body>
    </html>
  );
}
