import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, CheckCircle2 } from "lucide-react";

export function CaseStudiesHero() {
  return (
    <section className="relative border-b border-border/70 bg-gradient-to-b from-background via-surface/40 to-background py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge variant="outline" className="gap-2 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <BarChart3 className="size-3.5 text-primary" />
              Documented Client Outcomes
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-[length:var(--text-h1)] font-display font-bold tracking-tight text-foreground">
              Proven Case Studies &amp; Growth Frameworks
            </h1>
          </Reveal>

          {/* Answer-first summary */}
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-3xl text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
              Explore in-depth breakdowns of real marketing and web development campaigns.
              Every study details the diagnosis, strategic thesis, technical execution, and verifiable revenue outcomes
              achieved across eCommerce, B2B services, and local business ecosystems.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-500" />
                <span>Unedited Google Search Console &amp; Meta Ads data</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="size-4 text-primary" />
                <span>Audited client revenue attribution</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
