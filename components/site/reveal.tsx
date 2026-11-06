'use client'
import { useEffect, useRef } from 'react'

export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: { children: React.ReactNode; delay?: number; className?: string; as?: 'div' | 'li' | 'section' }) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const T = Tag as 'div'
  return <T ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${className}`} style={{ ['--d' as string]: `${delay}ms` }}>{children}</T>
}
