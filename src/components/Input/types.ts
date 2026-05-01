import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "placeholder"
> {
  placeholder?: ReactNode;
  label?: string;
  error?: string | null;
}
