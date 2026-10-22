import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Target, ArrowUpRight } from "lucide-react";

interface Goal {
  number: string;
  title: string;
  description: string;
  services: { name: string; href: string }[];
}

const goals: Goal[] = [
  {
    number: "01",
    title: "Grow Organic Visibility & Search Authority",
    description: "Get discovered by high-intent buyers on Google Search and AI answer engines (ChatGPT, Perplexity).",
    services: [
      { name: "Technical SEO", href: "/services/technical-seo" },
      { name: "SEO Strategy", href: "/services/seo" },
      { name: "Off-Page Authority", href: "/services/off-page-seo" },
      { name: "Local Maps SEO", href: "/services/local-seo" },
      { name: "SEO Content Writing", href: "/services/seo-content-writing" },
    ],
  },
  {
    number: "02",
    title: "Scale Paid Customer Acquisition & ROAS",
    description: "Turn every ad dollar into measurable conversions through systematic creative testing and server-side tracking.",
    services: [
      { name: "Meta Ads Scaling", href: "/services/meta-ads" },
      { name: "Google Search & Shopping", href: "/services/google-ads" },
      { name: "TikTok Ads", href: "/services/tiktok-ads" },
      { name: "Pinterest Ads", href: "/services/pinterest-ads" },
      { name: "ChatGPT Ads", href: "/services/chatgpt-ads" },
    ],
  },
  {
    number: "03",
    title: "Engineer Fast, Modern Web Platforms",
    description: "Replace slow, fragile websites with lightning-fast Next.js architecture built to convert mobile traffic.",
    services: [
      { name: "Custom Next.js Web Dev", href: "/services/website-development" },
      { name: "High-Converting Landing Pages", href: "/services/website-marketing" },
      { name: "Conversion Rate Optimization", href: "/services/cro" },
      { name: "Analytics & CAPI Infrastructure", href: "/services/analytics-tracking" },
    ],
  },
  {
    number: "04",
    title: "Build Creative & Content That Converts",
    description: "Produce commercial-grade video, copy, and visual assets designed to stop the scroll and build lasting trust.",
    services: [
      { name: "Creative Content & Video", href: "/services/creative-content" },
      { name: "Social Media Systems", href: "/services/social-media-management" },
      { name: "Content Marketing Engine", href: "/services/content-marketing" },
      { name: "Conversion Copywriting", href: "/services/seo-content-writing" },
    ],
  },
];

export function ServicesBusinessGoals() {
  return (
    <section className="border-t border-border/60 bg-gradient-to-b from-surface/40 via-background to-background py-20 lg:py-28">
      <Container className="max-w-6xl">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Target className="size-3.5" />
            Outcome-Driven Roadmap
          </div>
          <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Solutions Built Around What You Want to Achieve
          </h2>
          <p className="mt-3 text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
            Tell us your business objective, and we will configure the precise technical and strategic stack without force-feeding unnecessary packages.
          </p>
        </Reveal>

        <div className="mt-14 space-y-4">
          {goals.map((goal, index) => (
            <Reveal key={goal.number} delay={index * 0.06}>
              <article className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-6 md:p-8 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/90 lg:flex-row lg:items-center">
                <div className="lg:max-w-xl">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-bold text-primary">
                      {goal.number}
                    </span>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {goal.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {goal.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border/40 pt-4 lg:mt-0 lg:border-t-0 lg:pt-0">
                  {goal.services.map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
                    >
                      {s.name} <ArrowUpRight className="size-3 text-muted-foreground group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
