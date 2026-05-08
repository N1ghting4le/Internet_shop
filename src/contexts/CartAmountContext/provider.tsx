import type { PropsWithChildren } from "react";

import { CartAmountContext } from ".";
import { useCartAmount } from "./hooks/useCartAmount";

export function CartAmountContextProvider({ children }: PropsWithChildren) {
  const { cartAmount, setCartAmount } = useCartAmount();

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
