import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2 } from "lucide-react";

export function MediaBuyingOffer() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Service Capabilities</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Multi-Channel Media Buying Execution
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Coordinating paid social and paid search to capture attention, nurture consideration, and close high-value transactions.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div key="Cross-Platform Budget Allocation" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Cross-Platform Budget Allocation</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Balancing spend dynamically across Meta, Google, TikTok, LinkedIn, and Pinterest according to customer acquisition costs.</p>
                </div>
              </div>
              <div key="Full-Funnel Campaign Architecture" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Full-Funnel Campaign Architecture</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Structuring top-of-funnel awareness, middle-of-funnel consideration, and bottom-of-funnel retargeting into a cohesive ecosystem.</p>
                </div>
              </div>
              <div key="Continuous Creative Fatigue Management" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Continuous Creative Fatigue Management</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Testing fresh creative concepts, hooks, and messaging weekly to prevent ad saturation and rising CPAs.</p>
                </div>
              </div>
              <div key="First-Party Tracking & Attribution Modeling" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">First-Party Tracking & Attribution Modeling</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Implementing server-side tagging, UTM parameters, and blended ROAS dashboards to measure true channel contribution.</p>
                </div>
              </div>
              <div key="Audience Lifecycle Segmentation" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Audience Lifecycle Segmentation</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Building custom lookalikes, customer match lists, and engaged video viewers for targeted re-engagement.</p>
                </div>
              </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border/70 bg-surface/50 p-6 md:p-8">
          <h3 className="font-display text-lg font-bold text-foreground">Scope Boundaries & Ideal Fit</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div key="Single-Channel Silo Management" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Single-Channel Silo Management</h5>
                <p className="mt-1 text-sm text-muted-foreground">We manage media holistically; paid social feeds search, and search validates social demand.</p>
              </div>
              <div key="Hidden Ad Spend Markups" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Hidden Ad Spend Markups</h5>
                <p className="mt-1 text-sm text-muted-foreground">You pay ad networks directly with your payment cards. Our compensation is completely transparent.</p>
              </div>
          </div>
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Ideal Client Profile</span>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Scaling ecommerce brands, enterprise B2B lead generation teams, and growing businesses spending $1,500+ monthly on paid ads.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
