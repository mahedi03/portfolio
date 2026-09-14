import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceArticleSchema, serviceSchema } from "@/lib/schema";
import { getServiceForPage, getServicePageMetadata } from "@/lib/service-page";
import { getExpandedServiceFaqs } from "@/data/serviceFaqs";
import { PinterestAdsHero } from "@/components/services/pinterest-ads/PinterestAdsHero";
import { PinterestAdsOffer } from "@/components/services/pinterest-ads/PinterestAdsOffer";
import { PinterestAdsWhyItMatters } from "@/components/services/pinterest-ads/PinterestAdsWhyItMatters";
import { PinterestAdsWhyChooseMe } from "@/components/services/pinterest-ads/PinterestAdsWhyChooseMe";
import { PinterestAdsProcess } from "@/components/services/pinterest-ads/PinterestAdsProcess";
import { PinterestAdsPricing } from "@/components/services/pinterest-ads/PinterestAdsPricing";
import { PinterestAdsServiceAreas } from "@/components/services/pinterest-ads/PinterestAdsServiceAreas";
import { PinterestAdsFAQ } from "@/components/services/pinterest-ads/PinterestAdsFAQ";
import { PinterestAdsCTA } from "@/components/services/pinterest-ads/PinterestAdsCTA";

export const metadata: Metadata = getServicePageMetadata("pinterest-ads");

export default function PinterestAdsPage() {
  const service = getServiceForPage("pinterest-ads");

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
      <PinterestAdsHero />
      <PinterestAdsOffer />
      <PinterestAdsWhyItMatters />
      <PinterestAdsWhyChooseMe />
      <PinterestAdsProcess />
      <PinterestAdsPricing />
      <PinterestAdsServiceAreas />
      <PinterestAdsFAQ />
      <PinterestAdsCTA />
    </>
  );
}
