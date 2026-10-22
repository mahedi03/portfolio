// ============================================================================
// SCHEMA ROUTER — master index of every JSON-LD builder.
// Mirrors Frame-Cipher's src/lib/seo/schema.ts: all builders re-exported from
// one place so pages can pull any entity from "@/lib/seo".
// ============================================================================

export { personSchema } from "./person";
export { organizationSchema } from "./organization";
export { websiteSchema } from "./website";
export { professionalServiceSchema } from "./local-business";
export { breadcrumbSchema, type BreadcrumbItem } from "./breadcrumb";
export { faqSchema } from "./faq";
export { webPageSchema } from "./webpage";
export { serviceSchema, serviceWebPageSchema } from "./service";
export { serviceArticleSchema } from "./article";
export { projectSchema } from "./project";
export { caseStudySchema } from "./case-study";
export {
  itemListSchema,
  collectionPageSchema,
  type ListItem,
} from "./collection";
