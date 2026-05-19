import { Banknote, Wallet, Smartphone, MessageSquare, Building2, Truck, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const services = [
  {
    icon: Banknote,
    title: "Buy RMB",
    desc: "Get Chinese Yuan at the best wholesale rates, settled directly to your supplier.",
    msg: "Hi, I'd like to buy RMB.",
  },
  {
    icon: Wallet,
    title: "Sell RMB",
    desc: "Convert your RMB holdings to Naira instantly at premium market rates.",
    msg: "Hi, I'd like to sell RMB.",
  },
  {
    icon: Smartphone,
    title: "Alipay Funding",
    desc: "Top up any Alipay wallet in minutes — perfect for Taobao, 1688 and Tmall orders.",
    msg: "Hi, I want to fund my Alipay.",
  },
  {
    icon: MessageSquare,
    title: "WeChat Funding",
    desc: "Fund WeChat Pay accounts to settle suppliers, agents and freight forwarders.",
    msg: "Hi, I want to fund WeChat Pay.",
  },
  {
    icon: Building2,
    title: "Chinese Bank Transfers",
    desc: "Direct telegraphic transfers to ICBC, BOC, CCB and all major Chinese banks.",
    msg: "Hi, I need a Chinese bank transfer.",
  },
  {
    icon: Truck,
    title: "Supplier Direct Payments",
    desc: "No RMB account? No problem. We pay your Chinese supplier directly on your behalf.",
    msg: "Hi, I'd like you to pay my supplier directly.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            Our Services
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything you need to pay China
          </h2>
          <p className="mt-4 text-muted-foreground">
            One trusted partner for every payment channel into China.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-gold/10" />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gradient-primary)] text-gold shadow-[var(--shadow-elegant)]">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <a
                  href={waLink(s.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-3 hover:text-gold"
                >
                  Start Order <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}