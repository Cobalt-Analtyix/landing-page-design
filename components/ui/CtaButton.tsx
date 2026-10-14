import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const variants = {
  orange: "bg-accent text-white shadow-md shadow-accent/25 hover:bg-accent-dark",
  blue: "bg-cobalt text-white hover:bg-cobalt-dark",
  outline: "border border-ink bg-white text-ink hover:bg-slate-200",
  outlineLight: "border border-white bg-transparent text-white hover:bg-white hover:text-ink",
} as const;

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  arrow?: boolean;
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

export function CtaButton({
  href,
  children,
  variant = "orange",
  arrow = true,
  external = false,
  className,
  onClick,
}: CtaButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition-all hover:-translate-y-0.5",
    variants[variant],
    className,
  );
  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={16} aria-hidden="true" />}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
