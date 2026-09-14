"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

const faqItems = [
  {
    "question": "How long does it take to rank in Google's Local Map Pack?",
    "answer": "Most businesses experience noticeable improvements in map rankings within 60 to 90 days. Factors influencing speed include existing domain authority, physical address proximity to the searcher, and competitor review volume."
  },
  {
    "question": "What is NAP consistency and why does it matter?",
    "answer": "NAP stands for Name, Address, and Phone number. Google compares your NAP information across hundreds of directories on the web. Inconsistencies like old phone numbers or wrong addresses erode Google's confidence and drop your map rankings."
  },
  {
    "question": "Can I do Local SEO if I do not have a physical storefront?",
    "answer": "Yes. Google supports Service Area Businesses (SABs) that visit or deliver to customers directly. In this setup, your physical street address is hidden while your designated service radius is clearly displayed and ranked."
  },
  {
    "question": "How do you handle Google Business Profile suspensions?",
    "answer": "We audit your profile for policy compliance, prepare verified utility bills and registration documentation, and submit formal reinstatement appeals through Google Support."
  },
  {
    "question": "Do positive reviews directly improve local Google rankings?",
    "answer": "Yes. Review count, review velocity, star rating, and keywords included within customer reviews are among the strongest confirmed local ranking factors evaluated by Google's algorithm."
  },
  {
    "question": "What monthly reporting is provided for local search performance?",
    "answer": "We provide detailed reports showing geo-grid ranking improvements, Google Business Profile direct calls, website visits, direction requests, and organic search impressions."
  }
];

export function LocalSeoFAQ() {
  return (
    <section className="border-t border-border/60 py-20">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Clear, honest answers about our local seo & google business profile optimization scope, deliverables, and timelines.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <FAQAccordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
