import Link from 'next/link';

/**
 * Static redirect stub used by every former server-side redirect.
 * Renders an actual <meta http-equiv="refresh"> (auto-hoisted into
 * <head> by React 19), a canonical link, and a visible fallback for
 * users with meta-refresh disabled.
 *
 * No JavaScript required. Works on GitHub Pages.
 */
export function RedirectStub({ to, label }: { to: string; label?: string }) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <link rel="canonical" href={to} />
      <main
        style={{
          padding: '80px 24px',
          textAlign: 'center',
          minHeight: '40vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '12px',
        }}
      >
        <p style={{ margin: 0, fontSize: '14px', opacity: 0.8 }}>
          Redirecting to <Link href={to}>{label ?? to}</Link>…
        </p>
      </main>
    </>
  );
}
