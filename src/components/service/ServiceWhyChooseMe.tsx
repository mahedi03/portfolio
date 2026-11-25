import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const FALLBACK_REASONS = [
  "Strategy first: every technical and creative step ties to a measurable commercial goal.",
  "100% direct execution with zero subcontracted guesswork or hidden layers.",
  "Proven track record scaling eCommerce brands, SaaS, and local leaders in Bangladesh and internationally.",
  "Transparent attribution reporting connecting marketing effort directly to leads and revenue.",
];

export function ServiceWhyChooseMe({ service }: { service: Service }) {
  const reasons =
    service.whyChooseUs?.length ? service.whyChooseUs.slice(0, 4) : FALLBACK_REASONS;

  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container className="max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              The Accountability Edge
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-display font-black tracking-tight text-white uppercase leading-tight">
              /WHY WORK WITH MAHEDI HASAN
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Instead of juggling disconnected freelancers or junior-staffed agencies, you work directly with one senior practitioner who owns strategy, technical implementation, and results.
            </p>

            <div className="mt-7 space-y-4 rounded-2xl border border-white/10 bg-surface/60 p-5 sm:p-6 backdrop-blur-md">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-emerald-400" />
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Direct Founder Oversight</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Every strategy, build, and audit is executed and reviewed directly, never handed off to interns.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Full-Stack Execution Speed</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Code, tracking, content, and campaigns ship together without waiting on three separate vendors.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-3.5">
            {reasons.map((reason, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-card/80 p-5 backdrop-blur-md transition-colors hover:border-white/25 hover:bg-surface/80">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />
                  <p className="text-sm sm:text-[15px] leading-relaxed text-foreground/90">
                    {reason}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
