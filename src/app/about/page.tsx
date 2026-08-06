import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { AboutHero } from "@/components/about/AboutHero";
import { Journey } from "@/components/about/Journey";
import { SkillsSection } from "@/components/about/SkillsSection";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about the background, skills, and approach behind the work — a digital marketing specialist and full-stack developer.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutHero />
      <Journey />
      <SkillsSection />
      <CTA />
    </>
  );
}
