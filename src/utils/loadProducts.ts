import { PRODUCTS_CATALOG_KEY } from "@/constants/localStorageKeys";
import type { Product } from "@/types/product";

import data from "@/db.json";

export const loadProducts = (): Product[] => {
  const productsRaw = localStorage.getItem(PRODUCTS_CATALOG_KEY);

  if (!productsRaw) {
    localStorage.setItem(PRODUCTS_CATALOG_KEY, JSON.stringify(data));
    return data;
  }

  return JSON.parse(productsRaw);
};
