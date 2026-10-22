// WebPage schema — static, collection, and service hub pages.

import { siteConfig } from "@/config/site";
import { absoluteSiteUrl } from "./site";

export function webPageSchema({
  name,
  description,
  path,
  breadcrumbPath,
}: {
  name: string;
  description: string;
  path: string;
  breadcrumbPath?: string;
}) {
  const url = absoluteSiteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${absoluteSiteUrl("/")}#website` },
    ...(breadcrumbPath
      ? { breadcrumb: { "@id": `${absoluteSiteUrl(breadcrumbPath)}#breadcrumb` } }
      : {}),
    inLanguage: siteConfig.locale.replace("_", "-"),
  };
}
