import { EMPTY_CART_TEXT } from "./constants";
import type { EmptyCartProps } from "./types";

export function EmptyCart({
  tag: Tag = "p",
  className,
}: EmptyCartProps) {
  return <Tag {...{ className }}>{EMPTY_CART_TEXT}</Tag>;
}
