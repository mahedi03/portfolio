import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2 } from "lucide-react";

export function ServiceProcess({ service }: { service: Service }) {
  return (
    <section className="border-y border-border/80 bg-surface/40 py-14 sm:py-20 lg:py-24">
      <Container className="max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Execution Roadmap
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-display font-black tracking-tight text-white uppercase">
            /HOW WE EXECUTE {service.shortTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
            A clear, phase-by-phase workflow so you always know what is being built, measured, and shipped next.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, index) => (
            <Reveal key={step.step || index} delay={index * 0.06}>
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-card/80 p-6 backdrop-blur-md shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-surface">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-primary">
                      {String(step.step || index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-1 w-6 rounded-full bg-border transition-all group-hover:w-8 group-hover:bg-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 border-t border-white/10 pt-4 text-xs font-medium text-emerald-400">
                  <CheckCircle2 className="size-3.5" />
                  <span>Phase {index + 1} Milestone</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
