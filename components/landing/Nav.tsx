import Link from "next/link";

export function Nav() {
  return (
    <nav style={{ position: "relative", maxWidth: "1180px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "27px", height: "27px", borderRadius: "7px", background: "#243bc4", boxShadow: "0 4px 12px rgba(36,59,196,.45)" }}></div>
        <span style={{ font: "600 17px var(--font-space-grotesk),sans-serif", letterSpacing: "-.01em", color: "#0f1420" }}>Cobalt Analytix</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "30px", font: "500 14.5px var(--font-ibm-plex-sans),sans-serif" }}>
        <a href="#how" style={{ color: "#1c2230" }}>How it works</a>
        <a href="#features" style={{ color: "#1c2230" }}>Features</a>
        <Link href="/insights" style={{ color: "#1c2230" }}>Insights</Link>
        <a href="#contact" style={{ color: "#1c2230" }}>Contact</a>
        <a href="#faq" style={{ color: "#1c2230" }}>FAQ</a>
        <a href="#waitlist" style={{ padding: "9px 17px", borderRadius: "9px", background: "#0f1420", color: "#fff", fontWeight: "500" }}>Join waitlist</a>
      </div>
    </nav>
  );
}
