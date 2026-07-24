import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getAllInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights | Cobalt Analytix",
  description:
    "Research-backed thinking on the consumer behavior signals behind repeat purchase, from the Cobalt Analytix panel lab.",
};

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <>
      <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "80px 40px 40px" }}>
        <div style={{ maxWidth: "720px" }}>
          <div
            style={{
              font: "500 13px var(--font-ibm-plex-mono),monospace",
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: "#243bc4",
            }}
          >
            Insights
          </div>
          <h1
            style={{
              margin: "16px 0 0",
              font: "600 52px/1.08 var(--font-space-grotesk),sans-serif",
              letterSpacing: "-.03em",
              color: "#0c1018",
              textWrap: "balance",
            }}
          >
            Research-backed thinking for FMCG teams.
          </h1>
          <p
            style={{
              margin: "20px 0 0",
              font: "400 18px/1.6 var(--font-ibm-plex-sans),sans-serif",
              color: "#4a5160",
              maxWidth: "620px",
            }}
          >
            Long-form articles from the Cobalt Analytix panel lab on the consumer behavior
            signals behind repeat purchase.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "20px 40px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
          {insights.map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              style={{
                display: "block",
                background: "#fff",
                border: "1px solid rgba(20,24,36,.08)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16 / 10",
                  background: "#f4f2ec",
                }}
              >
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "26px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    font: "500 12px var(--font-ibm-plex-mono),monospace",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    color: "#243bc4",
                  }}
                >
                  <span>{insight.category}</span>
                  <span
                    style={{
                      width: "3px",
                      height: "3px",
                      borderRadius: "50%",
                      background: "rgba(36,59,196,.4)",
                    }}
                  ></span>
                  <span>{insight.readTime}</span>
                </div>
                <h2
                  style={{
                    margin: "14px 0 0",
                    font: "600 19px/1.3 var(--font-space-grotesk),sans-serif",
                    letterSpacing: "-.01em",
                    color: "#0f1420",
                  }}
                >
                  {insight.title}
                </h2>
                <p
                  style={{
                    margin: "10px 0 0",
                    font: "400 14.5px/1.6 var(--font-ibm-plex-sans),sans-serif",
                    color: "#6a707e",
                  }}
                >
                  {insight.excerpt}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "18px",
                    font: "600 14px var(--font-ibm-plex-sans),sans-serif",
                    color: "#243bc4",
                  }}
                >
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
