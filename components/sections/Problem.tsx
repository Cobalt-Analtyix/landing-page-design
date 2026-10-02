import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problems } from "@/lib/content";

export function Problem() {
  return (
    <section className="bg-navy px-5 py-16 text-white lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.82fr_1.18fr]">
        <div>
          <SectionHeading
            light
            copy="Traditional research is slow, expensive and complex. By the time you get results, the market has already moved."
          >
            Market research still
            <br />
            moves at the <span className="text-cobalt">speed of 2005.</span>
          </SectionHeading>
          <div className="mt-8">
            <CtaButton href="/#how">There’s a better way</CtaButton>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {problems.map(({ title, copy, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-cobalt/30 bg-white/[.035] p-6">
              <Icon size={32} strokeWidth={1.5} className="mb-5" aria-hidden="true" />
              <h3 className="font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
