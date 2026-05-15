import { PRODUCTS_CATALOG_KEY } from "@/constants/localStorageKeys";

import { loadProducts } from "./loadProducts";

export const deleteProductFromStorage = (id: number) => {
  const updatedProducts = loadProducts().filter((product) => product.id !== id);

  localStorage.setItem(PRODUCTS_CATALOG_KEY, JSON.stringify(updatedProducts));
};
