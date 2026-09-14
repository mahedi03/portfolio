import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceArticleSchema, serviceSchema } from "@/lib/schema";
import { getServiceForPage, getServicePageMetadata } from "@/lib/service-page";
import { getExpandedServiceFaqs } from "@/data/serviceFaqs";
import { WebsiteMarketingHero } from "@/components/services/website-marketing/WebsiteMarketingHero";
import { WebsiteMarketingOffer } from "@/components/services/website-marketing/WebsiteMarketingOffer";
import { WebsiteMarketingWhyItMatters } from "@/components/services/website-marketing/WebsiteMarketingWhyItMatters";
import { WebsiteMarketingWhyChooseMe } from "@/components/services/website-marketing/WebsiteMarketingWhyChooseMe";
import { WebsiteMarketingProcess } from "@/components/services/website-marketing/WebsiteMarketingProcess";
import { WebsiteMarketingPricing } from "@/components/services/website-marketing/WebsiteMarketingPricing";
import { WebsiteMarketingServiceAreas } from "@/components/services/website-marketing/WebsiteMarketingServiceAreas";
import { WebsiteMarketingFAQ } from "@/components/services/website-marketing/WebsiteMarketingFAQ";
import { WebsiteMarketingCTA } from "@/components/services/website-marketing/WebsiteMarketingCTA";

export const metadata: Metadata = getServicePageMetadata("website-marketing");

export default function WebsiteMarketingPage() {
  const service = getServiceForPage("website-marketing");

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
      <WebsiteMarketingHero />
      <WebsiteMarketingOffer />
      <WebsiteMarketingWhyItMatters />
      <WebsiteMarketingWhyChooseMe />
      <WebsiteMarketingProcess />
      <WebsiteMarketingPricing />
      <WebsiteMarketingServiceAreas />
      <WebsiteMarketingFAQ />
      <WebsiteMarketingCTA />
    </>
  );
}
