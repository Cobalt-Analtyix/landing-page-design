"use client";

import {
  useEffect,
  useState,
  type ChangeEvent,
  type CSSProperties,
  type FormEvent,
} from "react";

import { CONTACT_EMAIL, EMAIL_PATTERN, SUPPORT_EMAIL } from "@/lib/constants";

export const OPEN_CONTACT_EVENT = "cobalt:open-contact";

type Status = "idle" | "invalid" | "submitting" | "success" | "error";

const FIELD_STYLE: CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "10px",
  border: "1px solid rgba(20,24,36,.2)",
  background: "#fff",
  font: "400 15px var(--font-ibm-plex-sans),sans-serif",
  color: "#0f1420",
  outline: "none",
};

const LABEL_STYLE: CSSProperties = {
  display: "block",
  marginBottom: "6px",
  font: "500 12.5px var(--font-ibm-plex-mono),monospace",
  letterSpacing: ".04em",
  textTransform: "uppercase",
  color: "#4a5160",
};

export function ContactWidget() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_CONTACT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONTACT_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const update = (key: keyof typeof form) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (status === "invalid" || status === "error") setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !message || !EMAIL_PATTERN.test(email)) {
      setStatus("invalid");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company: form.company.trim(),
          email,
          phone: form.phone.trim(),
          message,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setErrorMessage(data?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setForm({ name: "", company: "", email: "", phone: "", message: "" });
      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const submitting = status === "submitting";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Reach us"
        style={{
          position: "fixed",
          right: "24px",
          bottom: "24px",
          zIndex: 60,
          display: "inline-flex",
          alignItems: "center",
          gap: "9px",
          padding: "14px 20px",
          borderRadius: "100px",
          border: "1px solid rgba(255,255,255,.25)",
          background: "#243bc4",
          color: "#fff",
          font: "600 15px var(--font-ibm-plex-sans),sans-serif",
          cursor: "pointer",
          boxShadow: "0 14px 34px -10px rgba(36,59,196,.75), 0 4px 12px rgba(20,24,36,.2)",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#7cf5c8",
            boxShadow: "0 0 0 4px rgba(124,245,200,.3)",
          }}
        />
        Reach us
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="reach-us-title"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 70,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "40px 20px",
            overflowY: "auto",
            background: "rgba(11,14,23,.55)",
            backdropFilter: "blur(3px)",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "480px",
              margin: "auto",
              background: "#f8f6f2",
              border: "1px solid rgba(20,24,36,.12)",
              borderRadius: "18px",
              padding: "28px",
              boxShadow: "0 40px 90px -20px rgba(11,14,23,.5)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
              <div>
                <div style={{ font: "500 12.5px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#243bc4" }}>
                  Reach us
                </div>
                <h2 id="reach-us-title" style={{ margin: "10px 0 0", font: "600 26px/1.15 var(--font-space-grotesk),sans-serif", letterSpacing: "-.02em", color: "#0f1420" }}>
                  Tell us about your study.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                style={{
                  flexShrink: 0,
                  width: "34px",
                  height: "34px",
                  borderRadius: "9px",
                  border: "1px solid rgba(20,24,36,.14)",
                  background: "#fff",
                  color: "#4a5160",
                  font: "400 18px var(--font-ibm-plex-sans),sans-serif",
                  cursor: "pointer",
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>

            {status === "success" ? (
              <div style={{ marginTop: "22px" }}>
                <p style={{ margin: 0, font: "500 16px/1.55 var(--font-ibm-plex-sans),sans-serif", color: "#0f1420" }}>
                  Thanks — we&apos;ve got your message and will reply within one business day.
                </p>
                <p style={{ margin: "14px 0 0", font: "400 14px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#4a5160" }}>
                  Prefer email? Reach us directly at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  style={{
                    marginTop: "22px",
                    padding: "13px 22px",
                    borderRadius: "10px",
                    border: "none",
                    background: "#243bc4",
                    color: "#fff",
                    font: "600 15px var(--font-ibm-plex-sans),sans-serif",
                    cursor: "pointer",
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ marginTop: "22px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={LABEL_STYLE} htmlFor="ru-name">Name *</label>
                  <input id="ru-name" style={FIELD_STYLE} value={form.name} onChange={update("name")} disabled={submitting} required maxLength={120} autoComplete="name" />
                </div>
                <div>
                  <label style={LABEL_STYLE} htmlFor="ru-company">Company</label>
                  <input id="ru-company" style={FIELD_STYLE} value={form.company} onChange={update("company")} disabled={submitting} maxLength={160} autoComplete="organization" />
                </div>
                <div>
                  <label style={LABEL_STYLE} htmlFor="ru-email">Work email *</label>
                  <input id="ru-email" type="email" style={FIELD_STYLE} value={form.email} onChange={update("email")} disabled={submitting} required maxLength={200} autoComplete="email" placeholder="you@company.com" />
                </div>
                <div>
                  <label style={LABEL_STYLE} htmlFor="ru-phone">Mobile number</label>
                  <input id="ru-phone" type="tel" style={FIELD_STYLE} value={form.phone} onChange={update("phone")} disabled={submitting} maxLength={40} autoComplete="tel" />
                </div>
                <div>
                  <label style={LABEL_STYLE} htmlFor="ru-message">Remark / query *</label>
                  <textarea id="ru-message" style={{ ...FIELD_STYLE, minHeight: "104px", resize: "vertical" }} value={form.message} onChange={update("message")} disabled={submitting} required maxLength={4000} />
                </div>

                {(status === "invalid" || status === "error") && (
                  <div style={{ font: "500 12.5px var(--font-ibm-plex-sans),sans-serif", color: "#b3261e" }}>
                    {status === "invalid"
                      ? "Please add your name, a valid email, and a message."
                      : errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    padding: "14px 22px",
                    borderRadius: "10px",
                    border: "none",
                    background: "#243bc4",
                    color: "#fff",
                    font: "600 15px var(--font-ibm-plex-sans),sans-serif",
                    cursor: submitting ? "default" : "pointer",
                    opacity: submitting ? 0.7 : 1,
                    boxShadow: "0 8px 20px -6px rgba(36,59,196,.7)",
                  }}
                >
                  {submitting ? "Sending…" : "Send message"}
                </button>

                <div style={{ font: "400 12.5px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#4a5160" }}>
                  Or email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> ·{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
