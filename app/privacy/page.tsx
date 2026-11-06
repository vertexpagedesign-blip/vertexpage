import type { Metadata } from 'next'
import { PageHero, Section } from '@/components/site/bits'
import { EMAIL } from '@/lib/site'

export const metadata: Metadata = { title: 'Privacy & Terms' }

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy & Terms" >Short and in plain English.</PageHero>
      <Section className="max-w-3xl space-y-10 text-muted">
        <div>
          <h2 className="mb-3 text-3xl font-bold text-cream">Privacy</h2>
          <ul className="grid list-disc gap-2 pl-5">
            <li>The contact form does not store your data. It opens WhatsApp with your details pre-filled. You choose whether to send.</li>
            <li>Anything you send on WhatsApp or by phone is used only to talk with you about your project.</li>
            <li>Questions? Email {EMAIL}.</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-3xl font-bold text-cream">Terms</h2>
          <ul className="grid list-disc gap-2 pl-5">
            <li>Standard builds are delivered in 5 business days after you send photos and business details.</li>
            <li>Standard includes one revision round. Premium and Multi-page include two.</li>
            <li>You provide photos and accurate business facts.</li>
            <li>Ads, logo design, and monthly SEO are not included. Extra pages are quoted separately.</li>
            <li>All prices are in USD.</li>
          </ul>
        </div>
      </Section>
    </>
  )
}
