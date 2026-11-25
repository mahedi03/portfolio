import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2, Shield, Sparkles, Award } from "lucide-react";

const values = [
  {
    title: "Standard of craft",
    description:
      "Every deliverable, from the first keyword map to production code, has to clear a commercial and technical bar before it ships.",
    icon: Award,
  },
  {
    title: "Nothing hidden",
    description:
      "Clear reporting, honest attribution, and straight answers about what is working, what isn't, and what it will take.",
    icon: Shield,
  },
  {
    title: "Ahead of the curve",
    description:
      "Search behaviour keeps shifting across algorithm updates and AI answers. The playbook is reviewed ahead of those changes, not after.",
    icon: Sparkles,
  },
  {
    title: "Built to last",
    description:
      "Only sustainable, ethical methods that protect the brand, survive algorithm shifts, and keep producing returns.",
    icon: CheckCircle2,
  },
];

export function AboutValues() {
  return (
    <section className="border-y border-border/80 bg-surface/40 py-14 sm:py-20 lg:py-24">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tight text-white uppercase">
              /OPERATING PRINCIPLES
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
              The non-negotiables behind every strategy, build, and client decision.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-md shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-surface">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-display text-2xl font-black text-white/10 transition-colors group-hover:text-white/25">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-display font-bold text-white">{v.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {v.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
