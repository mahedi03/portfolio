"use client";

import { useEffect, useState } from "react";

export function AmbientBackground() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Only track mouse on desktop devices to preserve mobile battery & performance
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden select-none"
    >
      {/* Video-matched atmospheric cloud background with subtle animated drift */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 cloud-drift-bg mix-blend-screen"
        style={{ backgroundImage: "url('/cloud-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />

      {/* Dynamic interactive mouse spotlight */}
      {mousePosition && (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-500 will-change-transform"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(59, 130, 246, 0.04) 40%, transparent 70%)",
          }}
        />
      )}

      {/* Floating ambient gradient orbs */}
      <div className="ambient-orb ambient-orb-1 opacity-40" />
      <div className="ambient-orb ambient-orb-2 opacity-40" />
      <div className="ambient-orb ambient-orb-3 opacity-40" />

      {/* Modern subtle tech grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Subtle top vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-60" />
    </div>
  );
}
