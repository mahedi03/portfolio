import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2 } from "lucide-react";

export function PinterestAdsOffer() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Service Capabilities</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            End-to-End Pinterest Ads Management
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Capturing affluent consumers during the research and planning phase before they make purchasing decisions elsewhere.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div key="Catalog & Product Feed Integration" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Catalog & Product Feed Integration</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Syncing Shopify, WooCommerce, or custom product catalogs to deploy automated Shopping Pins with live pricing and stock status.</p>
                </div>
              </div>
              <div key="Keyword & Visual Search Targeting" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Keyword & Visual Search Targeting</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Targeting high-intent search terms, interest categories, and lookalike actalike audiences based on verified customer lists.</p>
                </div>
              </div>
              <div key="High-Performing Pin Creative Direction" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">High-Performing Pin Creative Direction</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Designing vertical 2:3 aspect ratio pins, video pins, and multi-image carousels engineered for maximum save rates and clicks.</p>
                </div>
              </div>
              <div key="Pinterest Tag & Conversions Tracking" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Pinterest Tag & Conversions Tracking</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Installing the Pinterest Tag with enhanced match and server-side tracking to capture full-funnel checkout events.</p>
                </div>
              </div>
              <div key="Continuous Bid & Campaign Optimization" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Continuous Bid & Campaign Optimization</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Optimizing bids across consideration and conversion campaigns to lower cost-per-click and maximize return on ad spend.</p>
                </div>
              </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border/70 bg-surface/50 p-6 md:p-8">
          <h3 className="font-display text-lg font-bold text-foreground">Scope Boundaries & Ideal Fit</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div key="Organic Pin Scheduling Only" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Organic Pin Scheduling Only</h5>
                <p className="mt-1 text-sm text-muted-foreground">This service is dedicated to paid media acquisition and catalog ad scaling.</p>
              </div>
              <div key="Low-Resolution Repurposed Social Media Assets" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Low-Resolution Repurposed Social Media Assets</h5>
                <p className="mt-1 text-sm text-muted-foreground">Pinterest requires dedicated 2:3 vertical creative; horizontal assets are never recommended.</p>
              </div>
          </div>
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Ideal Client Profile</span>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Ecommerce brands in fashion, home decor, beauty, wellness, jewelry, food, gifting, and content publishers monetizing high-value products.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
