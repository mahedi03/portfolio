import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceArticleSchema, serviceSchema } from "@/lib/schema";
import { getServiceForPage, getServicePageMetadata } from "@/lib/service-page";
import { getExpandedServiceFaqs } from "@/data/serviceFaqs";
import { ChatgptAdsHero } from "@/components/services/chatgpt-ads/ChatgptAdsHero";
import { ChatgptAdsOffer } from "@/components/services/chatgpt-ads/ChatgptAdsOffer";
import { ChatgptAdsWhyItMatters } from "@/components/services/chatgpt-ads/ChatgptAdsWhyItMatters";
import { ChatgptAdsWhyChooseMe } from "@/components/services/chatgpt-ads/ChatgptAdsWhyChooseMe";
import { ChatgptAdsProcess } from "@/components/services/chatgpt-ads/ChatgptAdsProcess";
import { ChatgptAdsPricing } from "@/components/services/chatgpt-ads/ChatgptAdsPricing";
import { ChatgptAdsServiceAreas } from "@/components/services/chatgpt-ads/ChatgptAdsServiceAreas";
import { ChatgptAdsFAQ } from "@/components/services/chatgpt-ads/ChatgptAdsFAQ";
import { ChatgptAdsCTA } from "@/components/services/chatgpt-ads/ChatgptAdsCTA";

export const metadata: Metadata = getServicePageMetadata("chatgpt-ads");

export default function ChatgptAdsPage() {
  const service = getServiceForPage("chatgpt-ads");

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
      <ChatgptAdsHero />
      <ChatgptAdsOffer />
      <ChatgptAdsWhyItMatters />
      <ChatgptAdsWhyChooseMe />
      <ChatgptAdsProcess />
      <ChatgptAdsPricing />
      <ChatgptAdsServiceAreas />
      <ChatgptAdsFAQ />
      <ChatgptAdsCTA />
    </>
  );
}
