"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

const faqItems = [
  {
    "question": "How do you decide which ad platforms my business should use?",
    "answer": "Platform selection is dictated by your product offering, target demographic, and sales cycle. High-consideration B2B services belong on Google Search and LinkedIn; visually engaging consumer products thrive on Meta, TikTok, and Pinterest."
  },
  {
    "question": "What is the recommended minimum ad spend for cross-platform advertising?",
    "answer": "For effective cross-channel media buying, we recommend a combined monthly media spend of at least $1,500 to $2,500 to provide adequate budget for statistical testing across multiple platforms."
  },
  {
    "question": "How do you prevent ad fatigue from increasing acquisition costs?",
    "answer": "We maintain an active creative pipeline, introducing new visual hooks, headlines, and angles weekly. Ad fatigue is identified through declining click-through rates and rising frequency, prompting automated ad rotation."
  },
  {
    "question": "Do I have direct access to my advertising accounts?",
    "answer": "Yes. You maintain full administrative ownership of your ad accounts on Meta, Google, TikTok, and other platforms. We connect as partner agencies or managers with authorized access."
  },
  {
    "question": "How do you track sales across multiple ad platforms accurately?",
    "answer": "We implement server-side tracking (Meta CAPI, TikTok Events API, Google Enhanced Conversions) and use clean UTM parameter schemas to analyze platform data alongside Google Analytics 4."
  },
  {
    "question": "How frequently will I receive performance updates?",
    "answer": "Clients receive access to a 24/7 live analytics dashboard, weekly summary updates, and a comprehensive monthly strategic review meeting."
  }
];

export function MediaBuyingFAQ() {
  return (
    <section className="border-t border-border/60 py-20">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Clear, honest answers about our cross-platform media buying & paid advertising scope, deliverables, and timelines.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <FAQAccordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
