import Link from "next/link";

import { CONTACT_EMAIL, SUPPORT_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer style={{ background: "#0b0e17", color: "rgba(255,255,255,.6)" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "56px 40px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "32px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "#243bc4" }}></div>
            <span style={{ font: "600 16px var(--font-space-grotesk),sans-serif", color: "#fff" }}>Cobalt Analytix</span>
          </div>
          <p style={{ margin: "14px 0 0", maxWidth: "260px", font: "400 13.5px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.5)" }}>Consumer surveys and analysis that turn questions into decisions — in days, not weeks.</p>
        </div>
        <div>
          <div style={{ font: "600 12px var(--font-ibm-plex-mono),monospace", textTransform: "uppercase", letterSpacing: ".06em", color: "rgba(255,255,255,.4)", marginBottom: "14px" }}>Product</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", font: "400 14px var(--font-ibm-plex-sans),sans-serif" }}>
            <a href="#how" style={{ color: "rgba(255,255,255,.65)" }}>How it works</a>
            <a href="#features" style={{ color: "rgba(255,255,255,.65)" }}>Features</a>
            <Link href="/insights" style={{ color: "rgba(255,255,255,.65)" }}>Insights</Link>
          </div>
        </div>
        <div>
          <div style={{ font: "600 12px var(--font-ibm-plex-mono),monospace", textTransform: "uppercase", letterSpacing: ".06em", color: "rgba(255,255,255,.4)", marginBottom: "14px" }}>Company</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", font: "400 14px var(--font-ibm-plex-sans),sans-serif" }}>
            <Link href="/about" style={{ color: "rgba(255,255,255,.65)" }}>About</Link>
            <a href="#contact" style={{ color: "rgba(255,255,255,.65)" }}>Contact</a>
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "rgba(255,255,255,.65)" }}>{CONTACT_EMAIL}</a>
            <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: "rgba(255,255,255,.65)" }}>{SUPPORT_EMAIL}</a>
          </div>
        </div>
        <div>
          <div style={{ font: "600 12px var(--font-ibm-plex-mono),monospace", textTransform: "uppercase", letterSpacing: ".06em", color: "rgba(255,255,255,.4)", marginBottom: "14px" }}>Resources</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", font: "400 14px var(--font-ibm-plex-sans),sans-serif" }}>
            <Link href="/insights" style={{ color: "rgba(255,255,255,.65)" }}>Insights</Link>
            <a href="#faq" style={{ color: "rgba(255,255,255,.65)" }}>FAQ</a>
            <Link href="/privacy" style={{ color: "rgba(255,255,255,.65)" }}>Privacy</Link>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "20px 40px", display: "flex", justifyContent: "space-between", font: "400 12.5px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.4)" }}>
          <span>© 2026 Cobalt Analytix. All rights reserved.</span>
          <span>Made for teams who decide with data.</span>
        </div>
      </div>
    </footer>
  );
}
