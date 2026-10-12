import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

const fieldClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition-all placeholder:text-slate-400 focus:border-cobalt focus:outline-none focus:ring-2 focus:ring-cobalt/20";

type Shared = {
  label: string;
  id: string;
};

export function InputField({
  label,
  id,
  ...props
}: Shared & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        className={fieldClasses}
        {...props}
      />
    </div>
  );
}

export function TextareaField({
  label,
  id,
  ...props
}: Shared & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>

      <textarea
        id={id}
        name={id}
        className={`${fieldClasses} resize - none`}
        {...props}
      />
    </div>
  );
}
