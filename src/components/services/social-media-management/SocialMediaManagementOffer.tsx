import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2 } from "lucide-react";

export function SocialMediaManagementOffer() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Service Capabilities</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Tailored Platform Management Services
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Each social platform serves a unique audience mindset. We engineer tailored content calendars for each network.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div key="Facebook Page Growth & Community Stewardship" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Facebook Page Growth & Community Stewardship</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Managing engaging post formats, community discussions, and responsive bilingual customer message handling.</p>
                </div>
              </div>
              <div key="Instagram Visual-First Strategy & Reels" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Instagram Visual-First Strategy & Reels</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Crafting cohesive visual grids, high-retention Reels, carousel education posts, and interactive Stories.</p>
                </div>
              </div>
              <div key="LinkedIn Company & Executive Presence" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">LinkedIn Company & Executive Presence</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Publishing thought-leadership articles, industry commentary, and company milestone updates that attract B2B prospects and talent.</p>
                </div>
              </div>
              <div key="Pinterest Visual SEO & Board Organization" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Pinterest Visual SEO & Board Organization</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Curating branded boards, publishing SEO-optimized vertical pins, and driving continuous organic referral clicks to your website.</p>
                </div>
              </div>
              <div key="Monthly Strategy Calendar & Analytics Review" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Monthly Strategy Calendar & Analytics Review</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Pre-planned monthly content roadmaps with transparent metrics tracking reach, follower quality, and engagement rates.</p>
                </div>
              </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border/70 bg-surface/50 p-6 md:p-8">
          <h3 className="font-display text-lg font-bold text-foreground">Scope Boundaries & Ideal Fit</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div key="Automated Generic Bot Comments" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Automated Generic Bot Comments</h5>
                <p className="mt-1 text-sm text-muted-foreground">All community interactions, comments, and direct message replies are handled by human managers.</p>
              </div>
              <div key="Paid Ad Spend Budget" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Paid Ad Spend Budget</h5>
                <p className="mt-1 text-sm text-muted-foreground">Organic social management and paid performance advertising are scoped separately for maximum operational focus.</p>
              </div>
          </div>
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Ideal Client Profile</span>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Established businesses, professional service practices, startups, and product brands that need a polished, active, and responsive online presence.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
