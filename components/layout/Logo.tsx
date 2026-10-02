import Image from "next/image";
import Link from "next/link";

import { SITE_NAME } from "@/lib/site";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link href="/" aria-label={`${SITE_NAME} home`} className="flex items-center">
      <Image
        src={footer ? "/company_assets/cobalt-logo-white.png" : "/company_assets/cobalt-logo.png"}
        alt={SITE_NAME}
        width={4366}
        height={1910}
        priority={!footer}
        className={footer ? "h-11 w-auto" : "h-15 w-auto"}
      />
    </Link>
  );
}
