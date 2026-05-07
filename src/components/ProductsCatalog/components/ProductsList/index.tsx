import { useState, useEffect } from "react";

import { getCatalogItems } from "../../utils/getCatalogItems";
import { ProductCard } from "../ProductCard";

import { Loader } from "@/components/Loader";
import { deleteItemById } from "@/utils/deleteItemById";
import { mergeClassNames } from "@/utils/mergeClassNames";

import { LOADING_ERROR_TEXT, EMPTY_CATALOG_TEXT } from "./constants";
import classes from "./styles.module.css";
import type { ProductsListProps } from "./types";

export function ProductsList({
  isAdminRoute,
  catalogItems,
  setCatalogItems,
}: ProductsListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        setCatalogItems(getCatalogItems());
      } catch {
        setIsError(true);
      }

      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const deleteProductFromCatalog = (id: number) => {
    setCatalogItems(deleteItemById(id));
  };

  if (isLoading) {
    return <Loader size={100} className={classes.loadingAndMessage} />;
  }

  if (isError) {
    return (
      <p
        className={mergeClassNames(
          classes.loadingAndMessage,
          classes.text,
          classes.error,
        )}
      >
        {LOADING_ERROR_TEXT}
      </p>
    );
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
