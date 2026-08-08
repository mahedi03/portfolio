import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site";
import { generalFAQs } from "@/data/faq";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch to discuss your website, SEO, or paid advertising project. Usually responds within one business day.",
  path: "/contact",
});

const contactDetails = [
  { icon: Mail, label: "Email", value: siteConfig.author.email, href: `mailto:${siteConfig.author.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.author.phone, href: `tel:${siteConfig.author.phone}` },
  { icon: MapPin, label: "Location", value: `${siteConfig.author.location.city}, ${siteConfig.author.location.country}` },
  { icon: Clock, label: "Availability", value: "24/7, replies within 1 business day" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Share a few details below and expect a response within one business day."
      />

      <section className="py-12 lg:py-16">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold">Contact details</h3>
              <ul className="mt-5 space-y-4">
                {contactDetails.map((detail) => (
                  <li key={detail.label} className="flex gap-3">
                    <detail.icon className="mt-0.5 size-4.5 shrink-0 text-primary" />
                    <div className="text-sm">
                      <div className="text-muted-foreground">{detail.label}</div>
                      {detail.href ? (
                        <a href={detail.href} className="font-medium hover:text-primary">
                          {detail.value}
                        </a>
                      ) : (
                        <div className="font-medium">{detail.value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-20">
        <Container className="max-w-2xl">
          <Reveal className="text-center">
            <h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">
              Common questions
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <FAQAccordion items={generalFAQs} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
