import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { CART_LOADING_ERROR_TEXT } from "@/constants/errorTexts";
import type { CartItem } from "@/types/cartItem";
import { loadCart } from "@/services/loadCart";

export const useCartItems = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      setCartItems(loadCart());
    } catch {
      toast.error(CART_LOADING_ERROR_TEXT);
      setIsError(true);
    }
  }, []);

  return { cartItems, setCartItems, isError };
};
