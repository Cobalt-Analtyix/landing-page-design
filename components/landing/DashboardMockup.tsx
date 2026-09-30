/**
 * The "Consumer Pulse" browser-window dashboard mockup. Reused as the
 * hero's scroll-revealed focal element (see HeroDashboardReveal).
 */
export function DashboardMockup() {
  return (
    <div
      data-dash=""
      style={{
        position: "relative",
        width: "1000px",
        flexShrink: 0,
        transform: "translateY(-70px) scale(.82)",
        transformOrigin: "50% 0%",
        willChange: "transform",
        borderRadius: "16px",
        border: "1px solid rgba(20,24,36,.12)",
        background: "#f5f6f9",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 16px", background: "#eceef2", borderBottom: "1px solid rgba(20,24,36,.08)" }}>
        <div style={{ display: "flex", gap: "6px" }}>
          <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ff5f57" }}></span>
          <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#febc2e" }}></span>
          <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28c840" }}></span>
        </div>
        <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "7px", padding: "5px 14px", background: "#fff", border: "1px solid rgba(20,24,36,.09)", borderRadius: "7px", font: "500 12px var(--font-ibm-plex-mono),monospace", color: "#5a6070" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#12a150" }}></span>app.cobaltanalytix.com/studies/snack-bars-q3
          </div>
        </div>
        <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "linear-gradient(135deg,#6d86ff,#243bc4)" }}></div>
      </div>
      <div style={{ padding: "20px", background: "#f5f6f9" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "16px" }}>
          <div>
            <div style={{ font: "600 19px var(--font-space-grotesk),sans-serif", color: "#0f1420", letterSpacing: "-.01em" }}>Consumer Pulse — Snack Bars Dev Env</div>
            <div style={{ font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "#7a8090", marginTop: "2px" }}>Study #4821 · closed 2 days ago · 2,410 responses</div>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ padding: "7px 13px", border: "1px solid rgba(20,24,36,.14)", borderRadius: "8px", background: "#fff", font: "500 12.5px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150" }}>Export</span>
            <span style={{ padding: "7px 13px", border: "none", borderRadius: "8px", background: "#243bc4", color: "#fff", font: "500 12.5px var(--font-ibm-plex-sans),sans-serif" }}>Share brief</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr 1.1fr", gap: "14px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "13px", padding: "18px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ font: "500 12.5px var(--font-ibm-plex-sans),sans-serif", color: "#7a8090" }}>Purchase intent</span>
                <span style={{ font: "500 11px var(--font-ibm-plex-mono),monospace", color: "#12a150", background: "rgba(18,161,80,.1)", padding: "3px 7px", borderRadius: "20px" }}>▲ 18.4%</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", margin: "8px 0 4px" }}>
                <span style={{ font: "700 42px var(--font-space-grotesk),sans-serif", color: "#0f1420", letterSpacing: "-.02em" }}>73%</span>
                <span style={{ font: "400 12px var(--font-ibm-plex-sans),sans-serif", color: "#7a8090" }}>would buy at $2.99</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "70px", marginTop: "10px" }}>
                <div style={{ flex: "1", height: "44%", borderRadius: "4px 4px 0 0", background: "#c7d0ee" }}></div>
                <div style={{ flex: "1", height: "56%", borderRadius: "4px 4px 0 0", background: "#c7d0ee" }}></div>
                <div style={{ flex: "1", height: "50%", borderRadius: "4px 4px 0 0", background: "#c7d0ee" }}></div>
                <div style={{ flex: "1", height: "72%", borderRadius: "4px 4px 0 0", background: "#8ea0e8" }}></div>
                <div style={{ flex: "1", height: "88%", borderRadius: "4px 4px 0 0", background: "#243bc4" }}></div>
                <div style={{ flex: "1", height: "66%", borderRadius: "4px 4px 0 0", background: "#8ea0e8" }}></div>
                <div style={{ flex: "1", height: "79%", borderRadius: "4px 4px 0 0", background: "#8ea0e8" }}></div>
              </div>
            </div>
            <div style={{ background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "13px", padding: "18px" }}>
              <div style={{ font: "500 12.5px var(--font-ibm-plex-sans),sans-serif", color: "#7a8090", marginBottom: "12px" }}>Top purchase drivers</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150", marginBottom: "4px" }}><span>Price</span><span>82</span></div>
                  <div style={{ height: "7px", borderRadius: "20px", background: "#eef0f5" }}><div style={{ width: "82%", height: "100%", borderRadius: "20px", background: "#243bc4" }}></div></div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150", marginBottom: "4px" }}><span>Taste</span><span>74</span></div>
                  <div style={{ height: "7px", borderRadius: "20px", background: "#eef0f5" }}><div style={{ width: "74%", height: "100%", borderRadius: "20px", background: "#4964e0" }}></div></div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150", marginBottom: "4px" }}><span>Health</span><span>66</span></div>
                  <div style={{ height: "7px", borderRadius: "20px", background: "#eef0f5" }}><div style={{ width: "66%", height: "100%", borderRadius: "20px", background: "#6d86ff" }}></div></div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150", marginBottom: "4px" }}><span>Brand</span><span>48</span></div>
                  <div style={{ height: "7px", borderRadius: "20px", background: "#eef0f5" }}><div style={{ width: "48%", height: "100%", borderRadius: "20px", background: "#9db0f2" }}></div></div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "13px", padding: "18px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ alignSelf: "flex-start", font: "500 12.5px var(--font-ibm-plex-sans),sans-serif", color: "#7a8090", marginBottom: "12px" }}>Sentiment</div>
              <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", background: "conic-gradient(#243bc4 0 62%,#c7d0ee 62% 86%,#ff8a7a 86% 100%)" }}>
                <div style={{ position: "absolute", inset: "16px", borderRadius: "50%", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ font: "700 26px var(--font-space-grotesk),sans-serif", color: "#0f1420" }}>62%</span>
                  <span style={{ font: "400 10px var(--font-ibm-plex-mono),monospace", color: "#7a8090" }}>positive</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", marginTop: "14px", font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "#5a6070" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><span style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#243bc4" }}></span>Pos</span>
                <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><span style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#c7d0ee" }}></span>Neutral</span>
                <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><span style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#ff8a7a" }}></span>Neg</span>
              </div>
            </div>
            <div style={{ background: "#fff", border: "1px solid rgba(20,24,36,.08)", borderRadius: "13px", padding: "16px" }}>
              <div style={{ font: "500 12.5px var(--font-ibm-plex-sans),sans-serif", color: "#7a8090", marginBottom: "10px" }}>Responses / day</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "46px" }}>
                <div style={{ flex: "1", height: "30%", background: "#c7d0ee", borderRadius: "2px" }}></div>
                <div style={{ flex: "1", height: "45%", background: "#c7d0ee", borderRadius: "2px" }}></div>
                <div style={{ flex: "1", height: "38%", background: "#c7d0ee", borderRadius: "2px" }}></div>
                <div style={{ flex: "1", height: "62%", background: "#8ea0e8", borderRadius: "2px" }}></div>
                <div style={{ flex: "1", height: "55%", background: "#8ea0e8", borderRadius: "2px" }}></div>
                <div style={{ flex: "1", height: "80%", background: "#243bc4", borderRadius: "2px" }}></div>
                <div style={{ flex: "1", height: "100%", background: "#243bc4", borderRadius: "2px" }}></div>
                <div style={{ flex: "1", height: "72%", background: "#8ea0e8", borderRadius: "2px" }}></div>
                <div style={{ flex: "1", height: "48%", background: "#c7d0ee", borderRadius: "2px" }}></div>
                <div style={{ flex: "1", height: "36%", background: "#c7d0ee", borderRadius: "2px" }}></div>
              </div>
            </div>
          </div>
          <div style={{ background: "linear-gradient(180deg,#12173a,#0f1420)", borderRadius: "13px", padding: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "18px", height: "18px", borderRadius: "5px", background: "linear-gradient(135deg,#6d86ff,#243bc4)", display: "flex", alignItems: "center", justifyContent: "center", font: "700 11px var(--font-space-grotesk),sans-serif", color: "#fff" }}>✦</span>
              <span style={{ font: "600 13px var(--font-space-grotesk),sans-serif", color: "#fff" }}>AI summary</span>
            </div>
            <p style={{ margin: "0", font: "400 12.5px/1.55 var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.78)" }}>Price sensitivity eased sharply this quarter. At $2.99, intent clears 70% for the first time — driven by the 25–34 segment.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", gap: "8px", font: "400 12px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.72)" }}><span style={{ color: "#6d86ff" }}>▸</span>Health framing lifts intent +9pts</div>
              <div style={{ display: "flex", gap: "8px", font: "400 12px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.72)" }}><span style={{ color: "#6d86ff" }}>▸</span>Negative reviews cite pack size</div>
              <div style={{ display: "flex", gap: "8px", font: "400 12px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.72)" }}><span style={{ color: "#6d86ff" }}>▸</span>Repeat-buy signal strongest in urban</div>
            </div>
            <div style={{ marginTop: "auto", padding: "10px 12px", borderRadius: "9px", background: "rgba(109,134,255,.16)", border: "1px solid rgba(109,134,255,.3)", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#c3ceff" }}>Recommended: launch at $2.99 with health-forward pack</div>
          </div>
        </div>
      </div>
    </div>
  );
}
