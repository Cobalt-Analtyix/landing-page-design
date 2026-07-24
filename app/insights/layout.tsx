import type { ReactNode } from "react";
import PageChrome from "@/components/PageChrome";

export default function InsightsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <PageChrome>{children}</PageChrome>;
}
