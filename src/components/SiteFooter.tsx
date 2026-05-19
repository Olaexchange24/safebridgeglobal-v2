import { Link } from "@tanstack/react-router";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { waLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";

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
              The trusted bridge between Nigerian importers and Chinese suppliers — fast RMB exchange,
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
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" /> +{WHATSAPP_NUMBER}</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /> hello@safebridgermb.com</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Safe Bridge RMB Exchange. All rights reserved.
        </div>
      </div>
    </footer>
  );
}