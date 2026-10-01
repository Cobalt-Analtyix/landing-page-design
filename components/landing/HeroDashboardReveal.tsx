"use client";

import { useHeroDashboardReveal } from "@/hooks/useHeroDashboardReveal";

import { DashboardMockup } from "./DashboardMockup";

export function HeroDashboardReveal() {
  useHeroDashboardReveal();

  return (
    <div id="dash-reveal" style={{ position: "relative", marginTop: "-210px", padding: "0 40px 120px" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", position: "relative", display: "flex", justifyContent: "center" }}>
        <DashboardMockup />
      </div>
    </div>
  );
}
