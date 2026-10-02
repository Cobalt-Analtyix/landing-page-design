import { LogIn } from "lucide-react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Logo } from "@/components/layout/Logo";
import { CtaButton } from "@/components/ui/CtaButton";
import { navLinks } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-cobalt/10 bg-sky/95 backdrop-blur">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <div className="lg:w-1/4">
          <Logo />
        </div>
        <nav className="hidden flex-1 items-center justify-center gap-7 whitespace-nowrap text-sm font-bold lg:flex">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="transition-colors hover:text-cobalt">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center justify-end gap-3 lg:flex lg:w-1/4">
          <CtaButton href="/client-portal" variant="outline" arrow={false} className="min-h-0 py-2.5">
            <LogIn size={15} aria-hidden="true" /> Client Portal
          </CtaButton>
          <CtaButton href="/contact" className="min-h-0 py-2.5">
            Contact us
          </CtaButton>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
