import { ImageResponse } from 'next/og';

// Next.js convention: this file produces /icon at build time, served at
// the appropriate sizes for browser tab favicons. Auto-linked into <head>.

export const dynamic = 'force-static';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: 7,
          color: '#ffffff',
          fontSize: 22,
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
