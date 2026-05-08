import { useState, useEffect } from "react";

import { useCartItems } from "@/hooks/useCartItems";

export const useCartAmount = () => {
  const [cartAmount, setCartAmount] = useState(0);
  const { cartItems } = useCartItems();

  useEffect(() => {
    setCartAmount(cartItems.length);
  }, [cartItems.length]);

  return { cartAmount, setCartAmount };
};
