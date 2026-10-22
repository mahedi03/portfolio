// ============================================================================
// SERVICE PAGE COMPONENT: content-marketing
// One bespoke component per service page (Frame-Cipher convention). Content
// comes from data/services.ts; bespoke edits (custom section order, extra
// sections, service-specific proof blocks) belong in this file.
// ============================================================================

import type { Service } from "@/types";
import {
  ServiceHero,
  ServiceOfferings,
  ServiceWhyItMatters,
  ServiceWhyChooseMe,
  ServiceProcess,
  ServicePricing,
  ServiceAreas,
  ServiceDeliverables,
  ServiceLongForm,
  ServiceFAQ,
  RelatedServices,
  ServiceCTA,
} from "@/components/service";

export function ContentMarketingServicePage({ service }: { service: Service }) {
  if (service.slug !== "content-marketing") return null;

  return (
    <>
      <ServiceHero service={service} />
      <ServiceOfferings service={service} />
      <ServiceWhyItMatters service={service} />
      <ServiceWhyChooseMe service={service} />
      <ServiceProcess service={service} />
      <ServicePricing service={service} />
      <ServiceAreas service={service} />
      <ServiceDeliverables service={service} />
      <ServiceLongForm service={service} />
      <ServiceFAQ service={service} />
      <RelatedServices service={service} />
      <ServiceCTA />
    </>
  );
}
