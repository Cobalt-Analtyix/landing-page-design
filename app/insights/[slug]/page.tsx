import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getAllInsights, getInsightMarkdown, renderMarkdown } from "@/lib/insights";

const CALENDLY_URL = "https://calendly.com/pjpanot260305/30min";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllInsights().map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insightData = await getInsightMarkdown(slug);

  if (!insightData) {
    return { title: "Insight not found | Cobalt Analytix" };
  }

  return {
    title: `${insightData.insight.title} | Cobalt Analytix`,
    description: insightData.insight.excerpt,
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insightData = await getInsightMarkdown(slug);

  if (!insightData) {
    notFound();
  }

  const { insight, markdown } = insightData;
  const body = markdown.split(/\r?\n/);
  const firstHeadingIndex = body.findIndex((line) => line.trim().startsWith("# "));
  const content =
    firstHeadingIndex >= 0 ? body.slice(firstHeadingIndex + 1).join("\n") : markdown;

  return (
    <>
      <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "60px 40px 0" }}>
        <Link
          href="/insights"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            font: "600 14px var(--font-ibm-plex-sans),sans-serif",
            color: "#243bc4",
          }}
        >
          ← All insights
        </Link>

        <div
          style={{
            marginTop: "24px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            font: "500 13px var(--font-ibm-plex-mono),monospace",
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

        <h1
          style={{
            margin: "16px 0 0",
            maxWidth: "820px",
            font: "700 48px/1.1 var(--font-space-grotesk),sans-serif",
            letterSpacing: "-.03em",
            color: "#0c1018",
            textWrap: "balance",
          }}
        >
          {insight.title}
        </h1>

        <p
          style={{
            margin: "18px 0 0",
            maxWidth: "640px",
            font: "400 18px/1.6 var(--font-ibm-plex-sans),sans-serif",
            color: "#4a5160",
          }}
        >
          {insight.excerpt}
        </p>

        <div
          style={{
            position: "relative",
            marginTop: "40px",
            aspectRatio: "16 / 7",
            borderRadius: "18px",
            overflow: "hidden",
            border: "1px solid rgba(20,24,36,.08)",
          }}
        >
          <Image src={insight.image} alt={insight.title} fill priority style={{ objectFit: "cover" }} />
        </div>
      </section>

      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "56px 40px 40px" }}>
        <article>{renderMarkdown(content)}</article>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "20px 40px 120px",
          borderTop: "1px solid rgba(20,24,36,.08)",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "56px auto 0" }}>
          <div
            style={{
              font: "500 13px var(--font-ibm-plex-mono),monospace",
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: "#243bc4",
            }}
          >
            Get in touch
          </div>
          <h2
            style={{
              margin: "14px 0 0",
              font: "600 40px/1.12 var(--font-space-grotesk),sans-serif",
              letterSpacing: "-.03em",
              color: "#0f1420",
              textWrap: "balance",
            }}
          >
            Get answers before your next decision.
          </h2>
          <p
            style={{
              margin: "16px auto 0",
              maxWidth: "480px",
              font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif",
              color: "#4a5160",
            }}
          >
            Join the waitlist for early access, or book a 30-minute call and we&apos;ll scope
            your first study together.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "14px",
            marginTop: "36px",
          }}
        >
          <a
            href={CALENDLY_URL}
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
    </>
  );
}
