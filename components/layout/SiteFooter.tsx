import Link from "next/link";

import { Logo } from "@/components/layout/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { LEGAL_NAME, footerGroups } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy px-5 pb-7 pt-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.4fr]">
        <div>
          <Logo footer />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            We help businesses understand their customers through research that is faster, simpler and built for
            real-world impact.
          </p>
          <SocialLinks className="mt-5" />
        </div>
        {footerGroups.map(({ heading, links }) => (
          <div key={heading}>
            <h3 className="text-sm font-extrabold">{heading}</h3>
            <ul className="mt-4 grid gap-3 text-sm text-white/60">
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
          <h3 className="text-sm font-extrabold">Subscribe to our newsletter</h3>
          <NewsletterForm />
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-6 text-right text-xs text-white/45">
        © {new Date().getFullYear()} {LEGAL_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
