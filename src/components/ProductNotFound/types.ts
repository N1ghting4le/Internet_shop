import type { JSX } from "react";

export interface ProductNotFoundProps {
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
}
