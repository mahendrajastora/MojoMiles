import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BaseInputProps {
  label: string;
  error?: string;
  className?: string;
}

export interface TextFieldProps extends BaseInputProps, InputHTMLAttributes<HTMLInputElement> {}
export interface TextAreaProps extends BaseInputProps, TextareaHTMLAttributes<HTMLTextAreaElement> {}

const baseInputStyles =
  "w-full rounded-[1.5rem] border border-white/10 bg-[#121110] px-4 py-3 text-sm text-[#F9F8F6] outline-none transition focus:border-[#1F3A2D] focus:ring-2 focus:ring-[#1F3A2D]/15";

export function TextField({ label, error, className, ...props }: TextFieldProps) {
  return (
    <label className="block text-sm text-[#F9F8F6]">
      <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-[#CFCBC5]">{label}</span>
      <input className={cn(baseInputStyles, className)} {...props} />
      {error ? <span className="mt-2 block text-xs text-[#F9F8F6]/70">{error}</span> : null}
    </label>
  );
}

export function TextArea({ label, error, className, ...props }: TextAreaProps) {
  return (
    <label className="block text-sm text-[#F9F8F6]">
      <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-[#CFCBC5]">{label}</span>
      <textarea className={cn(baseInputStyles, "min-h-[10rem] resize-none", className)} {...props} />
      {error ? <span className="mt-2 block text-xs text-[#F9F8F6]/70">{error}</span> : null}
    </label>
  );
}
