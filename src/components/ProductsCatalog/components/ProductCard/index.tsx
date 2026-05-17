import { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

import { Button } from "@/components/Button";
import { Loader } from "@/components/Loader";
import { useCartAmountContext } from "@/contexts/CartAmountContext/hooks/useCartAmountContext";
import { addToCart } from "@/services/addToCart";
import { deleteProductFromStorage } from "@/services/deleteProductFromStorage";
import { getPriceString } from "@/utils/getPriceString";
import { mergeClassNames } from "@/utils/mergeClassNames";
import { wait } from "@/utils/wait";

import { PLACEHOLDER_SRC, texts } from "./constants";
import classes from "./styles.module.css";
import type { ProductCardProps } from "./types";
import { getProductRoute } from "./utils/getProductRoute";
import { getClassNameForSecondButton } from "./utils/getClassNameForSecondButton";
import { getTextForSecondButton } from "./utils/getTextForSecondButton";

const { GO_TO_PRODUCT_TEXT, ERROR_TEXT, DELETE_SUCCESS_TEXT } = texts;

export function ProductCard({
  isAdminRoute,
  product,
  isInCart: isInCartInitial,
  deleteProductFromCatalog,
}: ProductCardProps) {
  const [isInCart, setIsInCart] = useState(isInCartInitial);
  const [isDeleting, setIsDeleting] = useState(false);
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
      toast.error(ERROR_TEXT);
    }
  };

  const { id, title, description, price } = product;

  const handleDelete = async () => {
    setIsDeleting(true);

    await wait(1000);

    try {
      deleteProductFromStorage(id);
      deleteProductFromCatalog(id);
      toast.success(DELETE_SUCCESS_TEXT);
    } catch {
      toast.error(ERROR_TEXT);
    }

    setIsDeleting(false);
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
          className={getClassNameForSecondButton(isInCart, isAdminRoute)}
          onClick={isAdminRoute ? handleDelete : handleAddToCart}
        >
          {getTextForSecondButton(isInCart, isAdminRoute)}
        </Button>
      )}
    </li>
  );
}
