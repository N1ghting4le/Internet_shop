import { useState, useEffect } from "react";

import { Loader } from "@/components/Loader";
import { mergeClassNames } from "@/utils/mergeClassNames";

import { ProductCard } from "./components/ProductCard";
import classes from "./styles.module.css";
import type { ProductsCatalogProps, CatalogItem } from "./types";
import { getCatalogItems } from "./utils/getCatalogItems";

export function ProductsCatalog({ isAdminRoute }: ProductsCatalogProps) {
  const [catalogItems, setCatalogItems] = useState<CatalogItem[]>([]);
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
