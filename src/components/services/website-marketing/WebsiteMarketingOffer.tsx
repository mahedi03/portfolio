import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2 } from "lucide-react";

export function WebsiteMarketingOffer() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Service Capabilities</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Comprehensive Full-Funnel Website Marketing
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Integrating search discovery, AI engine citation, local visibility, and conversion rate optimization into one growth system.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div key="Technical & Organic SEO Architecture" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Technical & Organic SEO Architecture</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Crawl budget optimization, site speed tuning, semantic content clusters, and high-intent keyword ranking.</p>
                </div>
              </div>
              <div key="Answer Engine Optimization (AEO)" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Answer Engine Optimization (AEO)</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Formatting content into 30-60 word answer-first retrieval blocks to capture direct AI answers in Perplexity and Google Overviews.</p>
                </div>
              </div>
              <div key="Generative Engine Optimization (GEO)" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Generative Engine Optimization (GEO)</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Building topical authority, entity graphs, and brand citations so LLMs recommend your business as the definitive answer.</p>
                </div>
              </div>
              <div key="Local SEO & Google Business Profile Synergy" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Local SEO & Google Business Profile Synergy</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Dominating local geographic map packs, citation building, and localized landing pages for regional customer capture.</p>
                </div>
              </div>
              <div key="Conversion Rate Optimization (CRO) & Funnel Engineering" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Conversion Rate Optimization (CRO) & Funnel Engineering</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Eliminating checkout friction, refining page typography, and engineering high-converting CTA hierarchies.</p>
                </div>
              </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border/70 bg-surface/50 p-6 md:p-8">
          <h3 className="font-display text-lg font-bold text-foreground">Scope Boundaries & Ideal Fit</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div key="Unethical Guaranteed #1 Ranking Promises" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Unethical Guaranteed #1 Ranking Promises</h5>
                <p className="mt-1 text-sm text-muted-foreground">No agency can ethically guarantee Google #1 spots; we deliver verifiable growth through defensible strategy.</p>
              </div>
              <div key="Disconnected Vanity Traffic Tactics" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Disconnected Vanity Traffic Tactics</h5>
                <p className="mt-1 text-sm text-muted-foreground">We optimize strictly for commercially qualified traffic, inbound phone calls, and revenue conversions.</p>
              </div>
          </div>
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Ideal Client Profile</span>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">SMEs, ecommerce platforms, professional practices, and startups looking to transform their website into an active revenue-generating engine.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
