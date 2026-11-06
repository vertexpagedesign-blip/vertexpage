'use client'
import { useEffect, useState } from 'react'
import { Phone, MessageCircle, Star, Clock, ShieldCheck, MapPin, Trash2, Sofa, Home, Truck, Leaf, Hammer, Flame, Snowflake, Wind, Thermometer, ArrowRight, CheckCircle2, Menu, Check } from 'lucide-react'

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-[280px] rounded-[42px] border border-[#2c3546] bg-[#05070b] p-2.5 shadow-[0_30px_70px_-20px_rgba(62,203,255,.3)]">
      <div className="relative h-[540px] overflow-hidden rounded-[33px] bg-white">
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  )
}

const btn = 'flex items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-[12px] font-bold'

/* STANDARD: Haul Right Junk Removal — light, orange */
export function StandardScreen() {
  const A = '#ea580c'
  const svc = [{ n: 'Furniture', i: Sofa }, { n: 'Garage cleanout', i: Home }, { n: 'Yard waste', i: Leaf }, { n: 'Appliances', i: Trash2 }, { n: 'Moving debris', i: Truck }, { n: 'Construction', i: Hammer }]
  return (
    <div className="h-full bg-[#fff7ed] text-[#1c1917]">
      <div className="scroll-anim">
        <div className="flex items-center justify-between px-4 pb-2 pt-9">
          <p className="font-display text-[15px] font-bold" style={{ color: A }}>Haul Right</p>
          <span className="grid h-7 w-7 place-items-center rounded-full text-white" style={{ background: A }}><Phone size={13} /></span>
        </div>
        <div className="px-4 pb-6 pt-3">
          <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: A }}>Junk removal · Naperville, IL</p>
          <p className="font-display mt-2 text-[34px] font-bold leading-[0.95]">We haul it. <span style={{ color: A }}>You relax.</span></p>
          <p className="mt-2 text-[11px] text-[#57534e]">Free estimates. Same-day pickup. Upfront pricing.</p>
          <div className="mt-4 grid gap-2">
            <div className={`${btn} text-white`} style={{ background: A }}><Phone size={13} /> Call (555) 010-0142</div>
            <div className={`${btn} border border-[#d6d3d1] bg-white`}><MessageCircle size={13} /> Text us photos</div>
          </div>
        </div>
        <div className="mx-4 grid h-24 place-items-center rounded-xl bg-[#1c1917] text-center text-white">
          <div><p className="font-display text-xl" style={{ color: '#fdba74' }}>Free estimate</p><p className="text-[10px] text-stone-300">Send a photo. Get a price.</p></div>
        </div>
        <p className="font-display mt-6 px-4 text-xl font-bold">What we take</p>
        <div className="mt-2 grid grid-cols-2 gap-2 px-4">
          {svc.map(({ n, i: I }) => <div key={n} className="rounded-xl bg-white p-3 shadow-sm"><I size={16} style={{ color: A }} /><p className="mt-2 text-[11px] font-bold">{n}</p></div>)}
        </div>
        <p className="font-display mt-6 px-4 text-xl font-bold">How it works</p>
        <div className="mt-2 grid gap-2 px-4">
          {['Call or text', 'Get a flat quote', 'We haul it away'].map((s, i) => <div key={s} className="flex items-center gap-3 rounded-xl bg-white p-3 text-[11px] font-bold shadow-sm"><span className="grid h-6 w-6 place-items-center rounded-full text-[11px] text-white" style={{ background: A }}>{i + 1}</span>{s}</div>)}
        </div>
        <div className="mx-4 mt-6 rounded-xl p-4 text-white" style={{ background: A }}>
          <p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest"><MapPin size={11} /> Service area</p>
          <p className="mt-1 text-[12px] font-semibold">Naperville · Aurora · Wheaton · Lisle · Plainfield</p>
          <div className="mt-3 rounded-lg bg-white py-2.5 text-center text-[12px] font-bold" style={{ color: A }}>Call now</div>
        </div>
        <div className="h-24" />
      </div>
    </div>
  )
}

/* PREMIUM: Northwind Heating & Air — dark, emerald */
export function PremiumScreen() {
  const A = '#34d399'
  const svc = [{ n: 'AC repair & install', i: Snowflake }, { n: 'Furnace & heating', i: Flame }, { n: 'Air quality', i: Wind }, { n: 'Maintenance plans', i: Thermometer }]
  return (
    <div className="h-full bg-[#06100c] text-[#ecfdf5]">
      <div className="scroll-anim">
        <div className="flex items-center justify-between px-4 pb-2 pt-9">
          <p className="font-display text-[15px] font-bold">Northwind<span style={{ color: A }}>.</span></p>
          <Menu size={18} />
        </div>
        <div className="relative overflow-hidden px-4 pb-6 pt-4">
          <div className="pointer-events-none absolute -right-16 -top-10 h-48 w-48 rounded-full opacity-30 blur-3xl" style={{ background: A }} />
          <span className="relative inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest" style={{ borderColor: `${A}66`, color: A }}><span className="h-1.5 w-1.5 rounded-full" style={{ background: A }} /> Emergency service 24/7</span>
          <p className="font-display relative mt-3 text-[36px] font-bold leading-[0.95]">Heating &amp; air that <span style={{ color: A }}>just works.</span></p>
          <p className="relative mt-2 text-[11px] text-emerald-100/70">Licensed techs serving Aurora and the Fox Valley.</p>
          <div className="relative mt-4 grid gap-2">
            <div className={`${btn} text-[#04120c]`} style={{ background: A }}><Phone size={13} /> Call (555) 010-0187</div>
            <div className={`${btn} border border-emerald-900 bg-emerald-950/60`}><MessageCircle size={13} /> WhatsApp us</div>
          </div>
        </div>
        <div className="mx-4 grid grid-cols-3 divide-x divide-emerald-900 rounded-xl border border-emerald-900 bg-emerald-950/50 py-3 text-center">
          {[{ v: '4.9', l: 'Rating', i: Star }, { v: '12 yrs', l: 'In business', i: ShieldCheck }, { v: '24/7', l: 'Dispatch', i: Clock }].map(({ v, l, i: I }) => (
            <div key={l}><I size={13} className="mx-auto" style={{ color: A }} /><p className="font-display mt-1 text-lg font-bold leading-none">{v}</p><p className="text-[9px] text-emerald-100/60">{l}</p></div>
          ))}
        </div>
        <p className="font-display mt-6 px-4 text-xl font-bold">Services</p>
        <div className="mt-2 grid gap-2 px-4">
          {svc.map(({ n, i: I }) => <div key={n} className="flex items-center gap-3 rounded-xl border border-emerald-900 bg-emerald-950/40 p-3 text-[12px] font-semibold"><span className="grid h-8 w-8 place-items-center rounded-lg" style={{ background: `${A}22`, color: A }}><I size={15} /></span><span className="flex-1">{n}</span><ArrowRight size={13} style={{ color: A }} /></div>)}
        </div>
        <p className="font-display mt-6 px-4 text-xl font-bold">Recent results</p>
        <div className="mt-2 grid grid-cols-2 gap-2 px-4">
          {[{ t: 'AC replaced', s: 'Same day' }, { t: 'Furnace fixed', s: '2 hours' }].map((r) => <div key={r.t} className="rounded-xl border border-emerald-900 bg-gradient-to-b from-emerald-900/40 to-transparent p-3"><CheckCircle2 size={15} style={{ color: A }} /><p className="mt-2 text-[12px] font-bold">{r.t}</p><p className="text-[10px] text-emerald-100/60">{r.s}</p></div>)}
        </div>
        <div className="mx-4 mt-6 rounded-xl p-4 text-[#04120c]" style={{ background: A }}>
          <p className="font-display text-2xl font-bold leading-none">No heat? No cool?</p>
          <p className="mt-1 text-[11px] font-semibold">We answer 24/7.</p>
          <div className="mt-3 rounded-lg bg-[#04120c] py-2.5 text-center text-[12px] font-bold" style={{ color: A }}>Call now</div>
        </div>
        <div className="h-24" />
      </div>
    </div>
  )
}

/* MULTI-PAGE: Cornerstone Roofing — navy + red, 3 pages */
const pages = ['Home', 'Services', 'Contact']
export function MultiScreen() {
  const [p, setP] = useState(0)
  useEffect(() => { const t = setInterval(() => setP((x) => (x + 1) % 3), 3000); return () => clearInterval(t) }, [])
  const R = '#dc2626'
  const Header = ({ i }: { i: number }) => (
    <div className="bg-[#0f1b33] px-4 pb-2.5 pt-9 text-white">
      <p className="font-display text-[15px] font-bold">Cornerstone <span style={{ color: '#f87171' }}>Roofing</span></p>
      <div className="mt-2 flex gap-4 text-[10px] font-bold">
        {pages.map((n, k) => <span key={n} className={k === i ? 'border-b-2 pb-0.5' : 'text-slate-400'} style={k === i ? { borderColor: '#f87171' } : undefined}>{n}</span>)}
      </div>
    </div>
  )
  const roof = [{ n: 'Roof replacement', i: Home }, { n: 'Leak repair', i: Hammer }, { n: 'Storm damage', i: Wind }, { n: 'Free inspection', i: ShieldCheck }]
  return (
    <div className="relative h-full bg-[#f8fafc] text-slate-900">
      <div className="flex h-full transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)]" style={{ transform: `translateX(-${p * 100}%)` }}>
        <div className="h-full w-full shrink-0 overflow-hidden">
          <Header i={0} />
          <div className="bg-[#0f1b33] px-4 pb-6 pt-4 text-white">
            <p className="text-[9px] font-bold uppercase tracking-widest text-red-300">Roofing · Plainfield, IL</p>
            <p className="font-display mt-2 text-[34px] font-bold leading-[0.95]">A roof built to last.</p>
            <p className="mt-2 text-[11px] text-slate-300">Repairs and replacements. Free inspections.</p>
            <div className={`${btn} mt-4 text-white`} style={{ background: R }}><Phone size={13} /> Call (555) 010-0233</div>
          </div>
          <div className="grid grid-cols-2 gap-2 p-4">
            {['Licensed', 'Insured', 'Free quotes', 'Local crew'].map((x) => <div key={x} className="flex items-center gap-1.5 rounded-lg bg-white p-2.5 text-[11px] font-bold shadow-sm"><Check size={13} style={{ color: R }} />{x}</div>)}
          </div>
          <div className="mx-4 rounded-xl bg-white p-4 shadow-sm"><p className="font-display text-lg font-bold">Storm damage?</p><p className="text-[11px] text-slate-600">We respond fast and handle the details.</p></div>
        </div>
        <div className="h-full w-full shrink-0 overflow-hidden">
          <Header i={1} />
          <div className="p-4">
            <p className="font-display text-2xl font-bold">Our services</p>
            <div className="mt-3 grid gap-2">
              {roof.map(({ n, i: I }) => <div key={n} className="flex items-center gap-3 rounded-xl bg-white p-3 text-[12px] font-bold shadow-sm"><span className="grid h-8 w-8 place-items-center rounded-lg bg-red-50" style={{ color: R }}><I size={15} /></span><span className="flex-1">{n}</span><ArrowRight size={13} className="text-slate-400" /></div>)}
            </div>
            <div className={`${btn} mt-4 text-white`} style={{ background: R }}>Get a free inspection</div>
          </div>
        </div>
        <div className="h-full w-full shrink-0 overflow-hidden">
          <Header i={2} />
          <div className="p-4">
            <p className="font-display text-2xl font-bold">Contact us</p>
            <p className="mt-1 text-[11px] text-slate-600">Tell us what you need. We call back fast.</p>
            <div className="mt-3 grid gap-2">
              {['Name', 'Phone', 'What do you need?'].map((f) => <div key={f} className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-[11px] text-slate-400">{f}</div>)}
              <div className={`${btn} text-white`} style={{ background: R }}>Send request</div>
            </div>
            <div className="mt-4 grid gap-1.5 text-[11px] font-semibold"><p className="flex items-center gap-2"><Phone size={13} style={{ color: R }} /> (555) 010-0233</p><p className="flex items-center gap-2"><MapPin size={13} style={{ color: R }} /> Plainfield &amp; nearby</p></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {pages.map((n, i) => <span key={n} className={`h-1.5 rounded-full transition-all ${i === p ? 'w-6' : 'w-1.5 bg-slate-300'}`} style={i === p ? { background: R } : undefined} />)}
      </div>
    </div>
  )
}
export const screens = { standard: StandardScreen, premium: PremiumScreen, multi: MultiScreen }
export const sampleCompany = { standard: 'Haul Right Junk Removal', premium: 'Northwind Heating & Air', multi: 'Cornerstone Roofing' }
