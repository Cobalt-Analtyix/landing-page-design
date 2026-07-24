"use client";

import { useState, type FormEvent } from "react";

import { EMAIL_PATTERN } from "@/lib/constants";

type WaitlistStatus = "idle" | "invalid" | "submitting" | "success" | "error";

export function WaitlistForm({ variant }: { variant: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<WaitlistStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isLight = variant === "light";
  const submitting = status === "submitting";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = email.trim();

    if (!EMAIL_PATTERN.test(trimmed)) {
      setStatus("invalid");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setErrorMessage(data?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setEmail("");
      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          margin: isLight ? "28px auto 0" : "32px auto 0",
          maxWidth: isLight ? "450px" : "460px",
        }}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          disabled={submitting}
          placeholder="you@company.com"
          style={
            isLight
              ? {
                  flex: "1",
                  padding: "15px 16px",
                  borderRadius: "11px",
                  border: "1px solid rgba(20,24,36,.2)",
                  background: "rgba(255,255,255,.96)",
                  font: "400 15px var(--font-ibm-plex-sans),sans-serif",
                  color: "#0f1420",
                  outline: "none",
                  boxShadow: "0 2px 10px rgba(20,24,36,.06)",
                  opacity: submitting ? 0.6 : 1,
                }
              : {
                  flex: "1",
                  padding: "16px 18px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,.25)",
                  background: "rgba(255,255,255,.1)",
                  font: "400 15px var(--font-ibm-plex-sans),sans-serif",
                  color: "#fff",
                  outline: "none",
                  opacity: submitting ? 0.6 : 1,
                }
          }
        />
        <button
          type="submit"
          disabled={submitting}
          style={
            isLight
              ? {
                  padding: "15px 24px",
                  border: "none",
                  borderRadius: "11px",
                  background: "#243bc4",
                  color: "#fff",
                  font: "500 15px var(--font-ibm-plex-sans),sans-serif",
                  boxShadow: "0 8px 20px -6px rgba(36,59,196,.7)",
                  cursor: submitting ? "default" : "pointer",
                  opacity: submitting ? 0.7 : 1,
                }
              : {
                  padding: "16px 26px",
                  border: "none",
                  borderRadius: "12px",
                  background: "#fff",
                  color: "#0f1420",
                  font: "600 15px var(--font-ibm-plex-sans),sans-serif",
                  cursor: submitting ? "default" : "pointer",
                  opacity: submitting ? 0.7 : 1,
                }
          }
        >
          {status === "success" ? "✓ You're on the list" : submitting ? "Submitting…" : "Join waitlist"}
        </button>
      </form>
      {(status === "invalid" || status === "error") && (
        <div
          style={{
            marginTop: "10px",
            font: "500 12.5px var(--font-ibm-plex-sans),sans-serif",
            color: isLight ? "#b3261e" : "#ffb4b4",
          }}
        >
          {status === "invalid" ? "Enter a valid email to continue." : errorMessage}
        </div>
      )}
    </>
  );
}
