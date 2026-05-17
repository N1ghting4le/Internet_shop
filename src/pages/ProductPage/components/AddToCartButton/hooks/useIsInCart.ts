import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { texts } from "../constants";
import { isProductInCart } from "../utils/isProductInCart";

export const useIsInCart = (id: number) => {
  const [isInCart, setIsInCart] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      setIsInCart(isProductInCart(id));
    } catch {
      toast.error(texts.CHECK_IS_IN_CART_ERROR_TEXT);
      setIsError(true);
    }
  }, [id]);

  return { isInCart, setIsInCart, isError };
};
