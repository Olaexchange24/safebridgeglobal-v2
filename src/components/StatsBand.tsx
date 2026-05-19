const stats = [
  { value: "₦100M+", label: "Volume Settled" },
  { value: "< 10 min", label: "Avg. Delivery" },
  { value: "100%", label: "Success Rate" },
  { value: "24/7", label: "Available" },
];

export function StatsBand() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:px-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-[Space_Grotesk] text-3xl font-bold text-primary md:text-4xl">{s.value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}