import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2 } from "lucide-react";

export function CreativeContentOffer() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Service Capabilities</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Comprehensive Creative Content Capabilities
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            From deep technical industry guides to punchy paid social hooks, content built to inform, persuade, and rank.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div key="Topical Authority Articles & Pillar Guides" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Topical Authority Articles & Pillar Guides</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">In-depth research pieces answering high-intent buyer questions with original data, practical frameworks, and entity-rich formatting.</p>
                </div>
              </div>
              <div key="Conversion-Optimized Landing Page Copy" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Conversion-Optimized Landing Page Copy</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Wireframe-aligned sales messaging targeting customer objections, value propositions, and compelling calls-to-action.</p>
                </div>
              </div>
              <div key="Performance Ad Copy & Scriptwriting" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Performance Ad Copy & Scriptwriting</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">High-retention short-form video scripts (TikTok, Reels) and multi-angle ad copy tailored for paid social funnels.</p>
                </div>
              </div>
              <div key="Product Descriptions & Catalog Storytelling" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Product Descriptions & Catalog Storytelling</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Benefit-driven ecommerce descriptions engineered to improve add-to-cart rates and search visibility.</p>
                </div>
              </div>
              <div key="Email Lifecycle & Newsletter Campaigns" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Email Lifecycle & Newsletter Campaigns</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Retention-focused onboarding flows, promotional drops, and editorial newsletters that generate repeatable engagement.</p>
                </div>
              </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border/70 bg-surface/50 p-6 md:p-8">
          <h3 className="font-display text-lg font-bold text-foreground">Scope Boundaries & Ideal Fit</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div key="Unresearched AI-Generated Content Spun for Volume" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Unresearched AI-Generated Content Spun for Volume</h5>
                <p className="mt-1 text-sm text-muted-foreground">Every piece is carefully written, fact-checked, and formatted with human editorial rigor.</p>
              </div>
              <div key="Stock Imagery Licensing Fees" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Stock Imagery Licensing Fees</h5>
                <p className="mt-1 text-sm text-muted-foreground">Visual asset design or professional photography is scoped independently from written deliverables.</p>
              </div>
          </div>
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Ideal Client Profile</span>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">B2B service providers, high-growth ecommerce brands, and tech startups needing authoritative, customer-focused content that actually converts.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
