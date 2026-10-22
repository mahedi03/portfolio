import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2, Sparkles, Layers, ShieldCheck } from "lucide-react";

export function ServiceOfferings({ service }: { service: Service }) {
  const offerings = service.offerings && service.offerings.length > 0 ? service.offerings : null;

  return (
    <section id="offerings" className="py-20 lg:py-28 border-t border-border/60 bg-gradient-to-b from-background via-surface/30 to-background">
      <Container className="max-w-6xl">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="size-3.5" />
            Core Capabilities &amp; Architecture
          </div>
          <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            What&apos;s Included in {service.shortTitle}
          </h2>
          <p className="mt-3 text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
            Structured, end-to-end deliverables designed to eliminate technical bottlenecks and produce measurable commercial returns.
          </p>
        </Reveal>

        {offerings ? (
          <div className={`mt-14 grid gap-6 ${offerings.length === 1 ? "grid-cols-1" : "md:grid-cols-2"}`}>
            {offerings.map((offering, index) => {
              // Some CMS drafts carry whole paragraphs in `title` — render
              // those as a lead paragraph inside an editorial card, not as h3.
              const isEditorial = (offering.title ?? "").length > 110;

              return (
                <Reveal
                  key={offering.title || index}
                  delay={Math.min(index * 0.05, 0.25)}
                  className={isEditorial ? "md:col-span-2" : undefined}
                >
                  <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-7 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-elevated">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                          Module {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="h-1.5 w-6 rounded-full bg-primary/40 transition-all group-hover:w-10 group-hover:bg-primary" />
                      </div>
                      {isEditorial ? (
                        <p className="mt-4 max-w-4xl text-base font-semibold leading-relaxed text-foreground">
                          {offering.title}
                        </p>
                      ) : (
                        <h3 className="mt-4 text-xl font-display font-bold text-foreground">
                          {offering.title}
                        </h3>
                      )}
                      <p className={`max-w-4xl text-sm leading-relaxed text-muted-foreground ${isEditorial ? "mt-3" : "mt-2"}`}>
                        {offering.description}
                      </p>

                      {offering.bullets && offering.bullets.length > 0 && (
                        <ul className="mt-5 space-y-2.5 border-t border-border/50 pt-5">
                          {offering.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        ) : (
          /* Fallback if offerings are minimal */
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {service.features.map((feature, idx) => (
              <Reveal key={feature.title} delay={idx * 0.05}>
                <div className="rounded-xl border border-border/80 bg-card/60 p-6 shadow-soft">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Layers className="size-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* Scope Boundaries Card */}
        <Reveal delay={0.2} className="mt-12">
          <div className="rounded-2xl border border-border/70 bg-surface/50 p-6 md:p-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <ShieldCheck className="size-4 text-primary" />
              Scope Integrity &amp; Ideal Fit
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What We Avoid</span>
                <h4 className="mt-1 font-display font-semibold text-foreground">Zero Fluff or Vanity Deliverables</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Every asset, line of code, and ad variant is deployed with clear commercial intent and accountable tracking.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Target Outcome</span>
                <h4 className="mt-1 font-display font-semibold text-foreground">Compounding Business Value</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Systems built to endure platform algorithm shifts, reducing customer acquisition costs over the long run.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
