"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

const faqItems = [
  {
    "question": "Is ChatGPT Ads available for direct billing in Bangladesh?",
    "answer": "Direct advertiser access in OpenAI Ads Manager is currently limited to selected international markets. For Bangladesh-registered entities, we implement a strategic readiness and GEO alignment roadmap so your brand gains organic AI visibility and is prepared to launch the moment billing opens."
  },
  {
    "question": "How do context hints differ from traditional Google Search keywords?",
    "answer": "Google Ads relies on explicit keyword queries typed into a search bar. ChatGPT Ads utilizes context hints—thematic descriptors representing the situation, dilemma, or question a user discusses with the AI model—requiring conversational prompt modeling rather than single keyword matching."
  },
  {
    "question": "What typical advertising budget is required for ChatGPT campaigns?",
    "answer": "OpenAI enforces no rigid minimum spend. Advertisers typically see cost-per-click bids between $3.00 and $5.00, and CPM rates between $25.00 and $60.00 depending on vertical competitiveness. Consulting and management fees are quoted separately based on strategic scope."
  },
  {
    "question": "Can ChatGPT paid ads influence organic ChatGPT answers?",
    "answer": "No. OpenAI maintains a strict wall between algorithmic organic answers and sponsored links. However, our dual-track strategy pairs paid readiness with Generative Engine Optimization (GEO) to optimize your brand for organic AI citations simultaneously."
  },
  {
    "question": "How do you track conversions from conversational ad placements?",
    "answer": "We integrate the Conversions API and server-side tracking pipelines via Google Tag Manager, matching session identifiers and conversion actions directly to your CRM or ecommerce platform."
  },
  {
    "question": "How long does a readiness or launch phase take?",
    "answer": "A complete readiness strategy engagement spans two to four weeks, covering eligibility review, context-hint architecture, and creative assets. Live campaign setup for eligible accounts requires one to two weeks prior to active media spend."
  }
];

export function ChatgptAdsFAQ() {
  return (
    <section className="border-t border-border/60 py-20">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Clear, honest answers about our chatgpt ads strategy & campaign management scope, deliverables, and timelines.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <FAQAccordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
