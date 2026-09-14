import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function MediaBuyingWhyChooseMe() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Founder & Consultant Positioning</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Choose Mahedi Hasan for Media Buying
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            A data-driven performance marketer focused on cash flow, contribution margins, and net profit.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Full Attribution Transparency" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                01
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Full Attribution Transparency</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We track real business KPIs—Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and Customer Lifetime Value (LTV)—not vanity clicks.</p>
            </div>
            <div key="Rapid Creative Testing Frameworks" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                02
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Rapid Creative Testing Frameworks</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We implement structured testing matrices to systematically identify winning visual hooks, headlines, and calls to action.</p>
            </div>
            <div key="Direct Founder Involvement" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                03
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Direct Founder Involvement</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Your budget strategy is engineered directly by Mahedi Hasan, backed by 4+ years of hands-on paid media experience.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
