import type { ReactNode } from "react";
import Link from "next/link";

export default function PageChrome({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div style={{ background: "#f4f2ec", color: "#0f1420", minHeight: "100vh" }}>
      <header
        style={{
          borderBottom: "1px solid rgba(20,24,36,.08)",
          background: "rgba(244,242,236,.92)",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <nav
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 40px",
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "27px",
                height: "27px",
                borderRadius: "7px",
                background: "#243bc4",
                boxShadow: "0 4px 12px rgba(36,59,196,.45)",
              }}
            ></div>
            <span style={{ font: "600 17px var(--font-space-grotesk),sans-serif", letterSpacing: "-.01em", color: "#0f1420" }}>
              Cobalt Analytix
            </span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "28px", font: "500 14.5px var(--font-ibm-plex-sans),sans-serif" }}>
            <Link href="/" style={{ color: "#1c2230" }}>
              Home
            </Link>
            <Link href="/insights" style={{ color: "#1c2230" }}>
              Insights
            </Link>
            <Link
              href="/#waitlist"
              style={{ padding: "9px 17px", borderRadius: "9px", background: "#0f1420", color: "#fff", fontWeight: 500 }}
            >
              Join waitlist
            </Link>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer style={{ background: "#0b0e17", color: "rgba(255,255,255,.6)" }}>
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "36px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            font: "400 13px var(--font-ibm-plex-sans),sans-serif",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "20px", height: "20px", borderRadius: "6px", background: "#243bc4" }}></div>
            <span style={{ font: "600 14px var(--font-space-grotesk),sans-serif", color: "#fff" }}>Cobalt Analytix</span>
          </div>
          <Link href="/" style={{ color: "rgba(255,255,255,.65)" }}>
            ← Back to home
          </Link>
          <span style={{ color: "rgba(255,255,255,.4)" }}>© 2026 Cobalt Analytix. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
