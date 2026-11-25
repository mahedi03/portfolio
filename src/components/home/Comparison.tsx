import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

/**
 * Comparison section — one growth partner vs. coordinating separate vendors.
 * Inspired by the reference agency's comparison table, rewritten in an
 * original solo-consultant voice.
 */

const comparisonRows = [
  {
    aspect: "Coordination",
    me: "One partner owns the plan end-to-end, from strategy to launch to reporting.",
    vendors: "You keep passing briefs back and forth between every provider.",
  },
  {
    aspect: "Message",
    me: "Website, content, and campaigns are written around the same offer.",
    vendors: "Each vendor works from its own brief, so the story drifts.",
  },
  {
    aspect: "Execution",
    me: "Marketing decisions get implemented the same week by the same hands.",
    vendors: "Changes wait in each vendor's queue before they ship.",
  },
  {
    aspect: "Visibility",
    me: "One consolidated report across ads, SEO, and the website.",
    vendors: "Every provider sends its own report, with no single source of truth.",
  },
  {
    aspect: "Cost of errors",
    me: "Problems surface and get fixed before they spread across channels.",
    vendors: "Blame moves between vendors while the revenue keeps leaking.",
  },
];

function ColumnHead({ children, highlight = false }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <p
      className={`border border-border px-4 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] ${
        highlight
          ? "border-white bg-white text-black"
          : "border-border bg-surface text-foreground"
      }`}
    >
      {children}
    </p>
  );
}

export function Comparison() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container>
        <Reveal className="max-w-4xl">
          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-display font-black tracking-tight text-white uppercase leading-tight">
            /COMPARISON: ONE PARTNER VS. FIVE VENDORS
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
            What actually changes when the whole system is held by one person:
          </p>
        </Reveal>

        {/* Mobile stacked cards - no horizontal scroll needed */}
        <div className="mt-8 grid gap-4 md:hidden">
          {comparisonRows.map((row, index) => (
            <Reveal key={row.aspect} delay={index * 0.05}>
              <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="border-b border-border bg-surface px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                    {row.aspect}
                  </p>
                </div>
                <div className="divide-y divide-border/60">
                  <div className="p-4">
                    <span className="inline-block rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                      With me
                    </span>
                    <p className="mt-2.5 text-sm font-medium leading-relaxed text-foreground">
                      {row.me}
                    </p>
                  </div>
                  <div className="p-4 bg-background/40">
                    <span className="inline-block rounded-full border border-border bg-surface px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Separate vendors
                    </span>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {row.vendors}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Tablet & desktop comparison grid */}
        <Reveal delay={0.08} className="hidden md:block">
          <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-sm">
            <div className="grid grid-cols-[0.85fr_1.1fr_1.1fr] lg:grid-cols-[1fr_1.1fr_1.1fr] gap-px bg-border/60">
              <ColumnHead>Factor</ColumnHead>
              <ColumnHead highlight>With me</ColumnHead>
              <ColumnHead>Separate vendors</ColumnHead>
            </div>
            <div className="grid gap-px bg-border/60">
              {comparisonRows.map((row) => (
                <div key={row.aspect} className="grid grid-cols-[0.85fr_1.1fr_1.1fr] lg:grid-cols-[1fr_1.1fr_1.1fr] gap-px bg-border/60">
                  <div className="bg-card p-5 lg:p-6">
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                      {row.aspect}
                    </p>
                  </div>
                  <div className="bg-card p-5 lg:p-6">
                    <p className="text-sm lg:text-base font-medium leading-relaxed text-foreground">
                      {row.me}
                    </p>
                  </div>
                  <div className="bg-card p-5 lg:p-6">
                    <p className="text-sm lg:text-base leading-relaxed text-muted-foreground">
                      {row.vendors}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
