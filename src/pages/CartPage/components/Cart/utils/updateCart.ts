import { CART_KEY } from "@/constants/localStorageKeys";

import type { CartItem } from "@/types/cartItem";

export const updateCart = (cartItems: CartItem[]) =>
  localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
