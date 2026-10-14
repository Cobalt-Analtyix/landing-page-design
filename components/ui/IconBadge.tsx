import type { LucideIcon } from "lucide-react";

export function IconBadge({ icon: Icon, color }: { icon: LucideIcon; color: string }) {
  return (
    <div
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full"
      style={{ backgroundColor: `${color}1a`, color }}
    >
      <Icon size={22} aria-hidden="true" />
    </div>
  );
}
