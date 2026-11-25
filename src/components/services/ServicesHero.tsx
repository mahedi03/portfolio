import Link from "next/link";
import { Sparkles, ShieldCheck, Target, Layers, ArrowUpRight, ArrowDown } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

const pillars = [
  "Web Engineering",
  "Search & Technical SEO",
  "Paid Media Buying",
  "Content & Social",
  "Analytics & Strategy",
];

export function ServicesHero() {
  const count = services.length;

  return (
    <section className="relative overflow-hidden border-b border-border/70 pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-2 left-4 sm:left-12 select-none text-[clamp(3.5rem,13vw,13rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.025] leading-none z-0"
      >
        SERVICES
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span>{count} Specialized Services · 5 Growth Pillars</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-[1.06]">
              Connected Growth Systems Engineered for Revenue
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
              High-performance Next.js websites, semantic SEO and AI search visibility, and accountable paid media campaigns across Meta, Google, and TikTok, delivered by one senior partner.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/90 shadow-[0_8px_25px_rgba(255,255,255,0.2)]"
              >
                <span>Book Strategy Consultation</span>
                <ArrowUpRight className="size-4" />
              </Link>
              <a
                href="#all-services"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-white/40 hover:bg-surface hover:text-white"
              >
                <span>Browse All {count} Services</span>
                <ArrowDown className="size-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-surface/60 p-4 text-center backdrop-blur-md">
                <ShieldCheck className="mx-auto size-5 text-emerald-400 mb-1.5" />
                <span className="block font-display text-base sm:text-lg font-black text-white">100% In-House</span>
                <span className="text-[11px] text-muted-foreground">Direct Senior Delivery</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface/60 p-4 text-center backdrop-blur-md">
                <Target className="mx-auto size-5 text-primary mb-1.5" />
                <span className="block font-display text-base sm:text-lg font-black text-white">৳15L+ Sales</span>
                <span className="text-[11px] text-muted-foreground">Client Revenue Impact</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface/60 p-4 text-center backdrop-blur-md">
                <Layers className="mx-auto size-5 text-indigo-400 mb-1.5" />
                <span className="block font-display text-base sm:text-lg font-black text-white">SEO &amp; GEO</span>
                <span className="text-[11px] text-muted-foreground">Google &amp; AI Search Ready</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface/60 p-4 text-center backdrop-blur-md">
                <Sparkles className="mx-auto size-5 text-amber-400 mb-1.5" />
                <span className="block font-display text-base sm:text-lg font-black text-white">50+ Projects</span>
                <span className="text-[11px] text-muted-foreground">Shipped &amp; Scaled</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
