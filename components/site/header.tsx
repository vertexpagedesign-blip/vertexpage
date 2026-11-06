'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { PHONE_HREF, QUOTE_LINK } from '@/lib/site'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="font-display text-2xl font-bold tracking-wide" onClick={() => setOpen(false)}>
          Vertex<span className="text-accent">.</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="font-semibold text-muted transition-colors hover:text-accent">{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={PHONE_HREF} className="btn btn-ghost hidden !min-h-11 lg:inline-flex"><Phone size={16} /> 630-489-2712</a>
          <a href={QUOTE_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-11 !px-4 text-sm sm:text-base">Book a Free Call</a>
          <button aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-lg border border-line md:hidden">
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
          <a href={PHONE_HREF} className="btn btn-ghost mt-4 w-full"><Phone size={18} /> Call +1 630-489-2712</a>
        </nav>
      )}
    </header>
  )
}
