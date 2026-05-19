# SAFE BRIDGE RMB EXCHANGE — Build Plan

A modern, premium fintech-style marketing site for an RMB exchange business serving importers paying suppliers in China. Multi-page TanStack Start app with smooth animations, full mobile responsiveness, and WhatsApp-driven conversions.

## Brand & Design System

- **Palette** (tokens in `src/styles.css`, oklch):
  - Deep dark green (primary): rich forest/emerald base
  - Off-white background, pure white surfaces
  - Near-black foreground for contrast
  - Gold accent for CTAs, highlights, dividers
- **Typography**: Inter for body, Space Grotesk (or similar) for headings — modern fintech feel
- **Motion**: Subtle fade-in/slide-up on scroll, animated counters, gradient sheen on hero, floating currency/coin badges, hover lift on cards
- **Iconography**: Lucide icons (Banknote, Wallet, Building2, Smartphone, ShieldCheck, Zap, Globe2, MessageCircle, etc.)

## Site Structure (TanStack routes)

```
src/routes/
  __root.tsx          → shared shell, fonts, meta
  index.tsx           → Home (hero, services preview, how it works, testimonials, FAQ, contact, floating WhatsApp)
  services.tsx        → Full services detail
  about.tsx           → Trust, mission, compliance
  contact.tsx         → Contact form + WhatsApp + business hours
```

Single-page-feeling home that contains all required sections, plus dedicated routes for SEO (each with unique `head()` meta).

## Reusable Components (`src/components/`)

- `SiteHeader.tsx` — sticky nav, logo, links, gold "Start Order" WhatsApp button
- `SiteFooter.tsx` — links, contact, social, copyright
- `Hero.tsx` — headline, sub, dual CTA (Start Order → WhatsApp, Learn More → /services), animated FX rate ticker mock, trust badges
- `ServicesGrid.tsx` — 5 service cards (Buy RMB, Sell RMB, Alipay Funding, WeChat Funding, Chinese Bank Transfers) each with icon + WhatsApp CTA
- `HowItWorks.tsx` — 4-step process (Contact → Quote → Pay NGN → RMB delivered) with connecting line and step numbers
- `Testimonials.tsx` — 3–4 importer testimonials with avatars/initials
- `FAQ.tsx` — shadcn Accordion, 6–8 common questions (rates, delivery time, limits, safety, refunds, supported banks)
- `ContactSection.tsx` — WhatsApp primary CTA, phone, email, business hours, location
- `WhatsAppFloat.tsx` — fixed bottom-right floating chat button, pulse animation
- `StatsBand.tsx` — animated counters (volume transacted, clients served, years, avg delivery time)

## WhatsApp Integration

Central helper `src/lib/whatsapp.ts`:
```ts
export const WHATSAPP_URL = "https://wa.me/2348165701336";
export const waLink = (msg?: string) =>
  msg ? `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}` : WHATSAPP_URL;
```
Every "Start Order", service card CTA, hero CTA, floating button, and contact CTA opens this URL in a new tab with a contextual prefilled message (e.g. "Hi, I'd like to buy RMB").

## Sections on Home (in order)

1. Sticky header with WhatsApp Start Order
2. Hero — gradient dark-green background, gold accent shapes, headline "Pay Your China Suppliers — Safely, Instantly", animated FX badge
3. Stats band (counters)
4. Services grid (5 cards)
5. How It Works (4 steps)
6. Why Choose Us (trust pillars: secure, fast, best rates, dedicated support)
7. Testimonials
8. FAQ
9. Contact / final CTA
10. Footer
11. Floating WhatsApp button

## Technical Notes

- Tailwind v4 tokens defined in `src/styles.css` (dark green, gold added as semantic tokens; never hardcode hex in components)
- Animations via existing `tw-animate-css` utilities + small custom keyframes for hero shimmer and counter
- Smooth in-page scroll via `scroll-behavior: smooth`
- Each route has unique title/description/og meta
- Mobile-first responsive; nav collapses to sheet menu on mobile
- All images: lightweight SVG/gradient backgrounds + Lucide icons; no heavy hero photo needed (keeps load fast)
- Replace placeholder `src/routes/index.tsx`

## Deliverable

A polished, fast, mobile-responsive multi-route fintech site where every conversion path leads to `https://wa.me/2348165701336`.