import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/site'
import { Reveal } from './reveal'
import { Eyebrow, Section } from './bits'

export function Testimonials() {
  if (testimonials.length === 0) return null
  return (
    <Section className="!pt-0">
      <Reveal><Eyebrow>Testimonials</Eyebrow><h2 className="text-4xl font-bold md:text-5xl">Trusted by US small businesses</h2></Reveal>
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} as="li" delay={i * 90}>
            <figure className="card card-hover flex h-full flex-col p-6">
              <Quote size={22} className="text-accent" aria-hidden />
              <blockquote className="mt-3 flex-1 text-cream">{t.quote}</blockquote>
              <figcaption className="mt-5 text-sm text-muted"><span className="font-semibold text-cream">{t.name}</span>, {t.business}, {t.city}</figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
