"use client";

import { useEffect } from "react";

/**
 * Drives the "how it works" scrollytelling: tracks which [data-step] block
 * is nearest the viewport center and cross-fades the matching [data-visual]
 * card in the sticky visual stage.
 */
export function useHowItWorksSteps() {
  useEffect(() => {
    const steps = Array.from(document.querySelectorAll<HTMLElement>("[data-step]"));
    const visuals = Array.from(document.querySelectorAll<HTMLElement>("[data-visual]"));
    if (!steps.length || !visuals.length) return;

    let activeStep: number | null = null;
    let rafId = 0;

    function update() {
      const vh = window.innerHeight;
      let best = 1;
      let bestDist = Infinity;
      steps.forEach((s) => {
        const r = s.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const dist = Math.abs(center - vh / 2);
        if (dist < bestDist) {
          bestDist = dist;
          best = Number(s.getAttribute("data-step"));
        }
      });
      if (best !== activeStep) {
        activeStep = best;
        visuals.forEach((v) => {
          const on = Number(v.getAttribute("data-visual")) === best;
          v.style.opacity = on ? "1" : "0";
          v.style.transform = on ? "translateY(0) scale(1)" : "translateY(16px) scale(.98)";
          v.style.pointerEvents = on ? "auto" : "none";
        });
        steps.forEach((s) => {
          s.style.opacity = Number(s.getAttribute("data-step")) === best ? "1" : ".32";
        });
      }
    }

    const onScroll = () => update();
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const loop = () => {
      update();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true } as EventListenerOptions);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);
}
