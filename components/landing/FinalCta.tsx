import { WaitlistForm } from "./WaitlistForm";

export function FinalCta() {
  return (
    <section id="waitlist" style={{ position: "relative", marginTop: "60px", background: "url('/hero-dawn.jpg') center 60%/cover no-repeat", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(15,20,32,.72),rgba(15,20,32,.88))" }}></div>
      <div style={{ position: "relative", maxWidth: "720px", margin: "0 auto", padding: "110px 40px", textAlign: "center" }} data-reveal="">
        <h2 style={{ margin: "0", font: "700 54px/1.05 var(--font-space-grotesk),sans-serif", letterSpacing: "-.03em", color: "#fff", textWrap: "balance" }}>Get answers before your next decision.</h2>
        <p style={{ margin: "20px auto 0", maxWidth: "480px", font: "400 18px/1.6 var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.72)" }}>Join the waitlist for early access. We&apos;re onboarding a handful of teams each week.</p>
        <WaitlistForm variant="dark" />
        <div style={{ marginTop: "14px", font: "500 12.5px var(--font-ibm-plex-sans),sans-serif", color: "rgba(255,255,255,.55)" }}>No credit card · No sales call · Unsubscribe anytime</div>
      </div>
    </section>
  );
}
