import { IconBadge } from "@/components/ui/IconBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/lib/content";

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-y border-cobalt/10 px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading>
          Research built
          <br />
          for <span className="text-cobalt">today’s businesses.</span>
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ title, copy, icon, color }) => (
            <article key={title} className="flex gap-4 rounded-xl bg-white p-5">
              <IconBadge icon={icon} color={color!} />
              <div>
                <h3 className="text-base font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
