import { Mail } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/layout/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { LEGAL_NAME, contact, footerGroups } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy px-5 pb-7 pt-14 text-white lg:px-8 lg:pb-10 lg:pt-20">
      <div className="mx-auto grid max-w-[1650px] gap-10 lg:gap-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.4fr]">
        <div>
          <Logo footer />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60 lg:mt-6 lg:max-w-sm lg:text-lg">
            We help businesses understand their customers through research that is faster, simpler and built for
            real-world impact.
          </p>
          <SocialLinks className="mt-5 lg:mt-7" />
        </div>
        {footerGroups.map(({ heading, links }) => (
          <div key={heading}>
            <h3 className="text-sm font-extrabold lg:text-xl">{heading}</h3>
            <ul className="mt-4 grid gap-3 text-sm text-white/60 lg:mt-6 lg:gap-4 lg:text-lg">
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
        <div>
          <h3 className="text-sm font-extrabold lg:text-xl">Subscribe to our newsletter</h3>
          <NewsletterForm />
          {contact.email && (
            <div className="mt-4 lg:mt-5">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-white lg:text-base"
              >
                <Mail size={16} aria-hidden="true" className="shrink-0 text-white/60" />
                <span>{contact.email}</span>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[1650px] border-t border-white/15 pt-6 text-right text-xs lg:mt-16 lg:text-base text-white/45">
       {LEGAL_NAME} All rights reserved.
      </div>
    </footer>
  );
}
