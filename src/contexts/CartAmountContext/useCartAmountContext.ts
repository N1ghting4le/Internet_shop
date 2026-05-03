import { useContext } from "react";

import { CartAmountContext } from ".";

export const useCartAmountContext = () => {
  const context = useContext(CartAmountContext);

  if (!context) {
    throw new Error(
      'You can use "useCartAmountContext" hook only within a <CartAmountContextProvider> component.',
    );
  }

  return context;
};
