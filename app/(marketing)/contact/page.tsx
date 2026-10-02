import type { Metadata } from "next";
import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { ContactForm } from "@/components/forms/ContactForm";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { contact, socials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Tell us about your research question and the Cobalt Analytix team will get back to you.",
};

function Detail({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cobalt/20 text-cobalt">{icon}</div>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">{label}</h3>
        <div className="mt-1 text-lg">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="px-5 py-12 lg:px-8 lg:py-20">
      <div className="relative mx-auto grid max-w-6xl gap-12 overflow-hidden rounded-3xl bg-navy p-8 text-white md:p-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:p-16">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-cobalt opacity-20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent opacity-10 blur-[120px]" />

        <div className="relative z-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-accent">Contact</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Let&apos;s talk about your <span className="text-cobalt">research needs.</span>
          </h1>
          <p className="mt-6 text-lg text-white/70">
            Get in touch with our experts to discover how Cobalt Analytix can help you make faster, smarter
            decisions.
          </p>

          <div className="mt-10 space-y-6">
            <Detail icon={<Mail size={20} aria-hidden="true" />} label="Email us">
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-accent">
                {contact.email}
              </a>
            </Detail>
            {contact.phone && (
              <Detail icon={<Phone size={20} aria-hidden="true" />} label="Call us">
                <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="transition-colors hover:text-accent">
                  {contact.phone}
                </a>
              </Detail>
            )}
            {contact.address && (
              <Detail icon={<MapPin size={20} aria-hidden="true" />} label="Visit us">
                <span className="whitespace-pre-line">{contact.address}</span>
              </Detail>
            )}
            <Detail icon={<CalendarDays size={20} aria-hidden="true" />} label="Prefer to talk?">
              <a
                href={contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Book a call with our team
              </a>
            </Detail>
          </div>

          {socials.length > 0 && (
            <div className="mt-10">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white/60">Follow us</h3>
              <SocialLinks />
            </div>
          )}
        </div>

        <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
