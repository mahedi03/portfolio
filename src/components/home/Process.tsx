import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

/**
 * Process section — a delivery loop from first audit to compounding scale.
 * Copy is original to this portfolio.
 */

const phases = [
  {
    title: "DISCOVER",
    description:
      "We map the business, the buyer, the competition, and the numbers already sitting in your accounts before anything is proposed.",
  },
  {
    title: "BLUEPRINT",
    description:
      "The offer, the message, the channel mix, and the measurement plan get written down as one connected growth plan.",
  },
  {
    title: "DESIGN & BUILD",
    description:
      "Pages, funnels, creative, and tracking come to life, engineered to load fast, read clearly, and capture intent.",
  },
  {
    title: "LAUNCH",
    description:
      "Campaigns go live, content starts shipping, and every channel is switched on with its conversion defined from day one.",
  },
  {
    title: "MEASURE",
    description:
      "Weekly signals (qualified traffic, cost per result, lead quality, revenue) decide what earns more budget and what gets cut.",
  },
  {
    title: "SCALE",
    description:
      "Winners get compounded: more creative, tighter audiences, deeper pages, and automation while the losers get retired.",
  },
];

export function Process() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      {/* Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-4 left-4 sm:left-12 select-none text-[clamp(3.75rem,12vw,12rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.025] leading-none z-0"
      >
        PROCESS
      </div>

      <Container className="relative z-10">
        <Reveal className="flex flex-col items-start justify-between gap-5 sm:gap-6 lg:flex-row lg:items-end">
          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-display font-black tracking-tight text-white uppercase leading-tight">
            /PROCESS: SIGNAL TO SCALE
          </h2>
          <p className="max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground">
            The work runs as a loop, not a one-off project: read the market, sharpen the
            plan, build the assets, ship, measure, and keep improving.
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase, index) => (
            <Reveal key={phase.title} delay={index * 0.06}>
              <article className="group relative flex h-full min-h-52 sm:min-h-60 flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/60 p-5 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-surface shadow-sm">
                {/* Giant phase number */}
                <p
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-5 select-none font-display text-[6rem] sm:text-[7rem] font-bold leading-none tracking-tighter text-white/[0.05] transition-colors duration-300 group-hover:text-white/[0.1]"
                >
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div className="relative z-10">
                  <span className="text-xs font-mono text-muted-foreground">
                    PHASE 0{index + 1}
                  </span>
                  <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl xl:text-3xl font-display font-black uppercase leading-none tracking-tight text-white">
                    {phase.title}
                  </h3>
                </div>

                <p className="relative z-10 mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
