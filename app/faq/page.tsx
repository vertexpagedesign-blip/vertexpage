import type { Metadata } from 'next'
import { PageHero, Section, FinalCta } from '@/components/site/bits'

export const metadata: Metadata = { title: 'FAQ' }
const faqs = [
  ['How fast?', 'Standard sites are delivered in 5 business days after I receive your photos and business details. Multi-page timelines are quoted once the scope is clear.'],
  ['Do I need to write the text?', 'No. Send me your services, service area, and a few facts about your business. I write clear, short copy for you.'],
  ['Will it work on iPhone and Android?', 'Yes. Every site is built mobile-first and works on iPhone, Android, tablets, and desktop.'],
  ['Can you update it later?', 'Yes. Message me when you need changes. Revision rounds are included per plan. Later updates are quoted simply.'],
  ['What if I already have a website?', 'Send me the link. I can rebuild it cleaner and faster, or build a focused page that gets more calls.'],
]
export default function FAQ() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Quick answers." />
      <Section className="max-w-3xl">
        <div className="grid gap-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="card group p-5 open:border-accent/50">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold uppercase">{q}<span className="text-2xl text-accent transition-transform group-open:rotate-45" aria-hidden>+</span></summary>
              <p className="mt-2 text-muted">{a}</p>
            </details>
          ))}
        </div>
      </Section>
      <FinalCta title="Still have a question?" />
    </>
  )
}
