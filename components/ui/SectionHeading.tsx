import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  children,
  copy,
  light = false,
  large = false,
}: {
  children: ReactNode;
  copy?: string;
  light?: boolean;
  large?: boolean;
}) {
  return (
    <div className={large ? "max-w-3xl" : "max-w-2xl"}>
      <h2
        className={cn(
          "text-4xl font-extrabold leading-[.99] tracking-[-.055em] sm:text-5xl",
          large && "lg:text-6xl",
          light ? "text-white" : "text-ink",
        )}
      >
        {children}
      </h2>
      {copy && (
        <p className={cn("mt-5 max-w-xl text-base leading-relaxed", large && "lg:mt-7 lg:max-w-2xl lg:text-xl", light ? "text-white/80" : "text-ink/70")}>
          {copy}
        </p>
      )}
    </div>
  );
}
