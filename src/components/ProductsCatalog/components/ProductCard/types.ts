import type { ProductsCatalogProps } from "../../types";

import type { Product } from "@/types/product";

export interface ProductCardProps extends ProductsCatalogProps {
  product: Product;
  isInCart: boolean;
  deleteProductFromCatalog: (id: number) => void;
}
