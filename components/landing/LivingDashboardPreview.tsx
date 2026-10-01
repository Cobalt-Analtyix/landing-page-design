export function LivingDashboardPreview() {
  return (
    <section id="dashboard-preview" style={{ maxWidth: "1180px", margin: "0 auto", padding: "100px 40px 40px" }}>
      <div style={{ background: "linear-gradient(160deg,#12173a,#0f1420)", borderRadius: "24px", padding: "60px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center", overflow: "hidden" }} data-reveal="">
        <div>
          <div style={{ font: "500 13px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#9fb0ff" }}>The dashboard</div>
          <h2 style={{ margin: "16px 0 0", font: "600 40px/1.1 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#fff", textWrap: "balance" }}>Every study becomes a living answer.</h2>
          <p style={{ margin: "18px 0 0", maxWidth: "420px", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.66)" }}>Headline metric up top, the evidence underneath, and an AI-written recommendation you can actually act on. Filter by segment, export to your deck, or hand a share link to the team.</p>
          <div style={{ display: "flex", gap: "28px", marginTop: "28px" }}>
            <div><div style={{ font: "700 30px var(--font-space-grotesk),sans-serif", color: "#fff" }}>31h</div><div style={{ font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.55)" }}>avg. turnaround</div></div>
            <div><div style={{ font: "700 30px var(--font-space-grotesk),sans-serif", color: "#fff" }}>30+</div><div style={{ font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.55)" }}>markets</div></div>
            <div><div style={{ font: "700 30px var(--font-space-grotesk),sans-serif", color: "#fff" }}>94%</div><div style={{ font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.55)" }}>completion</div></div>
          </div>
        </div>
        <div style={{ background: "#fff", borderRadius: "16px", padding: "18px", boxShadow: "0 30px 60px -24px rgba(0,0,0,.6)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
            <span style={{ font: "600 14px var(--font-space-grotesk),sans-serif", color: "#0f1420" }}>Brand consideration</span>
            <span style={{ font: "500 11px var(--font-ibm-plex-mono),monospace", color: "#12a150", background: "rgba(18,161,80,.1)", padding: "3px 7px", borderRadius: "20px" }}>▲ 6.1%</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "7px", height: "130px" }}>
            <div style={{ flex: "1", height: "48%", borderRadius: "5px 5px 0 0", background: "#c7d0ee" }}></div>
            <div style={{ flex: "1", height: "60%", borderRadius: "5px 5px 0 0", background: "#c7d0ee" }}></div>
            <div style={{ flex: "1", height: "54%", borderRadius: "5px 5px 0 0", background: "#8ea0e8" }}></div>
            <div style={{ flex: "1", height: "72%", borderRadius: "5px 5px 0 0", background: "#8ea0e8" }}></div>
            <div style={{ flex: "1", height: "66%", borderRadius: "5px 5px 0 0", background: "#8ea0e8" }}></div>
            <div style={{ flex: "1", height: "90%", borderRadius: "5px 5px 0 0", background: "#243bc4" }}></div>
          </div>
          <div style={{ height: "1px", background: "rgba(20,24,36,.08)", margin: "16px 0" }}></div>
          <div style={{ display: "flex", gap: "12px" }}>
            <div style={{ flex: "1", background: "#f4f5f8", borderRadius: "11px", padding: "14px" }}><div style={{ font: "700 24px var(--font-space-grotesk),sans-serif", color: "#0f1420" }}>41%</div><div style={{ font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "#8a90a0" }}>aided awareness</div></div>
            <div style={{ flex: "1", background: "#f4f5f8", borderRadius: "11px", padding: "14px" }}><div style={{ font: "700 24px var(--font-space-grotesk),sans-serif", color: "#0f1420" }}>+12</div><div style={{ font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "#8a90a0" }}>NPS vs. Q2</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
