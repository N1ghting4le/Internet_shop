import { useState } from "react";
import { Link } from "react-router";

import { Button } from "@/components/Button";
import { addToCart } from "@/utils/addToCart";
import { mergeClassNames } from "@/utils/mergeClassNames";

import { PLACEHOLDER_SRC } from "./constants";
import classes from "./styles.module.css";
import type { ProductCardProps } from "./types";
import { getProductRoute } from "./utils/getProductRoute";
import { getSecondClassNameForSecondButton } from "./utils/getSecondClassNameForSecondButton";
import { getTextForSecondButton } from "./utils/getTextForSecondButton";

export function ProductCard({
  isAdminRoute,
  product,
  isInCart: isInCartInitial,
}: ProductCardProps) {
  const [isInCart, setIsInCart] = useState(isInCartInitial);
  const [isError, setIsError] = useState(false);

  const handleAddToCart = () => {
    if (isInCart) {
      return;
    }

    try {
      addToCart(product);
      setIsInCart(true);
      setIsError(false);
    } catch {
      setIsError(true);
    }
  };

  const handleDelete = () => {};

  const { id, title, description, price } = product;

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
      <p className={classes.price}>{price} BYN</p>
      <Link to={getProductRoute(id, isAdminRoute)}>
        <Button className={classes.button}>Перейти к товару</Button>
      </Link>
      <Button
        className={mergeClassNames(
          classes.button,
          getSecondClassNameForSecondButton(isInCart, isAdminRoute),
        )}
        onClick={isAdminRoute ? handleDelete : handleAddToCart}
      >
        {getTextForSecondButton(isInCart, isAdminRoute)}
      </Button>
      {isError && <p className={classes.error}>Произошла ошибка</p>}
    </li>
  );
}
