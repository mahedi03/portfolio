// Organization schema — the single brand-level entity for the whole site.

import { siteConfig } from "@/config/site";
import { absoluteSiteUrl } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteSiteUrl("/")}#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteSiteUrl("/logo.webp"),
    sameAs: Object.values(siteConfig.social),
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.author.email,
      telephone: siteConfig.author.phone,
      contactType: "customer service",
    },
  };
}
