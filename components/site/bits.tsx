import { Reveal } from './reveal'

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-accent">{children}</p>
}
export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="border-b border-line bg-[radial-gradient(60%_80%_at_80%_0%,rgba(62,203,255,.09),transparent)]">
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 md:pb-16 md:pt-20">
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h1 className="max-w-3xl text-4xl font-bold leading-[1.05] sm:text-6xl">{title}</h1></Reveal>
        {children && <Reveal delay={160}><div className="mt-5 max-w-2xl text-lg text-muted">{children}</div></Reveal>}
      </div>
    </section>
  )
}
export function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-6xl px-5 py-16 md:py-24 ${className}`}>{children}</section>
}
export function FinalCta({ title = 'Ready for more calls?' }: { title?: string }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20">
      <div className="card flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12">
        <div>
          <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
          <p className="mt-2 text-muted">Book a call, send an email, or call Arthur. Straight answer, no pressure.</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
          <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href="https://calendly.com/vertex-pagedesign/30min">Book a Free Call</a>
          <a className="btn btn-ghost" href="tel:+16304892712">Call +1 630-489-2712</a>
        </div>
      </div>
    </section>
  )
}
