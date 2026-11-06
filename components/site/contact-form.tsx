'use client'
import { useState } from 'react'
import { waLink } from '@/lib/site'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const g = (k: string) => String(d.get(k) || '').trim()
    const msg = `Hi Arthur, I'd like a quote.\n\nName: ${g('name')}\nBusiness: ${g('business')}\nTrade: ${g('trade')}\nCity: ${g('city')}\nPhone: ${g('phone')}\nWhat I need: ${g('need')}`
    window.open(waLink(msg), '_blank', 'noopener,noreferrer')
    setSent(true)
  }
  const L = ({ id, label, children }: { id: string; label: string; children: React.ReactNode }) => (
    <div><label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</label>{children}</div>
  )
  return (
    <form onSubmit={onSubmit} className="card grid gap-4 p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <L id="name" label="Name"><input id="name" name="name" required autoComplete="name" className="field" /></L>
        <L id="business" label="Business name"><input id="business" name="business" required autoComplete="organization" className="field" /></L>
        <L id="trade" label="Trade"><input id="trade" name="trade" required placeholder="Plumbing, roofing, moving…" className="field" /></L>
        <L id="city" label="City"><input id="city" name="city" required autoComplete="address-level2" className="field" /></L>
      </div>
      <L id="phone" label="Phone"><input id="phone" name="phone" type="tel" required autoComplete="tel" className="field" /></L>
      <L id="need" label="What do you need?"><textarea id="need" name="need" required className="field" /></L>
      <button type="submit" className="btn btn-primary">Send on WhatsApp</button>
      <p className="text-sm text-muted" role="status">{sent ? 'WhatsApp should be open with your message. Tap send there to reach Arthur.' : 'This form does not store anything. It opens WhatsApp with your details filled in.'}</p>
    </form>
  )
}
