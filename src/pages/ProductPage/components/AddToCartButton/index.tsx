import { useState } from "react";

import { Button } from "@/components/Button";
import { useCartAmountContext } from "@/contexts/CartAmountContext/useCartAmountContext";
import { addToCart } from "@/utils/addToCart";
import { getPriceString } from "@/utils/getPriceString";

import classes from "./styles.module.css";
import type { AddToCartButtonProps } from "./types";
import { isProductInCart } from "./utils/isProductInCart";

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [isError, setIsError] = useState(false);
  const [isInCart, setIsInCart] = useState(() => {
    try {
      return isProductInCart(product.id);
    } catch {
      return false;
    }
  });
  const { incrementCartAmount } = useCartAmountContext();

  const handleAddToCart = () => {
    if (isInCart) {
      return;
    }

    try {
      addToCart(product);
      incrementCartAmount();
      setIsInCart(true);
      setIsError(false);
    } catch {
      setIsError(true);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Button
        onClick={handleAddToCart}
        className={isInCart ? classes.inCart : undefined}
      >
        {isInCart
          ? "Товар в корзине"
          : `В корзину за ${getPriceString(product.price)}`}
      </Button>
      {isError && <p className={classes.error}>Произошла ошибка</p>}
    </div>
  );
}
