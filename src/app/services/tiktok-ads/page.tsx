import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceArticleSchema, serviceSchema } from "@/lib/schema";
import { getServiceForPage, getServicePageMetadata } from "@/lib/service-page";
import { getExpandedServiceFaqs } from "@/data/serviceFaqs";
import { TiktokAdsHero } from "@/components/services/tiktok-ads/TiktokAdsHero";
import { TiktokAdsOffer } from "@/components/services/tiktok-ads/TiktokAdsOffer";
import { TiktokAdsWhyItMatters } from "@/components/services/tiktok-ads/TiktokAdsWhyItMatters";
import { TiktokAdsWhyChooseMe } from "@/components/services/tiktok-ads/TiktokAdsWhyChooseMe";
import { TiktokAdsProcess } from "@/components/services/tiktok-ads/TiktokAdsProcess";
import { TiktokAdsPricing } from "@/components/services/tiktok-ads/TiktokAdsPricing";
import { TiktokAdsServiceAreas } from "@/components/services/tiktok-ads/TiktokAdsServiceAreas";
import { TiktokAdsFAQ } from "@/components/services/tiktok-ads/TiktokAdsFAQ";
import { TiktokAdsCTA } from "@/components/services/tiktok-ads/TiktokAdsCTA";

export const metadata: Metadata = getServicePageMetadata("tiktok-ads");

export default function TiktokAdsPage() {
  const service = getServiceForPage("tiktok-ads");

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
      <TiktokAdsHero />
      <TiktokAdsOffer />
      <TiktokAdsWhyItMatters />
      <TiktokAdsWhyChooseMe />
      <TiktokAdsProcess />
      <TiktokAdsPricing />
      <TiktokAdsServiceAreas />
      <TiktokAdsFAQ />
      <TiktokAdsCTA />
    </>
  );
}
