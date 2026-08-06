"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations";
import { services } from "@/data/services";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

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
      <div className="flex flex-col items-center rounded-lg border border-border bg-card p-10 text-center">
        <CheckCircle2 className="size-10 text-success" />
        <h3 className="mt-4 text-lg font-semibold">Message sent</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Thanks for reaching out — expect a reply within one business day.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input
            id="name"
            className="mt-1.5"
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
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            type="email"
            className="mt-1.5"
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
          <label htmlFor="company" className="text-sm font-medium">
            Company <span className="text-muted-foreground">(optional)</span>
          </label>
          <Input
            id="company"
            className="mt-1.5"
            placeholder="Company name"
            {...register("company")}
          />
        </div>

        <div>
          <label htmlFor="service" className="text-sm font-medium">
            Service you need
          </label>
          <Select id="service" className="mt-1.5" defaultValue="" {...register("service")}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.shortTitle}
              </option>
            ))}
            <option value="other">Something else</option>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="text-sm font-medium">
          Budget range <span className="text-muted-foreground">(optional)</span>
        </label>
        <Select id="budget" className="mt-1.5" defaultValue="" {...register("budget")}>
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
        <label htmlFor="message" className="text-sm font-medium">
          Project details
        </label>
        <Textarea
          id="message"
          className="mt-1.5"
          placeholder="Tell me a bit about your project and goals..."
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
        <p className="text-sm text-error">
          Something went wrong sending your message. Please try again or
          email directly.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
