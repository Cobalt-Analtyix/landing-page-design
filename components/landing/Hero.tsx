import { Nav } from "./Nav";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <div id="hero" style={{ position: "relative", height: "880px", background: "url('/hero-dawn.jpg') center 22%/cover no-repeat", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(248,246,242,.92) 0%,rgba(248,246,242,.7) 22%,rgba(248,246,242,.5) 38%,rgba(248,246,242,.28) 52%,rgba(248,246,242,.05) 64%,rgba(248,246,242,0) 74%)" }}></div>
      <Nav />

      <div style={{ position: "relative", textAlign: "center", padding: "38px 40px 0" }} data-reveal="">
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 13px", borderRadius: "100px", background: "rgba(255,255,255,.9)", border: "1px solid rgba(36,59,196,.35)", font: "500 12.5px var(--font-ibm-plex-mono),monospace", color: "#243bc4", boxShadow: "0 2px 10px rgba(20,24,36,.08)" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#243bc4" }}></span>Now in private beta
        </div>
        <h1 style={{ margin: "20px auto 0", maxWidth: "880px", font: "700 74px/1.0 var(--font-space-grotesk),sans-serif", letterSpacing: "-.035em", color: "#0c1018", textWrap: "balance", textShadow: "0 1px 22px rgba(248,246,242,.55)" }}>
          Consumer insight,<br /><span style={{ color: "#243bc4" }}>before the week is out.</span>
        </h1>
        <p style={{ margin: "22px auto 0", maxWidth: "580px", font: "500 19px/1.55 var(--font-ibm-plex-sans),sans-serif", color: "#131722", textWrap: "pretty", textShadow: "0 1px 14px rgba(248,246,242,.9),0 1px 3px rgba(248,246,242,.9)" }}>
          Cobalt runs your surveys, analyzes the responses with AI, and hands you decisions — not spreadsheets. Days, not weeks.
        </p>
        <WaitlistForm variant="light" />
        <div style={{ marginTop: "14px", font: "500 12.5px var(--font-ibm-plex-sans),sans-serif", color: "#1c2230", textShadow: "0 1px 16px rgba(248,246,242,.9),0 1px 2px rgba(248,246,242,.85)" }}>Fresh panels · 30+ markets · No sales call required</div>
      </div>
      {/* fade hero's photo into the canvas at the seam, independent of the dashboard reveal below */}
      <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "180px", background: "linear-gradient(180deg,rgba(244,242,236,0) 0%,rgba(244,242,236,.5) 60%,#f4f2ec 100%)", pointerEvents: "none" }}></div>
    </div>
  );
}
