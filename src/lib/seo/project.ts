// CreativeWork/Project schema — portfolio project pages.

import type { PortfolioProject } from "@/types";
import { absoluteSiteUrl } from "./site";

export function projectSchema(project: PortfolioProject) {
  const url = absoluteSiteUrl(`/portfolio/${project.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name: project.title,
    description: project.metaDescription,
    image: absoluteSiteUrl(project.coverImage),
    creator: { "@id": `${absoluteSiteUrl("/about")}#person` },
    url,
  };
}
