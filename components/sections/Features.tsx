import { IconBadge } from "@/components/ui/IconBadge";
import { features } from "@/lib/content";

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-20 border-y border-cobalt/10 px-5 py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cobalt/15 bg-white/80 px-3.5 py-1 text-xs font-bold text-cobalt shadow-xs backdrop-blur-xs mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-cobalt animate-pulse" />
              Built For Modern Teams
            </div>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl leading-[1.05]">
              Research built for <span className="bg-gradient-to-r from-cobalt via-cobalt-dark to-accent bg-clip-text text-transparent">today’s businesses.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-ink/70">
            Everything you need to gather, analyze, and act on consumer intelligence at modern business speed.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, copy, icon, color }) => (
            <article
              key={title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-cobalt/10 bg-white/90 p-6 shadow-xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/30 hover:shadow-xl hover:shadow-cobalt/10"
            >
              {/* Dynamic top highlight line */}
              <div
                className="absolute inset-x-0 top-0 h-1 transition-all duration-300 opacity-70 group-hover:opacity-100"
                style={{ backgroundColor: color }}
              />
              
              {/* Background ambient glow */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition-all duration-500 opacity-20 group-hover:opacity-40 group-hover:scale-125"
                style={{ backgroundColor: color }}
              />

              <div>
                <div className="mb-4 inline-block transition-transform duration-300 group-hover:scale-110">
                  <IconBadge icon={icon} color={color!} />
                </div>
                <h3 className="text-lg font-bold text-ink tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

