import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceArticleSchema, serviceSchema } from "@/lib/schema";
import { getServiceForPage, getServicePageMetadata } from "@/lib/service-page";
import { getExpandedServiceFaqs } from "@/data/serviceFaqs";
import { LocalSeoHero } from "@/components/services/local-seo/LocalSeoHero";
import { LocalSeoOffer } from "@/components/services/local-seo/LocalSeoOffer";
import { LocalSeoWhyItMatters } from "@/components/services/local-seo/LocalSeoWhyItMatters";
import { LocalSeoWhyChooseMe } from "@/components/services/local-seo/LocalSeoWhyChooseMe";
import { LocalSeoProcess } from "@/components/services/local-seo/LocalSeoProcess";
import { LocalSeoPricing } from "@/components/services/local-seo/LocalSeoPricing";
import { LocalSeoServiceAreas } from "@/components/services/local-seo/LocalSeoServiceAreas";
import { LocalSeoFAQ } from "@/components/services/local-seo/LocalSeoFAQ";
import { LocalSeoCTA } from "@/components/services/local-seo/LocalSeoCTA";

export const metadata: Metadata = getServicePageMetadata("local-seo");

export default function LocalSeoPage() {
  const service = getServiceForPage("local-seo");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: "/services/" + service.slug },
          ]),
          serviceSchema(service),
          serviceArticleSchema(service),
          faqSchema(getExpandedServiceFaqs(service), "/services/" + service.slug),
        ]}
      />
      <LocalSeoHero />
      <LocalSeoOffer />
      <LocalSeoWhyItMatters />
      <LocalSeoWhyChooseMe />
      <LocalSeoProcess />
      <LocalSeoPricing />
      <LocalSeoServiceAreas />
      <LocalSeoFAQ />
      <LocalSeoCTA />
    </>
  );
}
