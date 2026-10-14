import type { LucideIcon } from "lucide-react";

export function IconBadge({ icon: Icon, color, large = false }: { icon: LucideIcon; color: string; large?: boolean }) {
  return (
    <div
      className={`grid shrink-0 place-items-center rounded-full ${large ? "h-11 w-11 lg:h-16 lg:w-16" : "h-11 w-11"}`}
      style={{ backgroundColor: `${color}1a`, color }}
    >
      <Icon size={large ? 30 : 22} aria-hidden="true" />
    </div>
  );
}
