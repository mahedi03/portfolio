import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export function AboutHero() {
  return (
    <section className="pt-16 pb-20 lg:pt-24 lg:pb-28">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">About</p>
          <h1 className="mt-3 text-[length:var(--text-h1)] font-display font-bold tracking-tight">I Build Digital Systems That Turn Visibility Into Growth</h1>
          <div className="mt-5 space-y-4 text-[length:var(--text-body-lg)] leading-8 text-muted-foreground">
            <p>I&apos;m {siteConfig.author.name}, a digital marketer, SEO specialist, content writer, web developer, and founder of <strong className="font-semibold text-foreground">FrameCipher</strong>. I help businesses build a stronger digital presence and turn online visibility into measurable growth.</p>
            <p>Over the past 4+ years, I&apos;ve worked across SEO, content marketing, paid advertising, website development, and digital strategy. I connect these disciplines into one system so strategy and execution support each other.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl border border-border bg-muted p-10 shadow-elevated">
            <Image src="/logo.png" alt={`${siteConfig.author.name} logo`} width={640} height={640} sizes="(max-width: 1024px) 100vw, 40vw" className="h-auto w-full object-contain" priority />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
