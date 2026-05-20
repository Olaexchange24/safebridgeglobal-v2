import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How quickly will my supplier receive the RMB?", a: "Alipay and WeChat are funded within minutes. Direct Chinese bank transfers are settled same-day, with most landing within 1–2 hours of payment confirmation." },
  { q: "What rates do you offer?", a: "We source liquidity directly from mainland China, so our rates are wholesale and consistently better than retail bureaux. Message us on WhatsApp for today's live rate." },
  { q: "Are there limits on order size?", a: "Whether you're funding a ¥500 Taobao order or a ¥2M factory invoice, we handle it. Larger orders may qualify for preferential pricing." },
  { q: "Is my payment safe?", a: "Yes, your payment is safe with us. Every payment is confirmed properly, and we keep you updated until your order is completed. We also provide proof and confirmation for every transaction." },
  { q: "Which Chinese banks do you support?", a: "ICBC, Bank of China, China Construction Bank, Agricultural Bank of China, CMB, and all other major banks across mainland China." },
  { q: "Do you charge any hidden fees?", a: "Never. The rate you're quoted is the rate you pay. No hidden surcharges, no processing fees." },
  { q: "How do I get started?", a: "Just tap any 'Start Order' button or message us on WhatsApp. We'll send a quote, confirm your details, and your funds will be on their way to China." },
];

export function FAQ() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            FAQ
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Questions, answered
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-card px-5">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}