import { Link } from "react-router";

import { Button } from "@/components/Button";
import { mergeClassNames } from "@/utils/mergeClassNames";

import { PLACEHOLDER_SRC } from "./constants";
import classes from "./styles.module.css";
import type { ProductCardProps } from "./types";
import { getProductRoute } from "./utils/getProductRoute";

export function ProductCard({ isAdminRoute, product }: ProductCardProps) {
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
      <Button className={mergeClassNames(classes.button, classes.secondButton)}>
        {isAdminRoute ? "Удалить товар" : "Добавить в корзину"}
      </Button>
    </li>
  );
}
