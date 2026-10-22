// Person schema — establishes the author entity (referenced by @id site-wide).

import { siteConfig } from "@/config/site";
import { absoluteSiteUrl } from "./site";

export function personSchema() {
  const url = absoluteSiteUrl("/about");

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.jobTitle,
    description: siteConfig.author.bio,
    url,
    image: absoluteSiteUrl(siteConfig.author.image),
    email: siteConfig.author.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.author.location.city,
      addressCountry: siteConfig.author.location.country,
    },
    worksFor: { "@id": `${absoluteSiteUrl("/")}#organization` },
    sameAs: Object.values(siteConfig.social),
  };
}
