import type { Metadata } from 'next'
import { PageHero, Section, FinalCta } from '@/components/site/bits'
import { PricingPlans } from '@/components/site/pricing-plans'

export const metadata: Metadata = { title: 'Pricing' }

export default function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Three plans. No surprises.">All prices in USD. Tap Preview under any plan to see it on a phone.</PageHero>
      <Section>
        <PricingPlans />
        <div className="card mt-8 p-6">
          <h2 className="text-2xl font-bold">Good to know</h2>
          <ul className="mt-3 grid gap-2 text-muted">
            <li>Extra pages beyond Multi-page are quoted separately.</li>
            <li>Ads, logo design, and monthly SEO are not included.</li>
          </ul>
        </div>
      </Section>
      <FinalCta title="Not sure which plan?" />
    </>
  )
}
