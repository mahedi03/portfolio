import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

/**
 * Industries section — who this work is built for, plus the outcomes strip.
 * Copy is original to this portfolio.
 */

const industries = [
  { name: "E-COMMERCE", line: "Store builds, product content, paid funnels, and checkout-stage conversion work." },
  { name: "Local Services", line: "Map-pack visibility, review systems, and lead-capture pages that answer the phone-ready customer." },
  { name: "Real Estate", line: "Listing sites, lead-gen campaigns, and neighbourhood-focused search pages." },
  { name: "Education", line: "Enrolment-first landing pages, admission-season campaigns, and structured content." },
  { name: "Healthcare", line: "Trust-led websites, location search visibility, and patient enquiry flows." },
  { name: "SaaS & Startups", line: "Launch foundations: a sharp site, clean analytics, and first scalable acquisition channels." },
  { name: "Fashion & Lifestyle", line: "Catalog-ready stores, shoot-led content rhythms, and campaign calendars." },
  { name: "Professional Services", line: "Authority positioning, deep service pages, and enquiry paths that pre-qualify." },
  { name: "Personal Brands", line: "Content systems, platform strategy, and audience-to-offer bridges." },
];

const outcomes = [
  "Sharper brand presentation",
  "A steadier publishing rhythm",
  "Campaigns that arrive prepared",
  "Websites engineered to convert",
  "Clearer positioning of every offer",
  "Digital systems that stay organized",
];

export function Industries() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      {/* Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-4 left-4 sm:left-12 select-none text-[clamp(3.5rem,12vw,12rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.025] leading-none z-0"
      >
        INDUSTRIES
      </div>

      <Container className="relative z-10">
        <Reveal className="flex flex-col items-start justify-between gap-5 sm:gap-6 lg:flex-row lg:items-end">
          <h2 className="max-w-2xl text-2xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-display font-black tracking-tight text-white uppercase leading-tight">
            /INDUSTRIES: BUILT FOR AMBITIOUS TEAMS
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:pb-1">
            The vertical changes; the system doesn&apos;t. Strategy, website, content, and
            media always work as one machine. Here&apos;s how it translates per industry.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border/60 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.04} className="h-full">
              <article className="group flex h-full flex-col bg-card p-6 transition-colors duration-300 hover:bg-surface md:p-7">
                <p
                  aria-hidden
                  className="font-display text-3xl font-bold leading-none tracking-tighter text-white/15 transition-colors duration-300 group-hover:text-white/30 md:text-4xl"
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-lg sm:text-xl font-display font-black uppercase leading-tight tracking-tight text-white">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.line}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border/60 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome) => (
              <div key={outcome} className="flex min-h-20 items-center bg-card p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-display font-bold uppercase leading-snug tracking-tight text-white sm:text-lg md:text-xl">
                  {outcome}
                </h3>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
