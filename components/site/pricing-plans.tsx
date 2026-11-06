'use client'
import { useEffect, useRef, useState } from 'react'
import { Check, X, Eye } from 'lucide-react'
import { plans, waLink, type Plan } from '@/lib/site'
import { PhoneFrame, screens, sampleCompany } from './phone'
import { Reveal } from './reveal'

const desc = { standard: 'Simple one-page site: hero, services grid, and a clear call/WhatsApp button.', premium: 'Richer hero, proof strip, service list, and stronger visual hierarchy.', multi: 'Home, Services, and Contact slide in as separate pages with shared navigation.' }

function PreviewModal({ plan, onClose }: { plan: Plan; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const Screen = screens[plan.id]
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={`${plan.name} plan preview`} onClick={(e) => e.stopPropagation()} className="modal-in relative max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-line bg-surface p-6 md:p-8">
        <button ref={closeRef} onClick={onClose} aria-label="Close preview" className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-lg border border-line hover:border-accent hover:text-accent"><X size={20} /></button>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <PhoneFrame><Screen /></PhoneFrame>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">{plan.name} preview</p>
            <h3 className="mt-2 text-4xl font-bold">${plan.price}</h3>
            <p className="mt-3 text-muted">{desc[plan.id]}</p>
            <p className="mt-4 rounded-lg border border-line bg-bg/60 p-3 text-sm text-muted"><span className="font-semibold text-cream">{sampleCompany[plan.id]}</span> is a fictional company. Your site uses your name, photos, colors, and service area.</p>
            <a href={waLink(`Hi Arthur, I want the ${plan.name} plan ($${plan.price}) for my business.`)} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6 w-full">Get this plan</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PricingPlans() {
  const [active, setActive] = useState<Plan | null>(null)
  return (
    <>
      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((p, i) => (
          <Reveal key={p.id} delay={i * 100}>
            <div className={`card card-hover flex h-full flex-col p-7 ${p.id === 'standard' ? 'border-accent/60' : ''}`}>
              {p.id === 'standard' && <span className="mb-3 w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold text-[#04121a]">Save $230</span>}
              <h3 className="text-3xl font-bold">{p.name}</h3>
              <p className="mt-1 text-muted">{p.blurb}</p>
              <p className="mt-5 flex items-baseline gap-3">
                <span className="font-display text-6xl font-bold text-accent">${p.price}</span>
                {p.was && <span className="text-xl text-muted line-through" aria-label={`Was $${p.was}`}>${p.was}</span>}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {p.features.map((f) => <li key={f} className="flex gap-3 text-[15px]"><Check size={18} className="mt-0.5 shrink-0 text-accent" />{f}</li>)}
              </ul>
              <a href={waLink(`Hi Arthur, I want the ${p.name} plan ($${p.price}) for my business.`)} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-7">Book a Free Call</a>
              <button onClick={() => setActive(p)} className="btn btn-ghost mt-3"><Eye size={18} /> Preview</button>
            </div>
          </Reveal>
        ))}
      </div>
      {active && <PreviewModal plan={active} onClose={() => setActive(null)} />}
    </>
  )
}
