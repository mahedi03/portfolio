import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email address"),
  company: z.string().trim().optional(),
  budget: z.string().trim().optional(),
  service: z.string().trim().optional(),
  message: z.string().trim().min(10, "Please share a few more details"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
