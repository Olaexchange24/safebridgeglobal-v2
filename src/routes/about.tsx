import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactSection } from "@/components/ContactSection";
import { WhyChoose } from "@/components/WhyChoose";
import { StatsBand } from "@/components/StatsBand";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Safe Bridge RMB Exchange" },
      { name: "description", content: "Safe Bridge is Nigeria's most trusted RMB exchange. Built by importers, for importers." },
      { property: "og:title", content: "About Safe Bridge RMB Exchange" },
      { property: "og:description", content: "Built by importers, for importers." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-[var(--gradient-primary)] py-20 text-primary-foreground md:py-24">
          <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              The safe bridge between <span className="text-shimmer">Nigeria & China</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/75">
              Safe Bridge was built by importers who got tired of bad rates, slow settlements,
              and the constant fear of being scammed. Today, we help thousands of Nigerian
              businesses move money to China with confidence.
            </p>
          </div>
        </section>
        <StatsBand />
        <section className="py-20 md:py-28">
          <div className="container mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                Make cross-border payments to China as simple as sending a WhatsApp message.
                No paperwork. No hidden fees. No waiting days for funds to land.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Promise</h2>
              <p className="mt-4 text-muted-foreground">
                Every quote is honoured. Every order is reconciled. Every client is treated
                like our biggest client, because to us, you are.
              </p>
            </div>
          </div>
        </section>
        <WhyChoose />
        <Testimonials />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}