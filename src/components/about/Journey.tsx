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
    year: "2024",
    title: "Transitioned to FrameCipher (July 2024)",
    description:
      "Concluded tenure at Riha Web Tech in July 2024 to dedicate full focus to FrameCipher, engineering generative engine optimization (GEO), AI retrieval systems, and high-performance Next.js applications.",
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
