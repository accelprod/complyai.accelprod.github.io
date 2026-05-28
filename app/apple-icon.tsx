import { ImageResponse } from 'next/og';

// Next.js convention: produces /apple-icon at build time, served at
// 180×180 for iOS home-screen and bookmark icons.

export const dynamic = 'force-static';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#4A9FFF',
          borderRadius: 36,
          color: '#ffffff',
          fontSize: 120,
          fontWeight: 700,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '-0.04em',
        }}
      >
        C
      </div>
    ),
    { ...size },
  );
}
