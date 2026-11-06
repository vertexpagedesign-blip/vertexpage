'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Mail } from 'lucide-react'
import { EMAIL, plans } from '@/lib/site'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const planId = useSearchParams().get('plan')
  const plan = plans.find((p) => p.id === planId)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const g = (k: string) => String(d.get(k) || '').trim()
    const body = `Name: ${g('name')}\nEmail: ${g('email')}\nBusiness type: ${g('type')}\n${plan ? `Plan: ${plan.name} ($${plan.price})\n` : ''}\n${g('message')}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Website inquiry from ${g('name')}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  const L = ({ id, label, children }: { id: string; label: string; children: React.ReactNode }) => (
    <div><label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</label>{children}</div>
  )
  return (
    <form onSubmit={onSubmit} className="card grid gap-4 p-6 md:p-8">
      {plan && <p className="rounded-lg border border-accent/40 px-4 py-3 text-sm">Plan selected: <span className="font-semibold text-accent">{plan.name} (${plan.price})</span></p>}
      <div className="grid gap-4 sm:grid-cols-2">
        <L id="name" label="Name"><input id="name" name="name" required autoComplete="name" className="field" /></L>
        <L id="email" label="Email"><input id="email" name="email" type="email" required autoComplete="email" className="field" /></L>
      </div>
      <L id="type" label="Business type"><input id="type" name="type" required placeholder="Plumbing, roofing, moving…" className="field" /></L>
      <L id="message" label="Message"><textarea id="message" name="message" required className="field" /></L>
      <button type="submit" className="btn btn-ghost"><Mail size={18} /> Send Email</button>
      <p className="text-sm text-muted" role="status">{sent ? 'Your email app should be open with your message. Hit send there to reach Arthur.' : 'This form does not store anything. It opens your email app with your details filled in.'}</p>
    </form>
  )
}
