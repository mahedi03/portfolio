import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowUpRight, Building2, ShieldCheck } from "lucide-react";

export function LeadershipRole() {
  return (
    <section className="border-y border-border/80 bg-surface/40 py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 space-y-5">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Executive Experience
              </span>
              <h2 className="mt-4 text-2xl sm:text-4xl lg:text-[2.5rem] font-display font-black tracking-tight text-white uppercase leading-tight">
                /LEADERSHIP &amp; CONVERSION ARCHITECTURE
              </h2>
              <div className="mt-5 space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
                <p>
                  Having served as Co-Founder at <strong className="text-white">Riha Web Tech</strong> from 2022 until July 2025, I collaborated with our executive team to design and execute growth models for scaling businesses globally.
                </p>
                <p>
                  In July 2025, I concluded my co-founding tenure at Riha Web Tech to focus exclusively on{" "}
                  <a
                    href="https://framecipher.info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary"
                  >
                    FrameCipher
                  </a>{" "}
                  as Founder &amp; Web Architect, engineering high-performance Next.js systems, semantic SEO architectures, and AI discovery protocols.
                </p>
                <p>
                  My ongoing work bridges engineering precision with performance marketing rigor, translating commercial targets into high-converting funnels and dependable organic visibility.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121318] p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <Building2 className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-white">FrameCipher</h3>
                      <p className="text-xs text-muted-foreground">Founder &amp; Web Architect · Global Delivery</p>
                    </div>
                  </div>
                  <a
                    href="https://framecipher.info"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit FrameCipher"
                    className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-surface/70 text-muted-foreground transition-colors hover:border-white/40 hover:text-white"
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-surface/60 px-4 py-3.5">
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground">Revenue Generated</span>
                    <span className="font-display font-black text-white text-base sm:text-lg">৳15 Lakh+</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-surface/60 px-4 py-3.5">
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground">Projects Delivered</span>
                    <span className="font-display font-black text-white text-base sm:text-lg">50+ Projects</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-surface/60 px-4 py-3.5">
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground">Client Satisfaction</span>
                    <span className="font-display font-black text-emerald-400 text-base sm:text-lg">99% Positive</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-surface/60 px-4 py-3.5">
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground">Base Location</span>
                    <span className="font-semibold text-white text-xs sm:text-sm">Mirpur - 14, Dhaka</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/10 py-2.5 text-xs font-semibold text-primary">
                  <ShieldCheck className="size-4" />
                  <span>Founder at FrameCipher · Ex Co-Founder, Riha Web Tech</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
