import { Link } from "react-router";

import chevronLeft from "@/assets/chevron-left.svg";
import { ADMIN_PRODUCTS_ROUTE, CATALOG_ROUTE } from "@/constants/routes";

import classes from "./styles.module.css";
import type { BackToProductsButtonProps } from "./types";

export function BackToProductsButton({
  isAdminRoute,
}: BackToProductsButtonProps) {
  return (
    <Link to={isAdminRoute ? ADMIN_PRODUCTS_ROUTE : CATALOG_ROUTE}>
      <button className={classes.button}>
        <img src={chevronLeft} alt="chevron left icon" /> Назад к товарам
      </button>
    </Link>
  );
}
