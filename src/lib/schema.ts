import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";
import type {
  BlogPost,
  CaseStudy,
  FAQItem,
  PortfolioProject,
  Service,
} from "@/types";

// ============================================================================
// STRUCTURED DATA (JSON-LD) GENERATORS
// Each function returns a plain object ready to be JSON.stringify'd inside
// a <script type="application/ld+json"> tag via the <JsonLd /> component.
// ============================================================================

/** Person schema — used site-wide (root layout) to establish the author entity */
export function personSchema() {
  const url = absoluteUrl("/about");

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.jobTitle,
    description: siteConfig.author.bio,
    url,
    image: absoluteUrl(siteConfig.author.image),
    email: siteConfig.author.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.author.location.city,
      addressCountry: siteConfig.author.location.country,
    },
    worksFor: { "@id": `${absoluteUrl("/")}#organization` },
    sameAs: Object.values(siteConfig.social),
  };
}

/** ProfessionalService schema — establishes the business entity for local/service SEO */
export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    image: absoluteUrl(siteConfig.ogImage),
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

/** Organization schema — alternative/complement to Person for brand-level entity */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/logo.png"),
    sameAs: Object.values(siteConfig.social),
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.author.email,
      telephone: siteConfig.author.phone,
      contactType: "customer service",
    },
  };
}

/** WebSite schema with SearchAction — enables sitelinks search box eligibility */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** BreadcrumbList schema — pass an ordered list of {name, path} */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(items.at(-1)?.path ?? "/")}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** FAQPage schema for visible questions and answers on a page. */
export function faqSchema(faqs: FAQItem[], path?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(path ? { "@id": `${absoluteUrl(path)}#faq` } : {}),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** WebPage schema for static and collection pages. */
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
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    ...(breadcrumbPath
      ? { breadcrumb: { "@id": `${absoluteUrl(breadcrumbPath)}#breadcrumb` } }
      : {}),
    inLanguage: siteConfig.locale.replace("_", "-"),
  };
}

/** Service schema for individual service pages */
export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
    serviceType: service.title,
    name: service.title,
    description: service.metaDescription,
    provider: { "@id": `${absoluteUrl("/")}#organization` },
    areaServed: "Worldwide",
    url: absoluteUrl(`/services/${service.slug}`),
  };
}

/** WebPage schema connecting a service page to the site, service, and breadcrumb entities. */
export function serviceWebPageSchema(service: Service) {
  const url = absoluteUrl(`/services/${service.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: service.metaTitle,
    description: service.metaDescription,
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    about: { "@id": `${url}#service` },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    inLanguage: siteConfig.locale.replace("_", "-"),
  };
}

/** Article schema for the long-form editorial content on a service page. */
export function serviceArticleSchema(service: Service) {
  const url = absoluteUrl(`/services/${service.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: service.title,
    description: service.metaDescription,
    image: absoluteUrl(service.image ?? siteConfig.ogImage),
    author: {
      "@id": `${absoluteUrl("/about")}#person`,
    },
    publisher: {
      "@id": `${absoluteUrl("/")}#organization`,
    },
    mainEntityOfPage: {
      "@id": `${url}#webpage`,
    },
    articleSection: "Services",
    inLanguage: siteConfig.locale.replace("_", "-"),
  };
}

/** BlogPosting schema for blog article pages */
export function blogPostingSchema(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.coverImage),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@id": `${absoluteUrl("/about")}#person`,
    },
    publisher: {
      "@id": `${absoluteUrl("/")}#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
  };
}

/** CreativeWork/Project schema for portfolio project pages */
export function projectSchema(project: PortfolioProject) {
  const url = absoluteUrl(`/portfolio/${project.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name: project.title,
    description: project.metaDescription,
    image: absoluteUrl(project.coverImage),
    creator: { "@id": `${absoluteUrl("/about")}#person` },
    url,
  };
}

/** Article schema for case studies */
export function caseStudySchema(caseStudy: CaseStudy) {
  const url = absoluteUrl(`/case-studies/${caseStudy.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: caseStudy.title,
    description: caseStudy.metaDescription,
    image: absoluteUrl(caseStudy.coverImage),
    author: {
      "@id": `${absoluteUrl("/about")}#person`,
    },
    publisher: {
      "@id": `${absoluteUrl("/")}#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
  };
}

/** ItemList schema — for collection pages (portfolio grid, blog index, etc.) */
export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

/** CollectionPage schema wrapper — combine with itemListSchema via hasPart if needed */
export function collectionPageSchema(name: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(path),
  };
}
