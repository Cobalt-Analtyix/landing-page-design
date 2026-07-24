import Image from "next/image";
import Link from "next/link";

import { INSIGHTS } from "@/lib/insights-data";

function InsightMeta({ category, readTime, color }: { category: string; readTime: string; color: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        font: "500 12px var(--font-ibm-plex-mono),monospace",
        letterSpacing: ".06em",
        textTransform: "uppercase",
        color,
      }}
    >
      <span>{category}</span>
      <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: color, opacity: 0.5 }}></span>
      <span>{readTime}</span>
    </div>
  );
}

export function InsightsBento() {
  const posts = INSIGHTS.slice(0, 4);
  if (posts.length === 0) return null;
  const [featured, ...rest] = posts;

  return (
    <section id="insights-preview" style={{ maxWidth: "1180px", margin: "0 auto", padding: "100px 40px 40px", position: "relative" }}>
      <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }} data-reveal="">
        <div style={{ font: "500 13px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#243bc4" }}>
          Insights
        </div>
        <h2 style={{ margin: "14px 0 0", font: "600 46px/1.08 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#0f1420", textWrap: "balance" }}>
          Research-backed thinking, not just a pitch.
        </h2>
        <p style={{ margin: "16px auto 0", maxWidth: "560px", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#4a5160" }}>
          Long-form notes from the panel lab on the consumer behavior signals behind repeat purchase.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: rest.length ? "1.3fr 1fr" : "1fr", gap: "20px", marginTop: "48px" }} data-reveal="" data-reveal-delay="80">
        <Link
          href={`/insights/${featured.slug}`}
          className="bento-card"
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#fff",
            border: "1px solid rgba(20,24,36,.08)",
            borderRadius: "16px",
            overflow: "hidden",
            textDecoration: "none",
          }}
        >
          <div style={{ position: "relative", aspectRatio: "16 / 9", background: "#f4f2ec" }}>
            <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 1180px) 100vw, 700px" style={{ objectFit: "cover" }} />
          </div>
          <div style={{ padding: "28px", display: "flex", flexDirection: "column", flex: "1" }}>
            <InsightMeta category={featured.category} readTime={featured.readTime} color="#243bc4" />
            <h3 style={{ margin: "14px 0 0", font: "600 24px/1.3 var(--font-space-grotesk),sans-serif", letterSpacing: "-.01em", color: "#0f1420" }}>
              {featured.title}
            </h3>
            <p style={{ margin: "10px 0 0", font: "400 15px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#6a707e" }}>{featured.excerpt}</p>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "18px", font: "600 14px var(--font-ibm-plex-sans),sans-serif", color: "#243bc4" }}>
              Read article →
            </span>
          </div>
        </Link>

        {rest.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="bento-card"
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  background: "#fff",
                  border: "1px solid rgba(20,24,36,.08)",
                  borderRadius: "16px",
                  padding: "22px",
                  textDecoration: "none",
                }}
              >
                <InsightMeta category={post.category} readTime={post.readTime} color="#243bc4" />
                <h3 style={{ margin: "12px 0 0", font: "600 17px/1.35 var(--font-space-grotesk),sans-serif", letterSpacing: "-.01em", color: "#0f1420" }}>
                  {post.title}
                </h3>
                <p style={{ margin: "8px 0 0", font: "400 13.5px/1.55 var(--font-ibm-plex-sans),sans-serif", color: "#6a707e" }}>{post.excerpt}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "14px", font: "600 13px var(--font-ibm-plex-sans),sans-serif", color: "#243bc4" }}>
                  Read article →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }} data-reveal="">
        <Link
          href="/insights"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", font: "600 15px var(--font-ibm-plex-sans),sans-serif", color: "#0f1420" }}
        >
          View all insights →
        </Link>
      </div>
    </section>
  );
}
