import { PRODUCTS_CATALOG_KEY } from "@/constants/localStorageKeys";
import type { Product } from "@/types/product";

export const saveProducts = (products: Product[]) => {
  localStorage.setItem(PRODUCTS_CATALOG_KEY, JSON.stringify(products));
};
