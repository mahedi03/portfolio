import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

/**
 * Why section — the reasons clients keep this engagement instead of juggling
 * separate freelancers and agencies. Copy is original to this portfolio.
 */

const reasons = [
  {
    title: "One accountable partner",
    description:
      "Strategy, design, code, SEO, and paid media don't get split across five contacts — they live in one plan with one person answerable for it.",
  },
  {
    title: "Strategy before tools",
    description:
      "Work starts from the business problem and the buyer's decision, not from a platform checklist or whatever service was trending.",
  },
  {
    title: "Engineer–marketer in one",
    description:
      "Websites ship hand-in-hand with the campaigns and content that depend on them, so nothing gets lost between a developer and an agency.",
  },
  {
    title: "Connected by default",
    description:
      "Tracking, pages, content, and ads are built around the same conversion event, so every channel is reading the same scoreboard.",
  },
  {
    title: "Built to grow",
    description:
      "Foundations are set up for the next ten pages, campaigns, and markets — launch is a milestone, not a ceiling.",
  },
  {
    title: "Reporting without noise",
    description:
      "You get one plain-language view of spend, rankings, leads, and revenue — the numbers that map to decisions, not vanity charts.",
  },
];

export function Why() {
  return (
    <section className="border-y border-border bg-surface/60 py-20 lg:py-28">
      <Container>
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white uppercase max-w-4xl leading-tight">
            /WHY — WORKING WITH ME
          </h2>
          <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            The advantage isn&apos;t the number of services offered — it&apos;s how tightly
            they&apos;re connected and who answers when a number moves.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.06}>
              <article className="group flex h-full min-h-52 flex-col justify-between rounded-2xl border border-border bg-background/80 p-6 transition-all duration-300 hover:border-white/30 sm:p-8 shadow-sm">
                <div>
                  <p
                    aria-hidden
                    className="font-display text-5xl font-bold leading-none tracking-tighter text-white/10 transition-colors duration-300 group-hover:text-white/25 sm:text-6xl"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-xl sm:text-2xl font-display font-black uppercase leading-tight tracking-tight text-white">
                    {reason.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
