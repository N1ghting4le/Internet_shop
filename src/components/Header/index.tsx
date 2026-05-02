import { Link } from "react-router";

import cart from "@/assets/Basket.svg";
import { Button } from "@/components/Button";
import { LogoutButton } from "../LogoutButton";
import {
  CATALOG_ROUTE,
  ORDERS_ROUTE,
  CART_ROUTE,
  ADMIN_LOGIN_ROUTE,
  ADMIN_PRODUCTS_ROUTE,
} from "@/constants/routes";
import { isAuthorizedAsAdmin } from "@/utils/isAuthorizedAsAdmin";

import classes from "./styles.module.css";
import type { HeaderProps } from "./types";

export function Header({ isAdminRoute, hideLogin }: HeaderProps) {
  const isAuthorized = isAuthorizedAsAdmin();

  return (
    <header>
      <div className={classes.linksWrapper}>
        <Link to={CATALOG_ROUTE} className={classes.logo}>
          React
        </Link>
        <Link to={ORDERS_ROUTE} className={classes.ordersLink}>
          История заказов
        </Link>
      </div>
      <div className={classes.linksWrapper}>
        <Link to={CART_ROUTE} className={classes.cart}>
          <img src={cart} alt="cart" />
        </Link>
        {isAdminRoute ? (
          <LogoutButton className={classes.button}>Выйти</LogoutButton>
        ) : (
          !hideLogin && (
            <Link to={isAuthorized ? ADMIN_PRODUCTS_ROUTE : ADMIN_LOGIN_ROUTE}>
              <Button className={classes.button}>
                {isAuthorized ? "Админ-панель" : "Войти"}
              </Button>
            </Link>
          )
        )}
      </div>
    </header>
  );
}
