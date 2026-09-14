import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function CTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/50 backdrop-blur-xl px-8 py-16 sm:py-20 lg:py-24 text-center shadow-2xl">
          {/* Subtle glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-72 rounded-full bg-primary/15 blur-3xl"
          />

          {/* Status Pill Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground shadow-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for New Project</span>
            </div>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-display font-black tracking-tight text-white uppercase">
            HAVE A PROJECT IN MIND?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Together, we can build high-performance web systems and scale search visibility. Let&apos;s collaborate to turn your digital presence into measurable business revenue.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/90 shadow-[0_8px_25px_rgba(255,255,255,0.25)]"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
