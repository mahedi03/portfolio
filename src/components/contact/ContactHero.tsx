import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Clock, ShieldCheck } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70 pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-2 left-4 sm:left-12 select-none text-[clamp(3.75rem,13vw,13rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.025] leading-none z-0"
      >
        CONTACT
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span>Direct Founder Communication</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-[1.06]">
              Let&apos;s Build an Engine That Generates Real Results
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
              Whether you need to scale paid advertising, strengthen organic search visibility, or build a high-speed Next.js site, share your goals below. Every inquiry gets a direct strategic reply within one business day.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-medium text-muted-foreground">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 backdrop-blur-sm">
                <Clock className="size-3.5 text-primary" />
                <span>Response time: Under 24 hours</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 backdrop-blur-sm">
                <ShieldCheck className="size-3.5 text-emerald-400" />
                <span>No sales pressure, direct technical feedback</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
