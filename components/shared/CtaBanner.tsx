import { CtaButton } from "@/components/ui/CtaButton";
import { contact } from "@/lib/site";

export function CtaBanner({
  title = "Get answers before your next decision.",
  copy = "Tell us the business question you are trying to answer and we will propose a research approach.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="px-5 pb-16 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl rounded-3xl bg-navy px-6 py-14 text-center text-white sm:px-12">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">{copy}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CtaButton href="/contact">Contact us</CtaButton>
          <CtaButton href={contact.bookingUrl} external variant="outline">
            Book a call
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
