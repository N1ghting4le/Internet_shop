import { findById } from "./findById";
import { loadProducts } from "./loadProducts";

export const loadProductById = (id: string) => {
  const products = loadProducts();

  return findById(products, Number(id));
};
