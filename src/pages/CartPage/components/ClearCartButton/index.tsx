import { useCartAmountContext } from "@/contexts/CartAmountContext/hooks/useCartAmountContext";

import { CLEAR_CART_TEXT } from "./constants";
import classes from "./styles.module.css";
import type { ClearCartButtonProps } from "./types";

export function ClearCartButton({ setCartItems }: ClearCartButtonProps) {
  const { clearCartAmount } = useCartAmountContext();

  const handleClick = () => {
    setCartItems([]);
    clearCartAmount();
  };

  return (
    <button className={classes.button} onClick={handleClick}>
      {CLEAR_CART_TEXT}
    </button>
  );
}
