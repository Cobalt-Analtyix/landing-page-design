import Image from "next/image";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problems } from "@/lib/content";

export function Problem() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-navy px-5 py-8 text-white min-h-[45vh] lg:px-12 lg:py-10">
      <Image
        src="/canva_elements/cobalt-bg-dotted-elements.png"
        alt=""
        width={400}
        height={800}
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-1/2 z-0 h-[100%] max-h-[50rem] w-auto -translate-y-1/2 translate-x-[45%] object-contain opacity-80 mix-blend-screen"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-x-16 lg:pr-28">
        <div>
          <SectionHeading
            light
            copy="Traditional research is slow, experience and complex. By the time you get results, the market has already moved."
          >
            Market research still
            <br />
            moves at the <span className="text-cobalt">speed of 2005.</span>
          </SectionHeading>
          <div className="mt-8">
            <CtaButton href="/#how">There’s a better way</CtaButton>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {problems.map(({ title, copy, icon: Icon }) => (
            <article key={title} className="flex flex-col rounded-2xl border border-cobalt/30 bg-white/[.035] p-6">
              <Icon size={40} strokeWidth={1.5} className="mb-3" aria-hidden="true" />
              <h3 className="text-base font-extrabold">{title}</h3>
                            <p className="mt-1 text-sm leading-snug text-white/75">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
