import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";
import { FolderGit2, CheckCircle, Code2, TrendingUp } from "lucide-react";

export function PortfolioHero() {
  return (
    <section className="relative border-b border-border/70 bg-gradient-to-b from-background via-surface/40 to-background py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge variant="outline" className="gap-2 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <FolderGit2 className="size-3.5 text-primary" />
              Production Portfolio &amp; Case Archive
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-[length:var(--text-h1)] font-display font-bold tracking-tight text-foreground">
              Production Websites &amp; High-Return Campaigns
            </h1>
          </Reveal>

          {/* Answer-first summary */}
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-3xl text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
              A curated showcase of deployed web applications, high-converting WooCommerce and Shopify storefronts,
              enterprise SEO architectures, and full-funnel paid advertising systems. Each project is engineered
              for clean semantics, instant load speeds, and measurable revenue generation.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Code2 className="size-4 text-primary" />
                <span>Next.js, WordPress &amp; Shopify builds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="size-4 text-emerald-500" />
                <span>Audited conversion rate baselines</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="size-4 text-indigo-500" />
                <span>Core Web Vitals 95+ score targets</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
