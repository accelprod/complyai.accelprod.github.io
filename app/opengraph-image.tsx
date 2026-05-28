import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'ComplyAI — AI Control Plane for Engineering and Security';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'linear-gradient(145deg, #0b0e14 0%, #111827 55%, #1d4ed8 100%)',
          color: '#f9fafb',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: '#1d4ed8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            C
          </div>
          <span style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-0.02em' }}>ComplyAI</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 900 }}>
          <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            The control plane for AI agents
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: '#cbd5e1', lineHeight: 1.4 }}>
            Real-time enforcement · sub-100ms · identity-attributed audit · OpenTelemetry-native
          </div>
        </div>
        <div style={{ fontSize: 22, color: '#94a3b8' }}>complai.dev</div>
      </div>
    ),
    { ...size },
  );
}
