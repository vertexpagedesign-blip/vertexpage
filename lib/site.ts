export const PHONE_DISPLAY = '(630) 489-2712'
export const PHONE_HREF = 'tel:+16304892712'
export const SMS_HREF = 'sms:+16304892712'
export const INSTAGRAM = 'https://instagram.com/vertexpagedesign'
export const FACEBOOK = 'https://facebook.com/vertexpagedesign'
export const EMAIL = 'vertexpagedesign@gmail.com'

export function smsLink(message: string) {
  return `sms:+16304892712?&body=${encodeURIComponent(message)}`
}
export const CONTACT_HREF = '/contact'
export const CALENDLY_URL = 'https://calendly.com/vertex-pagedesign/30min'

export type Testimonial = { quote: string; name: string; business: string; city: string }
// Add only real, permissioned customer testimonials here.
export const testimonials: Testimonial[] = []

export const QUOTE_LINK = smsLink("Hi Arthur, I'd like a quote for a website for my business.")

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
  { id: 'standard', name: 'Standard', price: 497, blurb: 'One page. Built to get the call.', features: ['One-page website', 'Call button + Text button', 'Google Maps + Reviews section', 'Services, photos, service area', 'Mobile-first + desktop', 'One revision round', 'Delivered in 5 business days after receiving photos and business details'] },
  { id: 'premium', name: 'Premium', price: 997, blurb: 'More pages. More proof. More calls.', features: ['Everything in Standard', 'Up to 3 pages (Home + Services + Contact)', 'Before / After photo gallery', 'Google Business Profile setup', 'Premium layout & visual polish', 'Two revision rounds', 'Priority delivery option'] },
  { id: 'multi', name: 'Multi-page', price: 1497, blurb: 'A full site for a growing company.', features: ['Everything in Premium', 'Up to 6 pages, one per service', 'Booking form + Get a Quote form', 'Local SEO for your city', 'Premium quality throughout', 'Shared header, footer, navigation', '30 days of support after launch'] },
]
