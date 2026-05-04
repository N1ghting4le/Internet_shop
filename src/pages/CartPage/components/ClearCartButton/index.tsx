import { useCartAmountContext } from "@/contexts/CartAmountContext/useCartAmountContext";

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
      Очистить корзину
    </button>
  );
}
