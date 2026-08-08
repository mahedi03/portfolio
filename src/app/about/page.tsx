import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Learn how Mahedi Hasan connects SEO, content, advertising, and web development to build digital systems that turn visibility into growth.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <AboutHero />
      <AboutContent />
    </>
  );
}
