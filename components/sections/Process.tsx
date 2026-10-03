import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="how" className="scroll-mt-20 px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[.36fr_.64fr] lg:items-center">
          <SectionHeading copy="Our process is collaborative, rigorous and driven by real business outcomes.">
            A simpler way to get
            <br />
            the answers <span className="text-cobalt">you need.</span>
          </SectionHeading>
          <div className="grid gap-5 sm:grid-cols-4">
            {processSteps.map(({ title, copy, icon: Icon }, i) => (
              <article key={title} className="relative text-center">
                <div className="process-icon mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-cobalt text-white ring-8 ring-cobalt/10">
                  <Icon size={29} aria-hidden="true" />
                </div>
                {i < processSteps.length - 1 && (
                  <div className="absolute left-[calc(50%+50px)] right-[-38px] top-8 hidden border-t border-dotted border-cobalt/50 sm:block" />
                )}
                <h3 className="text-base font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
