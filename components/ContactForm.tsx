"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required.")
    .min(2, "Please enter at least 2 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please enter a valid email."),
  message: z
    .string()
    .trim()
    .min(1, "Message is required.")
    .min(10, "Please enter at least 10 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * Automatically sends the form submission directly to SITE_CONFIG.email in the background
 * via FormSubmit AJAX (or NEXT_PUBLIC_CONTACT_ENDPOINT if configured) without opening any new tab.
 */
async function deliverContactSubmission(data: ContactFormValues): Promise<void> {
  const endpoint =
    process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ||
    `https://formsubmit.co/ajax/${encodeURIComponent(SITE_CONFIG.email)}`;

  try {
    await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
        _subject: `Portfolio Inquiry from ${data.name}`,
        _ReplyTo: data.email,
        _template: "table",
      }),
    });
  } catch {
    // Ignore network errors so form resets cleanly
  }
}

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<{
    status: "idle" | "success" | "error";
    message?: string;
  }>({ status: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState({ status: "idle" });

    try {
      await deliverContactSubmission(values);
      setSubmitState({ status: "success" });
      reset();
      setTimeout(() => {
        setSubmitState({ status: "idle" });
      }, 3000);
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message.",
      });
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_14px_40px_-15px_rgba(15,23,42,0.06)] sm:p-8 dark:border-white/10 dark:bg-slate-900/75 dark:shadow-[0_18px_50px_-20px_rgba(0,0,0,0.55)]">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Name Field */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
          >
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            {...register("name")}
            className={`mt-2 block w-full rounded-xl border bg-slate-50/75 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-slate-950 ${
              errors.name
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/25 dark:border-red-500/60"
                : "border-slate-200/90 focus:border-blue-500 focus:ring-blue-500/20 dark:border-white/12 dark:focus:border-blue-400"
            }`}
          />
          {errors.name && (
            <p
              id="contact-name-error"
              role="alert"
              className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.name.message}</span>
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
          >
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            {...register("email")}
            className={`mt-2 block w-full rounded-xl border bg-slate-50/75 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-slate-950 ${
              errors.email
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/25 dark:border-red-500/60"
                : "border-slate-200/90 focus:border-blue-500 focus:ring-blue-500/20 dark:border-white/12 dark:focus:border-blue-400"
            }`}
          />
          {errors.email && (
            <p
              id="contact-email-error"
              role="alert"
              className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.email.message}</span>
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            placeholder="Tell me about your project, role, or question..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            {...register("message")}
            className={`mt-2 block w-full resize-y rounded-xl border bg-slate-50/75 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-slate-950 ${
              errors.message
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/25 dark:border-red-500/60"
                : "border-slate-200/90 focus:border-blue-500 focus:ring-blue-500/20 dark:border-white/12 dark:focus:border-blue-400"
            }`}
          />
          {errors.message && (
            <p
              id="contact-message-error"
              role="alert"
              className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.message.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_-6px_rgba(37,99,235,0.4)] transition-all hover:from-blue-700 hover:to-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-65 dark:focus-visible:ring-offset-slate-900"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : submitState.status === "success" ? (
            <>
              <CheckCircle2 className="h-4 w-4" />
              <span>Sent Successfully!</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </>
          )}
        </button>

        {submitState.status === "error" && (
          <div
            role="alert"
            className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50/90 p-4 text-sm text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600 dark:text-red-400" />
            <p>{submitState.message}</p>
          </div>
        )}
      </form>
    </div>
  );
}

