import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { AlertCircle, Lightbulb } from "lucide-react";

export function ServiceWhyItMatters({ service }: { service: Service }) {
  const whyMatters = service.whyMatters && service.whyMatters.length > 0 ? service.whyMatters : null;

  // For plain-string items, derive a card title from the leading clause so the
  // grid keeps a consistent hierarchy (no fake "Strategic Insight N" titles).
  const items = (whyMatters ?? []).map((item, index) => {
    if (typeof item !== "string") {
      return { title: item.title || `Strategic Insight ${index + 1}`, text: item.description };
    }
    const commaIdx = item.indexOf(", ");
    const clause = commaIdx > 12 && commaIdx <= 62 ? item.slice(0, commaIdx) : null;
    return {
      title: clause ?? `Strategic Insight ${index + 1}`,
      text: item,
    };
  });

  return (
    <section className="border-t border-border/60 bg-surface/40 py-20 lg:py-28">
      <Container className="max-w-6xl">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Lightbulb className="size-3.5" />
            Strategic Context
          </div>
          <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why {service.shortTitle} Matters for Business Revenue
          </h2>
          <p className="mt-3 text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
            Understanding the real cost of neglect and the exponential leverage gained by doing it right from day one.
          </p>
        </Reveal>

        {items.length > 0 ? (
          <div className={`mt-14 grid gap-6 ${items.length === 2 ? "sm:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
            {items.map((item, index) => {
              return (
                <Reveal key={index} delay={Math.min(index * 0.05, 0.25)}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card/70 p-6 shadow-soft backdrop-blur-sm">
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold text-primary">
                        <span>0{index + 1} / Impact</span>
                        <AlertCircle className="size-4 text-primary/70" />
                      </div>
                      <h3 className="mt-3 text-lg font-display font-bold text-foreground leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        ) : (
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {service.benefits.map((benefit, idx) => (
              <Reveal key={benefit.title} delay={idx * 0.05}>
                <div className="rounded-xl border border-border/80 bg-card/60 p-6 shadow-soft">
                  <span className="text-xs font-semibold text-primary">0{idx + 1} / Benefit</span>
                  <h3 className="mt-2 text-lg font-display font-bold text-foreground">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
