import { Mail } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/layout/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { LEGAL_NAME, contact, footerGroups } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy px-5 pb-7 pt-14 text-white lg:px-8 xl:pb-10 xl:pt-20">
      <div className="mx-auto grid max-w-[1650px] gap-10 xl:gap-14 md:grid-cols-3 xl:grid-cols-[1.3fr_1fr_1fr_1fr_1.4fr]">
        <div className="md:col-span-3 xl:col-span-1">
          <Logo footer />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60 xl:mt-6 xl:max-w-sm xl:text-lg">
            We help businesses understand their customers through research that is faster, simpler and built for
            real-world impact.
          </p>
          <SocialLinks className="mt-5 xl:mt-7" />
        </div>
        {footerGroups.map(({ heading, links }) => (
          <div key={heading}>
            <h3 className="text-sm font-extrabold xl:text-xl">{heading}</h3>
            <ul className="mt-4 grid gap-3 text-sm text-white/60 xl:mt-6 xl:gap-4 xl:text-lg">
              {links.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="md:col-span-3 md:max-w-md xl:col-span-1 xl:max-w-none">
          <h3 className="text-sm font-extrabold xl:text-xl">Subscribe to our newsletter</h3>
          <NewsletterForm />
          {contact.email && (
            <div className="mt-4 xl:mt-5">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-white xl:text-base"
              >
                <Mail size={16} aria-hidden="true" className="shrink-0 text-white/60" />
                <span>{contact.email}</span>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[1650px] border-t border-white/15 pt-6 text-right text-xs xl:mt-16 xl:text-base text-white/45">
       {LEGAL_NAME} All rights reserved.
      </div>
    </footer>
  );
}
