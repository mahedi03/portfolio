import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { portfolioProjects } from "@/data/portfolio";
import { PageHero } from "@/components/shared/PageHero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "A collection of website development, SEO, and paid advertising projects delivered for clients across industries.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ]),
          itemListSchema(
            portfolioProjects.map((p) => ({
              name: p.title,
              path: `/portfolio/${p.slug}`,
            }))
          ),
          webPageSchema({ name: "Portfolio | Mahedi Hasan", description: "A collection of website development, SEO, and paid advertising projects delivered for clients across industries.", path: "/portfolio", breadcrumbPath: "/portfolio" }),
        ]}
      />
      <PageHero
        eyebrow="Portfolio"
        title="Projects that speak for themselves"
        description="Website builds, SEO campaigns, and paid ad projects delivered for real clients."
      />
      <PortfolioGrid />
      <CTA />
    </>
  );
}
