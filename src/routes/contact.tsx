import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FAQ } from "@/components/FAQ";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Safe Bridge RMB Exchange" },
      { name: "description", content: "Reach Safe Bridge on WhatsApp to start your RMB exchange order today." },
      { property: "og:title", content: "Contact Safe Bridge RMB Exchange" },
      { property: "og:description", content: "Start your order on WhatsApp. Fast replies, 7 days a week." },
      { property: "og:url", content: "https://safebridgeglobal.lovable.app/contact" },
      { property: "og:image", content: "https://safebridgeglobal.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://safebridgeglobal.lovable.app/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://safebridgeglobal.lovable.app/contact" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <ContactSection />
        <FAQ />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}