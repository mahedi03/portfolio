import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Workflow, CheckCircle2 } from "lucide-react";

export function ServiceProcess({ service }: { service: Service }) {
  return (
    <section className="border-t border-border/60 bg-gradient-to-b from-background via-surface/30 to-background py-20 lg:py-28">
      <Container className="max-w-6xl">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Workflow className="size-3.5" />
            Methodology &amp; Roadmap
          </div>
          <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            How We Execute {service.shortTitle}
          </h2>
          <p className="mt-3 text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
            A disciplined, phase-by-phase framework ensuring every technical and strategic dependency is resolved systematically.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, index) => (
            <Reveal key={step.step || index} delay={index * 0.08}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-elevated">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-primary">
                      {String(step.step || index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-1.5 w-6 rounded-full bg-border transition-all group-hover:w-8 group-hover:bg-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-emerald-500 pt-4 border-t border-border/40">
                  <CheckCircle2 className="size-3.5" />
                  <span>Phase {index + 1} Deliverable</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
