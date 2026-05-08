import { useRef } from "react";

import { updateCart } from "../utils/updateCart";

import { useUpdateEffect } from "@/hooks/useUpdateEffect";
import type { CartItem } from "@/types/cartItem";

export const useUpdateCart = (cartItems: CartItem[]) => {
  const isCartLoadedRef = useRef(false);

  useUpdateEffect(() => {
    if (isCartLoadedRef.current) {
      updateCart(cartItems);
    } else {
      isCartLoadedRef.current = true;
    }
  }, [cartItems]);
};
