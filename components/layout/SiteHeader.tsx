import Link from "next/link";
import { LogIn } from "lucide-react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Logo } from "@/components/layout/Logo";
import { CtaButton } from "@/components/ui/CtaButton";
import { navLinks } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-cobalt/10 bg-sky/95 backdrop-blur">
      <div className="relative mx-auto flex h-26 max-w-[1650px] items-center justify-between px-5 lg:px-8">
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>
        <nav className="hidden flex-1 items-center justify-center gap-5 whitespace-nowrap text-sm font-bold lg:flex xl:gap-8 xl:text-base">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="transition-colors hover:text-cobalt">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden shrink-0 items-center justify-end gap-2.5 lg:flex xl:gap-3">
          <CtaButton
            href="/client-portal"
            variant="outline"
            arrow={false}
            className="min-h-0 px-4 py-2 text-sm font-bold whitespace-nowrap xl:px-5 xl:py-2.5 xl:text-base"
          >
            <LogIn size={16} aria-hidden="true" /> Client Portal
          </CtaButton>
          <CtaButton
            href="/contact"
            className="min-h-0 px-4.5 py-2 text-sm font-bold whitespace-nowrap xl:px-5.5 xl:py-2.5 xl:text-base"
          >
            Contact us
          </CtaButton>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
