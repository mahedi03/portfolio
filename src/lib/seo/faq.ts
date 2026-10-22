// FAQPage schema — mirrors the visible FAQ accordion so the schema and UI can
// never diverge (both render from the same resolved FAQ list).

import type { FAQItem } from "@/types";
import { absoluteSiteUrl } from "./site";

export function faqSchema(faqs: FAQItem[], path?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(path ? { "@id": `${absoluteSiteUrl(path)}#faq` } : {}),
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
