'use client'
import { useEffect, useState } from 'react'
import { Phone, MessageCircle, Wrench, Droplets, Flame, ShieldCheck, Clock, Star } from 'lucide-react'

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-[250px] rounded-[38px] border border-[#2c3546] bg-[#05070b] p-2.5 shadow-[0_30px_60px_-20px_rgba(62,203,255,.25)]">
      <div className="relative h-[460px] overflow-hidden rounded-[30px] bg-[#0b0f17]">
        <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  )
}

const mini = 'rounded-md bg-accent px-3 py-2 text-center text-[11px] font-bold text-[#04121a]'
const services = [{ n: 'Drain cleaning', i: Droplets }, { n: 'Water heaters', i: Flame }, { n: 'Repairs', i: Wrench }, { n: 'Emergency', i: Clock }]

function Hero({ rich = false }: { rich?: boolean }) {
  return (
    <div className="px-4 pb-5 pt-10">
      <p className="text-[9px] font-bold uppercase tracking-widest text-accent">Your City · Licensed &amp; insured</p>
      <p className="font-display mt-2 text-[28px] font-bold leading-[1] text-cream">{rich ? 'Fast, honest plumbing. Call now.' : 'Plumber in Your City'}</p>
      <p className="mt-2 text-[10px] text-muted">Same-day service across your area.</p>
      <div className="mt-3 grid gap-1.5">
        <div className={`${mini} flex items-center justify-center gap-1`}><Phone size={11} /> Call now</div>
        <div className="flex items-center justify-center gap-1 rounded-md border border-[#2c3546] px-3 py-2 text-[11px] font-bold text-cream"><MessageCircle size={11} /> WhatsApp</div>
      </div>
    </div>
  )
}
function Grid() {
  return (
    <div className="grid grid-cols-2 gap-2 px-4">
      {services.map(({ n, i: I }) => (
        <div key={n} className="rounded-lg border border-[#232a38] bg-[#10141c] p-2.5"><I size={14} className="text-accent" /><p className="mt-1.5 text-[10px] font-semibold text-cream">{n}</p></div>
      ))}
    </div>
  )
}
function CtaBlock() {
  return <div className="m-4 rounded-lg border border-accent/40 p-3 text-center"><p className="font-display text-lg text-cream">Need it fixed today?</p><div className={`${mini} mt-2`}>Call or WhatsApp</div></div>
}

export function StandardScreen() {
  return <div className="scroll-anim"><Hero /><Grid /><CtaBlock /><div className="h-24" /></div>
}
export function PremiumScreen() {
  return (
    <div className="scroll-anim">
      <Hero rich />
      <div className="mx-4 grid grid-cols-3 gap-1.5">
        {[{ i: Star, t: 'Your rating' }, { i: ShieldCheck, t: 'Years in business' }, { i: Clock, t: '24/7 calls' }].map(({ i: I, t }) => (
          <div key={t} className="rounded-lg border border-accent/30 bg-[#10141c] p-2 text-center"><I size={13} className="mx-auto text-accent" /><p className="mt-1 text-[8px] font-semibold leading-tight text-cream">{t}</p></div>
        ))}
      </div>
      <p className="font-display mt-4 px-4 text-sm text-accent">What we fix</p>
      <div className="mt-1.5 grid gap-1.5 px-4">
        {services.map(({ n, i: I }) => <div key={n} className="flex items-center gap-2 rounded-lg border border-[#232a38] bg-[#10141c] p-2.5 text-[10px] font-semibold text-cream"><I size={13} className="text-accent" />{n}</div>)}
      </div>
      <CtaBlock /><div className="h-24" />
    </div>
  )
}
const pages = ['Home', 'Services', 'Contact']
export function MultiScreen() {
  const [p, setP] = useState(0)
  useEffect(() => { const t = setInterval(() => setP((x) => (x + 1) % 3), 2600); return () => clearInterval(t) }, [])
  return (
    <div className="relative h-full">
      <div className="flex h-full transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)]" style={{ transform: `translateX(-${p * 100}%)` }}>
        <div className="h-full w-full shrink-0 overflow-hidden"><Hero rich /><Grid /></div>
        <div className="h-full w-full shrink-0 overflow-hidden px-4 pt-10">
          <p className="font-display text-2xl text-cream">Services</p>
          <div className="mt-3 grid gap-2">{services.map(({ n, i: I }) => <div key={n} className="flex items-center gap-2 rounded-lg border border-[#232a38] bg-[#10141c] p-3 text-[11px] font-semibold text-cream"><I size={14} className="text-accent" />{n}</div>)}</div>
        </div>
        <div className="h-full w-full shrink-0 overflow-hidden px-4 pt-10">
          <p className="font-display text-2xl text-cream">Contact</p>
          <p className="mt-2 text-[10px] text-muted">Tell us what you need. We call back fast.</p>
          <div className="mt-3 grid gap-2">{['Name', 'Phone', 'What do you need?'].map((f) => <div key={f} className="rounded-md border border-[#2c3546] px-3 py-2.5 text-[10px] text-muted">{f}</div>)}<div className={mini}>Send</div></div>
        </div>
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center gap-1.5">
        <p className="text-[9px] font-bold uppercase tracking-widest text-accent">{pages[p]}</p>
        <div className="flex gap-1.5">{pages.map((n, i) => <span key={n} className={`h-1.5 rounded-full transition-all ${i === p ? 'w-5 bg-accent' : 'w-1.5 bg-[#2c3546]'}`} />)}</div>
      </div>
    </div>
  )
}
export const screens = { standard: StandardScreen, premium: PremiumScreen, multi: MultiScreen }
