import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2 } from "lucide-react";

export function GoogleAdsOffer() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Service Capabilities</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            End-to-End Google PPC Management
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Eliminating wasted ad spend through granular intent mapping, negative keyword protocols, and precision landing page alignment.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div key="High-Intent Search Campaign Structuring" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">High-Intent Search Campaign Structuring</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Single-theme ad groups, exact and phrase match intent mapping, and responsive search ads that convert high-value searches.</p>
                </div>
              </div>
              <div key="Performance Max & Shopping Feed Optimization" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Performance Max & Shopping Feed Optimization</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Optimizing Google Merchant Center feeds, asset groups, audience signals, and negative brand exclusions.</p>
                </div>
              </div>
              <div key="YouTube Video & Demand Gen Funnels" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">YouTube Video & Demand Gen Funnels</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Engaging video ad sequences targeting in-market audiences and competitor channel placements to build category demand.</p>
                </div>
              </div>
              <div key="GA4, GTM & Server-Side Conversion Tracking" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">GA4, GTM & Server-Side Conversion Tracking</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Offline conversion imports, enhanced conversions, and custom GTM event listeners to ensure 100% data integrity.</p>
                </div>
              </div>
              <div key="Aggressive Negative Keyword Management" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Aggressive Negative Keyword Management</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Continuous search term filtering to stop irrelevant clicks and conserve ad budget for high-converting queries.</p>
                </div>
              </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border/70 bg-surface/50 p-6 md:p-8">
          <h3 className="font-display text-lg font-bold text-foreground">Scope Boundaries & Ideal Fit</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div key="Unmonitored Automated Bidding on Blind Accounts" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Unmonitored Automated Bidding on Blind Accounts</h5>
                <p className="mt-1 text-sm text-muted-foreground">We never launch Smart Bidding without adequate historical conversion data to guide the algorithm.</p>
              </div>
              <div key="Third-Party Click-Fraud Software Markups" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Third-Party Click-Fraud Software Markups</h5>
                <p className="mt-1 text-sm text-muted-foreground">Direct transparency on all platform costs and campaign telemetry.</p>
              </div>
          </div>
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Ideal Client Profile</span>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">High-ticket service businesses, ecommerce stores, and local companies where immediate commercial intent search volume exists.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
