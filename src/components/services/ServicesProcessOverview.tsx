import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";
import { Search, Compass, Cpu, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Audit & Architecture",
    description:
      "We diagnose technical bottlenecks, algorithmic gaps, conversion leaks, and tracking discrepancies before proposing any changes.",
    icon: Search,
  },
  {
    step: "02",
    title: "Full-Funnel Strategy",
    description:
      "Develop a unified growth roadmap bridging SEO topical authority, ad spend attribution, and conversion engineering.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Precision Execution",
    description:
      "Deploy custom web builds, configure server-side CAPI / GA4 tracking, and launch high-velocity creative campaigns.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Iterative Scaling",
    description:
      "Analyze first-party conversion data weekly to scale winning ad sets, expand organic keyword clusters, and compound ROAS.",
    icon: TrendingUp,
  },
];

export function ServicesProcessOverview() {
  return (
    <section className="border-t border-border/70 bg-surface/30 py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Badge variant="outline" className="text-xs font-semibold uppercase tracking-wider text-primary">
              Systematic Delivery
            </Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
              How Every Engagement Delivers Results
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Rather than selling isolated tasks, we engineer connected growth engines designed to compound over months and years.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.step} delay={idx * 0.08} className="h-full">
                <div className="relative flex h-full flex-col justify-between rounded-xl border border-border/80 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-elevated">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-bold text-primary/40">{item.step}</span>
                      <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-4" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
