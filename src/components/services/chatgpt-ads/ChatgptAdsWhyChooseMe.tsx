import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function ChatgptAdsWhyChooseMe() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Founder & Consultant Positioning</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Partner With Mahedi Hasan for AI Advertising
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Technical mastery meets performance marketing rigor. We combine custom code development with rigorous paid acquisition systems.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Upfront Eligibility Audits" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                01
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Upfront Eligibility Audits</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We provide complete clarity on your account's regional eligibility before asking for any ad budget commitments.</p>
            </div>
            <div key="Dedicated Context-Hint Taxonomy" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                02
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Dedicated Context-Hint Taxonomy</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We map situational context triggers rather than pasting obsolete Google Search keyword lists.</p>
            </div>
            <div key="Integrated Search Architecture" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                03
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Integrated Search Architecture</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Paid AI placements are connected to technical SEO, schema graphs, and landing page conversion rate optimization.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
