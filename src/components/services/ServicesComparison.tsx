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
    <section className="border-t border-border/60 py-14 sm:py-20 lg:py-24">
      <Container className="max-w-6xl">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Scale className="size-3.5" />
            Accountability Comparison
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl font-display font-black tracking-tight text-white uppercase">
            One Unified Partner vs. Five Disconnected Vendors
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
            The difference isn&apos;t just the skills offered; it&apos;s how tightly they connect when strategy, web architecture, search, and paid media live under one roof.
          </p>
        </Reveal>

        {/* Mobile stacked cards */}
        <div className="mt-8 grid gap-4 md:hidden">
          {comparisonRows.map((row, idx) => (
            <Reveal key={row.aspect || idx} delay={idx * 0.05}>
              <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <div className="border-b border-border bg-surface px-4 py-3 text-xs font-bold uppercase tracking-wider text-white">
                  {row.aspect}
                </div>
                <div className="divide-y divide-border/60">
                  <div className="p-4">
                    <span className="inline-block rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase text-black">
                      Mahedi Hasan / FrameCipher
                    </span>
                    <p className="mt-2.5 text-sm font-medium leading-relaxed text-foreground">{row.us}</p>
                  </div>
                  <div className="bg-background/40 p-4">
                    <span className="inline-block rounded-full border border-border bg-surface px-2.5 py-0.5 text-[10px] font-semibold uppercase text-muted-foreground">
                      Disconnected Vendors
                    </span>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{row.them}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Desktop table */}
        <Reveal delay={0.1} className="mt-10 hidden md:block">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-card/80 shadow-soft backdrop-blur-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/80 bg-surface">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground w-1/4">
                    Strategic Aspect
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-black bg-white w-3/8">
                    Mahedi Hasan / FrameCipher
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-muted-foreground w-3/8">
                    Typical Freelancer / Agency Mix
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {comparisonRows.map((row, idx) => (
                  <tr key={row.aspect || idx} className="transition-colors hover:bg-surface/40">
                    <td className="py-5 px-6 font-display font-bold text-sm text-white align-top">
                      {row.aspect}
                    </td>
                    <td className="py-5 px-6 text-sm text-foreground bg-white/[0.02] border-x border-border/50 align-top">
                      <div className="flex items-start gap-2.5">
                        <Check className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium">{row.us}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-sm text-muted-foreground align-top">
                      <div className="flex items-start gap-2.5">
                        <X className="size-4 text-rose-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{row.them}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
