"use client";

import { useEffect } from "react";

const DASH_PEEK = { y: -70, scale: 0.82 };
const DASH_FULL = { y: 28, scale: 1.05 };
const DASH_WIDTH = 1000;
const DASH_SCROLL_RANGE = 620;

/**
 * Scroll-linked Apple-style reveal for the hero dashboard mockup: it peeks
 * at the bottom of the hero on load, then scales up and centers into the
 * full focal element as the hero scrolls out of view. Never pins/scroll-jacks.
 * Respects prefers-reduced-motion and disables the scale-up on small screens
 * (a light, fixed, viewport-fit size instead).
 */
export function useHeroDashboardReveal() {
  useEffect(() => {
    const hero = document.getElementById("hero");
    const dash = document.querySelector<HTMLElement>("[data-dash]");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mqSmallScreen = window.matchMedia("(max-width: 767px)");
    let isSmallScreen = mqSmallScreen.matches;
    const shouldSkipReveal = () => reduceMotion || isSmallScreen;

    function applyProgress(p: number) {
      if (!dash) return;
      const y = DASH_PEEK.y + (DASH_FULL.y - DASH_PEEK.y) * p;
      const scale = DASH_PEEK.scale + (DASH_FULL.scale - DASH_PEEK.scale) * p;
      dash.style.transform = `translateY(${y.toFixed(2)}px) scale(${scale.toFixed(4)})`;
    }

    function applyStatic() {
      if (!dash) return;
      if (isSmallScreen) {
        // never scroll-jack on touch: a light, fixed, viewport-fit size, no scale-up spectacle
        const fitScale = Math.min(DASH_PEEK.scale, (window.innerWidth * 0.88) / DASH_WIDTH);
        dash.style.transform = `translateY(0px) scale(${fitScale.toFixed(4)})`;
      } else {
        applyProgress(1);
      }
    }

    if (shouldSkipReveal()) {
      // no scroll animation: land straight on the settled state (still a valid, good-looking layout)
      applyStatic();
    }

    let rafId = 0;

    function update() {
      if (hero && dash && !shouldSkipReveal()) {
        const scrolled = Math.max(0, -hero.getBoundingClientRect().top);
        let p = Math.min(1, scrolled / DASH_SCROLL_RANGE);
        p = 1 - Math.pow(1 - p, 3);
        applyProgress(p);
      }
    }

    const onScroll = () => update();
    const onResize = () => {
      isSmallScreen = mqSmallScreen.matches;
      if (shouldSkipReveal()) {
        applyStatic();
      } else {
        update();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onResize, { passive: true });

    const loop = () => {
      update();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true } as EventListenerOptions);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);
}
