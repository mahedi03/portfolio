import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function ChatgptAdsHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-surface via-background to-background py-20 lg:py-28">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <Container className="relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-muted-foreground">ChatGPT Ads Strategy & Campaign Management</span>
          </div>
          <h1 className="mt-6 max-w-4xl text-[length:var(--text-h1)] font-display font-bold tracking-tight text-foreground">
            ChatGPT Ads: Strategic Readiness & Campaign Management
          </h1>
          <p className="mt-3 text-lg font-medium text-primary">
            Context-Hint Targeting, Conversions API & Full AI Search Alignment
          </p>
          <div className="mt-6 max-w-3xl rounded-xl border border-border/70 bg-card/50 p-6 backdrop-blur-sm">
            <p className="text-base leading-relaxed text-muted-foreground">
              ChatGPT Ads are sponsored link placements appearing beneath AI-generated responses for Free and Go tier users. As Founder of <a href="https://framecipher.info" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">FrameCipher</a> and former Co-Founder at Riha Web Tech (stepped down July 2025), Mahedi Hasan engineers readiness strategies, context-hint intent mapping, and direct campaign operations for global and Bangladeshi brands.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Book Strategy Consultation <ArrowUpRight className="size-4" />
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-surface"
            >
              View Pricing & Deliverables ↓
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border/60 pt-6 sm:grid-cols-4">
            <div>
              <div className="text-2xl font-bold font-display text-foreground">4+ Years</div>
              <div className="text-xs text-muted-foreground">Technical Track Record</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-foreground">50+ Projects</div>
              <div className="text-xs text-muted-foreground">Successfully Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-foreground">৳15L+ Revenue</div>
              <div className="text-xs text-muted-foreground">Client Sales Impact</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-foreground">100% Proven</div>
              <div className="text-xs text-muted-foreground">Zero AI Clichés / Fluff</div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
