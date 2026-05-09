import { PRODUCT_NOT_FOUND_TEXT } from "./constants";
import type { ProductNotFoundProps } from "./types";

export function ProductNotFound({
  tag: Tag = "h1",
  className,
}: ProductNotFoundProps) {
  return <Tag {...{ className }}>{PRODUCT_NOT_FOUND_TEXT}</Tag>;
}
