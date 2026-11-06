import type { Metadata, Viewport } from 'next'
import { Oswald, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site/header'
import { SiteFooter } from '@/components/site/footer'
import { WhatsAppFloat } from '@/components/site/whatsapp-float'
import './globals.css'

const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald', weight: ['500', '600', '700'] })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: { default: 'Vertex Page Design | Websites that turn searches into calls', template: '%s | Vertex Page Design' },
  description: 'Simple, high-converting websites for local service businesses in the US. Built for phones. Live in 5 business days.',
}
export const viewport: Viewport = { themeColor: '#07090f', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-black">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
