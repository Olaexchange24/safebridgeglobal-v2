import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { ContactSection } from "@/components/ContactSection";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FAQ } from "@/components/FAQ";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Safe Bridge RMB Exchange" },
      { name: "description", content: "Buy & sell RMB, Alipay & WeChat funding, and direct Chinese bank transfers — every payment channel into China." },
      { property: "og:title", content: "Services — Safe Bridge RMB Exchange" },
      { property: "og:description", content: "Every payment channel into China, in one trusted exchange." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-[var(--gradient-primary)] py-20 text-primary-foreground md:py-24">
          <div className="container mx-auto max-w-7xl px-4 text-center md:px-6">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Our Services</h1>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/75">
              One trusted partner for every payment channel into China.
            </p>
          </div>
        </section>
        <ServicesGrid />
        <HowItWorks />
        <FAQ />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}