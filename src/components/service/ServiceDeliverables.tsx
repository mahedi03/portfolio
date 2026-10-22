import { CheckCircle2, PackageCheck, Wrench } from "lucide-react";
import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function ServiceDeliverables({ service }: { service: Service }) {
  return (
    <section className="py-20 lg:py-28 border-t border-border/60 bg-surface/30">
      <Container className="max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <PackageCheck className="size-3.5" />
              Tangible Assets
            </div>
            <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
              What You Receive Upon Delivery
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Every deliverable is handed over with complete IP ownership, clear documentation, and video walkthroughs where necessary.
            </p>

            <ul className="mt-8 space-y-4">
              {service.deliverables.map((item, index) => (
                <li
                  key={item.title || index}
                  className="flex items-start gap-3.5 rounded-xl border border-border/70 bg-card/60 p-4 backdrop-blur-sm"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Wrench className="size-3.5" />
              Verified Stack
            </div>
            <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
              Technology &amp; Tool Ecosystem
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Enterprise platforms, diagnostic crawlers, and performance APIs used in our daily workflow.
            </p>

            <div className="mt-8 rounded-2xl border border-border/80 bg-card/60 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex flex-wrap gap-2.5">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground shadow-sm transition-all hover:border-primary/40 hover:text-primary"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-border/50 pt-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Standard Operating Procedures</span>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  All tooling setups adhere to modern SOC-2, GDPR, and Meta/Google platform policies with zero black-hat tactics.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
