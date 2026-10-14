import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="how" className="scroll-mt-26 px-5 lg:flex lg:min-h-[calc((100svh-6.5rem)/2)] lg:items-center py-16 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-[1650px]">
        <div className="grid gap-8 lg:grid-cols-[.4fr_.6fr] lg:gap-12 lg:items-center">
          <SectionHeading large copy="Our process is collaborative, rigorous and driven by real business outcomes.">
            A simpler way to get
            <br />
            the answers <span className="text-cobalt">you need.</span>
          </SectionHeading>
          <div className="grid gap-5 sm:grid-cols-4 lg:gap-8">
            {processSteps.map(({ title, copy, icon: Icon }, i) => (
              <article key={title} className="relative text-center">
                <div className="process-icon mx-auto mb-4 grid h-16 w-16 lg:h-24 lg:w-24 place-items-center rounded-full bg-cobalt text-white ring-8 ring-cobalt/10">
                  <Icon size={29} className="lg:h-10 lg:w-10" aria-hidden="true" />
                </div>
                {i < processSteps.length - 1 && (
                  <div className="absolute left-[calc(50%+70px)] right-[-60px] top-8 lg:top-12 hidden border-t border-dotted border-cobalt/50 sm:block" />
                )}
                <h3 className="text-base font-extrabold lg:text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 lg:mt-3 lg:text-lg">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
