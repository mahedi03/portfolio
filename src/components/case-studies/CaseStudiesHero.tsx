import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { BarChart3, TrendingUp, CheckCircle2 } from "lucide-react";

export function CaseStudiesHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70 pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-2 left-4 sm:left-12 select-none text-[clamp(3.25rem,12vw,12rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.025] leading-none z-0"
      >
        RESULTS
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
              <BarChart3 className="size-3.5 text-primary" />
              <span>Documented Client Outcomes</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-[1.06]">
              Proven Case Studies &amp; Growth Frameworks
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
              In-depth breakdowns of real SEO, paid media, and web engineering engagements. Every study covers the diagnosis, strategy, execution, and verified business outcomes.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-muted-foreground">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 backdrop-blur-sm">
                <CheckCircle2 className="size-3.5 text-emerald-400" />
                <span>Unedited Google Search Console &amp; Meta Ads data</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 backdrop-blur-sm">
                <TrendingUp className="size-3.5 text-primary" />
                <span>Audited client revenue attribution</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
