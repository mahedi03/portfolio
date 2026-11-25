import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function ServiceWhyItMatters({ service }: { service: Service }) {
  const rawWhy = service.whyMatters && service.whyMatters.length > 0 ? service.whyMatters : null;

  const items = (rawWhy ?? [])
    .filter((item) => {
      if (typeof item === "string") {
        // Skip stray bare headings from legacy CMS imports
        return item.trim().length > 40;
      }
      return Boolean(item.description);
    })
    .slice(0, 6)
    .map((item, index) => {
      if (typeof item !== "string") {
        return { title: item.title || `Key Impact 0${index + 1}`, text: item.description };
      }
      const colonIdx = item.indexOf(":");
      const commaIdx = item.indexOf(", ");
      const title =
        colonIdx > 8 && colonIdx <= 54
          ? item.slice(0, colonIdx)
          : commaIdx > 12 && commaIdx <= 54
            ? item.slice(0, commaIdx)
            : `Commercial Impact 0${index + 1}`;
      const text =
        colonIdx > 8 && colonIdx <= 54 ? item.slice(colonIdx + 1).trim() : item;
      return { title, text };
    });

  return (
    <section className="border-y border-border/80 bg-surface/40 py-14 sm:py-20 lg:py-24">
      <Container className="max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Strategic Context
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-display font-black tracking-tight text-white uppercase">
            /WHY {service.shortTitle} MATTERS
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
            The real commercial cost of leaving this channel unoptimized and the compounding leverage of getting it right.
          </p>
        </Reveal>

        {items.length > 0 ? (
          <div className={`mt-10 grid gap-5 ${items.length === 2 ? "sm:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
            {items.map((item, index) => (
              <Reveal key={index} delay={Math.min(index * 0.05, 0.25)}>
                <article className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-card/80 p-6 backdrop-blur-md shadow-soft">
                  <div>
                    <span className="font-mono text-xs font-bold text-primary">
                      0{index + 1} / IMPACT
                    </span>
                    <h3 className="mt-3 text-lg font-display font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {service.benefits.map((benefit, idx) => (
              <Reveal key={benefit.title} delay={idx * 0.05}>
                <article className="h-full rounded-2xl border border-white/10 bg-card/80 p-6 backdrop-blur-md shadow-soft">
                  <span className="font-mono text-xs font-bold text-primary">0{idx + 1} / BENEFIT</span>
                  <h3 className="mt-3 text-lg font-display font-bold text-white">{benefit.title}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
