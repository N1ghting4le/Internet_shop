import { useState, useEffect } from "react";

import { Loader } from "@/components/Loader";
import type { Product } from "@/types/product";

import { ProductCard } from "./components/ProductCard";
import classes from "./styles.module.css";
import type { ProductsCatalogProps } from "./types";
import { loadProducts } from "./utils/loadProducts";

export function ProductsCatalog({ isAdminRoute }: ProductsCatalogProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        setProducts(loadProducts());
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
      {products.map((product) => (
        <ProductCard key={product.id} {...{ isAdminRoute, product }} />
      ))}
    </ul>
  );
}
