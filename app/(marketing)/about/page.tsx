import type { Metadata } from "next";
import Link from "next/link";
import PageChrome from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "About — Cobalt Analytix",
  description: "Why we're building Cobalt Analytix.",
};

export default function AboutPage() {
  return (
    <PageChrome>
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 40px 120px" }}>
        <div style={{ font: "500 13px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#243bc4" }}>
          About
        </div>
        <h1 style={{ margin: "16px 0 0", font: "600 44px/1.1 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#0f1420" }}>
          Market research shouldn&apos;t take six weeks.
        </h1>
        <p style={{ margin: "18px 0 0", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#4a5160" }}>
          Cobalt Analytix started from a simple frustration: teams making real decisions — pricing, packaging, positioning — were stuck waiting weeks for research that cost more than their whole quarter&apos;s budget. By the time the report landed, the decision had already been made on a hunch.
        </p>
        <p style={{ margin: "18px 0 0", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#4a5160" }}>
          We&apos;re building the version of market research we wanted to use ourselves: fast fielding against verified panels, AI that actually reads every open-ended answer instead of skimming it, and a brief that tells you what to do next instead of a 200-page deck nobody opens.
        </p>
        <p style={{ margin: "18px 0 0", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#4a5160" }}>
          We&apos;re in private beta right now, onboarding a handful of teams by hand so we can get the product right before we open it up more broadly. If that sounds useful to you, we&apos;d like to hear what you&apos;re trying to figure out.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "36px" }}>
          <a
            href="https://calendly.com/pjpanot260305/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "15px 28px",
              borderRadius: "11px",
              border: "none",
              background: "#243bc4",
              color: "#fff",
              font: "600 15px var(--font-ibm-plex-sans),sans-serif",
              boxShadow: "0 8px 20px -6px rgba(36,59,196,.7)",
            }}
          >
            Talk to us →
          </a>
          <Link
            href="/#waitlist"
            style={{
              padding: "15px 28px",
              borderRadius: "11px",
              border: "1px solid rgba(20,24,36,.16)",
              background: "#fff",
              color: "#0f1420",
              font: "500 15px var(--font-ibm-plex-sans),sans-serif",
            }}
          >
            Join waitlist
          </Link>
        </div>
      </section>
    </PageChrome>
  );
}
