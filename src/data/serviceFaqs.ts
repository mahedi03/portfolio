import type { Service } from "@/types";

export function getExpandedServiceFaqs(service: Service) {
  const defaults = [
    {
      question: `Who is ${service.title} best for?`,
      answer: `${service.title} is best for businesses with a clear offer, a defined audience, and the capacity to act on recommendations. We confirm fit during the initial review before work begins.`,
    },
    {
      question: `What is included in ${service.shortTitle}?`,
      answer: `The engagement includes the strategy, implementation, optimisation, and reporting described on this page — with the exact scope agreed around your goals, assets, and current setup.`,
    },
    {
      question: `How long does ${service.shortTitle} take to show results?`,
      answer: `Timing depends on competition, budget, starting point, implementation speed, and the conversion cycle. We set realistic milestones and review progress using agreed business metrics.`,
    },
    {
      question: `How do you measure performance?`,
      answer: `We connect channel metrics with useful outcomes such as qualified enquiries, sales, bookings, conversion rate, visibility, or engagement quality — not vanity metrics alone.`,
    },
    {
      question: `Can you work with our existing website and marketing team?`,
      answer: `Yes. We can execute directly, collaborate with an internal team, or provide clear recommendations and handoff documentation for your existing workflow.`,
    },
    {
      question: `Do you work with businesses outside Bangladesh?`,
      answer: `Yes — projects can be supported remotely for Bangladesh-based and international businesses with async-friendly communication and regular reporting.`,
    },
    {
      question: `How do we get started?`,
      answer: `Send us your goals, current website or account details, target audience, and the result you want to improve. We will review the context and recommend the most useful next step.`,
    },
  ];

  const questions = new Set(service.faqs.map((faq) => faq.question));
  return [...service.faqs, ...defaults.filter((faq) => !questions.has(faq.question))].slice(0, 7);
}
