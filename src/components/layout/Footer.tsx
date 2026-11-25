import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageSquare } from "lucide-react";
import { footerNav, socialLinks } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { socialIconMap as iconMap } from "@/components/ui/social-icons";

export function Footer() {
  const allSocials = [
    ...socialLinks.map((s) => ({
      platform: s.platform === "Twitter" ? "X (Twitter)" : s.platform,
      href: s.href,
      icon: s.icon,
    })),
    {
      platform: "WhatsApp",
      href: siteConfig.author.whatsapp,
      icon: "WhatsApp",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/80 backdrop-blur-md">
      {/* Subtle top ambient highlight & seamless centered radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_55%_65%_at_50%_0%,rgba(124,58,237,0.08),transparent_70%)]"
      />

      <Container className="relative z-10 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Direct Contact (Left - 5 cols on lg) */}
          <div className="sm:col-span-2 lg:col-span-5 lg:pr-8">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="font-display text-2xl font-black tracking-tight text-white"
              >
                {siteConfig.name}
              </Link>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Available
              </span>
            </div>

            <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>

            {/* Quick contact details */}
            <div className="mt-6 flex flex-col gap-2.5 text-sm text-muted-foreground">
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="group inline-flex w-fit items-center gap-2.5 transition-colors hover:text-white"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-background/60 text-muted-foreground transition-colors group-hover:border-white/30 group-hover:text-white">
                  <Mail className="size-4" />
                </span>
                <span>{siteConfig.author.email}</span>
              </a>
              <div className="inline-flex items-center gap-2.5">
                <span className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-background/60 text-muted-foreground">
                  <MapPin className="size-4" />
                </span>
                <span>
                  {siteConfig.author.location.city}, {siteConfig.author.location.country} (GMT+6)
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Columns (Company + Services - 4 cols total on lg) */}
          {footerNav.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center text-sm sm:text-[15px] text-muted-foreground transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column-wise Social Media Links (Right - 3 cols on lg) */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
              Connect &amp; Social
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {allSocials.map((social) => {
                const Icon =
                  social.icon === "WhatsApp"
                    ? MessageSquare
                    : iconMap[social.icon];
                return (
                  <li key={social.platform}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="group flex items-center justify-between rounded-xl border border-border/80 bg-background/50 px-3.5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-white/30 hover:bg-background hover:text-white"
                    >
                      <span className="flex items-center gap-2.5">
                        {Icon && (
                          <Icon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-white" />
                        )}
                        <span>{social.platform}</span>
                      </span>
                      <ArrowUpRight className="size-4 opacity-50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
            <span>Working with founders &amp; teams worldwide</span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-semibold text-white transition-colors hover:text-primary"
            >
              <span>Start a project</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
