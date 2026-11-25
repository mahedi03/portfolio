import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineEntry[] = [
  {
    year: "2014",
    title: "Co-Founded Riha Web Tech",
    description:
      "Started with a focused mission: helping businesses grow online through high-converting web presence and search visibility.",
  },
  {
    year: "2018",
    title: "Advanced SEO & Authority Systems",
    description:
      "Pioneered structured topical authority mapping, technical site architecture, and editorial link-building pipelines.",
  },
  {
    year: "2021",
    title: "Full-Funnel Paid Advertising",
    description:
      "Scaled Meta, Google, and TikTok paid social/search management with Conversion API and rigorous weekly creative testing.",
  },
  {
    year: "2025",
    title: "Transitioned to FrameCipher (July 2025)",
    description:
      "Concluded tenure at Riha Web Tech in July 2025 to dedicate full focus to FrameCipher, engineering generative engine optimization (GEO), AI retrieval systems, and high-performance Next.js applications.",
  },
  {
    year: "Today",
    title: "৳15 Lakh+ Revenue & 50+ Delivered Projects",
    description:
      "Partnering with ambitious businesses across eCommerce, SaaS, and local services, delivering predictable growth systems.",
  },
];

export function Journey() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-4 left-4 sm:left-12 select-none text-[clamp(3.75rem,12vw,12rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.025] leading-none z-0"
      >
        JOURNEY
      </div>

      <Container className="relative z-10 max-w-4xl">
        <Reveal>
          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tight text-white uppercase">
            /MY JOURNEY
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-muted-foreground">
            Key milestones across web engineering, semantic search, and performance marketing.
          </p>
        </Reveal>

        <div className="relative mt-10 space-y-5 pl-7 sm:pl-9">
          {/* Vertical gradient rail */}
          <div
            aria-hidden
            className="absolute bottom-2 left-2.5 top-2 w-px bg-gradient-to-b from-primary via-white/20 to-transparent sm:left-3"
          />

          {timeline.map((entry, i) => (
            <Reveal key={entry.year} delay={i * 0.06} className="relative">
              <div className="absolute -left-[1.6rem] top-6 size-3.5 rounded-full border-2 border-primary bg-background shadow-[0_0_12px_rgba(124,58,237,0.6)] sm:-left-[2.05rem]" />
              <div className="rounded-2xl border border-border bg-surface/60 p-5 sm:p-6 backdrop-blur-md transition-colors hover:border-white/25 hover:bg-surface/90">
                <span className="inline-block rounded-full border border-primary/25 bg-primary/10 px-3 py-0.5 font-mono text-xs font-bold text-primary">
                  {entry.year}
                </span>
                <h3 className="mt-3 text-lg sm:text-xl font-display font-bold text-white">
                  {entry.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {entry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
