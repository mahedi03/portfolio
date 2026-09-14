import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2 } from "lucide-react";

export function MetaAdsOffer() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Service Capabilities</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Comprehensive Meta Ads Campaign Architecture
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            From rapid creative testing matrices to automated catalog scaling, designed for sustainable return on ad spend.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div key="Advantage+ Shopping & Catalog Campaigns" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Advantage+ Shopping & Catalog Campaigns</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Harnessing Meta&apos;s machine learning with optimized product feeds, audience constraints, and dynamic catalog ads.</p>
                </div>
              </div>
              <div key="Weekly Creative Testing Frameworks" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Weekly Creative Testing Frameworks</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Systematically testing 3-second visual hooks, primary copy angles, and diverse formats (Reels, Carousels, Static).</p>
                </div>
              </div>
              <div key="Meta Conversions API (CAPI) & Server-Side Tagging" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Meta Conversions API (CAPI) & Server-Side Tagging</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Direct server-to-server event tracking via Google Tag Manager and AWS/Stape to eliminate iOS tracking losses.</p>
                </div>
              </div>
              <div key="Full-Funnel Retargeting & Customer LTV Flows" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Full-Funnel Retargeting & Customer LTV Flows</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Engaging past purchasers with cross-sell offers while nurturing warm leads with proof points and testimonials.</p>
                </div>
              </div>
              <div key="Account Health & Policy Protection" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Account Health & Policy Protection</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Maintaining high feedback scores, adhering to ad policies, and proactively protecting ad accounts from unexpected flags.</p>
                </div>
              </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border/70 bg-surface/50 p-6 md:p-8">
          <h3 className="font-display text-lg font-bold text-foreground">Scope Boundaries & Ideal Fit</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div key="Generic Boosting of Unoptimized Posts" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Generic Boosting of Unoptimized Posts</h5>
                <p className="mt-1 text-sm text-muted-foreground">Every dollar is committed to structured ad sets with measurable conversion objectives.</p>
              </div>
              <div key="Static Set-and-Forget Campaigns" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Static Set-and-Forget Campaigns</h5>
                <p className="mt-1 text-sm text-muted-foreground">Ad accounts receive continuous monitoring, daily metric checks, and aggressive creative rotation.</p>
              </div>
          </div>
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Ideal Client Profile</span>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Ecommerce brands, DTC retailers, lead generation businesses, and coaching programs looking for predictable customer acquisition.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
