"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

const faqItems = [
  {
    "question": "How is social media management different from social media marketing?",
    "answer": "Social media management focuses on organic profile activity, regular content publishing, community interactions, and maintaining brand reputation. Social media marketing (paid advertising) focuses on committing ad spend into platform algorithms to acquire customers at scale."
  },
  {
    "question": "Do you handle responses to customer messages and comments?",
    "answer": "Yes. Our team monitors your page comments and incoming direct messages, providing prompt, professional, and brand-aligned responses or escalating complex inquiries to your internal team."
  },
  {
    "question": "Will I have an opportunity to review content before it goes live?",
    "answer": "Yes. We deliver a complete monthly content calendar including final visuals, copy, and hashtags in advance for your review and approval before anything is scheduled."
  },
  {
    "question": "Can you create content in both Bengali and English?",
    "answer": "Yes. We specialize in bilingual content creation, tailoring captions and visual messaging to match the linguistic preferences of your specific audience in Bangladesh or internationally."
  },
  {
    "question": "How many platforms should my business be active on?",
    "answer": "We recommend focusing deeply on 1 to 2 core platforms where your target audience actively spends time, rather than spreading resources thin across 5 platforms with mediocre content."
  },
  {
    "question": "What metrics do you track in monthly reports?",
    "answer": "We report on organic reach, follower growth, engagement rate, top-performing posts, customer inquiry volume, and website referral clicks."
  }
];

export function SocialMediaManagementFAQ() {
  return (
    <section className="border-t border-border/60 py-20">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Got Questions?</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Clear, honest answers about our platform-specific social media management scope, deliverables, and timelines.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <FAQAccordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
