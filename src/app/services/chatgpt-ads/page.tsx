import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { getServiceForPage, getServicePageMetadata } from "@/lib/service-page";
import { getExpandedServiceFaqs } from "@/data/serviceFaqs";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceLongForm } from "@/components/services/ServiceLongForm";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceDeliverables } from "@/components/services/ServiceDeliverables";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata: Metadata = getServicePageMetadata("chatgpt-ads");

export default function ChatgptAdsPage() {
  const service = getServiceForPage("chatgpt-ads");

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.title, path: "/services/" + service.slug }]), serviceSchema(service), faqSchema(getExpandedServiceFaqs(service))]} />
      <ServiceHero service={service} />
      <ServiceLongForm service={service} />
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
