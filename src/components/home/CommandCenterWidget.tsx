"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Search,
  Megaphone,
  Code2,
  Activity,
  ShieldCheck,
} from "lucide-react";

export function CommandCenterWidget() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Glow highlight behind dashboard */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-purple-600/15 to-blue-600/20 blur-2xl -z-10 opacity-70" />

      {/* Main Glassmorphic Dashboard Window */}
      <div className="rounded-2xl border border-border/80 bg-card/90 p-4 sm:p-5 shadow-2xl backdrop-blur-xl ring-1 ring-white/10">
        {/* Window Top Bar */}
        <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-500/80" />
            <span className="size-2.5 rounded-full bg-amber-500/80" />
            <span className="size-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-medium text-muted-foreground">
              rihawebtech.com / growth-engine
            </span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
            Live Client Data
          </div>
        </div>

        {/* Header Summary */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Growth Command Center
            </p>
            <p className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
              ৳15 Lakh+ <span className="text-xs font-normal text-muted-foreground">Revenue Generated</span>
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold text-primary">
            <span>Verified Track Record</span>
            <ShieldCheck className="size-4 text-primary" />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {/* Metric 1: Organic Growth */}
          <div className="rounded-xl border border-border/60 bg-muted/40 p-3 transition-colors hover:border-primary/40 hover:bg-muted/70">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-muted-foreground">Organic Traffic</span>
              <div className="rounded-lg bg-emerald-500/10 p-1 text-emerald-400">
                <TrendingUp className="size-3.5" />
              </div>
            </div>
            <p className="mt-1 text-lg font-extrabold text-foreground sm:text-xl">
              +14.2k
            </p>
            <p className="text-[10px] font-semibold text-emerald-400">
              ↑ 12% MoM growth
            </p>
          </div>

          {/* Metric 2: Paid Ads ROAS */}
          <div className="rounded-xl border border-border/60 bg-muted/40 p-3 transition-colors hover:border-primary/40 hover:bg-muted/70">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-muted-foreground">Paid Ads ROAS</span>
              <div className="rounded-lg bg-blue-500/10 p-1 text-blue-400">
                <Megaphone className="size-3.5" />
              </div>
            </div>
            <p className="mt-1 text-lg font-extrabold text-foreground sm:text-xl">
              4.8x
            </p>
            <p className="text-[10px] font-semibold text-blue-400">
              Meta & Google Campaigns
            </p>
          </div>

          {/* Metric 3: SEO Visibility */}
          <div className="rounded-xl border border-border/60 bg-muted/40 p-3 transition-colors hover:border-primary/40 hover:bg-muted/70">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-muted-foreground">Search Visibility</span>
              <div className="rounded-lg bg-purple-500/10 p-1 text-purple-400">
                <Search className="size-3.5" />
              </div>
            </div>
            <p className="mt-1 text-lg font-extrabold text-foreground sm:text-xl">
              +72%
            </p>
            <p className="text-[10px] font-semibold text-purple-400">
              AEO & Semantic SEO
            </p>
          </div>

          {/* Metric 4: Web Performance */}
          <div className="rounded-xl border border-border/60 bg-muted/40 p-3 transition-colors hover:border-primary/40 hover:bg-muted/70">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-muted-foreground">Core Web Vitals</span>
              <div className="rounded-lg bg-amber-500/10 p-1 text-amber-400">
                <Code2 className="size-3.5" />
              </div>
            </div>
            <p className="mt-1 text-lg font-extrabold text-foreground sm:text-xl">
              99%
            </p>
            <p className="text-[10px] font-semibold text-amber-400">
              Sub-2s Next.js Build
            </p>
          </div>
        </div>

        {/* Live Funnel Progress Indicators */}
        <div className="mt-3.5 rounded-xl border border-border/60 bg-muted/30 p-3">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-semibold text-foreground flex items-center gap-1.5">
              <Activity className="size-3.5 text-primary" />
              Full-Funnel Health
            </span>
            <span className="text-[10px] font-medium text-muted-foreground">
              94% Target Efficiency
            </span>
          </div>

          <div className="space-y-1.5">
            <div>
              <div className="flex justify-between text-[10px] text-muted-foreground mb-0.5">
                <span>Organic Search Authority</span>
                <span className="font-semibold text-foreground">88%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "88%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[10px] text-muted-foreground mb-0.5">
                <span>Ad Conversion Pipeline</span>
                <span className="font-semibold text-foreground">76%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "76%" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Micro Footer */}
        <div className="mt-3 flex items-center justify-between pt-1 text-[11px] text-muted-foreground">
          <span>Founder, FrameCipher</span>
          <span className="flex items-center gap-1 font-semibold text-foreground">
            Dhaka Office • Mirpur - 14
          </span>
        </div>
      </div>
    </div>
  );
}
