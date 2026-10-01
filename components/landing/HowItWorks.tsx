"use client";

import { useHowItWorksSteps } from "@/hooks/useHowItWorksSteps";

const STEPS = [
  {
    n: "01",
    title: "Book a survey",
    body: "Tell us the question and who to ask. Pick from templates or write your own — no research degree required. Launch in minutes.",
    opacity: "1",
  },
  {
    n: "02",
    title: "We field it",
    body: "Your study goes live to fresh, verified panels across 30+ markets. Watch responses land in real time — most studies fill within a day.",
    opacity: ".35",
  },
  {
    n: "03",
    title: "AI runs the analysis",
    body: "Our pipeline cleans the data, codes every open-ended answer into themes, runs the cross-tabs, and drafts the story — the part that used to take analysts weeks.",
    opacity: ".35",
  },
  {
    n: "04",
    title: "Delivered to you",
    body: "A decision-ready brief lands in your inbox and your dashboard — headline, evidence, and a recommended action. Share it, or dig into the raw data yourself.",
    opacity: ".35",
  },
];

function StudySetupVisual() {
  return (
    <div data-visual="1" style={{ position: "absolute", inset: "0", opacity: "1", transform: "none", transition: "opacity .5s ease,transform .5s ease" }}>
      <div style={{ height: "100%", background: "#161c30", border: "1px solid rgba(255,255,255,.1)", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ font: "500 12px var(--font-ibm-plex-mono),monospace", color: "#9fb0ff", textTransform: "uppercase", letterSpacing: ".05em" }}>New study</div>
        <div>
          <div style={{ font: "400 12px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.5)", marginBottom: "6px" }}>Objective</div>
          <div style={{ background: "#0f1420", border: "1px solid rgba(255,255,255,.12)", borderRadius: "10px", padding: "13px", font: "400 14px var(--font-ibm-plex-sans),sans-serif", color: "#fff" }}>Test price sensitivity for a new snack bar</div>
        </div>
        <div>
          <div style={{ font: "400 12px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.5)", marginBottom: "6px" }}>Audience</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
            <span style={{ padding: "6px 11px", borderRadius: "20px", background: "rgba(109,134,255,.18)", border: "1px solid rgba(109,134,255,.35)", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#c3ceff" }}>US · 25–34</span>
            <span style={{ padding: "6px 11px", borderRadius: "20px", background: "rgba(109,134,255,.18)", border: "1px solid rgba(109,134,255,.35)", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#c3ceff" }}>Grocery buyers</span>
            <span style={{ padding: "6px 11px", borderRadius: "20px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.6)" }}>+ add</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <div style={{ flex: "1", background: "#0f1420", border: "1px solid rgba(255,255,255,.12)", borderRadius: "10px", padding: "13px" }}><div style={{ font: "700 22px var(--font-space-grotesk),sans-serif", color: "#fff" }}>12</div><div style={{ font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.5)" }}>questions</div></div>
          <div style={{ flex: "1", background: "#0f1420", border: "1px solid rgba(255,255,255,.12)", borderRadius: "10px", padding: "13px" }}><div style={{ font: "700 22px var(--font-space-grotesk),sans-serif", color: "#fff" }}>2,500</div><div style={{ font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.5)" }}>target n</div></div>
        </div>
        <button style={{ marginTop: "auto", padding: "14px", border: "none", borderRadius: "11px", background: "#243bc4", color: "#fff", font: "600 14px var(--font-ibm-plex-sans),sans-serif", cursor: "pointer" }}>Launch study →</button>
      </div>
    </div>
  );
}

function FieldingVisual() {
  return (
    <div data-visual="2" style={{ position: "absolute", inset: "0", opacity: "0", transform: "translateY(16px) scale(.98)", transition: "opacity .5s ease,transform .5s ease" }}>
      <div style={{ height: "100%", background: "#161c30", border: "1px solid rgba(255,255,255,.1)", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ font: "500 12px var(--font-ibm-plex-mono),monospace", color: "#9fb0ff", textTransform: "uppercase", letterSpacing: ".05em" }}>Fielding · live</span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px", font: "500 12px var(--font-ibm-plex-sans),sans-serif", color: "#7dffb0" }}><span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#7dffb0" }}></span>collecting</span>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}><span style={{ font: "700 44px var(--font-space-grotesk),sans-serif", color: "#fff", letterSpacing: "-.02em" }}>1,842</span><span style={{ font: "400 14px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.5)" }}>/ 2,500</span></div>
          <div style={{ height: "8px", borderRadius: "20px", background: "rgba(255,255,255,.1)", marginTop: "12px" }}><div style={{ width: "74%", height: "100%", borderRadius: "20px", background: "linear-gradient(90deg,#6d86ff,#243bc4)" }}></div></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.7)" }}><span>United States</span><span style={{ color: "#fff" }}>1,120</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.7)" }}><span>United Kingdom</span><span style={{ color: "#fff" }}>402</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.7)" }}><span>Canada</span><span style={{ color: "#fff" }}>320</span></div>
        </div>
        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "-8px" }}>
          <div style={{ display: "flex" }}>
            <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#6d86ff", border: "2px solid #161c30" }}></span>
            <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#8ea0e8", border: "2px solid #161c30", marginLeft: "-8px" }}></span>
            <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#243bc4", border: "2px solid #161c30", marginLeft: "-8px" }}></span>
            <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#3f5bd8", border: "2px solid #161c30", marginLeft: "-8px" }}></span>
          </div>
          <span style={{ font: "400 12px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.55)", marginLeft: "12px" }}>verified respondents, live now</span>
        </div>
      </div>
    </div>
  );
}

function AiPipelineVisual() {
  return (
    <div data-visual="3" style={{ position: "absolute", inset: "0", opacity: "0", transform: "translateY(16px) scale(.98)", transition: "opacity .5s ease,transform .5s ease" }}>
      <div style={{ height: "100%", background: "#161c30", border: "1px solid rgba(255,255,255,.1)", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column", gap: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "18px", height: "18px", borderRadius: "5px", background: "linear-gradient(135deg,#6d86ff,#243bc4)", display: "flex", alignItems: "center", justifyContent: "center", font: "700 11px var(--font-space-grotesk),sans-serif", color: "#fff" }}>✦</span>
          <span style={{ font: "500 12px var(--font-ibm-plex-mono),monospace", color: "#9fb0ff", textTransform: "uppercase", letterSpacing: ".05em" }}>AI pipeline</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "11px 13px", background: "#0f1420", border: "1px solid rgba(255,255,255,.1)", borderRadius: "10px" }}><span style={{ color: "#7dffb0" }}>✓</span><span style={{ font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.8)" }}>Cleaned & de-duplicated</span></div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "11px 13px", background: "#0f1420", border: "1px solid rgba(255,255,255,.1)", borderRadius: "10px" }}><span style={{ color: "#7dffb0" }}>✓</span><span style={{ font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.8)" }}>Open-ends coded into themes</span></div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "11px 13px", background: "rgba(109,134,255,.14)", border: "1px solid rgba(109,134,255,.35)", borderRadius: "10px" }}><span style={{ width: "14px", height: "14px", borderRadius: "50%", border: "2px solid #6d86ff", borderTopColor: "transparent" }}></span><span style={{ font: "400 13px var(--font-ibm-plex-sans),sans-serif", color: "#c3ceff" }}>Drafting insight summary…</span></div>
        </div>
        <div style={{ background: "#0f1420", border: "1px solid rgba(255,255,255,.1)", borderRadius: "10px", padding: "14px", flex: "1" }}>
          <div style={{ height: "8px", width: "90%", borderRadius: "20px", background: "rgba(255,255,255,.14)", marginBottom: "9px" }}></div>
          <div style={{ height: "8px", width: "78%", borderRadius: "20px", background: "rgba(255,255,255,.1)", marginBottom: "9px" }}></div>
          <div style={{ height: "8px", width: "84%", borderRadius: "20px", background: "rgba(255,255,255,.1)", marginBottom: "9px" }}></div>
          <div style={{ height: "8px", width: "52%", borderRadius: "20px", background: "rgba(109,134,255,.4)" }}></div>
        </div>
      </div>
    </div>
  );
}

function InsightBriefVisual() {
  return (
    <div data-visual="4" style={{ position: "absolute", inset: "0", opacity: "0", transform: "translateY(16px) scale(.98)", transition: "opacity .5s ease,transform .5s ease" }}>
      <div style={{ height: "100%", background: "#fff", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column", gap: "14px", boxShadow: "0 30px 60px -20px rgba(0,0,0,.5)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ font: "500 12px var(--font-ibm-plex-mono),monospace", color: "#243bc4", textTransform: "uppercase", letterSpacing: ".05em" }}>Insight brief</span>
          <span style={{ font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "#8a90a0" }}>delivered · 31h</span>
        </div>
        <div style={{ font: "600 22px/1.2 var(--font-space-grotesk),sans-serif", color: "#0f1420", letterSpacing: "-.01em" }}>Launch at $2.99 with a health-forward pack.</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
          <div style={{ display: "flex", gap: "9px", font: "400 13.5px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150" }}><span style={{ color: "#243bc4" }}>▸</span>Purchase intent hits 73% at $2.99</div>
          <div style={{ display: "flex", gap: "9px", font: "400 13.5px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150" }}><span style={{ color: "#243bc4" }}>▸</span>Health framing lifts intent +9 pts</div>
          <div style={{ display: "flex", gap: "9px", font: "400 13.5px var(--font-ibm-plex-sans),sans-serif", color: "#3a4150" }}><span style={{ color: "#243bc4" }}>▸</span>Shrink pack size to close the gap</div>
        </div>
        <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
          <div style={{ flex: "1", background: "#f4f5f8", borderRadius: "11px", padding: "13px" }}><div style={{ font: "700 22px var(--font-space-grotesk),sans-serif", color: "#0f1420" }}>62%</div><div style={{ font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "#8a90a0" }}>positive</div></div>
          <div style={{ flex: "1", background: "#f4f5f8", borderRadius: "11px", padding: "13px" }}><div style={{ font: "700 22px var(--font-space-grotesk),sans-serif", color: "#0f1420" }}>2,410</div><div style={{ font: "400 11px var(--font-ibm-plex-sans),sans-serif", color: "#8a90a0" }}>responses</div></div>
        </div>
        <button style={{ padding: "13px", border: "none", borderRadius: "11px", background: "#0f1420", color: "#fff", font: "600 13px var(--font-ibm-plex-sans),sans-serif", cursor: "pointer" }}>Open in dashboard</button>
      </div>
    </div>
  );
}

export function HowItWorks() {
  useHowItWorksSteps();

  return (
    <section id="how" style={{ position: "relative", marginTop: "80px" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "70px 40px 0", textAlign: "center" }} data-reveal="">
        <div style={{ font: "500 13px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#9fb0ff" }}>How it works</div>
        <h2 style={{ margin: "14px auto 0", maxWidth: "720px", font: "600 46px/1.08 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#fff", textWrap: "balance" }}>From question to decision, in four moves.</h2>
        <p style={{ margin: "16px auto 0", maxWidth: "540px", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.6)" }}>Scroll to watch a study travel the pipeline.</p>
      </div>

      <div style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {/* sticky visual stage */}
        <div style={{ position: "relative" }}>
          <div style={{ position: "sticky", top: "0", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: "440px", height: "520px" }}>
              <StudySetupVisual />
              <FieldingVisual />
              <AiPipelineVisual />
              <InsightBriefVisual />
            </div>
          </div>
        </div>
        {/* steps */}
        <div style={{ padding: "0 40px" }}>
          {STEPS.map((step) => (
            <div key={step.n} data-step={Number(step.n)} style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", opacity: step.opacity, transition: "opacity .4s ease" }}>
              <div style={{ font: "600 15px var(--font-ibm-plex-mono),monospace", color: "#6d86ff" }}>{step.n}</div>
              <h3 style={{ margin: "14px 0 0", font: "600 34px/1.12 var(--font-space-grotesk),sans-serif", letterSpacing: "-.02em", color: "#fff" }}>{step.title}</h3>
              <p style={{ margin: "16px 0 0", maxWidth: "400px", font: "400 17px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.65)" }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
