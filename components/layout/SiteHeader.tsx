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
        <div className="lg:w-1/4">
          <Logo />
        </div>
        <nav className="hidden flex-1 items-center justify-center gap-9 whitespace-nowrap text-lg font-bold lg:flex">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="transition-colors hover:text-cobalt">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center justify-end gap-3 lg:flex lg:w-1/4">
          <CtaButton href="/client-portal" variant="outline" arrow={false} className="min-h-0 px-6 py-3.5 text-lg">
            <LogIn size={18} aria-hidden="true" /> Client Portal
          </CtaButton>
          <CtaButton href="/contact" className="min-h-0 px-6 py-3.5 text-lg">
            Contact us
          </CtaButton>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
