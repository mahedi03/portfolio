import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { services } from "@/data/services";
import { PageHero } from "@/components/shared/PageHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Website development, SEO, local search, content, social media, media buying, and paid advertising across Google, Meta, TikTok, Pinterest, and emerging AI channels.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          itemListSchema(
            services.map((s) => ({ name: s.title, path: `/services/${s.slug}` }))
          ),
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Full-stack development & marketing"
        description="Every service needed to build a website that converts, gets found, and keeps earning attention — under one roof."
      />
      <ServicesGrid />
      <CTA />
    </>
  );
}
