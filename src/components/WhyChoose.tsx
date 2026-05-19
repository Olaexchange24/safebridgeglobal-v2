import { ShieldCheck, Zap, TrendingUp, HeadphonesIcon } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "Bank-Grade Security", desc: "Every transaction verified and reconciled. Your funds, our priority." },
  { icon: Zap, title: "Lightning Fast", desc: "Most orders settled within the hour. Alipay & WeChat in minutes." },
  { icon: TrendingUp, title: "Best Market Rates", desc: "Direct mainland China liquidity means real wholesale pricing for you." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "Real humans on WhatsApp, answering 7 days a week." },
];

export function WhyChoose() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-foreground">
            Why Safe Bridge
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built for serious importers
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-gold/40 hover:shadow-[var(--shadow-gold)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}