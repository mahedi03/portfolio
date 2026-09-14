import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2 } from "lucide-react";

export function TiktokAdsOffer() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Service Capabilities</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            End-to-End TikTok Ads Campaign Management
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Creative that looks like authentic TikTok content, backed by rigorous media buying discipline and technical tracking.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div key="Native Short-Form Video Creative Strategy" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Native Short-Form Video Creative Strategy</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Developing fast-paced, high-retention video ad concepts that mimic organic viral formats rather than traditional television commercials.</p>
                </div>
              </div>
              <div key="Spark Ads & Creator Partnership Amplification" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Spark Ads & Creator Partnership Amplification</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Boosting top-performing organic posts from your own profile or creator partner accounts to maintain social proof and credibility.</p>
                </div>
              </div>
              <div key="TikTok Pixel & Server-Side Events API Setup" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">TikTok Pixel & Server-Side Events API Setup</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Deploying hybrid tracking with custom GTM server containers to eliminate attribution gaps caused by mobile browser restrictions.</p>
                </div>
              </div>
              <div key="TikTok Shop Advertising & Catalog Feeds" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">TikTok Shop Advertising & Catalog Feeds</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Configuring live product showcase ads, video shopping ads, and synchronized catalog shopping campaigns.</p>
                </div>
              </div>
              <div key="Daily Bid Optimization & Audience Testing" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Daily Bid Optimization & Audience Testing</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Testing broad, interest, behavior, and custom lookalike audience segments to systematically lower Cost Per Acquisition (CPA).</p>
                </div>
              </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border/70 bg-surface/50 p-6 md:p-8">
          <h3 className="font-display text-lg font-bold text-foreground">Scope Boundaries & Ideal Fit</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div key="Repurposed Television Commercials" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Repurposed Television Commercials</h5>
                <p className="mt-1 text-sm text-muted-foreground">Traditional corporate ads fail on TikTok; we insist on native mobile-first vertical video formats.</p>
              </div>
              <div key="Guaranteed Overnight Viral Hits" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Guaranteed Overnight Viral Hits</h5>
                <p className="mt-1 text-sm text-muted-foreground">We focus on predictable, repeatable paid acquisition economics rather than chasing lottery-style viral spikes.</p>
              </div>
          </div>
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Ideal Client Profile</span>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Ecommerce brands, DTC product innovators, mobile app developers, and direct-response lead generators targeting Gen Z, Millennials, and modern consumers.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
