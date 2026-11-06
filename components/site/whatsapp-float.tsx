import { MessageCircle } from 'lucide-react'
import { QUOTE_LINK } from '@/lib/site'

export function WhatsAppFloat() {
  return (
    <a href={QUOTE_LINK} target="_blank" rel="noopener noreferrer" aria-label="Message Arthur on WhatsApp" className="fixed bottom-5 right-5 z-40 inline-flex h-14 items-center gap-2 rounded-full bg-accent px-5 font-bold text-[#04121a] shadow-[0_10px_30px_-6px_rgba(62,203,255,.6)] transition-transform hover:-translate-y-1">
      <MessageCircle size={22} /> <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
