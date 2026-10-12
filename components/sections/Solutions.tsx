import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { IconBadge } from "@/components/ui/IconBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";

export function Solutions() {
  return (
    <section id="solutions" className="relative flex scroll-mt-26 items-center overflow-hidden lg:min-h-[calc(100svh-6.5rem)] px-5 py-16 lg:px-8 lg:py-24">
      <Image
        src="/canva_elements/cobalt-bg-building-elements.png"
        alt=""
        width={750}
        height={417}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-0 h-full w-[58%] object-cover object-right opacity-80 mix-blend-multiply"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1650px]">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHeading large copy="From pricing to product, brand to customer experience - we help you uncover insights across the entire business.">
            Solutions for every
            <br />
            <span className="text-cobalt">business question.</span>
          </SectionHeading>
          <Link href="/contact" className="pb-1 text-sm font-bold text-accent lg:text-xl">
            Discuss your question <ArrowRight className="inline" size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 lg:mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-5">
          {services.map(({ title, copy, icon, color }) => (
            <article key={title} className="rounded-xl bg-white p-5 lg:p-8">
              <div className="mb-5 lg:mb-8">
                <IconBadge large icon={icon} color={color!} />
              </div>
              <h3 className="text-base font-extrabold lg:text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75 lg:mt-4 lg:text-lg">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
