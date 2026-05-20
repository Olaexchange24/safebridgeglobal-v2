import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/Hero";
import { StatsBand } from "@/components/StatsBand";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChoose } from "@/components/WhyChoose";
import { Testimonials } from "@/components/Testimonials";
import { TransactionProofs } from "@/components/TransactionProofs";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safe Bridge RMB Exchange | Pay China Suppliers Safely" },
      { name: "description", content: "Trusted RMB exchange platform for Nigerian importers. Pay Chinese suppliers safely, fund Alipay, WeChat Pay, and Chinese bank accounts with fast confirmation." },
      { property: "og:title", content: "Safe Bridge RMB Exchange | Pay China Suppliers Safely" },
      { property: "og:description", content: "Trusted RMB exchange platform for Nigerian importers. Pay Chinese suppliers safely, fund Alipay, WeChat Pay, and Chinese bank accounts with fast confirmation." },
      { property: "og:url", content: "https://safebridgeglobal.lovable.app/" },
      { property: "og:image", content: "https://safebridgeglobal.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://safebridgeglobal.lovable.app/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://safebridgeglobal.lovable.app/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <StatsBand />
        <ServicesGrid />
        <HowItWorks />
        <WhyChoose />
        <TransactionProofs />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
