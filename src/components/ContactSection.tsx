import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { waLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export function ContactSection() {
  return (
    <section className="bg-[var(--gradient-primary)] py-20 text-primary-foreground md:py-28">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
              Contact
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Ready to send money to <span className="text-shimmer">China?</span>
            </h2>
            <p className="mt-5 max-w-lg text-primary-foreground/75">
              Tap below to start your order on WhatsApp. Our team responds within minutes,
              7 days a week.
            </p>
            <a
              href={waLink("Hi Safe Bridge, I'd like to start an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-13 items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-7 py-3.5 text-base font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" /> Start Order on WhatsApp
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Phone, label: "WhatsApp", value: `+${WHATSAPP_NUMBER}` },
              { icon: Mail, label: "Email", value: "hello@safebridgermb.com" },
              { icon: MapPin, label: "Office", value: "Lagos, Nigeria" },
              { icon: Clock, label: "Hours", value: "Mon–Sun · 8am–10pm" },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-xs font-medium uppercase tracking-wider text-primary-foreground/60">{c.label}</div>
                <div className="mt-1 text-sm font-semibold text-primary-foreground">{c.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}