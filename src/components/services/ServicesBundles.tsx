import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Boxes, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface Bundle {
  number: string;
  title: string;
  bestFor: string;
  includes: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}

const bundles: Bundle[] = [
  {
    number: "01",
    title: "Launch Engine",
    bestFor: "New startups & businesses launching an offer",
    includes: "Brand foundations, Next.js landing page, GA4/Pixel tracking setup, and initial launch assets.",
    features: [
      "Custom responsive Next.js landing page",
      "Server-side GA4 & Meta Pixel setup",
      "Core value proposition & copy direction",
      "Launch ad creative concepts"
    ],
    cta: "Start a Launch Project",
  },
  {
    number: "02",
    title: "Growth Retainer",
    bestFor: "Growing SMEs and DTC brands looking to scale",
    includes: "Continuous paid ad scaling (Meta/Google), monthly SEO optimization, and revenue reporting.",
    features: [
      "Full-funnel Meta & Google Ads management",
      "Weekly creative angle testing",
      "Ongoing technical SEO & keyword ranking",
      "Consolidated monthly attribution reporting"
    ],
    cta: "Explore Growth Retainer",
    recommended: true,
  },
  {
    number: "03",
    title: "E-Commerce Velocity",
    bestFor: "Online stores & product brands scaling orders",
    includes: "Store optimization, product video & photos, catalog ads, and checkout friction removal.",
    features: [
      "Advantage+ catalog ads & product feeds",
      "Mobile checkout & CRO friction audit",
      "Product-focused commercial reels/videos",
      "Meta Conversions API (CAPI) & deduplication"
    ],
    cta: "Scale E-Commerce",
  },
  {
    number: "04",
    title: "Tech & Architecture Build",
    bestFor: "Businesses requiring modern digital platforms",
    includes: "Full custom Next.js web application, CMS integration, speed tuning, and enterprise SEO foundation.",
    features: [
      "Sub-2-second load times & Core Web Vitals 95+",
      "Headless CMS integration (Sanity/Strapi)",
      "Structured data schema markup & sitemaps",
      "Full repository documentation & handoff"
    ],
    cta: "Start a Tech Build",
  },
  {
    number: "05",
    title: "360° Growth Partnership",
    bestFor: "Established brands ready for category leadership",
    includes: "Comprehensive strategy, web engineering, creative media, paid acquisition, and analytics.",
    features: [
      "Complete go-to-market strategic roadmap",
      "Dedicated multi-channel media buying team",
      "In-house commercial creative production",
      "Direct founder oversight & weekly executive steering"
    ],
    cta: "Inquire for 360 Partnership",
  },
];

export function ServicesBundles() {
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20 lg:py-28">
      <Container className="max-w-6xl">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Boxes className="size-3.5" />
            Engagement Models
          </div>
          <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Combine the Right Capabilities for Your Stage
          </h2>
          <p className="mt-3 text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
            Whether you need a dedicated sprint for an immediate launch or an ongoing growth partnership, pick a model that fits your operational needs.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bundles.map((bundle, index) => (
            <Reveal key={bundle.number} delay={index * 0.05}>
              <article className={`relative flex h-full flex-col justify-between rounded-2xl border p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                bundle.recommended
                  ? "border-primary bg-card/90 shadow-elevated"
                  : "border-border/80 bg-card/60 shadow-soft hover:border-primary/40"
              }`}>
                {bundle.recommended && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
                    Most Popular Retainer
                  </span>
                )}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-primary">
                      Package {bundle.number}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">Flexible Scope</span>
                  </div>

                  <h3 className="mt-4 text-xl font-display font-bold text-foreground">
                    {bundle.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-primary">
                    Best for: {bundle.bestFor}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground border-t border-border/50 pt-3">
                    {bundle.includes}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-border/50 pt-4">
                    {bundle.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-foreground/90">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-border/40">
                  <Link
                    href="/contact"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold transition-all ${
                      bundle.recommended
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border bg-card text-foreground hover:bg-surface"
                    }`}
                  >
                    {bundle.cta} <ArrowUpRight className="size-3.5" />
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
