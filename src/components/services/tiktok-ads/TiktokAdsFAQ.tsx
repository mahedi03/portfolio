"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

const faqItems = [
  {
    "question": "How does TikTok advertising differ from Facebook and Instagram ads?",
    "answer": "TikTok requires native, unpolished, sound-on vertical video that looks like user-generated content. Polished corporate ads that perform on Facebook almost always fail on TikTok due to rapid user swipe behavior."
  },
  {
    "question": "What is a Spark Ad and why are they so effective?",
    "answer": "Spark Ads allow you to sponsor and boost organic TikTok videos from your own account or a creator's profile while retaining all organic comments, shares, likes, and profile visits, yielding higher credibility and lower acquisition costs."
  },
  {
    "question": "What is the minimum ad budget to start advertising on TikTok?",
    "answer": "We recommend a minimum monthly media spend of $1,000 to $1,500. This provides the TikTok algorithm with adequate data volume to exit learning phases and identify high-converting buyer clusters."
  },
  {
    "question": "Do you supply the video content or does our team provide it?",
    "answer": "We offer flexible creative options: we can script and edit ads using your existing raw footage and product videos, coordinate with vetted UGC creators, or provide detailed storyboards for your internal team to shoot."
  },
  {
    "question": "Why is the TikTok Events API critical for tracking?",
    "answer": "Browser-based pixels fail to record up to 30% of conversions due to mobile in-app browser restrictions and cookie blockers. The server-side Events API sends conversion data directly from your server to TikTok, ensuring complete tracking accuracy."
  },
  {
    "question": "Can TikTok Ads work for professional or B2B businesses?",
    "answer": "Yes. While B2C ecommerce is the largest category on TikTok, educational products, SaaS apps, career coaching, and professional services are rapidly finding high-intent audiences at low acquisition costs."
  }
];

export function TiktokAdsFAQ() {
  return (
    <section className="border-t border-border/60 py-20">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Clear, honest answers about our tiktok ads management services scope, deliverables, and timelines.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <FAQAccordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
