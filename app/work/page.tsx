import type { Metadata } from 'next'
import { PageHero, Section, FinalCta } from '@/components/site/bits'
import { Reveal } from '@/components/site/reveal'
import { SampleCase } from '@/components/site/sample-case'
import { Check } from 'lucide-react'

export const metadata: Metadata = { title: 'Work' }
const points = ['One clear headline that says what and where', 'Call and WhatsApp buttons within thumb reach', 'Services as a scannable grid', 'Service area stated plainly', 'Fast load, large tap targets']

export default function Work() {
  return (
    <>
      <PageHero eyebrow="Work" title="How a local site should look.">Real client work will be added here as projects go live. For now, here is a sample build.</PageHero>
      <Section>
        <div className="group card grid items-center gap-10 overflow-hidden p-6 md:grid-cols-2 md:p-12">
          <Reveal><SampleCase /></Reveal>
          <Reveal delay={120}>
            <p className="mb-3 w-fit rounded-full border border-accent/50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">Sample project · Concept</p>
            <h2 className="text-4xl font-bold md:text-5xl">Junk removal website</h2>
            <p className="mt-4 text-muted">A made-up junk removal company, built as a demo. It shows the structure every local service site needs to turn a search into a call. No real client, no reviews, no claims.</p>
            <ul className="mt-6 grid gap-3">{points.map((p) => <li key={p} className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-accent" />{p}</li>)}</ul>
          </Reveal>
        </div>
      </Section>
      <FinalCta title="Want yours next?" />
    </>
  )
}
