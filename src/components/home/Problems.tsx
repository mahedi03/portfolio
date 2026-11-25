import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

/**
 * Problems section — mirrors the reference site's "problem awareness" block,
 * adapted to a solo growth-partner voice. Copy is original to this portfolio.
 */

const problems = [
  {
    title: "MARKETING FEELS STITCHED TOGETHER",
    description:
      "Every channel runs on a different plan made by a different provider, and nothing compounds into real growth.",
  },
  {
    title: "VISITS ARRIVE, ENQUIRIES DON'T",
    description:
      "The site presents itself well enough, yet the journey never hands a motivated visitor a reason to act.",
  },
  {
    title: "AD BUDGET LEAKS QUIETLY",
    description:
      "Campaigns go live before tracking, creative testing, and audience discipline are in place. Spend keeps rising while signal keeps dropping.",
  },
  {
    title: "PUBLISHING RHYTHM KEEPS BREAKING",
    description:
      "The feed goes quiet for weeks, and whenever content ships, there's no system behind what gets said and where.",
  },
  {
    title: "DATA LIVES IN FIVE DASHBOARDS",
    description:
      "Reports arrive from every direction, but there's still no single answer to 'what actually moved revenue this month?'",
  },
  {
    title: "TECH DECISIONS SLOW EVERYTHING",
    description:
      "Slow pages, missing integrations, and half-finished automations make every marketing push harder than it should be.",
  },
];

export function Problems() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      {/* Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-4 left-4 sm:left-12 select-none text-[clamp(3.75rem,12vw,12rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.025] leading-none z-0"
      >
        PROBLEM
      </div>

      <Container className="relative z-10">
        <Reveal>
          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-display font-black tracking-tight text-white uppercase max-w-4xl leading-tight">
            /PROBLEM
          </h2>
          <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            You don&apos;t need another service subscription. You need one connected system
            that carries strategy, website, content, and media in the same direction. These
            are the bottlenecks I&apos;m hired to remove.
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <Reveal key={problem.title} delay={index * 0.06}>
              <article className="group flex h-full min-h-48 sm:min-h-56 flex-col justify-between rounded-2xl border border-border bg-surface/60 p-5 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-surface shadow-sm">
                <div>
                  <p
                    aria-hidden
                    className="font-display text-4xl sm:text-5xl font-bold leading-none tracking-tighter text-white/10 transition-colors duration-300 group-hover:text-white/25 lg:text-6xl"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl xl:text-2xl font-display font-black uppercase leading-tight tracking-tight text-white">
                    {problem.title}
                  </h3>
                </div>
                <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 sm:mt-12 flex flex-col items-start justify-between gap-5 border-t border-border/60 pt-8 sm:pt-10 sm:flex-row sm:items-center">
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Fragmented execution is the expensive part. All the pieces exist; they just
            never point at one result. One partner keeps the message, the build, and the
            campaigns pulling together.
          </p>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/90 shadow-[0_8px_25px_rgba(255,255,255,0.2)]"
          >
            <span>Let&apos;s fix it together</span>
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
