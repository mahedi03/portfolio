import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceArticleSchema, serviceSchema } from "@/lib/schema";
import { getServiceForPage, getServicePageMetadata } from "@/lib/service-page";
import { getExpandedServiceFaqs } from "@/data/serviceFaqs";
import { SocialMediaManagementHero } from "@/components/services/social-media-management/SocialMediaManagementHero";
import { SocialMediaManagementOffer } from "@/components/services/social-media-management/SocialMediaManagementOffer";
import { SocialMediaManagementWhyItMatters } from "@/components/services/social-media-management/SocialMediaManagementWhyItMatters";
import { SocialMediaManagementWhyChooseMe } from "@/components/services/social-media-management/SocialMediaManagementWhyChooseMe";
import { SocialMediaManagementProcess } from "@/components/services/social-media-management/SocialMediaManagementProcess";
import { SocialMediaManagementPricing } from "@/components/services/social-media-management/SocialMediaManagementPricing";
import { SocialMediaManagementServiceAreas } from "@/components/services/social-media-management/SocialMediaManagementServiceAreas";
import { SocialMediaManagementFAQ } from "@/components/services/social-media-management/SocialMediaManagementFAQ";
import { SocialMediaManagementCTA } from "@/components/services/social-media-management/SocialMediaManagementCTA";

export const metadata: Metadata = getServicePageMetadata("social-media-management");

export default function SocialMediaManagementPage() {
  const service = getServiceForPage("social-media-management");

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
      <SocialMediaManagementHero />
      <SocialMediaManagementOffer />
      <SocialMediaManagementWhyItMatters />
      <SocialMediaManagementWhyChooseMe />
      <SocialMediaManagementProcess />
      <SocialMediaManagementPricing />
      <SocialMediaManagementServiceAreas />
      <SocialMediaManagementFAQ />
      <SocialMediaManagementCTA />
    </>
  );
}
