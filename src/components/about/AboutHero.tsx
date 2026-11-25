import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

const quickStats = [
  { value: "4+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "৳15L+", label: "Revenue Driven" },
];

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      {/* Giant Faint Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-2 left-4 sm:left-12 select-none text-[clamp(4rem,13vw,13rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.025] leading-none z-0"
      >
        ABOUT
      </div>

      <Container className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-foreground backdrop-blur-md">
            <span className="size-2 rounded-full bg-emerald-400" />
            <span>Founder, FrameCipher</span>
            <span className="text-border" aria-hidden>•</span>
            <span className="text-muted-foreground">Former Co-Founder, Riha Web Tech</span>
          </div>

          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-display font-black tracking-tight text-white leading-[1.08]">
            Building Practical Digital Systems That Turn Traffic Into Revenue
          </h1>

          <div className="mt-5 space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m {siteConfig.author.name}, Founder of{" "}
              <a
                href="https://framecipher.info"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary"
              >
                FrameCipher
              </a>{" "}
              and former Co-Founder at <strong className="font-semibold text-white">Riha Web Tech</strong> (2022 to July 2025). My focus is translating business goals into high-converting acquisition pipelines, dependable organic search visibility, and fast web infrastructure.
            </p>
            <p>
              Over the past 4+ years, I have helped deliver 50+ projects across eCommerce, SaaS, and local businesses, generating more than ৳15 Lakh+ in measurable returns by connecting technical SEO, paid advertising, content strategy, and modern Next.js development into one coherent system.
            </p>
          </div>

          {/* Quick Stats Row */}
          <div className="mt-7 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-surface/60 px-3.5 py-3 sm:px-4 sm:py-3.5 backdrop-blur-md"
              >
                <div className="font-display text-xl sm:text-2xl font-black text-white">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[11px] sm:text-xs font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/90 shadow-[0_8px_25px_rgba(255,255,255,0.2)]"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowUpRight className="size-4" />
            </Link>
            <a
              href="/cv/mahedi-hasan-cv.pdf"
              download="mahedi-hasan-cv.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-surface hover:text-white"
            >
              <span>Download CV</span>
              <Download className="size-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:max-w-md">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-primary/15 blur-3xl opacity-60"
            />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-surface/70 p-3.5 sm:p-4 backdrop-blur-md shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.04] to-background/80">
                <Image
                  src="/mahedi-hasan-transparent.webp"
                  alt={`${siteConfig.author.name}, Founder of FrameCipher`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[center_12%]"
                  priority
                />
              </div>
              <div className="mt-3.5 flex items-center justify-between px-2 pb-1 text-xs sm:text-sm">
                <span className="font-display font-bold text-white">{siteConfig.author.name}</span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="size-3.5 text-primary" />
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
