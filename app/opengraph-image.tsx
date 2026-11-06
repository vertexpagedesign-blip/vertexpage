import { ImageResponse } from 'next/og'

export const alt = 'Vertex Page Design - Landing Pages That Sell in the US'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', background: '#07090f', color: '#f3f6fb', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80 }}>
        <div style={{ fontSize: 34, color: '#3ecbff', fontWeight: 700, letterSpacing: 4 }}>VERTEX PAGE DESIGN</div>
        <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.02, marginTop: 24 }}>Landing pages that sell in the US.</div>
        <div style={{ fontSize: 34, color: '#9aa4b5', marginTop: 28 }}>Fast. Mobile-first. Built to get calls.</div>
      </div>
    ),
    size,
  )
}
