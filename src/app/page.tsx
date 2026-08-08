import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Statistics } from "@/components/home/Statistics";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, webPageSchema } from "@/lib/schema";
import { generalFAQs } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[webPageSchema({ name: siteConfig.title, description: siteConfig.description, path: "/" }), faqSchema(generalFAQs)]} />
      <Hero />
      <Services />
      <FeaturedProjects />
      <Statistics />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
