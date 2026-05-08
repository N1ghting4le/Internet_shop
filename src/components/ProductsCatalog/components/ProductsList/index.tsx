import { ProductCard } from "../ProductCard";

import { Loader } from "@/components/Loader";
import { deleteItemById } from "@/utils/deleteItemById";
import { mergeClassNames } from "@/utils/mergeClassNames";

import { EMPTY_CATALOG_TEXT } from "./constants";
import classes from "./styles.module.css";
import type { ProductsListProps } from "./types";

export function ProductsList({
  isAdminRoute,
  catalogItems,
  setCatalogItems,
  isLoading,
  isError,
}: ProductsListProps) {
  const deleteProductFromCatalog = (id: number) => {
    setCatalogItems(deleteItemById(id));
  };

  if (isLoading) {
    return <Loader size={100} className={classes.loadingAndMessage} />;
  }

  if (isError) {
    return null;
  }

  if (!catalogItems.length) {
    return (
      <p className={mergeClassNames(classes.loadingAndMessage, classes.text)}>
        {EMPTY_CATALOG_TEXT}
      </p>
    );
  }

  return (
    <ul className={classes.productsList}>
      {catalogItems.map(({ product, isInCart }) => (
        <ProductCard
          key={product.id}
          {...{ isAdminRoute, product, isInCart, deleteProductFromCatalog }}
        />
      ))}
    </ul>
  );
}
