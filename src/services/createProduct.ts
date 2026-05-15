import type { ProductInfo } from "@/types/product";
import { getId } from "@/utils/getId";

import { loadProducts } from "./loadProducts";
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
