import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export function AboutHero() {
  return (
    <section className="pt-16 pb-20 lg:pt-24 lg:pb-28">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span>Founder, FrameCipher</span>
            <span className="text-border">•</span>
            <span>Former Co-Founder, Riha Web Tech</span>
          </div>
          <h1 className="mt-4 text-[length:var(--text-h1)] font-display font-bold tracking-tight text-foreground">
            Building Practical Digital Systems That Turn Traffic Into Business Revenue
          </h1>
          <div className="mt-5 space-y-4 text-[length:var(--text-body-lg)] leading-8 text-muted-foreground">
            <p>
              I&apos;m {siteConfig.author.name}, Founder of <strong className="font-semibold text-foreground">FrameCipher</strong> and former Co-Founder at <a href="https://rihawebtech.com" target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-4">Riha Web Tech</a> (served 2022 until stepping down in July 2024). My focus is translating corporate key targets into high-converting acquisition pipelines, dependable search engine visibility, and fast web infrastructure.
            </p>
            <p>
              Over the past 4+ years, I have helped deliver 50+ projects across eCommerce, SaaS, and local businesses, generating more than ৳15 Lakh+ in measurable business returns. I connect technical SEO, conversion-focused paid advertising, editorial authority, and modern Next.js development into one coherent system so that marketing channels work together rather than competing for credit.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-card to-muted/40 p-4 shadow-elevated">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted/30">
              <Image
                src="/Mahedi Hasan-transparent.png"
                alt={`${siteConfig.author.name} — Founder of FrameCipher`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_15%]"
                priority
              />
            </div>
            <div className="mt-3 flex items-center justify-between px-2 pt-1 text-xs">
              <span className="font-bold text-foreground">Mahedi Hasan</span>
              <span className="text-muted-foreground">Dhaka, Bangladesh</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
