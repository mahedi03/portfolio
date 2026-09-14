import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { CaseStudiesList } from "@/components/case-studies/CaseStudiesList";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies | Documented Client Revenue & Growth",
  description:
    "Explore in-depth case studies by Mahedi Hasan detailing real organic search scaling, high-ROAS paid advertising, and conversion architecture results.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
          ]),
          itemListSchema(
            caseStudies.map((c) => ({
              name: c.title,
              path: `/case-studies/${c.slug}`,
            }))
          ),
          webPageSchema({
            name: "Case Studies | Mahedi Hasan",
            description:
              "In-depth case studies covering the strategy, execution, and measurable outcomes behind real client projects.",
            path: "/case-studies",
            breadcrumbPath: "/case-studies",
          }),
        ]}
      />
      <CaseStudiesHero />
      <CaseStudiesList />
      <CTA />
    </>
  );
}
