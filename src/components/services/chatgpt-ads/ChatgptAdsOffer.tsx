import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2 } from "lucide-react";

export function ChatgptAdsOffer() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Service Capabilities</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Strategic ChatGPT Advertising Offerings
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Two distinct execution tracks tailored to business registration, account eligibility, and global audience reach.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div key="Market Eligibility & Regulatory Review" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Market Eligibility & Regulatory Review</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Verification of corporate registration and account authorization against OpenAI Ads Manager rollout schedules.</p>
                </div>
              </div>
              <div key="Context-Hint Intent Mapping" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Context-Hint Intent Mapping</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Structuring thematic conversational triggers rather than rigid exact-match keywords to match authentic conversational search behavior.</p>
                </div>
              </div>
              <div key="Conversational Copy & Visual Creative" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Conversational Copy & Visual Creative</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Developing tailored offers and value props designed to blend naturally with informational intent in AI conversation windows.</p>
                </div>
              </div>
              <div key="Conversions API & Server-Side Tracking" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Conversions API & Server-Side Tracking</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Deploying reliable event ingestion pipelines through GTM server containers to bypass client-side cookie degradation.</p>
                </div>
              </div>
              <div key="AEO & GEO Organic Alignment" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">AEO & GEO Organic Alignment</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Optimizing organic brand entities and schema graphs so your brand surfaces naturally in ChatGPT answers alongside paid placements.</p>
                </div>
              </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border/70 bg-surface/50 p-6 md:p-8">
          <h3 className="font-display text-lg font-bold text-foreground">Scope Boundaries & Ideal Fit</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div key="Guaranteed Ad Approvals for Ineligible Regions" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Guaranteed Ad Approvals for Ineligible Regions</h5>
                <p className="mt-1 text-sm text-muted-foreground">OpenAI restricts direct Ads Manager billing to approved countries; non-eligible brands operate on readiness models.</p>
              </div>
              <div key="Vanity Impressions or Untracked Spend" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Vanity Impressions or Untracked Spend</h5>
                <p className="mt-1 text-sm text-muted-foreground">No campaigns run without verified first-party event tracking and commercial attribution.</p>
              </div>
          </div>
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Ideal Client Profile</span>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Growth-stage DTC brands, enterprise software providers, and international businesses seeking first-mover advantages in conversational search engines.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
