import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { PRODUCT_LOADING_ERROR_TEXT } from "@/constants/errorTexts";
import type { Product } from "@/types/product";
import { loadProductById } from "@/utils/loadProductById";

export const useProduct = (id?: string) => {
  const [product, setProduct] = useState<Product | undefined>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (id) {
      try {
        setProduct(loadProductById(id));
      } catch {
        setIsError(true);
        toast.error(PRODUCT_LOADING_ERROR_TEXT);
      }
    }
  }, [id]);

  return { product, setProduct, isError };
};
