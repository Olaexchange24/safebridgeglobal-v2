import { MessageCircle, ArrowRight, ShieldCheck, Zap, TrendingUp, RefreshCw } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/whatsapp";
import { getAdjustedRmbNgn } from "@/lib/rates";

type LiveRates = {
  rmbNgn: string;
  usdRmb: string;
  updatedAt: Date | null;
  loading: boolean;
  error: string | null;
};

const REFRESH_MS = 3 * 60 * 1000; // 3 minutes

function formatNumber(n: number, digits = 2) {
  return n.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

export function Hero() {
  const [live, setLive] = useState<LiveRates>({
    rmbNgn: "—",
    usdRmb: "—",
    updatedAt: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchRates() {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        if (!res.ok) throw new Error("network");
        const data = (await res.json()) as { result?: string; rates?: Record<string, number> };
        if (data.result !== "success" || !data.rates) throw new Error("bad response");
        const usdNgn = data.rates.NGN;
        const usdCny = data.rates.CNY;
        if (!usdNgn || !usdCny) throw new Error("missing pairs");
        const rmbNgn = getAdjustedRmbNgn(usdNgn, usdCny);
        if (cancelled) return;
        setLive({
          rmbNgn: formatNumber(rmbNgn, 2),
          usdRmb: formatNumber(usdCny, 4),
          updatedAt: new Date(),
          loading: false,
          error: null,
        });
      } catch (e) {
        if (cancelled) return;
        setLive((prev) => ({ ...prev, loading: false, error: "Rates temporarily unavailable" }));
      }
    }

    fetchRates();
    const id = setInterval(fetchRates, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const updatedLabel = live.updatedAt
    ? `Updated ${live.updatedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
    : live.loading
    ? "Fetching live market data…"
    : live.error ?? "—";

  const rateRows = [
    { pair: "RMB / NGN", rate: live.rmbNgn === "—" ? "—" : `₦${live.rmbNgn}`, trend: "Live" },
    { pair: "USD / RMB", rate: live.usdRmb, trend: "Live" },
    { pair: "Alipay Funding", rate: "Instant", trend: "Live" },
    { pair: "WeChat Funding", rate: "Instant", trend: "Live" },
    { pair: "Bank Transfer", rate: "Same-day", trend: "Live" },
  ];

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
              Fast & Reliable <span className="text-shimmer">RMB Payments</span> To China
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/75 md:text-lg">
              Buy and sell RMB instantly. We fund Alipay, WeChat, Chinese bank accounts
              and also help pay suppliers directly, even if you don't have an RMB account.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink("Hi Safe Bridge, I'd like to start an order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#0B3D2E] px-7 text-sm font-bold text-white shadow-[0_0_30px_-5px_rgba(16,185,129,0.55)] ring-1 ring-emerald-400/40 transition-all hover:scale-105 hover:bg-[#0d4b38] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.7)]"
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
            <div className="rounded-3xl border border-emerald-400/20 bg-black/60 p-6 shadow-[0_0_40px_-10px_rgba(16,185,129,0.45)] backdrop-blur-xl ring-1 ring-emerald-500/10">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Live Market Rate
                  </div>
                  <div className="mt-1 text-xs text-white/60">{updatedLabel}</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30">
                  <RefreshCw className={`h-4 w-4 text-emerald-300 ${live.loading ? "animate-spin" : ""}`} />
                </div>
              </div>
              <div className="space-y-2">
                {rateRows.map((r) => (
                  <div key={r.pair} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 transition-colors hover:border-emerald-400/30 hover:bg-emerald-500/5">
                    <div className="flex-1 min-w-0 text-sm font-medium text-white truncate">{r.pair}</div>
                    <div className="w-24 text-right font-semibold text-white tabular-nums">{r.rate}</div>
                    <div className="w-12 text-right text-[11px] uppercase tracking-wide text-emerald-300/80">{r.trend}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[11px] leading-relaxed text-white/50">
                Rates update automatically based on market conditions. RMB/NGN is calculated live as USD/NGN ÷ USD/CNY.
              </p>
              <a
                href={waLink("Hi, please share your live rates.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-emerald-500/15 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-400/30 transition-colors hover:bg-emerald-500/25"
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