import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceArticleSchema, serviceSchema } from "@/lib/schema";
import { getServiceForPage, getServicePageMetadata } from "@/lib/service-page";
import { getExpandedServiceFaqs } from "@/data/serviceFaqs";
import { MediaBuyingHero } from "@/components/services/media-buying/MediaBuyingHero";
import { MediaBuyingOffer } from "@/components/services/media-buying/MediaBuyingOffer";
import { MediaBuyingWhyItMatters } from "@/components/services/media-buying/MediaBuyingWhyItMatters";
import { MediaBuyingWhyChooseMe } from "@/components/services/media-buying/MediaBuyingWhyChooseMe";
import { MediaBuyingProcess } from "@/components/services/media-buying/MediaBuyingProcess";
import { MediaBuyingPricing } from "@/components/services/media-buying/MediaBuyingPricing";
import { MediaBuyingServiceAreas } from "@/components/services/media-buying/MediaBuyingServiceAreas";
import { MediaBuyingFAQ } from "@/components/services/media-buying/MediaBuyingFAQ";
import { MediaBuyingCTA } from "@/components/services/media-buying/MediaBuyingCTA";

export const metadata: Metadata = getServicePageMetadata("media-buying");

export default function MediaBuyingPage() {
  const service = getServiceForPage("media-buying");

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
      <MediaBuyingHero />
      <MediaBuyingOffer />
      <MediaBuyingWhyItMatters />
      <MediaBuyingWhyChooseMe />
      <MediaBuyingProcess />
      <MediaBuyingPricing />
      <MediaBuyingServiceAreas />
      <MediaBuyingFAQ />
      <MediaBuyingCTA />
    </>
  );
}
