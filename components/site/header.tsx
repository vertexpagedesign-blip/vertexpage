'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { PHONE_HREF } from '@/lib/site'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full overflow-x-hidden border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-2 overflow-hidden px-4">
        <Link href="/" className="shrink-0 font-display text-2xl font-bold tracking-wide" onClick={() => setOpen(false)}>
          Vertex<span className="text-accent">.</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="font-semibold text-muted transition-colors hover:text-accent">{l.label}</Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href={PHONE_HREF} className="hidden !min-h-11 items-center gap-2 rounded-lg border border-line px-3 text-sm font-semibold lg:inline-flex"><Phone size={16} /> (254) 263-0594</a>
          <a href={PHONE_HREF} aria-label="Call Arthur" className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line lg:hidden">
            <Phone size={18} />
          </a>
          <Link href="/pricing" className="btn btn-primary !min-h-11 shrink-0 !px-3 text-sm sm:!px-4 sm:text-base">Get My Website</Link>
          <button aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-bg px-5 py-4 md:hidden">
          <ul className="flex flex-col">
            {[{ href: '/', label: 'Home' }, ...links, { href: '/about', label: 'About' }, { href: '/faq', label: 'FAQ' }].map((l) => (
              <li key={l.href}><Link href={l.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-line/60 text-lg font-semibold">{l.label}</Link></li>
            ))}
          </ul>
          <Link href="/pricing" onClick={() => setOpen(false)} className="btn btn-primary mt-4 w-full">Get My Website</Link>
          <a href={PHONE_HREF} className="btn btn-ghost mt-2 w-full"><Phone size={18} /> Call (254) 263-0594</a>
        </nav>
      )}
    </header>
  )
}
