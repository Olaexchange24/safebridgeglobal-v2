import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, MessageCircle, RefreshCw, ShieldCheck, ArrowLeftRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { getAdjustedRmbNgn } from "@/lib/rates";

type Currency = "NGN" | "USD" | "USDT";

const REFRESH_MS = 3 * 60 * 1000;

// Sensible fallback rates so the UI is instantly usable while the live fetch resolves.
const FALLBACK_USD_NGN = 1530;
const FALLBACK_USD_CNY = 7.24;
const RATES_CACHE_KEY = "sb_rates_cache_v1";

function formatAmount(n: number, digits = 2) {
  if (!isFinite(n)) return "0.00";
  return n.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

// Strip everything but digits + a single decimal point.
function sanitizeNumeric(value: string): string {
  let v = value.replace(/[^0-9.]/g, "");
  const firstDot = v.indexOf(".");
  if (firstDot !== -1) {
    v = v.slice(0, firstDot + 1) + v.slice(firstDot + 1).replace(/\./g, "");
  }
  // strip leading zeros like "0005" -> "5" but keep "0." and "0"
  if (/^0\d/.test(v)) v = v.replace(/^0+/, "");
  return v;
}

// Visual comma formatting that preserves a trailing dot / decimals while typing.
function formatWithCommas(value: string): string {
  if (!value) return "";
  const [intPart, decPart] = value.split(".");
  const intFmt = (intPart || "0").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decPart !== undefined ? `${intFmt}.${decPart}` : intFmt;
}

function toNumber(s: string): number {
  const n = parseFloat(s);
  return isFinite(n) ? n : 0;
}

function trimZeros(s: string): string {
  if (!s.includes(".")) return s;
  return s.replace(/\.?0+$/, "") || "0";
}

export function RmbCalculator() {
  const cached = (() => {
    if (typeof window === "undefined") return null;
    try {
      const raw = localStorage.getItem(RATES_CACHE_KEY);
      if (!raw) return null;
      return JSON.parse(raw) as { usdNgn: number; usdCny: number; ts: number };
    } catch {
      return null;
    }
  })();

  const [usdNgn, setUsdNgn] = useState<number>(cached?.usdNgn ?? FALLBACK_USD_NGN);
  const [usdCny, setUsdCny] = useState<number>(cached?.usdCny ?? FALLBACK_USD_CNY);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(cached ? new Date(cached.ts) : null);
  const [loading, setLoading] = useState(!cached);
  const [error, setError] = useState<string | null>(null);

  const DEFAULTS: Record<Currency, string> = { NGN: "100000", USD: "1000", USDT: "1000" };
  const [currency, setCurrency] = useState<Currency>("NGN");
  const [sendStr, setSendStr] = useState<string>(DEFAULTS.NGN);
  const [receiveStr, setReceiveStr] = useState<string>("");
  const [touched, setTouched] = useState(false);
  const lastEdited = useRef<"send" | "receive">("send");

  function handleCurrencyChange(c: Currency) {
    setCurrency(c);
    if (!touched) {
      lastEdited.current = "send";
      setSendStr(DEFAULTS[c]);
    }
  }

  useEffect(() => {
    let cancelled = false;
    async function fetchRates() {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        if (!res.ok) throw new Error("network");
        const data = (await res.json()) as { result?: string; rates?: Record<string, number> };
        if (data.result !== "success" || !data.rates) throw new Error("bad");
        if (cancelled) return;
        setUsdNgn(data.rates.NGN);
        setUsdCny(data.rates.CNY);
        const now = new Date();
        setUpdatedAt(now);
        try {
          localStorage.setItem(
            RATES_CACHE_KEY,
            JSON.stringify({ usdNgn: data.rates.NGN, usdCny: data.rates.CNY, ts: now.getTime() }),
          );
        } catch {
          /* ignore quota errors */
        }
        setLoading(false);
        setError(null);
      } catch {
        if (cancelled) return;
        setLoading(false);
        // Keep fallback/cached values visible; just stop the spinner.
      }
    }
    fetchRates();
    const id = setInterval(fetchRates, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const rmbPerUnit = useMemo(() => {
    if (!usdNgn || !usdCny) return 0;
    if (currency === "NGN") {
      const adjusted = getAdjustedRmbNgn(usdNgn, usdCny); // NGN per 1 RMB (with margin)
      return adjusted ? 1 / adjusted : 0;
    }
    return usdCny; // RMB per 1 USD / USDT
  }, [currency, usdNgn, usdCny]);

  // Recompute the non-edited field whenever the rate or currency changes.
  useEffect(() => {
    if (!rmbPerUnit) return;
    if (lastEdited.current === "send") {
      if (!sendStr) { setReceiveStr(""); return; }
      setReceiveStr(trimZeros((toNumber(sendStr) * rmbPerUnit).toFixed(2)));
    } else {
      if (!receiveStr) { setSendStr(""); return; }
      setSendStr(trimZeros((toNumber(receiveStr) / rmbPerUnit).toFixed(2)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rmbPerUnit]);

  function onSendChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = sanitizeNumeric(e.target.value);
    setTouched(true);
    lastEdited.current = "send";
    setSendStr(raw);
    if (!raw) { setReceiveStr(""); return; }
    if (!rmbPerUnit) return;
    setReceiveStr(trimZeros((toNumber(raw) * rmbPerUnit).toFixed(2)));
  }

  function onReceiveChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = sanitizeNumeric(e.target.value);
    setTouched(true);
    lastEdited.current = "receive";
    setReceiveStr(raw);
    if (!raw) { setSendStr(""); return; }
    if (!rmbPerUnit) return;
    setSendStr(trimZeros((toNumber(raw) / rmbPerUnit).toFixed(2)));
  }

  const parsedSend = toNumber(sendStr);
  const parsedReceive = toNumber(receiveStr);

  const rateLabel = useMemo(() => {
    if (!usdNgn || !usdCny) return "—";
    if (currency === "NGN") return `₦${formatAmount(getAdjustedRmbNgn(usdNgn, usdCny), 2)} = ¥1`;
    return `$1 = ¥${formatAmount(usdCny, 4)}`;
  }, [currency, usdNgn, usdCny]);

  const updatedLabel = updatedAt
    ? `Updated ${updatedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
    : loading
    ? "Fetching live rates…"
    : error ?? "—";

  const symbols: Record<Currency, string> = { NGN: "₦", USD: "$", USDT: "$" };

  const waMessage = `Hi Safe Bridge, I'd like to convert ${symbols[currency]}${formatAmount(parsedSend, 2)} ${currency} to RMB (≈ ¥${formatAmount(parsedReceive, 2)}). Please start a secure payment.`;

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

      <div className="container relative mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-10 text-center animate-fade-in">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-emerald-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Live Rates
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Live RMB Calculator
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Convert instantly using real-time market rates.
          </p>
        </div>

        <div className="animate-fade-in rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-5 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.35)] backdrop-blur-xl ring-1 ring-emerald-500/10 md:p-7">
          {/* currency toggle */}
          <div className="mb-5 grid grid-cols-3 gap-1 rounded-full border border-white/10 bg-black/40 p-1">
            {(["NGN", "USD", "USDT"] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => handleCurrencyChange(c)}
                className={`h-9 rounded-full text-xs font-semibold transition-all duration-300 ${
                  currency === c
                    ? "bg-gradient-to-r from-emerald-500 to-emerald-400 text-black shadow-[0_0_20px_-4px_rgba(16,185,129,0.7)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {c} → RMB
              </button>
            ))}
          </div>

          {/* input */}
          <label className="block">
            <span className="text-[11px] font-medium uppercase tracking-wider text-white/50">You send</span>
            <div className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 transition-colors focus-within:border-emerald-400/50 focus-within:ring-1 focus-within:ring-emerald-400/30">
              <span className="text-lg font-semibold text-white/70">{symbols[currency]}</span>
              <input
                inputMode="decimal"
                pattern="[0-9]*"
                value={formatWithCommas(sendStr)}
                onChange={onSendChange}
                placeholder="0.00"
                className="w-full bg-transparent text-2xl font-semibold text-white outline-none placeholder:text-white/30 tabular-nums md:text-3xl"
              />
              <span className="text-xs font-semibold text-white/50">{currency}</span>
            </div>
          </label>

          {/* swap icon */}
          <div className="my-3 flex justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-emerald-300 shadow-[0_0_20px_-6px_rgba(16,185,129,0.6)]">
              <ArrowLeftRight className="h-4 w-4 rotate-90" />
            </div>
          </div>

          {/* output (editable) */}
          <label className="block">
            <span className="text-[11px] font-medium uppercase tracking-wider text-emerald-300/80">You receive (indicative)</span>
            <div className="mt-2 flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 px-4 py-3 transition-colors focus-within:border-emerald-400/60 focus-within:ring-1 focus-within:ring-emerald-400/40">
              <span className="text-lg font-semibold text-emerald-300">¥</span>
              <input
                inputMode="decimal"
                pattern="[0-9]*"
                value={formatWithCommas(receiveStr)}
                onChange={onReceiveChange}
                placeholder="0.00"
                className="w-full bg-transparent text-2xl font-semibold text-white outline-none placeholder:text-white/30 tabular-nums md:text-3xl"
              />
              <span className="text-xs font-semibold text-emerald-300/80">RMB</span>
            </div>
          </label>

          {/* meta */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <RefreshCw className={`h-3.5 w-3.5 text-emerald-300 ${loading ? "animate-spin" : ""}`} />
              <span className="tabular-nums">{rateLabel}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              {updatedLabel}
            </div>
          </div>

          {/* CTA */}
          <a
            href={waLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-400 text-sm font-bold text-black shadow-[0_10px_40px_-10px_rgba(16,185,129,0.7)] transition-all hover:scale-[1.01] hover:shadow-[0_15px_50px_-10px_rgba(16,185,129,0.9)] active:scale-[0.99]"
          >
            <MessageCircle className="h-4 w-4" />
            Start Secure Payment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-white/45">
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3 w-3 text-emerald-400" /> Secure & verified</span>
            <span>Rates update automatically</span>
            <span>Indicative market pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
}