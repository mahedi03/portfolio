import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Award, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const FALLBACK_REASONS = [
  "Strategy first: every technical and creative step has a measurable business purpose.",
  "100% in-house execution with zero subcontracted guesswork or hidden layers.",
  "Proven track record scaling e-commerce brands and local leaders in Bangladesh and internationally.",
  "Transparent attribution reporting connecting effort directly to revenue."
];

export function ServiceWhyChooseMe({ service }: { service: Service }) {
  const reasons =
    service.whyChooseUs?.length ? service.whyChooseUs.slice(0, 4) : FALLBACK_REASONS;
  // Paragraph-length reasons (CMS pastes have long lead paragraphs) render as
  // evidence cards; short crisp reasons keep the numbered editorial rows.
  const longForm = reasons.some((reason) => reason.split(" ").length > 28);

  return (
    <section className="border-t border-border/60 bg-background py-20 lg:py-28">
      <Container className="max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Award className="size-3.5" />
              The Competitive Edge
            </div>
            <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
              Why Work With Mahedi Hasan &amp; FrameCipher
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Most digital service providers either operate as disconnected freelancers or junior-staffed agencies that delegate your work to interns. We operate on a model of direct senior technical accountability.
            </p>

            <div className="mt-8 space-y-4 rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 size-5 shrink-0 text-emerald-500" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Direct Founder &amp; Senior Oversight</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Every strategy and architecture document is authored and verified by Mahedi Hasan directly.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Full-Stack Technical Capability</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">No waiting weeks between design, development, tracking, and campaign launch.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-4">
            {reasons.length > 0 && longForm ? (
              // Long-form reasons (CMS pastes whole paragraphs) render as
              // clean evidence cards instead of cramped numbered rows.
              reasons.map((reason, index) => (
                <Reveal key={index} delay={index * 0.05}>
                  <div className="flex items-start gap-3.5 rounded-xl border border-border/70 bg-surface/40 p-5 transition-colors hover:border-primary/40 hover:bg-surface/70">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {reason}
                    </p>
                  </div>
                </Reveal>
              ))
            ) : (
              reasons.map((reason, index) => (
                <Reveal key={index} delay={index * 0.05}>
                  <div className="flex gap-4 rounded-xl border border-border/70 bg-surface/40 p-5 transition-colors hover:border-primary/40 hover:bg-surface/70">
                    <span className="font-mono text-sm font-bold text-primary shrink-0">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-medium leading-relaxed text-foreground">
                        {reason}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
