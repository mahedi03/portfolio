import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceArticleSchema, serviceSchema } from "@/lib/schema";
import { getServiceForPage, getServicePageMetadata } from "@/lib/service-page";
import { getExpandedServiceFaqs } from "@/data/serviceFaqs";
import { CreativeContentHero } from "@/components/services/creative-content/CreativeContentHero";
import { CreativeContentOffer } from "@/components/services/creative-content/CreativeContentOffer";
import { CreativeContentWhyItMatters } from "@/components/services/creative-content/CreativeContentWhyItMatters";
import { CreativeContentWhyChooseMe } from "@/components/services/creative-content/CreativeContentWhyChooseMe";
import { CreativeContentProcess } from "@/components/services/creative-content/CreativeContentProcess";
import { CreativeContentPricing } from "@/components/services/creative-content/CreativeContentPricing";
import { CreativeContentServiceAreas } from "@/components/services/creative-content/CreativeContentServiceAreas";
import { CreativeContentFAQ } from "@/components/services/creative-content/CreativeContentFAQ";
import { CreativeContentCTA } from "@/components/services/creative-content/CreativeContentCTA";

export const metadata: Metadata = getServicePageMetadata("creative-content");

export default function CreativeContentPage() {
  const service = getServiceForPage("creative-content");

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
      <CreativeContentHero />
      <CreativeContentOffer />
      <CreativeContentWhyItMatters />
      <CreativeContentWhyChooseMe />
      <CreativeContentProcess />
      <CreativeContentPricing />
      <CreativeContentServiceAreas />
      <CreativeContentFAQ />
      <CreativeContentCTA />
    </>
  );
}
