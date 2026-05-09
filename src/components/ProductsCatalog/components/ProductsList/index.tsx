import { ProductCard } from "../ProductCard";

import { EmptyCatalog } from "@/components/EmptyCatalog";
import { Loader } from "@/components/Loader";
import { deleteItemById } from "@/utils/deleteItemById";
import { mergeClassNames } from "@/utils/mergeClassNames";

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
      <EmptyCatalog
        className={mergeClassNames(classes.loadingAndMessage, classes.text)}
      />
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
