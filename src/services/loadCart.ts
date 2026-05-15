import { CART_KEY } from "@/constants/localStorageKeys";
import type { CartItem } from "@/types/cartItem";

export const loadCart = (): CartItem[] => {
  const cartRaw = localStorage.getItem(CART_KEY);

  if (!cartRaw) {
    return [];
  }

  return JSON.parse(cartRaw);
};
