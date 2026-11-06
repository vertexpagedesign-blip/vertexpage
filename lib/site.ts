export const PHONE_DISPLAY = '(915) 205-4012'
export const PHONE_HREF = 'tel:+19152054012'
export const INSTAGRAM = 'https://instagram.com/vertexpagedesign'
export const FACEBOOK = 'https://facebook.com/vertexpagedesign'
export const EMAIL = 'vertexpagedesign@gmail.com'

export function waLink(message: string) {
  return `https://wa.me/19152054012?text=${encodeURIComponent(message)}`
}
export const CONTACT_HREF = '/contact'
export const CALENDLY_URL = 'https://calendly.com/vertex-pagedesign/30min'

export type Testimonial = { quote: string; name: string; business: string; city: string }
// Add only real, permissioned customer testimonials here.
export const testimonials: Testimonial[] = []

export const QUOTE_LINK = waLink("Hi Arthur, I'd like a quote for a website for my business.")

export const trades = ['Plumbing', 'HVAC', 'Roofing', 'Junk removal', 'Moving', 'Electrical', 'Cleaning', 'Landscaping']

export type Plan = {
  id: 'standard' | 'premium' | 'multi'
  name: string
  price: number
  was?: number
  blurb: string
  features: string[]
}
export const plans: Plan[] = [
  { id: 'standard', name: 'Standard', price: 370, was: 600, blurb: 'One page. Built to get the call.', features: ['One-page website', 'Phone, WhatsApp, service area', 'Services, photos, clear call button', 'Mobile-first + desktop', 'One revision round', 'Delivered in 5 business days after receiving photos and business details'] },
  { id: 'premium', name: 'Premium', price: 650, blurb: 'More polish. More proof.', features: ['Everything in Standard', 'Premium layout & visual polish', 'Stronger proof / results section', 'Custom section order for the trade', 'Priority delivery option', 'Two revision rounds'] },
  { id: 'multi', name: 'Multi-page', price: 800, blurb: 'A full site for a growing company.', features: ['Up to 4 pages (Home, Services, About, Contact)', 'Premium quality throughout', 'Shared header, footer, navigation', 'Consistent mobile experience', 'Two revision rounds', 'Timeline quoted after scope is clear'] },
]
