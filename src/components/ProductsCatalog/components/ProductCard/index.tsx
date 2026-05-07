import { useState } from "react";
import { Link } from "react-router";

import { Button } from "@/components/Button";
import { Loader } from "@/components/Loader";
import { useCartAmountContext } from "@/contexts/CartAmountContext/useCartAmountContext";
import { useTimeoutRef } from "@/hooks/useTimeoutRef";
import { addToCart } from "@/utils/addToCart";
import { deleteProductFromStorage } from "@/utils/deleteProductFromStorage";
import { getPriceString } from "@/utils/getPriceString";
import { mergeClassNames } from "@/utils/mergeClassNames";

import { PLACEHOLDER_SRC, GO_TO_PRODUCT_TEXT, ERROR_TEXT } from "./constants";
import classes from "./styles.module.css";
import type { ProductCardProps } from "./types";
import { getProductRoute } from "./utils/getProductRoute";
import { getSecondClassNameForSecondButton } from "./utils/getSecondClassNameForSecondButton";
import { getTextForSecondButton } from "./utils/getTextForSecondButton";

export function ProductCard({
  isAdminRoute,
  product,
  isInCart: isInCartInitial,
  deleteProductFromCatalog,
}: ProductCardProps) {
  const [isInCart, setIsInCart] = useState(isInCartInitial);
  const [isError, setIsError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useTimeoutRef();
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

  const { id, title, description, price } = product;

  const handleDelete = () => {
    setIsDeleting(true);

    timeoutRef.current = setTimeout(() => {
      try {
        deleteProductFromStorage(id);
        deleteProductFromCatalog(id);
      } catch {
        setIsError(true);
      }

      setIsDeleting(false);
    }, 1000);
  };

  return (
    <li className={classes.product}>
      <img
        src={PLACEHOLDER_SRC}
        alt={`image of ${title}`}
        className={classes.image}
      />
      <p className={classes.text}>{title}</p>
      <p className={mergeClassNames(classes.text, classes.description)}>
        {description}
      </p>
      <p className={classes.price}>{getPriceString(price)}</p>
      <Link to={getProductRoute(id, isAdminRoute)}>
        <Button className={classes.button}>{GO_TO_PRODUCT_TEXT}</Button>
      </Link>
      {isDeleting ? (
        <Loader size={40} className={classes.loader} />
      ) : (
        <Button
          className={mergeClassNames(
            classes.button,
            getSecondClassNameForSecondButton(isInCart, isAdminRoute),
          )}
          onClick={isAdminRoute ? handleDelete : handleAddToCart}
        >
          {getTextForSecondButton(isInCart, isAdminRoute)}
        </Button>
      )}
      {isError && <p className={classes.error}>{ERROR_TEXT}</p>}
    </li>
  );
}
