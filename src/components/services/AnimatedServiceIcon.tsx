"use client";

import { motion } from "framer-motion";
import { getLucideIcon } from "@/lib/icons";

export function AnimatedServiceIcon({ icon, label }: { icon: string; label: string }) {
  const Icon = getLucideIcon(icon);

  return (
    <div className="relative flex aspect-[3/2] items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface p-3 shadow-elevated">
      <motion.div
        aria-hidden="true"
        className="absolute size-56 rounded-full bg-primary/15 blur-3xl"
        animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="relative flex size-44 items-center justify-center rounded-[2rem] border border-primary/20 bg-card shadow-elevated sm:size-52"
        animate={{ y: [0, -14, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="flex size-24 items-center justify-center rounded-3xl bg-primary/10 text-primary sm:size-28"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="size-12 sm:size-14" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
      <div className="absolute bottom-7 left-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-2 text-sm font-medium text-card-foreground shadow-soft backdrop-blur">
        <Icon className="size-4 text-primary" /> {label}
      </div>
    </div>
  );
}
