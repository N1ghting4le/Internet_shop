import type { Dispatch, SetStateAction } from "react";

import type { ProductsCatalogProps, CatalogItem } from "../../types";

export interface ProductsListProps extends ProductsCatalogProps {
  catalogItems: CatalogItem[];
  setCatalogItems: Dispatch<SetStateAction<CatalogItem[]>>;
  isLoading: boolean;
  isError: boolean;
}
