import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const alt = 'Aethos Vision Labs — Magic, at your service.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#08090b', color: '#f0f0ed', padding: '64px' }}><div style={{ fontSize: 32 }}>aethos vision labs</div><div style={{ display: 'flex', flexDirection: 'column', fontSize: 80, letterSpacing: '-3px', lineHeight: 1.1 }}><span>Magic,</span><span style={{ color: '#8cb9ff' }}>at your service.</span></div><div style={{ fontSize: 24, color: '#a5afbd' }}>Websites. Useful technology. Content.</div></div>, size);
}
