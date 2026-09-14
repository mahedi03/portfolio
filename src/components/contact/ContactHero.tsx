import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Clock, ShieldCheck } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative border-b border-border/70 bg-gradient-to-b from-background via-surface/40 to-background py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge variant="outline" className="gap-2 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <MessageSquare className="size-3.5 text-primary" />
              Direct Founder Communication
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-[length:var(--text-h1)] font-display font-bold tracking-tight text-foreground">
              Let&apos;s Build an Engine That Generates Real Results
            </h1>
          </Reveal>

          {/* Answer-first summary */}
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-3xl text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
              Whether you need to scale high-ROAS paid advertising, dominate competitive organic search queries,
              or engineer a high-speed Next.js conversion platform, share your requirements below.
              Every inquiry receives a direct strategic response within one business day.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock className="size-4 text-primary" />
                <span>Response time: Under 24 hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-emerald-500" />
                <span>No high-pressure sales calls, purely strategic consultation</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
