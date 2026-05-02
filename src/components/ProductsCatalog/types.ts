import type { Product } from "@/types/product";

export interface ProductsCatalogProps {
  isAdminRoute?: boolean;
}

export interface CatalogItem {
  product: Product;
  isInCart: boolean;
}
