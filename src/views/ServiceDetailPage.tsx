// ============================================================================
// VIEW: ServiceDetailPage
// Frame-Cipher's thin-route/thick-view pattern: every service slug resolves to
// its bespoke component in src/components/service/<slug>/ (see service-registry).
// Slugs without a bespoke component yet fall back to the shared layout below.
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
import { SERVICE_PAGE_COMPONENTS } from "./service-registry";

/** Shared layout for services that don't have a bespoke component yet. */
export function ServiceDetailLayout({ service }: { service: Service }) {
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

export function ServiceDetailPage({ service }: { service: Service }) {
  const CustomComponent = SERVICE_PAGE_COMPONENTS[service.slug];
  return <CustomComponent service={service} />;
}
