import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { generalFAQs } from "@/data/faq";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { OfficeLocationCard } from "@/components/contact/OfficeLocationCard";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

export const metadata: Metadata = buildMetadata({
  title: "Contact Mahedi Hasan | Consultation & Growth Inquiries",
  description:
    "Direct contact channel with Mahedi Hasan, Founder of FrameCipher and former Co-Founder of Riha Web Tech. Request a technical audit, paid advertising review, or custom Next.js development quote.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqSchema(generalFAQs),
        ]}
      />
      <ContactHero />

      <section className="py-16 lg:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <OfficeLocationCard />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border bg-surface/50 py-20 lg:py-24">
        <Container className="max-w-3xl">
          <Reveal className="text-center">
            <h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Common questions about working together, timelines, project handoffs, and deliverables.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <FAQAccordion items={generalFAQs} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
