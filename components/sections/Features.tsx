import { IconBadge } from "@/components/ui/IconBadge";
import { features } from "@/lib/content";

export function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-20 border-y border-slate-200/80 bg-slate-50/60 px-5 py-16 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 grid gap-5 md:mb-12 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-12">
          <div>
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Built for modern teams
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[3.75rem]">
              Research built for{" "}
              <span className="text-blue-700">
                today’s businesses.
              </span>
            </h2>
          </div>

          <p className="max-w-lg pb-1 text-base leading-7 text-slate-600 md:justify-self-end md:text-lg md:leading-8">
            Everything you need to gather, analyze, and act on
            consumer intelligence at modern business speed.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, copy, icon }) => (
            <article
              key={title}
              className="group flex min-h-[228px] flex-col items-start border border-slate-200 bg-white p-6 transition-colors duration-200 hover:border-blue-300 sm:p-7"
            >
              <div className="mb-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <IconBadge
                    icon={icon}
                    color="#1D4ED8"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold tracking-[-0.025em] text-slate-950">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
