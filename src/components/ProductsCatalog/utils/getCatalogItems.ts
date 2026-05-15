import type { CatalogItem } from "../types";

import { loadCart } from "@/services/loadCart";
import { loadProducts } from "@/services/loadProducts";

export const getCatalogItems = (): CatalogItem[] => {
  const products = loadProducts();
  const cart = loadCart();

  return products.map((product) => ({
    product,
    isInCart: cart.some((cartItem) => cartItem.product.id === product.id),
  }));
};
