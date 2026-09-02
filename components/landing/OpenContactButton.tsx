"use client";

import type { CSSProperties, ReactNode } from "react";

import { OPEN_CONTACT_EVENT } from "./ContactWidget";

export function OpenContactButton({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONTACT_EVENT))}
      style={style}
    >
      {children}
    </button>
  );
}
