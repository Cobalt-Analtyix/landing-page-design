import type { Metadata } from "next";
import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { ContactForm } from "@/components/forms/ContactForm";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { contact, socials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell us about your research question and the Cobalt Analytix team will get back to you.",
};

function Detail({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cobalt/10 text-cobalt ring-1 ring-cobalt/10">
        {icon}
      </div>

      <div className="min-w-0 pt-0.5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {label}
        </h3>

        <div className="mt-1 break-words text-sm leading-relaxed text-slate-800 sm:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="px-4 pt-6 pb-20 lg:px-8 lg:pt-8 lg:pb-20">
      <div
        className="relative mx-auto grid w-full max-w-6xl gap-7 overflow-hidden rounded-3xl border border-[#C7D8F3] bg-[#D9E6FB] p-6 text-slate-900 shadow-[0_20px_60px_rgba(30,64,175,0.08)] md:p-8 lg:min-h-[calc(100svh-150px)] lg:grid-cols-[.9fr_1.1fr] lg:gap-8 lg:p-8 xl:gap-10 xl:p-9"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cobalt/10 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />

        {/* Contact information */}
        <div className="relative z-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-accent">
            Contact
          </p>

          <h1 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0B1933] sm:text-4xl">
            Let&apos;s talk about your{" "}
            <span className="text-cobalt">research needs.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Get in touch with our experts to discover how Cobalt Analytix can
            help you make faster, smarter decisions.
          </p>

          <div className="mt-7 space-y-4">
            <Detail
              icon={<Mail size={19} aria-hidden="true" />}
              label="Email us"
            >
              <a
                href={`mailto:${contact.email} `}
                className="transition-colors hover:text-cobalt"
              >
                {contact.email}
              </a>
            </Detail>

            {contact.phone && (
              <Detail
                icon={<Phone size={19} aria-hidden="true" />}
                label="Call us"
              >
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, "")} `}
                  className="transition-colors hover:text-cobalt"
                >
                  {contact.phone}
                </a>
              </Detail>
            )}

            {contact.address && (
              <Detail
                icon={<MapPin size={19} aria-hidden="true" />}
                label="Visit us"
              >
                <span className="whitespace-pre-line">
                  {contact.address}
                </span>
              </Detail>
            )}

            <Detail
              icon={<CalendarDays size={19} aria-hidden="true" />}
              label="Prefer to talk?"
            >
              <a
                href={contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cobalt"
              >
                Book a call with our team
              </a>
            </Detail>
          </div>

          {socials.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                Follow us
              </h3>

              <SocialLinks theme="light" />
            </div>
          )}
        </div>

        {/* Contact form */}
        <div className="relative z-10 rounded-2xl border border-white/80 bg-white/55 p-5 shadow-[0_8px_32px_rgba(30,64,175,0.06)] backdrop-blur-sm sm:p-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
