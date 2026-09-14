import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function MetaAdsWhyChooseMe() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Founder & Consultant Positioning</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Work With Mahedi Hasan for Meta Advertising
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Deep technical expertise in server-side attribution paired with persuasive performance copywriting.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Bulletproof Server-Side Tracking" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                01
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Bulletproof Server-Side Tracking</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Complete Meta Conversions API implementation to maximize Event Quality Scores above 8.0/10.</p>
            </div>
            <div key="Creative-Led Growth Strategy" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                02
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Creative-Led Growth Strategy</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We don't just push buttons in Ads Manager; we write compelling ad copy and guide visual asset creation that converts.</p>
            </div>
            <div key="Documented Scaling Protocols" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                03
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Documented Scaling Protocols</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We scale winning ad sets methodically without resetting algorithm learning phases or spiking acquisition costs.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
