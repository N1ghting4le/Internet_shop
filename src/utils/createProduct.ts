import type { ProductInfo } from "@/types/product";

import { loadProducts } from "./loadProducts";
import { getId } from "./getId";
import { saveProducts } from "./saveProducts";

export const createProduct = (productInfo: ProductInfo) => {
  const products = loadProducts();
  const newProduct = {
    id: getId(products),
    ...productInfo,
  };

  products.push(newProduct);
  saveProducts(products);

  return newProduct;
};
