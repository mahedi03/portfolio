import type { Metadata } from "next";
import { buildMetadata, itemListSchema, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { services } from "@/data/services";
import { ServicesHubPage } from "@/views/ServicesHubPage";

export const metadata: Metadata = buildMetadata({
  title: "Services | Search, Paid Media & Web Engineering Systems",
  description:
    "Comprehensive digital growth services by Mahedi Hasan, Founder of FrameCipher. Specializing in Technical SEO, AEO, Meta/Google/TikTok media buying, and Next.js engineering.",
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
          webPageSchema({
            name: "Services | Mahedi Hasan",
            description:
              "Digital marketing, SEO, paid advertising, web development, and content systems engineered for revenue growth.",
            path: "/services",
            breadcrumbPath: "/services",
          }),
        ]}
      />
      <ServicesHubPage />
    </>
  );
}
