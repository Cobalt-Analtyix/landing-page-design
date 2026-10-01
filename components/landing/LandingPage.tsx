"use client";

import { useRevealAnimations } from "@/hooks/useRevealAnimations";

import { Contact } from "./Contact";
import { ContactWidget } from "./ContactWidget";
import { Faq } from "./Faq";
import { Features } from "./Features";
import { FinalCta } from "./FinalCta";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { HeroDashboardReveal } from "./HeroDashboardReveal";
import { HowItWorks } from "./HowItWorks";
import { InsightsBento } from "./InsightsBento";
import { LivingDashboardPreview } from "./LivingDashboardPreview";
import { Problem } from "./Problem";

export default function LandingPage() {
  useRevealAnimations();

  return (
    <div
      id="canvas"
      style={{
        overflowX: "clip",
        position: "relative",
        background:
          "radial-gradient(rgba(140,146,168,.4) 1px,transparent 1.5px) 0 0/24px 24px,linear-gradient(180deg,#f4f2ec 0%,#f4f2ec 16%,#0f1420 22%,#0f1420 50%,#f4f2ec 56%,#f4f2ec 90%,#0f1420 94%,#0b0e17 100%)",
      }}
    >
      <Hero />
      <HeroDashboardReveal />
      <Problem />
      <HowItWorks />
      <Features />
      <LivingDashboardPreview />
      <InsightsBento />
      <Contact />
      <Faq />
      <FinalCta />
      <Footer />
      <ContactWidget />
    </div>
  );
}
