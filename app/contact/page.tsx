import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, professionalServiceSchema, webPageSchema } from "@/lib/seo";
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
          professionalServiceSchema(),
          webPageSchema({
            name: "Contact Mahedi Hasan",
            description:
              "Direct contact channel with Mahedi Hasan, Founder of FrameCipher. Request a technical audit, paid advertising review, or custom Next.js development quote.",
            path: "/contact",
            breadcrumbPath: "/contact",
          }),
          faqSchema(generalFAQs),
        ]}
      />
      <ContactHero />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7 xl:col-span-8">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 xl:col-span-4">
            <OfficeLocationCard />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border/80 bg-surface/40 py-14 sm:py-20 lg:py-24">
        <Container className="max-w-3xl">
          <Reveal className="text-center">
            <h2 className="text-2xl sm:text-4xl font-display font-black tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">
              Common questions about working together, timelines, project handoffs, and deliverables.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 sm:mt-10">
            <FAQAccordion items={generalFAQs} large />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
