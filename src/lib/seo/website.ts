// WebSite schema with the site search action — sitelinks searchbox eligibility.

import { absoluteSiteUrl } from "./site";
import { SITE_NAME } from "./site";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteSiteUrl("/")}#website`,
    name: SITE_NAME,
    url: absoluteSiteUrl("/"),
  };
}
