import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { CtaButton } from "@/components/ui/CtaButton";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid xl:min-h-[calc(100svh-6.5rem)] max-w-[1650px] items-center gap-8 px-5 pb-16 pt-10 xl:grid-cols-[1.1fr_1fr] lg:px-8 xl:pb-20 xl:pt-12"
    >
      <div className="relative z-10">
        <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs font-extrabold uppercase tracking-[0.12em] text-cobalt xl:text-base xl:flex-nowrap xl:whitespace-nowrap">
          <span>• Market Research</span>
          <span>• Consumer Insights</span>
          <span>• Strategic Intelligence</span>
        </div>
        <h1 className="max-w-none text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-4xl xl:text-7xl">
          Consumer insight,
          <br />
          <span className="text-cobalt xl:whitespace-nowrap">before the week is out.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/75 xl:mt-7 xl:max-w-2xl xl:text-xl">
          Run surveys, analyze responses, and get clear, actionable decisions in days, not weeks. Powered by real
          consumers and AI-driven analysis.
        </p>
        <div className="mt-9 xl:mt-12 flex flex-wrap items-center gap-4">
          <CtaButton href="/contact" className="min-h-12 px-7 text-base xl:min-h-16 lg:px-9 xl:text-xl">
            Talk to Our Experts
          </CtaButton>
          <CtaButton href="/#how" variant="outline" arrow={false} className="min-h-12 gap-3 px-6 text-base xl:min-h-16 lg:px-8 xl:text-xl">
            <span className="grid h-7 w-7 xl:h-9 xl:w-9 place-items-center rounded-full bg-cobalt pl-0.5 text-white">
              <ArrowRight size={14} aria-hidden="true" />
            </span>
            See How It Works
          </CtaButton>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-3xl ">
        <Image
          src="/canva_elements/CobaltA-transparent.png"
          alt="Cobalt analytics dashboard"
          width={1472}
          height={1069}
          priority
          className="w-full xl:scale-110"
        />
      </div>
    </section>
  );
}
