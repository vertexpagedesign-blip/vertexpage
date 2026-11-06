import type { Metadata } from 'next'
import { PageHero, Section, FinalCta } from '@/components/site/bits'

export const metadata: Metadata = { title: 'About' }

export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Hi, I'm Arthur." />
      <Section className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted">
        <p>I&apos;m Arthur Henrique, a conversion specialist. I build simple websites for local service businesses across the United States.</p>
        <p>Plumbers, roofers, movers, junk haulers. You live on your phone. Your customers do too. They search, they tap, they call the first company that looks real.</p>
        <p>So I build sites that load fast, read clearly, and put a call button where a thumb can reach it. No bloat. No jargon.</p>
        <p className="text-cream">There is no big team and no office. You talk to me, and I build your site.</p>
      </Section>
      <FinalCta title="Talk to me directly." />
    </>
  )
}
