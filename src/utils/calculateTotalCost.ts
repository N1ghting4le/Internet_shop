import { DIGITS_AFTER_DECIMAL_POINT } from "@/constants/digitsAfterDecimalPoint";
import type { CartItem } from "@/types/cartItem";

export const calculateTotalCost = (cart: CartItem[]) =>
  Number(
    cart
      .reduce(
        (totalCost, { product: { price }, amount }) =>
          totalCost + price * amount,
        0,
      )
      .toFixed(DIGITS_AFTER_DECIMAL_POINT),
  );
