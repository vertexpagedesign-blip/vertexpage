import Link from 'next/link'
import { PHONE_HREF, PHONE_DISPLAY, INSTAGRAM, FACEBOOK, EMAIL, CALENDLY_URL } from '@/lib/site'

export function SiteFooter() {
  const col = 'flex flex-col gap-1 text-muted [&_a]:inline-flex [&_a]:min-h-9 [&_a]:items-center [&_a:hover]:text-accent'
  return (
    <footer className="border-t border-line bg-surface/40 pb-24 pt-14 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl font-bold">Vertex<span className="text-accent">.</span> Page Design</p>
          <p className="mt-3 max-w-sm text-muted">Simple websites for local service businesses. Built by Arthur Henrique.</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5">Book a Free Call</a>
        </div>
        <div>
          <p className="mb-2 font-display text-lg">Pages</p>
          <div className={col}>
            <Link href="/work">Work</Link><Link href="/pricing">Pricing</Link><Link href="/about">About</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy &amp; Terms</Link>
          </div>
        </div>
        <div>
          <p className="mb-2 font-display text-lg">Reach Arthur</p>
          <div className={col}>
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-sm text-muted">© {new Date().getFullYear()} Vertex Page Design. All prices in USD.</p>
    </footer>
  )
}
