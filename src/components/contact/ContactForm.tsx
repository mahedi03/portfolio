"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations";
import { services } from "@/data/services";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const serviceGroups = [
  { label: "Website", categories: ["development"] },
  { label: "SEO", categories: ["seo"] },
  { label: "Paid Advertising", categories: ["ads"] },
  { label: "Strategy & Growth", categories: ["strategy"] },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormSchema) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-emerald-500/25 bg-surface/70 p-8 sm:p-12 text-center backdrop-blur-md shadow-2xl">
        <div className="flex size-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/15 text-emerald-400">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="mt-5 text-xl sm:text-2xl font-display font-bold text-white">
          Message received
        </h3>
        <p className="mt-2 max-w-md text-sm sm:text-base text-muted-foreground">
          Thanks for reaching out. Expect a direct reply with practical next steps within one business day.
        </p>
        <Button
          variant="outline"
          className="mt-7 rounded-full"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-surface/60 p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-2xl">
      <div className="border-b border-border/70 pb-6">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
          Project Brief
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl font-display font-black tracking-tight text-white">
          Tell me about your project
        </h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Share your goals, current bottlenecks, or timeline and I&apos;ll reply with a clear path forward.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-7 space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Name
            </label>
            <Input
              id="name"
              className="mt-2 h-11 rounded-xl border-border/80 bg-background/70"
              placeholder="Jane Doe"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-error">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Email
            </label>
            <Input
              id="email"
              type="email"
              className="mt-2 h-11 rounded-xl border-border/80 bg-background/70"
              placeholder="jane@company.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-error">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Company <span className="normal-case font-normal">(optional)</span>
            </label>
            <Input
              id="company"
              className="mt-2 h-11 rounded-xl border-border/80 bg-background/70"
              placeholder="Company name"
              {...register("company")}
            />
          </div>

          <div>
            <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Service you need
            </label>
            <Select
              id="service"
              className="mt-2 h-11 rounded-xl border-border/80 bg-background/70"
              defaultValue=""
              {...register("service")}
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceGroups.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {services
                    .filter((service) => (group.categories as readonly string[]).includes(service.category))
                    .map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                </optgroup>
              ))}
              <option value="other">Something else</option>
            </Select>
          </div>
        </div>

        <div>
          <label htmlFor="budget" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Budget range <span className="normal-case font-normal">(optional)</span>
          </label>
          <Select
            id="budget"
            className="mt-2 h-11 rounded-xl border-border/80 bg-background/70"
            defaultValue=""
            {...register("budget")}
          >
            <option value="" disabled>
              Select a range
            </option>
            <option value="<1k">Under $1,000</option>
            <option value="1k-5k">$1,000 – $5,000</option>
            <option value="5k-10k">$5,000 – $10,000</option>
            <option value="10k+">$10,000+</option>
          </Select>
        </div>

        <div>
          <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Project details
          </label>
          <Textarea
            id="message"
            className="mt-2 min-h-[140px] rounded-xl border-border/80 bg-background/70"
            placeholder="Tell me about your website, current traffic/campaigns, and target outcome..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-error">
              {errors.message.message}
            </p>
          )}
        </div>

        {status === "error" && (
          <div className="rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error">
            Something went wrong sending your message. Please try again or email directly.
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.01] hover:bg-white/90 disabled:opacity-60 shadow-[0_8px_25px_rgba(255,255,255,0.2)]"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              <span>Sending brief...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <ArrowUpRight className="size-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
