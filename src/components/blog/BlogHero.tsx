import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative border-b border-border/70 bg-gradient-to-b from-background via-surface/40 to-background py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge variant="outline" className="gap-2 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <BookOpen className="size-3.5 text-primary" />
              Strategic Field Notes &amp; Frameworks
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-[length:var(--text-h1)] font-display font-bold tracking-tight text-foreground">
              Technical Insights on SEO, Paid Acquisition &amp; Web Systems
            </h1>
          </Reveal>

          {/* Answer-first summary */}
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-3xl text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
              Practical, actionable analyses written from daily production environments. We break down the mathematics
              of paid advertising, technical search crawling, topical cluster architecture, and conversion engineering
              without generic fluff or outdated theory.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
