import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Scale, Check, X } from "lucide-react";

interface ComparisonRow {
  aspect: string;
  us: string;
  them: string;
}

const comparisonRows: ComparisonRow[] = [
  {
    aspect: "Operational Coordination",
    us: "One unified senior partner, one accountable point of contact across strategy, web, and ads.",
    them: "You juggle handoffs between multiple disconnected freelancers, leading to blame-loops when campaigns fail.",
  },
  {
    aspect: "Message & Brand Consistency",
    us: "Strategy, copy, visual media, and web code are all engineered around the identical core offer.",
    them: "Each vendor operates in a silo; ad copy contradicts landing page content and brand messaging drifts.",
  },
  {
    aspect: "Execution Accountability",
    us: "Direct founder oversight (Mahedi Hasan / FrameCipher) with 100% in-house technical delivery.",
    them: "Junior agency account managers or outsourced subcontractors with zero technical domain depth.",
  },
  {
    aspect: "Technical Architecture",
    us: "Server-side tracking (CAPI, GTM, GA4), sub-2-second Next.js builds, and clean semantic structured data.",
    them: "Bloated page builders, broken browser pixels, and zero server-side attribution accuracy.",
  },
  {
    aspect: "Reporting & Verification",
    us: "Consolidated Looker Studio dashboards reporting blended ROAS, real CAC, and bank-verified sales.",
    them: "Fragmented platform-reported vanity metrics (likes, impressions, inflated pixel ROAS).",
  },
];

export function ServicesComparison() {
  return (
    <section className="border-t border-border/60 bg-background py-20 lg:py-28">
      <Container className="max-w-6xl">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Scale className="size-3.5" />
            Accountability Comparison
          </div>
          <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            One Unified Partner vs. Five Disconnected Vendors
          </h2>
          <p className="mt-3 text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
            The difference isn&apos;t just the skills offered—it&apos;s how they are interconnected. See what changes when strategy, creative, web architecture, and performance live under one roof.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/60 shadow-soft backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/80">
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground w-1/4">
                      Strategic Aspect
                    </th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 w-3/8 border-x border-border/50">
                      Mahedi Hasan / FrameCipher
                    </th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground/80 w-3/8">
                      Typical Freelancer / Generic Agency Mix
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {comparisonRows.map((row, idx) => (
                    <tr key={row.aspect || idx} className="transition-colors hover:bg-surface/40">
                      <td className="py-5 px-6 font-display font-bold text-sm text-foreground align-top">
                        {row.aspect}
                      </td>
                      <td className="py-5 px-6 text-sm text-foreground bg-primary/[0.02] border-x border-border/50 align-top">
                        <div className="flex items-start gap-2.5">
                          <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-medium">{row.us}</span>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-sm text-muted-foreground align-top">
                        <div className="flex items-start gap-2.5">
                          <X className="size-4 text-rose-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{row.them}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
