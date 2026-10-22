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
    me: "One partner owns the plan end-to-end — strategy to launch to reporting.",
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
    vendors: "Every provider sends its own report — no single source of truth.",
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
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white uppercase leading-tight">
            /COMPARISON — ONE PARTNER VS. FIVE VENDORS
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
            What actually changes when the whole system is held by one person:
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border shadow-sm">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-[1.1fr_1fr_1fr] gap-px bg-border/60">
                <ColumnHead>Factor</ColumnHead>
                <ColumnHead highlight>With me</ColumnHead>
                <ColumnHead>Separate vendors</ColumnHead>
              </div>
              <div className="grid gap-px bg-border/60">
                {comparisonRows.map((row) => (
                  <div key={row.aspect} className="grid grid-cols-[1.1fr_1fr_1fr] gap-px bg-border/60">
                    <div className="bg-card p-4 sm:p-6">
                      <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                        {row.aspect}
                      </p>
                    </div>
                    <div className="bg-card p-4 sm:p-6">
                      <p className="text-sm sm:text-base font-medium leading-relaxed text-foreground">
                        {row.me}
                      </p>
                    </div>
                    <div className="bg-card p-4 sm:p-6">
                      <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {row.vendors}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
