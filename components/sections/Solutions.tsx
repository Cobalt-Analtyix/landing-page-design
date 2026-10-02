import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { IconBadge } from "@/components/ui/IconBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";

export function Solutions() {
  return (
    <section id="solutions" className="relative scroll-mt-20 overflow-hidden px-5 py-16 lg:px-8 lg:py-24">
      <Image
        src="/canva_elements/cobalt-bg-building-elements.png"
        alt=""
        width={750}
        height={417}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-0 h-full w-[58%] object-cover object-right opacity-80 mix-blend-multiply"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHeading copy="From pricing to product, brand to customer experience - we help you uncover insights across the entire business.">
            Solutions for every
            <br />
            <span className="text-cobalt">business question.</span>
          </SectionHeading>
          <Link href="/contact" className="pb-1 text-sm font-bold text-accent">
            Discuss your question <ArrowRight className="inline" size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map(({ title, copy, icon, color }) => (
            <article key={title} className="rounded-xl bg-white p-5">
              <div className="mb-5">
                <IconBadge icon={icon} color={color!} />
              </div>
              <h3 className="text-sm font-extrabold">{title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-ink/75">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
