"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Building2, ShieldCheck } from "lucide-react";

export function LeadershipRole() {
  return (
    <section className="border-t border-border/80 bg-muted/20 py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Executive Experience
              </span>
              <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
                Agency Leadership & Corporate Conversion Architecture
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Having served as Co-Founder at <strong className="text-foreground">Riha Web Tech</strong> from 2022 until July 2025, I collaborated with our executive team to design and execute growth models for enterprise clients and scaling businesses globally.
                </p>
                <p>
                  In July 2025, I concluded my co-founding tenure at Riha Web Tech to focus exclusively on <a href="https://framecipher.info" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">FrameCipher</a> as Founder &amp; Web Architect, engineering high-performance Next.js systems, semantic SEO architectures, and AI discovery protocols.
                </p>
                <p>
                  My ongoing work bridges engineering precision with performance marketing rigor—translating commercial key targets into high-converting conversion funnels and dependable organic search visibility.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-elevated">
                <div className="flex items-center gap-3 border-b border-border/60 pb-5">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Building2 className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Riha Web Tech</h3>
                    <p className="text-xs text-muted-foreground">Established 2014 • Global Delivery</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between rounded-xl bg-muted/40 p-3.5">
                    <span className="text-sm font-medium text-muted-foreground">Revenue Generated</span>
                    <span className="font-extrabold text-foreground text-base sm:text-lg">৳15 Lakh+</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-muted/40 p-3.5">
                    <span className="text-sm font-medium text-muted-foreground">Projects Delivered</span>
                    <span className="font-extrabold text-foreground text-base sm:text-lg">50+ Projects</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-muted/40 p-3.5">
                    <span className="text-sm font-medium text-muted-foreground">Client Satisfaction</span>
                    <span className="font-extrabold text-emerald-400 text-base sm:text-lg">99% Positive</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-muted/40 p-3.5">
                    <span className="text-sm font-medium text-muted-foreground">Office Location</span>
                    <span className="font-semibold text-foreground text-xs sm:text-sm">Mirpur - 14, Dhaka</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-primary/10 py-2.5 text-xs font-semibold text-primary">
                  <ShieldCheck className="size-4" />
                  <span>Verified Agency Co-Founder</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
