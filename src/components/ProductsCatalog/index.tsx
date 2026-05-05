import { useState } from "react";

import { ProductForm } from "@/forms/ProductForm";
import type { Product } from "@/types/product";

import { ProductsList } from "./components/ProductsList";
import classes from "./styles.module.css";
import type { ProductsCatalogProps, CatalogItem } from "./types";
import { addProduct } from "./utils/addProduct";

export function ProductsCatalog({ isAdminRoute }: ProductsCatalogProps) {
  const [catalogItems, setCatalogItems] = useState<CatalogItem[]>([]);

  const list = (
    <ProductsList {...{ catalogItems, setCatalogItems, isAdminRoute }} />
  );

  if (!isAdminRoute) {
    return list;
  }

  const addProductToCatalog = (product: Product) => {
    setCatalogItems(addProduct(product));
  };

  return (
    <div className={classes.wrapper}>
      <ProductForm onSubmit={addProductToCatalog} />
      {list}
    </div>
  );
}
