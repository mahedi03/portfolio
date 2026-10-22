import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceArticleSchema, serviceSchema } from "@/lib/seo";
import { getServiceForPage, getServicePageMetadata } from "@/lib/service-page";
import { getExpandedServiceFaqs } from "@/data/serviceFaqs";
import { services } from "@/data/services";
import { ServiceDetailPage } from "@/views/ServiceDetailPage";

// Every service detail page is statically generated from the single
// `data/services.ts` source of truth — page/data mismatch is impossible.
//
// Route: app/services/[...slug]/page.tsx (Frame-Cipher convention).

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: [service.slug] }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return getServicePageMetadata(slug[0]);
}

export default async function ServiceDetailPageRoute({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const service = getServiceForPage(slug[0]);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          serviceSchema(service),
          serviceArticleSchema(service),
          faqSchema(getExpandedServiceFaqs(service), `/services/${service.slug}`),
        ]}
      />
      <ServiceDetailPage service={service} />
    </>
  );
}
