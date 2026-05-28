'use client';

/**
 * Global error boundary — catches uncaught runtime errors anywhere
 * in the app (including the root layout) and renders a branded
 * recovery page instead of a blank white screen.
 *
 * Next.js requires this file to define its own <html> and <body>
 * tags because the root layout itself may have errored out.
 */

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface to the dev console + (when wired) to Sentry / analytics.
    // eslint-disable-next-line no-console
    console.error('[GlobalError]', error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          fontFamily:
            "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
          background: '#070B11',
          color: '#f1f5f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
        }}
      >
        <main
          style={{
            maxWidth: '560px',
            width: '100%',
            background: '#111827',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: 'clamp(24px, 4vw, 40px)',
            boxShadow: '0 20px 60px -20px rgba(0, 0, 0, 0.5)',
          }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#EF4444',
              margin: '0 0 12px',
            }}
          >
            Something went wrong
          </p>
          <h1
            style={{
              fontFamily:
                "'Inter Tight', system-ui, -apple-system, sans-serif",
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 600,
              letterSpacing: '-0.022em',
              lineHeight: 1.15,
              margin: '0 0 16px',
              color: '#f1f5f9',
            }}
          >
            The site hit an unexpected error.
          </h1>
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#cbd5e1',
              margin: '0 0 28px',
            }}
          >
            We&apos;ve logged it. You can retry the page, or head back to the
            home page and try again. If this keeps happening, email{' '}
            <a
              href="mailto:founders@complai.dev"
              style={{ color: '#4A9FFF', textDecoration: 'underline' }}
            >
              founders@complai.dev
            </a>{' '}
            so we know.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                background: '#4A9FFF',
                color: '#0f1729',
                border: 'none',
                borderRadius: '999px',
                padding: '12px 22px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Try again →
            </button>
            <a
              href="/"
              style={{
                background: 'transparent',
                color: '#f1f5f9',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                borderRadius: '999px',
                padding: '12px 22px',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                fontFamily: 'inherit',
              }}
            >
              Back to home
            </a>
          </div>
          {error?.digest ? (
            <p
              style={{
                fontFamily:
                  "'IBM Plex Mono', ui-monospace, monospace",
                fontSize: '11px',
                color: '#7a8fa3',
                marginTop: '28px',
                marginBottom: 0,
              }}
            >
              Reference: {error.digest}
            </p>
          ) : null}
        </main>
      </body>
    </html>
  );
}
