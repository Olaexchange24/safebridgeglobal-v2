import { Link } from "@tanstack/react-router";
import { MessageCircle, Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { waLink } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 [&_span:first-child]:text-primary-foreground">
              <Logo />
            </div>
            <p className="max-w-sm text-sm text-primary-foreground/70">
              The trusted bridge between Nigerian importers and Chinese suppliers, fast RMB exchange,
              Alipay & WeChat funding, and direct bank transfers to China.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-10 items-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Navigate</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li><Link to="/services" className="hover:text-gold">Services</Link></li>
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>+2348165701336</span></li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>safebridgermb@gmail.com</span></li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>1A Akinyemi Avenue, Lekki Phase 1, Lagos</span></li>
              <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>Open 24/7</span></li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a href="https://instagram.com/safebridge_rmb" target="_blank" rel="noopener noreferrer" aria-label="Instagram @safebridge_rmb" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-primary-foreground transition-colors hover:bg-gold hover:text-gold-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://tiktok.com/@safebridge_rmb" target="_blank" rel="noopener noreferrer" aria-label="TikTok @safebridge_rmb" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-primary-foreground transition-colors hover:bg-gold hover:text-gold-foreground">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M19.6 6.3a5.3 5.3 0 0 1-3.2-1.1 5.3 5.3 0 0 1-2-3.2h-3.1v13.1a2.7 2.7 0 1 1-2-2.6V9.4a5.8 5.8 0 1 0 5.1 5.7V9a8.4 8.4 0 0 0 5.2 1.8z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Safe Bridge RMB Exchange. All rights reserved.
        </div>
      </div>
    </footer>
  );
}