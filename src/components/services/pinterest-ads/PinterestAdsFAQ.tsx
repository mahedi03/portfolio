"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

const faqItems = [
  {
    "question": "How do Pinterest Ads differ from Facebook and Instagram ads?",
    "answer": "Facebook and Instagram are disruption platforms where ads interrupt personal social browsing. Pinterest is a search-and-discovery engine where users actively look for products, ideas, and solutions, yielding higher intent and longer shopping consideration cycles."
  },
  {
    "question": "What is the recommended budget for Pinterest advertising?",
    "answer": "We suggest starting with at least $1,000 per month in ad spend to collect sufficient click and conversion data, test multiple keyword themes, and enable Pinterest's conversion optimization algorithms."
  },
  {
    "question": "Can B2B companies succeed with Pinterest Ads?",
    "answer": "While consumer goods (fashion, home, beauty, food) are natural fits, B2B brands offering design software, business templates, marketing tools, or online education also find high-converting audiences at low CPCs."
  },
  {
    "question": "What creative dimensions are required for Pinterest Ads?",
    "answer": "Pinterest requires a 2:3 vertical aspect ratio (such as 1000 x 1500 pixels). Standard square or horizontal assets perform poorly and are heavily penalized in user engagement."
  },
  {
    "question": "How long does it take to see sales from Pinterest Ads?",
    "answer": "Because Pinterest users often plan in advance, consideration cycles can take 7 to 21 days. Initial traffic and add-to-carts appear immediately, with full ROAS stabilizing over the first 30 to 45 days."
  },
  {
    "question": "Do I need an existing organic Pinterest account to run ads?",
    "answer": "Yes, a free Pinterest Business account is required. We can assist in converting your existing profile or creating an optimized business presence from scratch."
  }
];

export function PinterestAdsFAQ() {
  return (
    <section className="border-t border-border/60 py-20">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Clear, honest answers about our pinterest ads management for ecommerce & dtc brands scope, deliverables, and timelines.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <FAQAccordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
