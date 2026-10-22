import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { RatingsBar } from "@/components/home/RatingsBar";
import { Problems } from "@/components/home/Problems";
import { Services } from "@/components/home/Services";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Process } from "@/components/home/Process";
import { Statistics } from "@/components/home/Statistics";
import { Why } from "@/components/home/Why";
import { Comparison } from "@/components/home/Comparison";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { Testimonials } from "@/components/home/Testimonials";
import { Industries } from "@/components/home/Industries";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, webPageSchema } from "@/lib/seo";
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
      <RatingsBar />
      <Problems />
      <Services />
      <FeaturedProjects />
      <Process />
      <Statistics />
      <Why />
      <Comparison />
      <ExperienceSection />
      <Testimonials />
      <Industries />
      <FAQ />
      <CTA />
    </>
  );
}
