import { toast } from "react-toastify";

import { Button } from "@/components/Button";
import { useCartAmountContext } from "@/contexts/CartAmountContext/hooks/useCartAmountContext";
import { addToCart } from "@/services/addToCart";
import { mergeClassNames } from "@/utils/mergeClassNames";

import { PRODUCT_IN_CART_TEXT, ADD_TO_CART_ERROR_TEXT } from "./constants";
import { useIsInCart } from "./hooks/useIsInCart";
import classes from "./styles.module.css";
import type { AddToCartButtonProps } from "./types";
import { getAddToCartButtonText } from "./utils/getAddToCartButtonText";

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { isInCart, setIsInCart, isError } = useIsInCart(product.id);
  const { incrementCartAmount } = useCartAmountContext();

  const handleAddToCart = () => {
    if (isInCart) {
      return;
    }

    try {
      addToCart(product);
      incrementCartAmount();
      setIsInCart(true);
    } catch {
      toast.error(ADD_TO_CART_ERROR_TEXT);
    }
  };

  return (
    <Button
      onClick={handleAddToCart}
      className={mergeClassNames(classes.button, isInCart && classes.inCart)}
      disabled={isError}
    >
      {isInCart ? PRODUCT_IN_CART_TEXT : getAddToCartButtonText(product.price)}
    </Button>
  );
}
