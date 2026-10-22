import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Sparkles, ShieldCheck, Target, Layers, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  "Web Engineering",
  "Search & Technical SEO",
  "Paid Media Buying",
  "Social & Creative Content",
  "Attribution & Strategy",
];

export function ServicesHero() {
  return (
    <section className="relative border-b border-border/70 bg-gradient-to-b from-background via-surface/40 to-background py-20 lg:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <Sparkles className="size-3.5 text-primary" />
              19 Specialized Offerings / 5 Growth Pillars
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-[length:var(--text-h1)] font-display font-bold tracking-tight text-foreground">
              Connected Growth Systems Engineered for Predictable Revenue
            </h1>
          </Reveal>

          {/* Answer-first executive summary */}
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-3xl text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
              I build and scale high-performance Next.js web applications, programmatic search architectures (SEO &amp; AEO),
              and profitable paid media funnels across Meta, Google, and TikTok. Backed by 4+ years of hands-on execution
              and ৳15 Lakh+ in verified client revenue impact.
            </p>
          </Reveal>

          {/* Pillar Pills */}
          <Reveal delay={0.12}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full border border-border/70 bg-card/60 px-3.5 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                Book Strategy Consultation <ArrowUpRight className="size-4" />
              </Link>
              <a
                href="#all-services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-surface"
              >
                Browse All 19 Services ↓
              </a>
            </div>
          </Reveal>

          {/* Key Value Anchors */}
          <Reveal delay={0.2}>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card/60 p-4 text-center shadow-soft backdrop-blur-sm">
                <ShieldCheck className="size-5 text-emerald-500 mb-1" />
                <span className="text-base font-bold font-display text-foreground">100% In-House</span>
                <span className="text-[11px] text-muted-foreground">Zero Outsourced Fluff</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card/60 p-4 text-center shadow-soft backdrop-blur-sm">
                <Target className="size-5 text-primary mb-1" />
                <span className="text-base font-bold font-display text-foreground">৳15L+ Sales</span>
                <span className="text-[11px] text-muted-foreground">Client Revenue Track</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card/60 p-4 text-center shadow-soft backdrop-blur-sm">
                <Layers className="size-5 text-indigo-500 mb-1" />
                <span className="text-base font-bold font-display text-foreground">AEO &amp; GEO</span>
                <span className="text-[11px] text-muted-foreground">AI Search Ready</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card/60 p-4 text-center shadow-soft backdrop-blur-sm">
                <Sparkles className="size-5 text-amber-500 mb-1" />
                <span className="text-base font-bold font-display text-foreground">50+ Projects</span>
                <span className="text-[11px] text-muted-foreground">Shipped &amp; Scaled</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
