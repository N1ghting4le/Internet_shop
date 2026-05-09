import type { JSX } from "react";

export interface EmptyCatalogProps {
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
}
