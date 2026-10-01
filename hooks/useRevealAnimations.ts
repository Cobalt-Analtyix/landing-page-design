"use client";

import { useEffect } from "react";

/**
 * Fades in every [data-reveal] element as it scrolls into view.
 * Elements opt in via the data-reveal attribute; data-reveal-delay (ms)
 * staggers the fade. A safety timeout guarantees everything is visible
 * even if the scroll math never fires.
 */
export function useRevealAnimations() {
  useEffect(() => {
    const rev = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    rev.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = "opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)";
      el.style.willChange = "opacity, transform";
    });

    let rafId = 0;

    function reveal() {
      const vh = window.innerHeight;
      rev.forEach((el) => {
        if (el.dataset.shown) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.88 && r.bottom > 0) {
          el.dataset.shown = "1";
          const d = parseInt(el.getAttribute("data-reveal-delay") || "0", 10);
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "none";
          }, d);
        }
      });
    }

    const onScroll = () => reveal();
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const loop = () => {
      reveal();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    reveal();

    const safety = setTimeout(() => {
      rev.forEach((el) => {
        if (!el.dataset.shown) {
          el.dataset.shown = "1";
          el.style.opacity = "1";
          el.style.transform = "none";
        }
      });
    }, 2600);

    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true } as EventListenerOptions);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
      clearTimeout(safety);
    };
  }, []);
}
