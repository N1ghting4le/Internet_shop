import { useState } from "react";

import { Button } from "@/components/Button";
import { useCartAmountContext } from "@/contexts/CartAmountContext/useCartAmountContext";
import { addToCart } from "@/utils/addToCart";

import { PRODUCT_IN_CART_TEXT, ERROR_TEXT } from "./constants";
import classes from "./styles.module.css";
import type { AddToCartButtonProps } from "./types";
import { getAddToCartButtonText } from "./utils/getAddToCartButtonText";
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
          ? PRODUCT_IN_CART_TEXT
          : getAddToCartButtonText(product.price)}
      </Button>
      {isError && <p className={classes.error}>{ERROR_TEXT}</p>}
    </div>
  );
}
