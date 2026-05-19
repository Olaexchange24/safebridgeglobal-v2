export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--gradient-primary)] shadow-[var(--shadow-elegant)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 18h16" />
          <path d="M6 18V9l6-4 6 4v9" />
          <path d="M10 18v-5h4v5" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-sm font-bold tracking-tight text-foreground">SAFE BRIDGE</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-gold">RMB Exchange</span>
      </div>
    </div>
  );
}