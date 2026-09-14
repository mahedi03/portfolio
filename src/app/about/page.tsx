import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { AboutHero } from "@/components/about/AboutHero";
import { LeadershipRole } from "@/components/about/LeadershipRole";
import { AboutContent } from "@/components/about/AboutContent";
import { AboutValues } from "@/components/about/AboutValues";
import { Journey } from "@/components/about/Journey";
import { SkillsSection } from "@/components/about/SkillsSection";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = buildMetadata({
  title: "About Mahedi Hasan | Digital Systems Architect & Founder",
  description:
    "Discover the background, track record, and multi-disciplinary systems built by Mahedi Hasan, Founder of FrameCipher and former Co-Founder of Riha Web Tech.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          webPageSchema({
            name: "About Mahedi Hasan | Co-Founder & Digital Architect",
            description:
              "Learn how Mahedi Hasan connects search marketing, paid advertising, and software development to build high-converting growth systems.",
            path: "/about",
            breadcrumbPath: "/about",
          }),
        ]}
      />
      <AboutHero />
      <LeadershipRole />
      <AboutContent />
      <AboutValues />
      <Journey />
      <SkillsSection />
      <AboutCTA />
    </>
  );
}
