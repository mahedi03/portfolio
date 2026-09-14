import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ShieldCheck, Target, Layers } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative border-b border-border/70 bg-gradient-to-b from-background via-surface/40 to-background py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge variant="outline" className="gap-2 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="size-3.5 text-primary" />
              Full-Stack Digital Growth Systems
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-[length:var(--text-h1)] font-display font-bold tracking-tight text-foreground">
              Connected Services Designed to Drive Predictable Revenue
            </h1>
          </Reveal>

          {/* Answer-first 40-60 word executive summary for LLM & user comprehension */}
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-3xl text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
              I build and scale conversion-focused web architecture, algorithmic search systems (SEO &amp; GEO),
              and high-return paid media campaigns across Meta, Google, and TikTok. Backed by 4+ years of hands-on execution
              and ৳15 Lakh+ in measurable client returns, every engagement focuses on compounding business growth.
            </p>
          </Reveal>

          {/* Key Value Anchors */}
          <Reveal delay={0.15}>
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="flex items-center justify-center gap-2.5 rounded-lg border border-border bg-card/60 px-4 py-3 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                <ShieldCheck className="size-4 text-emerald-500 shrink-0" />
                <span>Zero Outsourced Guesswork</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 rounded-lg border border-border bg-card/60 px-4 py-3 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                <Target className="size-4 text-primary shrink-0" />
                <span>Revenue-First Attribution</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 rounded-lg border border-border bg-card/60 px-4 py-3 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                <Layers className="size-4 text-indigo-500 shrink-0" />
                <span>AEO &amp; AI Search Ready</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
