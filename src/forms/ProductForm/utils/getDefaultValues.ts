import type { ProductFormInput } from "../schema";

import type { Product } from "@/types/product";

export const getDefaultValues = (
  product?: Product,
): ProductFormInput | undefined => {
  if (!product) {
    return;
  }

  const { title, description, price } = product;

  return { title, description, price: String(price) };
};
