import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceArticleSchema, serviceSchema } from "@/lib/schema";
import { getServiceForPage, getServicePageMetadata } from "@/lib/service-page";
import { getExpandedServiceFaqs } from "@/data/serviceFaqs";
import { GoogleAdsHero } from "@/components/services/google-ads/GoogleAdsHero";
import { GoogleAdsOffer } from "@/components/services/google-ads/GoogleAdsOffer";
import { GoogleAdsWhyItMatters } from "@/components/services/google-ads/GoogleAdsWhyItMatters";
import { GoogleAdsWhyChooseMe } from "@/components/services/google-ads/GoogleAdsWhyChooseMe";
import { GoogleAdsProcess } from "@/components/services/google-ads/GoogleAdsProcess";
import { GoogleAdsPricing } from "@/components/services/google-ads/GoogleAdsPricing";
import { GoogleAdsServiceAreas } from "@/components/services/google-ads/GoogleAdsServiceAreas";
import { GoogleAdsFAQ } from "@/components/services/google-ads/GoogleAdsFAQ";
import { GoogleAdsCTA } from "@/components/services/google-ads/GoogleAdsCTA";

export const metadata: Metadata = getServicePageMetadata("google-ads");

export default function GoogleAdsPage() {
  const service = getServiceForPage("google-ads");

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
      <GoogleAdsHero />
      <GoogleAdsOffer />
      <GoogleAdsWhyItMatters />
      <GoogleAdsWhyChooseMe />
      <GoogleAdsProcess />
      <GoogleAdsPricing />
      <GoogleAdsServiceAreas />
      <GoogleAdsFAQ />
      <GoogleAdsCTA />
    </>
  );
}
