import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CheckCircle2 } from "lucide-react";

export function LocalSeoOffer() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Service Capabilities</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Comprehensive Local Search Optimization
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Everything needed to win top 3 Google Map pack rankings, incoming phone calls, and direct local foot traffic.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div key="Google Business Profile (GBP) Full Optimization" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Google Business Profile (GBP) Full Optimization</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Category optimization, secondary attributes, geotagged photos, business hours, and weekly post scheduling.</p>
                </div>
              </div>
              <div key="NAP Consistency & Local Citation Auditing" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">NAP Consistency & Local Citation Auditing</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Building and cleaning up business listings across high-authority local and international business directories.</p>
                </div>
              </div>
              <div key="Localized On-Page SEO & City Landing Pages" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Localized On-Page SEO & City Landing Pages</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Creating dedicated service-area pages formatted with localized headings, embedded maps, and local customer evidence.</p>
                </div>
              </div>
              <div key="Local Business Schema & Geo-Coordinates" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Local Business Schema & Geo-Coordinates</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Implementing LocalBusiness JSON-LD markup with geo-coordinates, service radius, and price ranges.</p>
                </div>
              </div>
              <div key="Review Generation & Reputation Workflows" className="flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Review Generation & Reputation Workflows</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">Establishing automated follow-up sequences to capture positive customer reviews and draft keyword-rich responses.</p>
                </div>
              </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border/70 bg-surface/50 p-6 md:p-8">
          <h3 className="font-display text-lg font-bold text-foreground">Scope Boundaries & Ideal Fit</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div key="Fake or Purchased Reviews" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Fake or Purchased Reviews</h5>
                <p className="mt-1 text-sm text-muted-foreground">We strictly reject review buying which violates Google guidelines and risks profile suspension.</p>
              </div>
              <div key="Spammy Virtual Offices" className="rounded-xl border border-border/60 bg-card/40 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">Out of Scope</span>
                <h5 className="mt-1 font-medium text-foreground">Spammy Virtual Offices</h5>
                <p className="mt-1 text-sm text-muted-foreground">Legitimate local ranking requires verified physical presence or compliant service-area business setups.</p>
              </div>
          </div>
          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Ideal Client Profile</span>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Clinics, law firms, dental practices, retail outlets, home service contractors, and B2B providers serving specific geographic regions.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
