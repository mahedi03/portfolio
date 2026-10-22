// Article schema — long-form editorial content on service pages.

import type { Service } from "@/types";
import { siteConfig } from "@/config/site";
import { absoluteSiteUrl } from "./site";
import { SITE_OG_IMAGE } from "./site";

export function serviceArticleSchema(service: Service) {
  const url = absoluteSiteUrl(`/services/${service.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: service.title,
    description: service.metaDescription,
    image: absoluteSiteUrl(service.image ?? SITE_OG_IMAGE),
    author: { "@id": `${absoluteSiteUrl("/about")}#person` },
    publisher: { "@id": `${absoluteSiteUrl("/")}#organization` },
    mainEntityOfPage: { "@id": `${url}#webpage` },
    articleSection: "Services",
    inLanguage: siteConfig.locale.replace("_", "-"),
  };
}
