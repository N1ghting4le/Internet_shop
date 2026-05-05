import type { CatalogItem } from "../types";

import type { Product } from "@/types/product";

export const addProduct = (product: Product) => (items: CatalogItem[]) => [
  ...items,
  { product, isInCart: false },
];
