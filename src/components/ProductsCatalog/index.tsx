import { useState, useEffect } from "react";

import { Loader } from "@/components/Loader";

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

  if (isLoading) {
    return (
      <div className={classes.loadingAndErrorContainer}>
        <Loader size={100} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className={classes.loadingAndErrorContainer}>
        <p className={classes.error}>Ошибка загрузки</p>
      </div>
    );
  }

  return (
    <ul className={classes.productsList}>
      {catalogItems.map(({ product, isInCart }) => (
        <ProductCard
          key={product.id}
          {...{ isAdminRoute, product, isInCart }}
        />
      ))}
    </ul>
  );
}
