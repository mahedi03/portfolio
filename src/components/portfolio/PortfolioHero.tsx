import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FolderGit2, CheckCircle, Code2, TrendingUp } from "lucide-react";

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70 pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-2 left-4 sm:left-12 select-none text-[clamp(3.5rem,13vw,13rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.025] leading-none z-0"
      >
        PORTFOLIO
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
              <FolderGit2 className="size-3.5 text-primary" />
              <span>Production Portfolio &amp; Case Archive</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-[1.06]">
              Production Websites &amp; High-Return Campaigns
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
              A curated showcase of deployed web applications, conversion-focused storefronts, semantic SEO architectures, and paid advertising systems built for measurable business growth.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-muted-foreground">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 backdrop-blur-sm">
                <Code2 className="size-3.5 text-primary" />
                <span>Next.js, WordPress &amp; Shopify builds</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 backdrop-blur-sm">
                <TrendingUp className="size-3.5 text-emerald-400" />
                <span>Audited conversion baselines</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 backdrop-blur-sm">
                <CheckCircle className="size-3.5 text-indigo-400" />
                <span>Core Web Vitals 95+ targets</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
