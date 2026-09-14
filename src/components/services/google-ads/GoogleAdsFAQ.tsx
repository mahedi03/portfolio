"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

const faqItems = [
  {
    "question": "What minimum ad budget do I need for Google Ads?",
    "answer": "We recommend a minimum ad spend of $500 to $1,000 per month (or equivalent in local currency) to generate sufficient search volume, collect statistically valid conversion data, and optimize bidding algorithms effectively."
  },
  {
    "question": "How quickly do Google Ads campaigns produce results?",
    "answer": "Search campaigns begin capturing impressions and traffic within 24 to 48 hours of launch. Most accounts achieve optimized conversion costs within the first 30 days as search terms are refined and negative keywords are implemented."
  },
  {
    "question": "Do I retain ownership of my Google Ads account?",
    "answer": "Yes, 100%. You retain administrative ownership of your Google Ads account, payment profiles, and data history. We connect through our Google Partner manager account with explicit permissions."
  },
  {
    "question": "How do you prevent money being wasted on accidental clicks?",
    "answer": "We maintain curated negative keyword lists, disable broad match expansion on unverified terms, eliminate irrelevant network placements, and review search query reports multiple times per week."
  },
  {
    "question": "What is the role of Quality Score in lowering costs?",
    "answer": "Quality Score measures the relevance of your keywords, ad copy, and landing page. High Quality Scores earn ad auction discounts, allowing you to achieve top page positions at significantly lower costs than competitors."
  },
  {
    "question": "Do you provide bilingual ads for Bangladesh and international audiences?",
    "answer": "Yes. We create and optimize campaigns in both English and Bengali (Bangla), accounting for local phonetic search patterns and transliterated queries."
  }
];

export function GoogleAdsFAQ() {
  return (
    <section className="border-t border-border/60 py-20">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Clear, honest answers about our google ads management & ppc optimization scope, deliverables, and timelines.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <FAQAccordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
