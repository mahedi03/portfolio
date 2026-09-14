"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

const faqItems = [
  {
    "question": "What is the difference between SEO, AEO, and GEO?",
    "answer": "SEO optimizes your website to rank in traditional search engine results pages (SERPs). AEO (Answer Engine Optimization) formats content to be directly quoted by voice assistants and AI summary widgets. GEO (Generative Engine Optimization) builds topical authority so AI language models (like ChatGPT and Claude) recommend your brand organically."
  },
  {
    "question": "How long does it take to see results from website marketing?",
    "answer": "Technical fixes and on-page improvements often show initial ranking movements within 30 to 60 days. Substantial organic traffic growth and topical authority maturation typically unfold over 3 to 6 months of consistent execution."
  },
  {
    "question": "Do I need to rebuild my existing website to market it?",
    "answer": "Not necessarily. In most cases, we can optimize your existing website on WordPress, Shopify, Next.js, or custom code. If your current site suffers from fatal technical speed or architectural flaws, we will clearly advise you on remediation options."
  },
  {
    "question": "Can any agency guarantee #1 rankings on Google?",
    "answer": "No. Google's official documentation explicitly warns against any agency promising guaranteed #1 rankings. We deliver proven, repeatable optimization systems grounded in technical evidence, search intent, and conversion value."
  },
  {
    "question": "How do you track website marketing return on investment (ROI)?",
    "answer": "We track key business metrics through Google Analytics 4, Google Search Console, and conversion tracking: organic impressions, qualified organic clicks, form submissions, phone call clicks, and direct ecommerce revenue."
  },
  {
    "question": "How do we get started?",
    "answer": "We begin with a complimentary website audit and discovery consultation to review your current performance, identify immediate opportunities, and formulate a customized growth proposal."
  }
];

export function WebsiteMarketingFAQ() {
  return (
    <section className="border-t border-border/60 py-20">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Clear, honest answers about our full-funnel website marketing services scope, deliverables, and timelines.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <FAQAccordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
