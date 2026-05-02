import { CART_KEY } from "@/constants/localStorageKeys";

import type { Product } from "@/types/product";

import { loadCart } from "./loadCart";

export const addToCart = (product: Product) => {
  const cart = loadCart();

  cart.push({ product, amount: 1 });

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};
