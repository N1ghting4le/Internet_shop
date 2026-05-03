import { useState, type PropsWithChildren } from "react";

import { loadCart } from "@/utils/loadCart";

import { CartAmountContext } from ".";

export function CartAmountContextProvider({ children }: PropsWithChildren) {
  const [cartAmount, setCartAmount] = useState(() => {
    try {
      return loadCart().length;
    } catch {
      return 0;
    }
  });

  const incrementCartAmount = () => {
    setCartAmount((amount) => amount + 1);
  };

  const decrementCartAmount = () => {
    setCartAmount((amount) => amount - 1);
  };

  const clearCartAmount = () => {
    setCartAmount(0);
  };

  const value = {
    cartAmount,
    incrementCartAmount,
    decrementCartAmount,
    clearCartAmount,
  };

  return <CartAmountContext {...{ value }}>{children}</CartAmountContext>;
}
