import { MessageCircle, Calculator, CreditCard, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Contact Us", desc: "Send us a WhatsApp message with your order details." },
  { icon: Calculator, title: "Get a Quote", desc: "Receive today's best rate and a clear invoice in seconds." },
  { icon: CreditCard, title: "Pay in Naira", desc: "Transfer the Naira equivalent to our verified account." },
  { icon: CheckCircle2, title: "RMB Delivered", desc: "Your supplier receives the RMB same day, every time." },
];

export function HowItWorks() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-foreground">
            How It Works
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Four steps. Zero stress.
          </h2>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--gradient-primary)] text-gold shadow-[var(--shadow-elegant)]">
                <s.icon className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-gold-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}