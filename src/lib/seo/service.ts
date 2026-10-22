// Service + service WebPage schemas for detail pages.

import type { Service } from "@/types";
import { siteConfig } from "@/config/site";
import { absoluteSiteUrl } from "./site";

/** Normalizes the messy `serviceAreas` (string or string[]) into schema-ready names. */
function resolveAreaServed(service: Service): string[] {
  if (Array.isArray(service.serviceAreas)) {
    const names = service.serviceAreas.map((a) => a.trim()).filter(Boolean);
    if (names.length > 0) return names;
  }
  return ["Bangladesh", "Worldwide"];
}

export function serviceSchema(service: Service) {
  const url = absoluteSiteUrl(`/services/${service.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: service.title,
    name: service.title,
    description: service.metaDescription,
    provider: { "@id": `${absoluteSiteUrl("/")}#organization` },
    areaServed: resolveAreaServed(service),
    url,
  };
}

/** WebPage node connecting a service page to the site, service, and breadcrumb. */
export function serviceWebPageSchema(service: Service) {
  const url = absoluteSiteUrl(`/services/${service.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: service.metaTitle,
    description: service.metaDescription,
    isPartOf: { "@id": `${absoluteSiteUrl("/")}#website` },
    about: { "@id": `${url}#service` },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    inLanguage: siteConfig.locale.replace("_", "-"),
  };
}
