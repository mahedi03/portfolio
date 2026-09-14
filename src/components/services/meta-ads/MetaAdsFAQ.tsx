"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

const faqItems = [
  {
    "question": "How much budget is required to start advertising on Meta?",
    "answer": "We recommend a minimum monthly ad budget of $1,000 (roughly $30-$35 per day) to allow Meta's algorithm to exit the learning phase and generate sufficient statistical data for optimization."
  },
  {
    "question": "What is Meta Conversions API (CAPI) and do I need it?",
    "answer": "Yes. Due to browser tracking restrictions (like Apple's iOS 14.5+), standard browser pixels miss 20-30% of conversion data. CAPI sends conversion events directly from your web server to Meta, restoring tracking accuracy and lowering ad costs."
  },
  {
    "question": "How often should new ad creatives be tested?",
    "answer": "For active ad accounts, we test fresh creative concepts every week. Continuous creative testing prevents ad fatigue, keeps click-through rates high, and sustains consistent return on ad spend."
  },
  {
    "question": "Can Meta Ads work for B2B lead generation?",
    "answer": "Yes, exceptionally well. By using Meta's Instant Lead Forms, localized job title targeting, and retargeting website visitors, B2B companies routinely generate qualified leads at lower costs than LinkedIn."
  },
  {
    "question": "What ROAS (Return on Ad Spend) can I expect?",
    "answer": "Target ROAS depends heavily on your product margins and price point. Healthy ecommerce brands typically aim for 2.5x to 4.5x blended ROAS, while high-ticket lead generation focuses on cost per qualified acquisition."
  },
  {
    "question": "Do I own my ad account and audience assets?",
    "answer": "Yes, absolutely. You retain complete administrative control of your Meta Business Manager, ad accounts, pixel datasets, and billing details. We connect as an authorized Agency Partner."
  }
];

export function MetaAdsFAQ() {
  return (
    <section className="border-t border-border/60 py-20">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Clear, honest answers about our meta ads management (facebook & instagram) scope, deliverables, and timelines.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <FAQAccordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
