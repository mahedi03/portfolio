// Article schema for case study pages.

import type { CaseStudy } from "@/types";
import { absoluteSiteUrl } from "./site";

export function caseStudySchema(caseStudy: CaseStudy) {
  const url = absoluteSiteUrl(`/case-studies/${caseStudy.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: caseStudy.title,
    description: caseStudy.metaDescription,
    image: absoluteSiteUrl(caseStudy.coverImage),
    author: { "@id": `${absoluteSiteUrl("/about")}#person` },
    publisher: { "@id": `${absoluteSiteUrl("/")}#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
  };
}
