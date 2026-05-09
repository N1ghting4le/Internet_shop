import { EMPTY_CATALOG_TEXT } from "./constants";
import type { EmptyCatalogProps } from "./types";

export function EmptyCatalog({
  tag: Tag = "p",
  className,
}: EmptyCatalogProps) {
  return <Tag {...{ className }}>{EMPTY_CATALOG_TEXT}</Tag>;
}
