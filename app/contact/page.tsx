import type { Metadata } from 'next'
import { Phone, MessageCircle, Camera, Share2 } from 'lucide-react'
import { PageHero, Section } from '@/components/site/bits'
import { ContactForm } from '@/components/site/contact-form'
import { PHONE_HREF, PHONE_DISPLAY, QUOTE_LINK, INSTAGRAM, FACEBOOK } from '@/lib/site'

export const metadata: Metadata = { title: 'Contact' }

export default function Contact() {
  const row = 'card card-hover flex min-h-16 items-center gap-4 px-5 font-semibold'
  return (
    <>
      <PageHero eyebrow="Contact" title="Book a Free Call.">Fill in the form. It opens WhatsApp with your details ready to send. Or just call.</PageHero>
      <Section className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <ContactForm />
        <div className="grid content-start gap-3">
          <a href={PHONE_HREF} className={row}><Phone className="text-accent" /> Call {PHONE_DISPLAY}</a>
          <a href={QUOTE_LINK} target="_blank" rel="noopener noreferrer" className={row}><MessageCircle className="text-accent" /> WhatsApp Arthur</a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className={row}><Camera className="text-accent" /> Instagram</a>
          <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className={row}><Share2 className="text-accent" /> Facebook</a>
        </div>
      </Section>
    </>
  )
}
