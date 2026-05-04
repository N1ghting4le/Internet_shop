import type { CartItem } from "@/types/cartItem";

export const updateItemAmountById =
  (id: number, updateFn: (amount: number) => number) => (items: CartItem[]) =>
    items.map((item) =>
      item.product.id === id
        ? { ...item, amount: updateFn(item.amount) }
        : item,
    );
