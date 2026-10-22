// ProfessionalService / local business schema — used on /contact (and can be
// embedded anywhere a physical business entity is relevant).

import { siteConfig } from "@/config/site";
import { absoluteSiteUrl } from "./site";

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    image: absoluteSiteUrl(siteConfig.ogImage),
    url: siteConfig.url,
    telephone: siteConfig.author.phone,
    email: siteConfig.author.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.author.location.city,
      addressCountry: siteConfig.author.location.country,
    },
    sameAs: Object.values(siteConfig.social),
  };
}
