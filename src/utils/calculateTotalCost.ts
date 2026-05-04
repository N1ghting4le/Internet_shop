import type { CartItem } from "@/types/cartItem";

export const calculateTotalCost = (cart: CartItem[]) =>
  Number(
    cart
      .reduce(
        (totalCost, { product: { price }, amount }) =>
          totalCost + price * amount,
        0,
      )
      .toFixed(2),
  );
