"use client";

import { useState, type FormEvent } from "react";
import { ChevronRight } from "lucide-react";

import { EMAIL_PATTERN } from "@/lib/constants";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "done" } | { kind: "error"; message: string };

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();

    if (!EMAIL_PATTERN.test(email)) {
      setStatus({ kind: "error", message: "Enter a valid email address." });
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }
      form.reset();
      setStatus({ kind: "done" });
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="mt-4 flex overflow-hidden rounded-md bg-white">
        <input
          type="email"
          name="email"
          aria-label="Email for newsletter"
          autoComplete="email"
          placeholder="Enter your email"
          className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-ink outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          disabled={status.kind === "sending"}
          className="bg-cobalt px-4 text-white transition-colors hover:bg-cobalt-dark disabled:opacity-60"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
      <p className="mt-3 text-xs text-white/60" role="status" aria-live="polite">
        {status.kind === "done"
          ? "Thanks for subscribing. We'll be in touch with research insights and updates."
          : status.kind === "error"
            ? status.message
            : "Get the latest research insights and updates."}
      </p>
    </form>
  );
}
