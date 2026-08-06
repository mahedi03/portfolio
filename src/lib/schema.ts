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
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.jobTitle,
    url: siteConfig.url,
    email: siteConfig.author.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.author.location.city,
      addressCountry: siteConfig.author.location.country,
    },
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
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** FAQPage schema */
export function faqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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

/** Service schema for individual service pages */
export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    url: absoluteUrl(`/services/${service.slug}`),
  };
}

/** BlogPosting schema for blog article pages */
export function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.coverImage),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
  };
}

/** CreativeWork/Project schema for portfolio project pages */
export function projectSchema(project: PortfolioProject) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.metaDescription,
    image: absoluteUrl(project.coverImage),
    creator: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    url: absoluteUrl(`/portfolio/${project.slug}`),
  };
}

/** Article schema for case studies */
export function caseStudySchema(caseStudy: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.metaDescription,
    image: absoluteUrl(caseStudy.coverImage),
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/case-studies/${caseStudy.slug}`),
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
