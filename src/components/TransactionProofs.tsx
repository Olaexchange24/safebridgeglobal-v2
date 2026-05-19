import { useState } from "react";
import { CheckCircle2, ShieldCheck, Zap, X } from "lucide-react";
import proof1 from "@/assets/proof-1.jpeg";
import proof2 from "@/assets/proof-2.jpeg";
import proof3 from "@/assets/proof-3.jpeg";
import proof4 from "@/assets/proof-4.jpeg";
import proof5 from "@/assets/proof-5.jpeg";
import proof6 from "@/assets/proof-6.jpeg";

const proofs = [
  { src: proof5, alt: "Verified WeChat payment confirmation" },
  { src: proof6, alt: "Alipay funding completed successfully" },
  { src: proof3, alt: "Alipay transaction receipt" },
  { src: proof1, alt: "Bank transfer ¥20,000 successful" },
  { src: proof2, alt: "Supplier payment ¥5,931 confirmed" },
  { src: proof4, alt: "Replacement account payment proof" },
];

const badges = [
  { icon: Zap, label: "Fast Payment" },
  { icon: ShieldCheck, label: "Verified Transactions" },
  { icon: CheckCircle2, label: "Trusted by Clients" },
];

export function TransactionProofs() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="proofs" className="relative py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            Proof of Payments
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recent Successful Transactions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Fast, trusted and verified exchanges.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-foreground/90 backdrop-blur"
              >
                <Icon className="h-3.5 w-3.5 text-emerald-400" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {proofs.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(p.src)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.45)] focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
              aria-label={`View ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="block w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  Verified
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/70">Tap to view</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={active}
            alt="Transaction proof"
            className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}