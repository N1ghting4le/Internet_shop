import { useState, useEffect } from "react";

import { getCatalogItems } from "../../utils/getCatalogItems";

import { Loader } from "@/components/Loader";
import { mergeClassNames } from "@/utils/mergeClassNames";

import { ProductCard } from "../ProductCard";
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
    setCatalogItems((catalogItems) =>
      catalogItems.filter(({ product }) => product.id !== id),
    );
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
        Ошибка загрузки
      </p>
    );
  }

  if (!catalogItems.length) {
    return (
      <p className={mergeClassNames(classes.loadingAndMessage, classes.text)}>
        Каталог пуст
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
