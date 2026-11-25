import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

const expertise = [
  "Search Engine Optimization (SEO)",
  "Technical and On-Page SEO",
  "Local SEO",
  "Topical Authority and Content Strategy",
  "Semantic SEO and Internal Linking",
  "AEO and Generative Engine Optimization (GEO)",
  "Content Writing and Copywriting",
  "Google, Meta, TikTok, and Paid Advertising",
  "WordPress and Shopify Development",
  "Next.js Website Development",
  "Digital Marketing Strategy",
];

const narrativeBlocks = [
  {
    number: "01",
    title: "My Approach",
    paragraphs: [
      "I don't believe in chasing traffic for the sake of traffic. The goal is to attract the right audience, build trust, create a strong digital experience, and turn attention into business results.",
      "That starts with fundamentals: understanding the business, audience, market, competitors, search intent, and customer journey. From there, I build strategies that connect content, SEO, advertising, and technology.",
      "As search evolves beyond traditional engines into AI-powered discovery, I help businesses build content and digital assets that stay visible across both classic search and AI answers.",
    ],
  },
  {
    number: "02",
    title: "Building With Technology",
    paragraphs: [
      "I also engineer the technology behind digital marketing systems, working with Next.js, TypeScript, Node.js, Tailwind CSS, WordPress, HTML, CSS, and PHP.",
      "This allows me to approach growth from both sides: understanding how to attract users and how to build the fast, reliable digital infrastructure they interact with.",
    ],
  },
  {
    number: "03",
    title: "Building for the Future",
    paragraphs: [
      "Through my work and ventures including FrameCipher and my past tenure at Riha Web Tech, I focus on the intersection of data-backed marketing, technical search, content systems, and generative AI.",
      "My long-term goal is straightforward: build resilient digital systems that help ambitious businesses compete, grow, and stay visible in an increasingly competitive marketplace.",
    ],
  },
];

export function AboutContent() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
      <Container>
        {/* What I Do */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tight text-white uppercase">
                /WHAT I DO
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
                My expertise covers the connected disciplines that help a business get discovered, earn trust, and turn attention into action.
              </p>
            </div>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/80 px-4 py-3.5 text-sm font-medium text-foreground shadow-soft transition-colors hover:border-white/25 hover:bg-surface"
              >
                <CheckCircle2 className="size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Narrative Bento Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {narrativeBlocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-6 sm:p-8 backdrop-blur-md shadow-soft transition-colors hover:border-white/25">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                  {block.number}
                </span>
                <h3 className="mt-3 text-xl sm:text-2xl font-display font-black tracking-tight text-white">
                  {block.title}
                </h3>
                <div className="mt-4 space-y-3.5 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                  {block.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
