"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2, Shield, Sparkles, Award } from "lucide-react";

const values = [
  {
    title: "Standard of craft",
    description:
      "Every deliverable — from the first keyword map to production code — has to clear a commercial and technical bar before it ships.",
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
      "Search behaviour keeps shifting — updates, AI answers, new surfaces. The playbook is reviewed ahead of those changes, not after.",
    icon: Sparkles,
  },
  {
    title: "Built to last",
    description:
      "Only sustainable, ethical methods — they protect the brand, survive algorithm shifts, and keep producing returns.",
    icon: CheckCircle2,
  },
];

export function AboutValues() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Operating Principles
          </span>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Operating Principles
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            The non-negotiables behind every strategy, build, and client decision.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-elevated">
                  <div>
                    <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-foreground">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {v.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
