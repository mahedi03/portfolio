import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";

const expertise = [
  "Search Engine Optimization (SEO)",
  "Technical and On-Page SEO",
  "Local SEO",
  "Topical Authority and Content Strategy",
  "Semantic SEO and Internal Linking",
  "AEO and Generative Engine Optimization (GEO)",
  "Content Writing and Copywriting",
  "Google, Meta, TikTok, and other paid advertising platforms",
  "WordPress and Shopify Development",
  "Next.js Website Development",
  "Digital Marketing Strategy",
];

export function AboutContent() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <Container className="max-w-4xl">
        <div className="space-y-20">
          <Reveal>
            <h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">What I Do</h2>
            <p className="mt-5 max-w-3xl text-[length:var(--text-body-lg)] leading-8 text-muted-foreground">My expertise covers the connected disciplines that help a business get discovered, earn trust, and turn attention into action.</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">{expertise.map((item) => <li key={item} className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium shadow-soft">{item}</li>)}</ul>
          </Reveal>
          <Reveal>
            <h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">My Approach</h2>
            <div className="mt-5 max-w-3xl space-y-4 text-[length:var(--text-body-lg)] leading-8 text-muted-foreground">
              <p>I don&apos;t believe in chasing traffic for the sake of traffic. The goal is to attract the right audience, build trust, create a strong digital experience, and turn attention into business results.</p>
              <p>That means starting with the fundamentals: understanding the business, audience, market, competitors, search intent, and customer journey. From there, I build strategies that connect content, SEO, advertising, and technology.</p>
              <p>I&apos;m particularly interested in the evolution of search and AI-powered discovery. As search moves beyond traditional search engines, I help businesses build content and digital assets that remain useful across traditional and AI-driven discovery platforms.</p>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">Building With Technology</h2>
            <div className="mt-5 max-w-3xl space-y-4 text-[length:var(--text-body-lg)] leading-8 text-muted-foreground">
              <p>I also enjoy building the technology behind digital marketing systems. I work with WordPress, Next.js, TypeScript, Node.js, HTML, CSS, Tailwind CSS, and PHP.</p>
              <p>This allows me to approach marketing from both sides: understanding how to attract users and understanding how to build the digital infrastructure they interact with. I&apos;m continuously learning, experimenting, and building systems that make digital marketing more efficient, scalable, and effective.</p>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">Building for the Future</h2>
            <div className="mt-5 max-w-3xl space-y-4 text-[length:var(--text-body-lg)] leading-8 text-muted-foreground">
              <p>Through my work and projects, including <strong className="font-semibold text-foreground">FrameCipher</strong>, I&apos;m exploring the intersection of digital marketing, search, content, technology, and artificial intelligence.</p>
              <p>My long-term goal is simple: build better digital systems that help businesses compete, grow, and stay visible in an increasingly complex digital landscape.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl bg-primary px-8 py-12 text-center text-primary-foreground">
              <h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">Let&apos;s Build Something That Works</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-primary-foreground/80">Whether you need a stronger SEO strategy, a content system, a high-performing website, a digital marketing campaign, or a complete growth strategy, I focus on building digital systems that create real business value.</p>
              <Button asChild size="lg" variant="secondary" className="mt-7"><Link href="/contact">Start a Conversation <ArrowRight className="size-4" /></Link></Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
