import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceArticleSchema, serviceSchema } from "@/lib/schema";
import { getServiceForPage, getServicePageMetadata } from "@/lib/service-page";
import { getExpandedServiceFaqs } from "@/data/serviceFaqs";
import { MetaAdsHero } from "@/components/services/meta-ads/MetaAdsHero";
import { MetaAdsOffer } from "@/components/services/meta-ads/MetaAdsOffer";
import { MetaAdsWhyItMatters } from "@/components/services/meta-ads/MetaAdsWhyItMatters";
import { MetaAdsWhyChooseMe } from "@/components/services/meta-ads/MetaAdsWhyChooseMe";
import { MetaAdsProcess } from "@/components/services/meta-ads/MetaAdsProcess";
import { MetaAdsPricing } from "@/components/services/meta-ads/MetaAdsPricing";
import { MetaAdsServiceAreas } from "@/components/services/meta-ads/MetaAdsServiceAreas";
import { MetaAdsFAQ } from "@/components/services/meta-ads/MetaAdsFAQ";
import { MetaAdsCTA } from "@/components/services/meta-ads/MetaAdsCTA";

export const metadata: Metadata = getServicePageMetadata("meta-ads");

export default function MetaAdsPage() {
  const service = getServiceForPage("meta-ads");

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
      <MetaAdsHero />
      <MetaAdsOffer />
      <MetaAdsWhyItMatters />
      <MetaAdsWhyChooseMe />
      <MetaAdsProcess />
      <MetaAdsPricing />
      <MetaAdsServiceAreas />
      <MetaAdsFAQ />
      <MetaAdsCTA />
    </>
  );
}
