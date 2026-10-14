"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { InputField, TextareaField } from "@/components/ui/FormField";
import { EMAIL_PATTERN } from "@/lib/constants";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "done" }
  | { kind: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = Object.fromEntries(
      new FormData(form)
    ) as Record<string, string>;

    if (
      !data.name?.trim() ||
      !data.email?.trim() ||
      !data.message?.trim()
    ) {
      setStatus({
        kind: "error",
        message: "Please fill in your name, email and message.",
      });
      return;
    }

    if (!EMAIL_PATTERN.test(data.email.trim())) {
      setStatus({
        kind: "error",
        message: "Enter a valid email so we can reply.",
      });
      return;
    }

    setStatus({ kind: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(
          body?.error ?? "Something went wrong. Please try again."
        );
      }

      form.reset();
      setStatus({ kind: "done" });
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  if (status.kind === "done") {
    return (
      <div
        className="flex h-full flex-col items-center justify-center py-10 text-center"
        role="status"
      >
        <CheckCircle2
          size={44}
          className="text-cobalt"
          aria-hidden="true"
        />

        <h2 className="mt-5 text-xl font-bold text-slate-900">
          Message sent
        </h2>

        <p className="mt-3 max-w-sm leading-relaxed text-slate-600">
          Thanks for reaching out. A member of our team will reply to you
          by email soon.
        </p>

        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-6 text-sm font-bold text-cobalt transition-colors hover:text-blue-800 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <h2 className="text-xl font-bold text-[#0B1933]">
        Send a message
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <InputField
          label="Full name"
          id="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
        />

        <InputField
          label="Work email"
          id="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <InputField
          label="Company"
          id="company"
          type="text"
          autoComplete="organization"
          maxLength={160}
        />

        <InputField
          label="Phone (optional)"
          id="phone"
          type="tel"
          autoComplete="tel"
          maxLength={40}
        />
      </div>

      <TextareaField
        label="How can we help?"
        id="message"
        rows={4}
        required
        maxLength={4000}
        placeholder="Tell us about the decision you are trying to make."
      />

      {/* Honeypot: hidden from people, filled by bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status.kind === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={status.kind === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-cobalt px-6 py-3 font-bold text-white shadow-sm transition-all hover:bg-cobalt-dark hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.kind === "sending" ? "Sending…" : "Send message"}
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}