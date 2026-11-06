import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { QUOTE_LINK, PHONE_HREF, trades, plans } from '@/lib/site'
import { Reveal } from '@/components/site/reveal'
import { Eyebrow, Section, FinalCta } from '@/components/site/bits'
import { SampleCase } from '@/components/site/sample-case'

const steps = [
  { t: 'Message Arthur', d: 'Send your trade, city, and what you need on WhatsApp.' },
  { t: 'Send photos and facts', d: 'Your services, service area, and a few real photos.' },
  { t: 'Arthur builds it', d: 'Standard sites go live in 5 business days after he has your photos and details.' },
  { t: 'Start getting calls', d: 'A fast phone-first site with a clear call button.' },
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-[radial-gradient(60%_70%_at_85%_0%,rgba(62,203,255,.12),transparent)]">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 md:pb-24 md:pt-24">
          <Reveal><Eyebrow>Websites for local service businesses</Eyebrow></Reveal>
          <Reveal delay={80}><h1 className="max-w-4xl text-5xl font-bold leading-[1.02] sm:text-7xl">Local websites that turn Google searches into <span className="text-accent">phone calls.</span></h1></Reveal>
          <Reveal delay={160}><p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">One-page and multi-page sites for local service companies. Built to work on a phone. Built to get the phone to ring.</p></Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={QUOTE_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a Free Call <ArrowRight size={18} /></a>
              <Link href="/work" className="btn btn-ghost">See work</Link>
              <Link href="/pricing" className="btn btn-ghost">See pricing</Link>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold uppercase tracking-widest text-muted">
              {['Mobile-first', 'Live in 5 business days', 'Built to get calls'].map((x, i) => <li key={x} className="flex items-center gap-2">{i > 0 && <span className="hidden text-accent sm:inline">·</span>}{x}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal><Eyebrow>How it works</Eyebrow><h2 className="text-4xl font-bold md:text-5xl">Four steps. No meetings.</h2></Reveal>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.t} as="li" delay={i * 90}>
              <div className="card card-hover h-full p-6">
                <span className="font-display text-5xl font-bold text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-muted">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="!pt-0">
        <Reveal><Eyebrow>Trades</Eyebrow><h2 className="text-4xl font-bold md:text-5xl">Built for the trades.</h2></Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {trades.map((t, i) => (
            <Reveal key={t} as="li" delay={i * 50}><div className="card card-hover flex min-h-20 items-center px-5 font-display text-xl font-semibold">{t}</div></Reveal>
          ))}
        </ul>
        <p className="mt-4 text-muted">Another trade? Message Arthur. Similar local service businesses work too.</p>
      </Section>

      <Section className="!pt-0">
        <div className="group card grid items-center gap-10 overflow-hidden p-6 md:grid-cols-2 md:p-12">
          <Reveal>
            <Eyebrow>Featured sample</Eyebrow>
            <h2 className="text-4xl font-bold md:text-5xl">Junk removal, one page.</h2>
            <p className="mt-4 text-muted">A sample build showing how a local hauler&apos;s site works: one headline, one call button, services, and service area. A concept, not a client.</p>
            <Link href="/work" className="btn btn-primary mt-6">See the work <ArrowRight size={18} /></Link>
          </Reveal>
          <Reveal delay={120}><SampleCase /></Reveal>
        </div>
      </Section>

      <Section className="!pt-0">
        <Reveal><Eyebrow>Pricing</Eyebrow><h2 className="text-4xl font-bold md:text-5xl">Clear prices. One-time.</h2></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <Link href="/pricing" className="card card-hover block h-full p-6">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mt-3 flex items-baseline gap-3"><span className="font-display text-5xl font-bold text-accent">${p.price}</span>{p.was && <span className="text-muted line-through">${p.was}</span>}</p>
                <p className="mt-3 flex gap-2 text-muted"><Check size={18} className="mt-0.5 shrink-0 text-accent" />{p.blurb}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Link href="/pricing" className="btn btn-ghost mt-6">Compare plans &amp; preview</Link>
      </Section>

      <FinalCta title="Let's build your site." />
      <span className="sr-only"><a href={PHONE_HREF}>Call</a></span>
    </>
  )
}
