import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { portfolioProjects } from "@/data/portfolio";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio | Web Development, Search & Advertising Work",
  description:
    "Explore production websites, Next.js applications, organic search ranking architectures, and paid ad funnels built and optimized by Mahedi Hasan.",
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
          webPageSchema({
            name: "Portfolio | Mahedi Hasan",
            description:
              "A collection of website development, SEO, and paid advertising projects delivered for clients across industries.",
            path: "/portfolio",
            breadcrumbPath: "/portfolio",
          }),
        ]}
      />
      <PortfolioHero />
      <PortfolioGrid />
      <CTA />
    </>
  );
}
