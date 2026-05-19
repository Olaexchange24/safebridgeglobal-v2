import { MessageCircle, ArrowRight, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";

const rates = [
  { pair: "RMB / NGN", rate: "232.50", trend: "+0.8%" },
  { pair: "USD / RMB", rate: "7.18", trend: "-0.1%" },
  { pair: "Alipay Top-up", rate: "Instant", trend: "Live" },
  { pair: "WeChat Fund", rate: "Instant", trend: "Live" },
  { pair: "Bank Transfer", rate: "Same-day", trend: "Live" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--gradient-primary)] text-primary-foreground">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute right-20 top-40 h-20 w-20 animate-float-slow rounded-2xl bg-gold/20 backdrop-blur" />
      <div className="pointer-events-none absolute left-1/2 bottom-20 h-14 w-14 animate-float-slow rounded-full bg-gold/30" style={{ animationDelay: "1.5s" }} />

      <div className="container relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              Trusted by 5,000+ Nigerian importers
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Pay Your China Suppliers <span className="text-shimmer">Safely</span> & Instantly
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/75 md:text-lg">
              Buy and sell RMB at the best rates. Fund Alipay & WeChat, send direct bank
              transfers to China — all backed by a team that treats every order like it's their own.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink("Hi Safe Bridge, I'd like to start an order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-7 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" /> Start Order on WhatsApp
              </a>
              <Link
                to="/services"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-primary-foreground/20 bg-white/5 px-7 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-white/10"
              >
                View Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-xs text-primary-foreground/70">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> 100% Secure</div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-gold" /> Same-day Delivery</div>
              <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-gold" /> Best Market Rates</div>
            </div>
          </div>

          {/* rate card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[var(--shadow-elegant)] backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-gold">Live Rate Board</div>
                  <div className="mt-1 text-sm text-primary-foreground/70">Updated continuously</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                  <TrendingUp className="h-5 w-5 text-gold" />
                </div>
              </div>
              <div className="space-y-2">
                {rates.map((r) => (
                  <div key={r.pair} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 transition-colors hover:bg-white/10">
                    <div className="text-sm font-medium text-primary-foreground">{r.pair}</div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-semibold text-gold">{r.rate}</span>
                      <span className="text-[11px] text-primary-foreground/60">{r.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={waLink("Hi, please share your live rates.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gold/15 text-sm font-semibold text-gold transition-colors hover:bg-gold/25"
              >
                Get Today's Best Rate <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}