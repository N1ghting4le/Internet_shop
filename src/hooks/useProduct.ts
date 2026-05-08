import { useState, useEffect } from "react";

import type { Product } from "@/types/product";
import { loadProductById } from "@/utils/loadProductById";

export const useProduct = (id?: string) => {
  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
    if (id) {
      setProduct(loadProductById(id));
    }
  }, [id]);

  return product;
};
