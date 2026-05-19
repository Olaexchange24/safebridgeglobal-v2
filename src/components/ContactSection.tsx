import { MessageCircle, Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

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
              { icon: Phone, label: "WhatsApp / Call", value: "+2348165701336" },
              { icon: Mail, label: "Email", value: "safebridgermb@gmail.com" },
              { icon: MapPin, label: "Office", value: "Ojodu Berger, Lagos, Nigeria" },
              { icon: Clock, label: "Hours", value: "Open 24/7" },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-xs font-medium uppercase tracking-wider text-primary-foreground/60">{c.label}</div>
                <div className="mt-1 text-sm font-semibold text-primary-foreground break-words">{c.value}</div>
              </div>
            ))}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:col-span-2">
              <div className="text-xs font-medium uppercase tracking-wider text-primary-foreground/60">Follow Us</div>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href="https://instagram.com/safebridge_rmb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/20 hover:text-gold"
                >
                  <Instagram className="h-4 w-4" /> @safebridge_rmb
                </a>
                <a
                  href="https://tiktok.com/@safebridge_rmb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/20 hover:text-gold"
                  aria-label="TikTok"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M19.6 6.3a5.3 5.3 0 0 1-3.2-1.1 5.3 5.3 0 0 1-2-3.2h-3.1v13.1a2.7 2.7 0 1 1-2-2.6V9.4a5.8 5.8 0 1 0 5.1 5.7V9a8.4 8.4 0 0 0 5.2 1.8z"/>
                  </svg>
                  @safebridge_rmb
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}