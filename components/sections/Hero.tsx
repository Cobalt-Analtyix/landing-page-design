import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { CtaButton } from "@/components/ui/CtaButton";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-20 pt-12 lg:grid-cols-[1.02fr_1.18fr] lg:px-8 lg:pb-28 lg:pt-16"
    >
      <div className="relative z-10">
        <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-extrabold uppercase tracking-[0.14em] text-cobalt">
          <span>• Market Research</span>
          <span>• Consumer Insights</span>
          <span>• Strategic Intelligence</span>
        </div>
        <h1 className="max-w-xl text-3xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-4xl lg:text-[3.45rem]">
          Consumer insight,
          <br />
          <span className="text-cobalt">before the week is out.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75">
          Run surveys, analyze responses, and get clear, actionable decisions in days, not weeks. Powered by real
          consumers and AI-driven analysis.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <CtaButton href="/contact" className="min-h-12 px-7 text-base">
            Talk to Our Experts
          </CtaButton>
          <CtaButton href="/#how" variant="outline" arrow={false} className="min-h-12 gap-3 px-6 text-base">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-cobalt pl-0.5 text-white">
              <ArrowRight size={14} aria-hidden="true" />
            </span>
            See How It Works
          </CtaButton>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-3xl lg:translate-x-6 xl:translate-x-10">
        <Image
          src="/canva_elements/CobaltA-transparent.png"
          alt="Cobalt analytics dashboard"
          width={1472}
          height={1069}
          priority
          className="w-full lg:scale-120"
        />
      </div>
    </section>
  );
}
