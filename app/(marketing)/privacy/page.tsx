import type { Metadata } from "next";
import PageChrome from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Privacy — Cobalt Analytix",
  description: "How Cobalt Analytix handles your data.",
};

const SECTIONS: { heading: string; body: string }[] = [
  {
    heading: "What we collect",
    body: "Account details you give us (name, work email, company), the studies you create and their responses, and basic product-usage data so we can keep the service running and improve it.",
  },
  {
    heading: "How we use it",
    body: "To run your surveys, analyze responses, operate your dashboard, and communicate with you about your studies and account. We do not sell your data, and we do not train third-party models on your studies or your respondents' answers.",
  },
  {
    heading: "Respondent data",
    body: "Survey respondents are sourced through vetted panel partners and are screened and de-duplicated before they reach your study. Your study results belong to you.",
  },
  {
    heading: "Where things stand",
    body: "We're in private beta. We're building toward SOC 2, and we offer SSO and custom DPAs for teams that need them on our Scale plan. If you need specifics for a security review, get in touch and we'll walk you through our current setup directly.",
  },
  {
    heading: "Contact",
    body: "Questions about this policy or your data? Reach out through the waitlist form or book time with us — we're a small team and you'll hear back from a person, not a ticketing system.",
  },
];

export default function PrivacyPage() {
  return (
    <PageChrome>
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 40px 120px" }}>
        <div style={{ font: "500 13px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#243bc4" }}>
          Privacy
        </div>
        <h1 style={{ margin: "16px 0 0", font: "600 44px/1.1 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#0f1420" }}>
          Your data, handled plainly.
        </h1>
        <p style={{ margin: "18px 0 0", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#4a5160" }}>
          We&apos;re a young company and this page is intentionally short. Here&apos;s the plain-language version of how we treat your data; a full legal policy will follow as we come out of private beta.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginTop: "48px" }}>
          {SECTIONS.map((s) => (
            <div key={s.heading}>
              <h2 style={{ margin: "0 0 8px", font: "600 19px var(--font-space-grotesk),sans-serif", color: "#0f1420", letterSpacing: "-.01em" }}>
                {s.heading}
              </h2>
              <p style={{ margin: "0", font: "400 15px/1.65 var(--font-ibm-plex-sans),sans-serif", color: "#5a6070" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </PageChrome>
  );
}
