import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function MarketingLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="min-h-[60vh] overflow-x-clip">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
