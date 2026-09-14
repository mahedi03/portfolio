import { MapPin, Mail, Phone, Clock, Building2, MessageCircle, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";

export function OfficeLocationCard() {
  const office = siteConfig.agency.office;

  return (
    <div className="space-y-6">
      {/* Primary Direct Channels */}
      <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold font-display text-foreground">
            Direct Founder Channels
          </h3>
          <Badge variant="outline" className="text-[10px] text-emerald-500 border-emerald-500/30 bg-emerald-500/10">
            Active
          </Badge>
        </div>

        <ul className="mt-5 space-y-4">
          <li className="flex items-start gap-3">
            <Mail className="size-4 shrink-0 text-primary mt-1" />
            <div className="text-xs">
              <div className="text-muted-foreground">Direct Email</div>
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {siteConfig.author.email}
              </a>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <Phone className="size-4 shrink-0 text-primary mt-1" />
            <div className="text-xs">
              <div className="text-muted-foreground">Phone / Direct Line</div>
              <a
                href={`tel:${siteConfig.author.phone}`}
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {siteConfig.author.phone}
              </a>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <MessageCircle className="size-4 shrink-0 text-emerald-500 mt-1" />
            <div className="text-xs">
              <div className="text-muted-foreground">WhatsApp Instant Priority</div>
              <a
                href={`https://wa.me/${siteConfig.author.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-emerald-500 hover:underline inline-flex items-center gap-1"
              >
                Chat on WhatsApp <ExternalLink className="size-3" />
              </a>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <Clock className="size-4 shrink-0 text-primary mt-1" />
            <div className="text-xs">
              <div className="text-muted-foreground">Working Hours</div>
              <div className="font-medium text-foreground">
                {office?.hours || "Saturday – Thursday: 9:00 AM – 7:00 PM (GMT+6)"}
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Agency Headquarters Card */}
      <div className="rounded-2xl border border-border/80 bg-surface/80 p-6 shadow-soft">
        <div className="flex items-center gap-2">
          <Building2 className="size-4 text-primary" />
          <h4 className="text-sm font-bold text-foreground">
            Headquarters &amp; Physical Office
          </h4>
        </div>

        <div className="mt-4 space-y-2 text-xs leading-relaxed text-muted-foreground">
          <div className="flex items-start gap-2.5">
            <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">FrameCipher</p>
              <p className="mt-0.5">
                {office?.address || "109, Ibrahimpur, Mirpur - 14"}
              </p>
              <p>
                {office?.city || "Dhaka"} - {office?.postalCode || "1206"}, {office?.country || "Bangladesh"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-lg border border-border/60 bg-background/50 p-3 text-[11px] text-muted-foreground">
          International client consultations conducted via Google Meet, Zoom, or Slack with complete screen-share audits.
        </div>
      </div>
    </div>
  );
}
