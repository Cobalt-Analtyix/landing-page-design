const STATS = [
  {
    value: "6–8 wks",
    label: "Legacy turnaround",
    body: "Briefs, panels, fielding, cleaning, decks. Cobalt does it in 2 days.",
    delay: 0,
  },
  {
    value: "$50k+",
    label: "Typical study cost",
    body: "Enterprise minimums lock out the teams who need answers most.",
    delay: 90,
  },
  {
    value: "200 pg",
    label: "PDF nobody reads",
    body: "You wanted a decision. You got a data dump. We ship the decision.",
    delay: 180,
  },
];

export function Problem() {
  return (
    <section id="problem" style={{ maxWidth: "1180px", margin: "0 auto", padding: "60px 40px 40px", position: "relative" }}>
      <div style={{ maxWidth: "760px" }} data-reveal="">
        <div style={{ font: "500 13px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#243bc4" }}>The problem</div>
        <h2 style={{ margin: "16px 0 0", font: "600 46px/1.08 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#0f1420", textWrap: "balance" }}>Market research still moves at the speed of 2005.</h2>
        <p style={{ margin: "20px 0 0", font: "400 18px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#4a5160", maxWidth: "640px" }}>By the time a legacy report lands, the decision&apos;s already been made — on a hunch. Cobalt collapses weeks of fieldwork and analysis into a couple of days, at a price a startup can actually pay.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginTop: "48px" }}>
        {STATS.map((stat) => (
          <div key={stat.label} data-reveal="" data-reveal-delay={stat.delay} style={{ background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "16px", padding: "26px" }}>
            <div style={{ font: "700 40px var(--font-space-grotesk),sans-serif", color: "#243bc4", letterSpacing: "-.02em" }}>{stat.value}</div>
            <div style={{ marginTop: "8px", font: "500 15px var(--font-ibm-plex-sans),sans-serif", color: "#0f1420" }}>{stat.label}</div>
            <p style={{ margin: "8px 0 0", font: "400 14px/1.55 var(--font-ibm-plex-sans),sans-serif", color: "#6a707e" }}>{stat.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
