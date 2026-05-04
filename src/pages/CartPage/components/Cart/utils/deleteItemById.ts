import type { CartItem } from "@/types/cartItem";

export const deleteItemById = (id: number) => (items: CartItem[]) =>
  items.filter((item) => item.product.id !== id);
