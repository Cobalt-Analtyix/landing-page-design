import { IconBadge } from "@/components/ui/IconBadge";
import { features } from "@/lib/content";

export function Features() {
  return (
    <section id="features" className="scroll-mt-26 border-y border-cobalt/10 px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1650px]">
        <SectionHeading large>
          Research built
          <br />
          for <span className="text-cobalt">today’s businesses.</span>
        </SectionHeading>
        <div className="mt-10 lg:mt-14 grid gap-4 lg:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ title, copy, icon, color }) => (
            <article key={title} className="flex gap-4 rounded-xl bg-white p-5 lg:gap-6 lg:p-8">
              <IconBadge large icon={icon} color={color!} />
              <div>
                <h3 className="text-base font-extrabold lg:text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 lg:mt-3 lg:text-lg">{copy}</p>
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
