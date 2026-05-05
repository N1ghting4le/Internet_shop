import type { Product } from "@/types/product";

export const deleteItemById =
  (id: number) =>
  <T extends { product: Product }>(items: T[]) =>
    items.filter((item) => item.product.id !== id);
