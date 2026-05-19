import { Star, Quote } from "lucide-react";

const items = [
  {
    name: "Chinedu O.",
    role: "Electronics Importer, Alaba",
    text: "I've used Safe Bridge for over a year. Rates are unbeatable and my Alipay top-ups land in minutes. They saved me from two bad scam exchangers.",
  },
  {
    name: "Fatima B.",
    role: "Fashion Brand Owner, Abuja",
    text: "Sending money to my Guangzhou supplier used to take days. Now it's same-day, every time. The team is professional and patient.",
  },
  {
    name: "Tunde A.",
    role: "Auto Parts, Ladipo",
    text: "Best RMB rates in Lagos, hands down. Their WhatsApp support is fast and they always honour the quoted price. Highly recommended.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            Testimonials
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What importers are saying
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <div key={t.name} className="relative rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-gold/30" />
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gradient-primary)] text-sm font-bold text-gold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}