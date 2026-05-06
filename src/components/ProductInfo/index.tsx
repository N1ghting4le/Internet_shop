import { PLACEHOLDER_SRC } from "../ProductsCatalog/components/ProductCard/constants";

import { getPriceString } from "@/utils/getPriceString";

import classes from "./styles.module.css";
import type { ProductInfoProps } from "./types";

export function ProductInfo({ product }: ProductInfoProps) {
  if (!product) {
    return <h1 className={classes.titleOrPrice}>Товар не найден</h1>;
  }

  const { title, description, price } = product;

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.titleOrPrice}>{title}</h1>
      <img
        src={PLACEHOLDER_SRC}
        alt={`Picture of ${title}`}
        className={classes.image}
      />
      <p className={classes.titleOrPrice}>
        {getPriceString(price)}
      </p>
      <p className={classes.description}>{description}</p>
    </div>
  );
}
