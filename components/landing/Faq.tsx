"use client";

import { useState } from "react";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "How fast do I actually get results?",
    a: "Most studies field within 24 hours and land as a finished, AI-analyzed brief in about 31 hours on average. Rush fielding is available for time-sensitive calls.",
  },
  {
    q: "How big and fresh are your panels?",
    a: "We source verified respondents across 30+ markets and screen and de-duplicate every one. You can target by geography, age, income, category behavior, and custom screeners.",
  },
  {
    q: "How is this cheaper than legacy research firms?",
    a: "Traditional providers bill for large analyst teams and long timelines. Our AI pipeline does the cleaning, coding, and first-draft analysis, so we pass the savings on — with no six-figure minimums.",
  },
  {
    q: "What kinds of questions can I ask?",
    a: "Concept tests, pricing, brand tracking, message testing, segmentation, open-ended discovery — anything you'd run a survey for. Start from a template or write your own; we'll flag leading or biased questions before launch.",
  },
  {
    q: "Is my data secure?",
    a: "Your studies and results are yours. We're building toward SOC 2, offer SSO and custom DPAs on Scale, and never sell or train third-party models on your data.",
  },
  {
    q: "What stage are you at?",
    a: "We're in private beta. It's early — we're onboarding a handful of teams by hand and shaping the product around what they need, so you'll be working closely with the founding team, not a support queue.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div data-reveal="" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {FAQ_ITEMS.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.q}
            style={{
              background: "#fff",
              border: "1px solid rgba(20,24,36,.1)",
              borderRadius: "14px",
              overflow: "hidden",
            }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                padding: "20px 22px",
                background: "none",
                border: "none",
                margin: "0",
                cursor: "pointer",
                textAlign: "left",
                font: "600 17px var(--font-space-grotesk),sans-serif",
                color: "#0f1420",
              }}
            >
              <span>{item.q}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  flexShrink: 0,
                  transition: "transform .25s cubic-bezier(.2,.7,.2,1)",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M6 9l6 6 6-6" stroke="#243bc4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div style={{ display: "grid", gridTemplateRows: open ? "1fr" : "0fr", transition: "grid-template-rows .3s cubic-bezier(.2,.7,.2,1)" }}>
              <div style={{ overflow: "hidden" }}>
                <p style={{ margin: "0 22px 20px", font: "400 15px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "#5a6070" }}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" style={{ maxWidth: "820px", margin: "0 auto", padding: "70px 40px 40px" }}>
      <div style={{ textAlign: "center", marginBottom: "44px" }} data-reveal="">
        <div style={{ font: "500 13px var(--font-ibm-plex-mono),monospace", letterSpacing: ".06em", textTransform: "uppercase", color: "#243bc4" }}>FAQ</div>
        <h2 style={{ margin: "14px 0 0", font: "600 42px/1.1 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#0f1420" }}>Questions, answered.</h2>
      </div>
      <FaqAccordion />
    </section>
  );
}
