import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2, Layers } from "lucide-react";

export function ServiceOfferings({ service }: { service: Service }) {
  const offerings = service.offerings && service.offerings.length > 0 ? service.offerings : null;

  return (
    <section id="offerings" className="py-14 sm:py-20 lg:py-24">
      <Container className="max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Scope &amp; Capabilities
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-display font-black tracking-tight text-white uppercase">
            /WHAT&apos;S INCLUDED IN {service.shortTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
            Focused, accountable execution modules built around measurable commercial outcomes.
          </p>
        </Reveal>

        {offerings ? (
          <div className={`mt-10 grid gap-5 ${offerings.length === 1 ? "grid-cols-1" : "md:grid-cols-2"}`}>
            {offerings.map((offering, index) => (
              <Reveal key={offering.title || index} delay={Math.min(index * 0.05, 0.25)}>
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-7 backdrop-blur-md shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-surface/90">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                        Module {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-1 w-6 rounded-full bg-primary/40 transition-all group-hover:w-10 group-hover:bg-primary" />
                    </div>
                    <h3 className="mt-4 text-lg sm:text-xl font-display font-bold text-white">
                      {offering.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {offering.description}
                    </p>

                    {offering.bullets && offering.bullets.length > 0 && (
                      <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                        {offering.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {service.features.map((feature, idx) => (
              <Reveal key={feature.title} delay={idx * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur-md shadow-soft">
                  <div className="size-10 rounded-xl border border-primary/20 bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Layers className="size-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
