import type { CartItem } from "@/types/cartItem"

type MutationFn = (id: number) => VoidFunction;

export interface CartListItemProps {
  item: CartItem;
  incrementItem: MutationFn;
  decrementItem: MutationFn;
  deleteItem: MutationFn;
}
