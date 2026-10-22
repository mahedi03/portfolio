import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowUpRight, HelpCircle } from "lucide-react";

interface Problem {
  number: string;
  title: string;
  description: string;
  services: { name: string; href: string }[];
  cta: string;
  href: string;
}

const problems: Problem[] = [
  {
    number: "01",
    title: "Get More Qualified Leads & Customers",
    description: "For businesses that need predictable leads, online sales, and lower customer acquisition costs.",
    services: [
      { name: "Meta Ads", href: "/services/meta-ads" },
      { name: "Google Ads", href: "/services/google-ads" },
      { name: "SEO Services", href: "/services/seo" },
      { name: "Local SEO", href: "/services/local-seo" },
      { name: "TikTok Ads", href: "/services/tiktok-ads" },
      { name: "Landing Pages", href: "/services/website-marketing" },
    ],
    cta: "Explore Paid & Search Growth",
    href: "/services/media-buying",
  },
  {
    number: "02",
    title: "Build a High-Converting Web Presence",
    description: "For businesses whose current website is slow, outdated, confusing, or fails to turn visitors into buyers.",
    services: [
      { name: "Next.js Development", href: "/services/website-development" },
      { name: "Technical SEO", href: "/services/technical-seo" },
      { name: "CRO & Speed", href: "/services/cro" },
      { name: "Business Website", href: "/services/website-marketing" },
      { name: "Analytics & Tracking", href: "/services/analytics-tracking" },
    ],
    cta: "Explore Web Engineering",
    href: "/services/website-development",
  },
  {
    number: "03",
    title: "Scale Brand Authority & Organic Discovery",
    description: "For businesses looking to dominate search engines, AI answer engines (AEO/GEO), and social feeds.",
    services: [
      { name: "Technical SEO", href: "/services/technical-seo" },
      { name: "Off-Page SEO & Links", href: "/services/off-page-seo" },
      { name: "SEO Content Writing", href: "/services/seo-content-writing" },
      { name: "ChatGPT Ads & AEO", href: "/services/chatgpt-ads" },
      { name: "Social Media Strategy", href: "/services/social-media-management" },
    ],
    cta: "Explore Authority Systems",
    href: "/services/seo",
  },
  {
    number: "04",
    title: "End-to-End 360 Growth & Attribution",
    description: "For established brands tired of juggling 5 uncoordinated vendors with zero unified accountability.",
    services: [
      { name: "Growth Strategy", href: "/services/marketing-strategy" },
      { name: "Creative Content", href: "/services/creative-content" },
      { name: "Media Buying", href: "/services/media-buying" },
      { name: "Server Tracking & CAPI", href: "/services/analytics-tracking" },
      { name: "Content Marketing", href: "/services/content-marketing" },
    ],
    cta: "Explore 360 Architecture",
    href: "/services/marketing-strategy",
  },
];

export function ServicesProblemSelector() {
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20 lg:py-28">
      <Container className="max-w-6xl">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <HelpCircle className="size-3.5" />
            Problem Diagnostic / Start Here
          </div>
          <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            What Challenge Are You Trying to Solve?
          </h2>
          <p className="mt-3 text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
            You don&apos;t necessarily need every service. Start with the core commercial bottleneck holding your business back, and explore the exact architecture to fix it.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {problems.map((prob, index) => (
            <Reveal key={prob.number} delay={index * 0.08}>
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card/70 p-7 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-elevated md:p-8">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-bold tracking-tight text-primary/80 group-hover:text-primary transition-colors">
                      {prob.number}
                    </span>
                    <span className="h-1.5 w-8 rounded-full bg-border transition-all group-hover:w-12 group-hover:bg-primary" />
                  </div>

                  <h3 className="mt-6 text-xl font-display font-bold text-foreground">
                    {prob.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {prob.description}
                  </p>

                  <div className="mt-6 border-t border-border/50 pt-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80">
                      Primary Relevant Solutions:
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {prob.services.map((s) => (
                        <Link
                          key={s.name}
                          href={s.href}
                          className="rounded-lg border border-border bg-surface/80 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-border/40 pt-5">
                  <Link
                    href={prob.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    {prob.cta} <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
