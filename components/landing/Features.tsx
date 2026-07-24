const FEATURES = [
  { icon: "⚡", title: "Real-time, not next-quarter", body: "Field and analyze in parallel. Insight arrives while the question still matters.", delay: undefined },
  { icon: "✦", title: "AI that reads every answer", body: "Open-ends coded, themes surfaced, the story drafted — with the quotes to back it up.", delay: 80 },
  { icon: "◎", title: "Fresh, verified panels", body: "Real people, screened and de-duplicated. Target by market, age, behavior, and more.", delay: 160 },
  { icon: "$", title: "Pay per study", body: "No six-figure retainer. Run one study or a hundred — pricing scales with you.", delay: undefined },
  { icon: "▦", title: "Live dashboards", body: "Slice, filter, and export. Share a link — your team sees the same living view you do.", delay: 80 },
  { icon: "⬡", title: "Track it over time", body: "Re-run any study on a schedule and watch the trend line, not just a snapshot.", delay: 160 },
];

export function Features() {
  return (
    <section id="features" style={{ maxWidth: "1180px", margin: "0 auto", padding: "120px 40px 40px" }}>
      <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }} data-reveal="">
        <div style={{ font: "500 13px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#243bc4" }}>What you get</div>
        <h2 style={{ margin: "14px 0 0", font: "600 46px/1.08 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#0f1420", textWrap: "balance" }}>Enterprise-grade research, startup-grade speed.</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginTop: "52px" }}>
        {FEATURES.map((feature) => (
          <div key={feature.title} data-reveal="" data-reveal-delay={feature.delay} style={{ background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "16px", padding: "28px" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: "rgba(36,59,196,.1)", display: "flex", alignItems: "center", justifyContent: "center", font: "700 18px var(--font-space-grotesk),sans-serif", color: "#243bc4" }}>{feature.icon}</div>
            <h3 style={{ margin: "18px 0 0", font: "600 19px var(--font-space-grotesk),sans-serif", color: "#0f1420", letterSpacing: "-.01em" }}>{feature.title}</h3>
            <p style={{ margin: "9px 0 0", font: "400 14.5px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#6a707e" }}>{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
