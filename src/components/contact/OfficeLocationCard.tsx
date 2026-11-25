import { MapPin, Mail, Phone, Clock, Building2, MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function OfficeLocationCard() {
  const office = siteConfig.agency.office;

  return (
    <div className="space-y-5">
      {/* Primary Direct Channels */}
      <div className="rounded-3xl border border-white/10 bg-surface/60 p-6 sm:p-7 backdrop-blur-md shadow-xl">
        <div className="flex items-center justify-between border-b border-border/70 pb-4">
          <h3 className="text-base font-display font-bold text-white">
            Direct Channels
          </h3>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Active
          </span>
        </div>

        <ul className="mt-5 space-y-4">
          <li>
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="group flex items-start gap-3.5 rounded-xl border border-transparent p-2 -mx-2 transition-colors hover:border-white/10 hover:bg-background/50"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background/70 text-primary">
                <Mail className="size-4" />
              </span>
              <div className="min-w-0 text-xs">
                <div className="text-muted-foreground">Direct Email</div>
                <div className="mt-0.5 truncate text-sm font-semibold text-white group-hover:text-primary transition-colors">
                  {siteConfig.author.email}
                </div>
              </div>
            </a>
          </li>

          <li>
            <a
              href={`tel:${siteConfig.author.phone}`}
              className="group flex items-start gap-3.5 rounded-xl border border-transparent p-2 -mx-2 transition-colors hover:border-white/10 hover:bg-background/50"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background/70 text-primary">
                <Phone className="size-4" />
              </span>
              <div className="text-xs">
                <div className="text-muted-foreground">Phone / Direct Line</div>
                <div className="mt-0.5 text-sm font-semibold text-white group-hover:text-primary transition-colors">
                  {siteConfig.author.phone}
                </div>
              </div>
            </a>
          </li>

          <li className="flex items-start gap-3.5 p-2 -mx-2">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background/70 text-primary">
              <Clock className="size-4" />
            </span>
            <div className="text-xs">
              <div className="text-muted-foreground">Working Hours</div>
              <div className="mt-0.5 text-sm font-medium text-white">
                {office?.hours || "Saturday – Thursday: 9:00 AM – 7:00 PM (GMT+6)"}
              </div>
            </div>
          </li>
        </ul>

        <a
          href={`https://wa.me/${siteConfig.author.phone.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-400 transition-colors hover:bg-emerald-500/20"
        >
          <MessageCircle className="size-4" />
          <span>Chat on WhatsApp</span>
          <ArrowUpRight className="size-4" />
        </a>
      </div>

      {/* Agency Headquarters Card */}
      <div className="rounded-3xl border border-white/10 bg-surface/60 p-6 sm:p-7 backdrop-blur-md shadow-xl">
        <div className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
            <Building2 className="size-4" />
          </span>
          <h4 className="text-sm font-display font-bold text-white">
            Headquarters &amp; Office
          </h4>
        </div>

        <div className="mt-4 flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
          <MapPin className="size-4 text-primary shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-white">
              <a
                href="https://framecipher.info"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                FrameCipher
              </a>
            </p>
            <p className="mt-0.5">{office?.address || "109, Ibrahimpur, Mirpur - 14"}</p>
            <p>
              {office?.city || "Dhaka"} - {office?.postalCode || "1206"}, {office?.country || "Bangladesh"}
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-border/70 bg-background/60 p-3.5 text-xs leading-relaxed text-muted-foreground">
          International consultations are conducted via Google Meet, Zoom, or Slack with live screen-share audits.
        </div>
      </div>
    </div>
  );
}
