import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="how" className="scroll-mt-26 px-5 xl:flex xl:min-h-[calc((100svh-6.5rem)/2)] xl:items-center py-16 lg:px-8 xl:py-10">
      <div className="mx-auto w-full max-w-[1650px]">
        <div className="grid gap-8 xl:grid-cols-[.4fr_.6fr] xl:gap-12 xl:items-center">
          <SectionHeading large copy="Our process is collaborative, rigorous and driven by real business outcomes.">
            A simpler way to get the answers <span className="text-cobalt">you need.</span>
          </SectionHeading>
          <div className="grid gap-9 sm:grid-cols-4 sm:gap-5 xl:gap-8">
            {processSteps.map(({ title, copy, icon: Icon }, i) => (
              <article key={title} className="relative text-center">
                <div className="process-icon mx-auto mb-4 grid h-16 w-16 xl:h-24 xl:w-24 place-items-center rounded-full bg-cobalt text-white ring-8 ring-cobalt/10">
                  <Icon size={29} className="xl:h-10 xl:w-10" aria-hidden="true" />
                </div>
                {i < processSteps.length - 1 && (
                  <div className="absolute left-[calc(50%+70px)] right-[-60px] top-8 xl:top-12 hidden border-t border-dotted border-cobalt/50 sm:block" />
                )}
                <h3 className="text-base font-extrabold xl:text-xl 2xl:text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 xl:mt-3 xl:text-lg">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
