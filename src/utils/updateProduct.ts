import type { ProductInfo } from "@/types/product";

import { loadProducts } from "./loadProducts";
import { saveProducts } from "./saveProducts";

export const updateProduct = (id: number, productInfo: ProductInfo) => {
  const products = loadProducts();
  const updatedProduct = {
    id,
    ...productInfo,
  };

  saveProducts(
    products.map((product) => (product.id === id ? updatedProduct : product)),
  );

  return updatedProduct;
};
