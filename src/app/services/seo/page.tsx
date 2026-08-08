import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceArticleSchema, serviceSchema } from "@/lib/schema";
import { getServiceForPage, getServicePageMetadata } from "@/lib/service-page";
import { getExpandedServiceFaqs } from "@/data/serviceFaqs";
import { ServiceHero } from "@/components/services/ServiceHero";
import { SeoServicesContent } from "@/components/services/SeoServicesContent";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceDeliverables } from "@/components/services/ServiceDeliverables";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata: Metadata = getServicePageMetadata("seo");

export default function SeoPage() {
  const service = getServiceForPage("seo");

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "SEO Services", path: "/services/seo" }]), serviceSchema(service), serviceArticleSchema(service), faqSchema(getExpandedServiceFaqs(service), "/services/" + service.slug)]} />
      <ServiceHero service={service} />
      <SeoServicesContent />
      <ServiceBenefits service={service} />
      <ServiceFeatures service={service} />
      <ServiceProcess service={service} />
      <ServiceDeliverables service={service} />
      <ServiceFAQ service={service} />
      <RelatedServices service={service} />
      <ServiceCTA service={service} />
    </>
  );
}
