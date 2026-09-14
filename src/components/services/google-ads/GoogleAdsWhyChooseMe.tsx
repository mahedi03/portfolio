import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function GoogleAdsWhyChooseMe() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Founder & Consultant Positioning</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Choose Mahedi Hasan for Google Ads
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Direct management by a technical growth architect—no junior account managers or generic automated agency templates.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Full Account Access & Transparency" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                01
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Full Account Access & Transparency</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">You own your Google Ads account, billing, and data. Complete transparency with zero markup on media spend.</p>
            </div>
            <div key="Technical Tracking Expertise" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                02
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Technical Tracking Expertise</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We configure GA4, GTM, enhanced conversions, and CRM offline conversion tracking with precision.</p>
            </div>
            <div key="Integrated Landing Page CRO" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                03
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Integrated Landing Page CRO</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We optimize ad copy and landing page UX simultaneously to improve Quality Score and reduce cost per click.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
