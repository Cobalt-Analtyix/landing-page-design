import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldClasses =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors placeholder:text-white/40 focus:border-cobalt focus:outline-none";

type Shared = { label: string; id: string };

export function InputField({ label, id, ...props }: Shared & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-white/70">
        {label}
      </label>
      <input id={id} name={id} className={fieldClasses} {...props} />
    </div>
  );
}

export function TextareaField({ label, id, ...props }: Shared & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-white/70">
        {label}
      </label>
      <textarea id={id} name={id} className={`${fieldClasses} resize-none`} {...props} />
    </div>
  );
}
