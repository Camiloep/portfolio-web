import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Camilo Estrada Patiño — Desarrollador Full Stack';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 90px',
          background: 'linear-gradient(135deg, #000000 0%, #050a3c 60%, #0b1a8a 100%)',
          color: '#E2E2E2',
        }}
      >
        <div style={{ display: 'flex', width: 120, height: 8, borderRadius: 4, background: '#0ea5e9', marginBottom: 40 }} />
        <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>Camilo Estrada Patiño</div>
        <div style={{ display: 'flex', fontSize: 44, color: '#7dd3fc', marginTop: 20 }}>Desarrollador Full Stack</div>
        <div style={{ display: 'flex', fontSize: 32, color: '#9ca3af', marginTop: 28 }}>
          React · Next.js · TypeScript · Medellín, Colombia
        </div>
      </div>
    ),
    size
  );
}
