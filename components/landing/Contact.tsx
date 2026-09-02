import { CALENDLY_URL, CONTACT_EMAIL, SUPPORT_EMAIL } from "@/lib/constants";

import { OpenContactButton } from "./OpenContactButton";

export function Contact() {
  return (
    <section id="contact" style={{ maxWidth: "1180px", margin: "0 auto", padding: "100px 40px 0" }}>
      <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }} data-reveal="">
        <div style={{ font: "500 13px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#243bc4" }}>Get in touch</div>
        <h2 style={{ margin: "14px 0 0", font: "600 46px/1.08 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#0f1420", textWrap: "balance" }}>Talk to us about your first study.</h2>
        <p style={{ margin: "16px auto 0", maxWidth: "520px", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#4a5160" }}>We&apos;re in private beta and onboarding a handful of teams by hand. Send us a message with your details, or book a 30-minute call and we&apos;ll scope your first study together — no pricing deck, no pressure.</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "14px", marginTop: "40px" }} data-reveal="" data-reveal-delay="80">
        <OpenContactButton
          style={{ padding: "15px 28px", borderRadius: "11px", border: "none", background: "#243bc4", color: "#fff", font: "600 15px var(--font-ibm-plex-sans),sans-serif", cursor: "pointer", boxShadow: "0 8px 20px -6px rgba(36,59,196,.7)" }}
        >
          Send us a message
        </OpenContactButton>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{ padding: "15px 28px", borderRadius: "11px", border: "1px solid rgba(20,24,36,.16)", background: "#fff", color: "#0f1420", font: "500 15px var(--font-ibm-plex-sans),sans-serif" }}>Book a call →</a>
      </div>
      <div style={{ marginTop: "20px", textAlign: "center", font: "400 14px var(--font-ibm-plex-sans),sans-serif", color: "#4a5160" }} data-reveal="" data-reveal-delay="120">
        Or email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> · <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </div>
    </section>
  );
}
