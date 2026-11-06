import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Phone, MessageCircle, Camera, Share2, CalendarCheck } from 'lucide-react'
import { PageHero, Section } from '@/components/site/bits'
import { ContactForm } from '@/components/site/contact-form'
import { PHONE_HREF, PHONE_DISPLAY, QUOTE_LINK, INSTAGRAM, FACEBOOK, CALENDLY_URL } from '@/lib/site'

export const metadata: Metadata = { title: 'Contact' }

export default function Contact() {
  const row = 'card card-hover flex min-h-16 items-center gap-4 px-5 font-semibold'
  return (
    <>
      <PageHero eyebrow="Contact" title="Book a free call.">Pick a time that works. Or send a message and Arthur replies fast.</PageHero>
      <Section className="!pb-0">
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-[68px] w-full !text-lg md:!text-xl"><CalendarCheck size={22} /> Book a Free Call on Calendly</a>
      </Section>
      <Section className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <Suspense><ContactForm /></Suspense>
        <div className="grid content-start gap-3">
          <a href={PHONE_HREF} className={row}><Phone className="text-accent" /> Call {PHONE_DISPLAY}</a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className={row}><Camera className="text-accent" /> Instagram</a>
          <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className={row}><Share2 className="text-accent" /> Facebook</a>
          <a href={QUOTE_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-accent"><MessageCircle size={16} /> Prefer WhatsApp? Message Arthur there.</a>
        </div>
      </Section>
    </>
  )
}
