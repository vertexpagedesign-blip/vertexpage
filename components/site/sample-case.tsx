import { PhoneFrame } from './phone'
import { Phone, MessageCircle, Truck, Trash2, Sofa, Home } from 'lucide-react'

const items = [{ n: 'Furniture removal', i: Sofa }, { n: 'Garage cleanout', i: Home }, { n: 'Yard waste', i: Trash2 }, { n: 'Same-day pickup', i: Truck }]
export function SampleCase() {
  return (
    <PhoneFrame>
      <div className="h-full overflow-hidden bg-[#0b0f17] px-4 pt-10 transition-transform duration-700 group-hover:-translate-y-6">
        <p className="text-[9px] font-bold uppercase tracking-widest text-accent">Junk Removal · Your City</p>
        <p className="font-display mt-2 text-[28px] font-bold leading-none text-cream">We haul it. You relax.</p>
        <div className="mt-3 grid gap-1.5">
          <div className="flex items-center justify-center gap-1 rounded-md bg-accent px-3 py-2 text-[11px] font-bold text-[#04121a]"><Phone size={11} /> Call for a free estimate</div>
          <div className="flex items-center justify-center gap-1 rounded-md border border-[#2c3546] px-3 py-2 text-[11px] font-bold text-cream"><MessageCircle size={11} /> Text photos</div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {items.map(({ n, i: I }) => <div key={n} className="rounded-lg border border-[#232a38] bg-[#10141c] p-2.5"><I size={14} className="text-accent" /><p className="mt-1.5 text-[10px] font-semibold text-cream">{n}</p></div>)}
        </div>
        <div className="mt-4 rounded-lg border border-accent/40 p-3 text-center text-[10px] text-cream">Serving your whole service area</div>
      </div>
    </PhoneFrame>
  )
}
