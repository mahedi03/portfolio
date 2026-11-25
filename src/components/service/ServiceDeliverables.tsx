import { CheckCircle2 } from "lucide-react";
import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function ServiceDeliverables({ service }: { service: Service }) {
  return (
    <section className="border-y border-border/80 bg-surface/40 py-14 sm:py-20 lg:py-24">
      <Container className="max-w-6xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Tangible Assets
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-display font-black tracking-tight text-white uppercase">
              /DELIVERABLES
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every asset is delivered with full ownership, clean documentation, and clear next-step guidance.
            </p>

            <ul className="mt-7 space-y-3.5">
              {service.deliverables.map((item, index) => (
                <li
                  key={item.title || index}
                  className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-card/80 p-4 sm:p-5 backdrop-blur-md"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />
                  <div>
                    <h3 className="text-sm sm:text-base font-display font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Verified Stack
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-display font-black tracking-tight text-white uppercase">
              /TOOLS &amp; PLATFORMS
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Industry-standard platforms, diagnostic tools, and measurement infrastructure used in day-to-day execution.
            </p>

            <div className="mt-7 rounded-2xl border border-white/10 bg-card/80 p-6 sm:p-7 backdrop-blur-md">
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-surface/80 px-4 py-2 text-xs sm:text-sm font-medium text-white transition-colors hover:border-white/30"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-white/10 pt-5">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Ownership &amp; Standards
                </span>
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  You retain 100% ownership of all code repositories, ad accounts, analytics properties, and content assets, built strictly to platform guidelines.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
