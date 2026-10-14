"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, LogIn, Menu, X } from "lucide-react";

import { CtaButton } from "@/components/ui/CtaButton";
import { navLinks } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        className="ml-auto grid h-10 w-10 place-items-center lg:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav className="absolute inset-x-0 top-full grid gap-4 border-t border-cobalt/10 bg-sky px-5 py-5 font-bold lg:hidden">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={close} className="text-ink hover:text-cobalt">
              {label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <CtaButton href="/client-portal" variant="outline" arrow={false} onClick={close}>
              <LogIn size={15} aria-hidden="true" /> Client Portal <ArrowRight size={14} aria-hidden="true" />
            </CtaButton>
            <CtaButton href="/contact" onClick={close}>
              Contact us
            </CtaButton>
          </div>
        </nav>
      )}
    </>
  );
}
