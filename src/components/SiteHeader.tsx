import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={waLink("Hi Safe Bridge, I'd like to start an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2 rounded-full bg-[#0B3D2E] px-5 text-sm font-bold text-white shadow-[0_0_20px_-4px_rgba(16,185,129,0.5)] ring-1 ring-emerald-400/40 transition-all hover:scale-105 hover:bg-[#0d4b38] md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Start Order
          </a>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={waLink("Hi Safe Bridge, I'd like to start an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--gradient-gold)] px-5 text-sm font-semibold text-gold-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Start Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}