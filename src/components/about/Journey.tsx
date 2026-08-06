import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineEntry[] = [
  {
    year: "2020",
    title: "Started freelancing",
    description:
      "Began taking on web development and SEO projects for small businesses.",
  },
  {
    year: "2022",
    title: "Expanded into paid advertising",
    description:
      "Added Meta, Google, and TikTok Ads management to the service offering.",
  },
  {
    year: "2024",
    title: "Full-stack agency capability",
    description:
      "Built out a complete development + marketing capability serving clients internationally.",
  },
  {
    year: "Today",
    title: "Focused on measurable growth",
    description:
      "Continuing to combine technical development with data-driven marketing for clients worldwide.",
  },
];

export function Journey() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="max-w-3xl">
        <Reveal>
          <h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">
            My journey
          </h2>
        </Reveal>

        <div className="mt-12 space-y-8 border-l border-border pl-8">
          {timeline.map((entry, i) => (
            <Reveal key={entry.year} delay={i * 0.06} className="relative">
              <div className="absolute -left-[2.35rem] top-1 size-3 rounded-full border-2 border-primary bg-background" />
              <div className="text-sm font-semibold text-primary">
                {entry.year}
              </div>
              <h3 className="mt-1 text-lg font-semibold">{entry.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {entry.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
