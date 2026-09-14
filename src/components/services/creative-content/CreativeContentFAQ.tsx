"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

const faqItems = [
  {
    "question": "How do you ensure content avoids AI duplication penalties?",
    "answer": "All copy is written from custom outlines, incorporates primary research, and follows rigorous anti-cliché filters. We prioritize unique viewpoints, concrete numbers, and actionable frameworks that generic language models cannot replicate."
  },
  {
    "question": "Do you handle content uploading and CMS publishing?",
    "answer": "Yes. We format and publish content directly into WordPress, Webflow, Next.js MDX pipelines, or Shopify stores, including metadata, image alt tags, and internal link integration."
  },
  {
    "question": "Can you adapt copy to our existing brand tone of voice?",
    "answer": "Absolutely. During initial onboarding, we examine your existing top-performing assets, customer feedback, and brand guidelines to establish a consistent, authentic voice across all channels."
  },
  {
    "question": "How is creative content performance measured?",
    "answer": "We evaluate content effectiveness based on organic search impressions, average engagement time, scroll depth, conversion assist attribution, and direct lead or transaction volume."
  },
  {
    "question": "What is the typical turnaround time for written assets?",
    "answer": "Standard articles and landing page copy are delivered within 3 to 5 business days for initial review, with revisions completed within 24 to 48 hours."
  },
  {
    "question": "Do you provide revisions on drafted content?",
    "answer": "Yes. Each deliverable includes two comprehensive revision rounds to guarantee every paragraph aligns precisely with your brand standards and goals."
  }
];

export function CreativeContentFAQ() {
  return (
    <section className="border-t border-border/60 py-20">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Clear, honest answers about our creative content strategy & copywriting services scope, deliverables, and timelines.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <FAQAccordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
