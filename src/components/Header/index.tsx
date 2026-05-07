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
import { useCartAmountContext } from "@/contexts/CartAmountContext/useCartAmountContext";
import { isAuthorizedAsAdmin } from "@/utils/isAuthorizedAsAdmin";

import {
  LOGO_TEXT,
  ORDERS_HISTORY_TEXT,
  LOGOUT_TEXT,
  LOGIN_TEXT,
  ADMIN_PANEL_TEXT,
} from "./constants";
import classes from "./styles.module.css";
import type { HeaderProps } from "./types";

export function Header({ isAdminRoute, hideLogin }: HeaderProps) {
  const { cartAmount } = useCartAmountContext();

  const isAuthorized = isAuthorizedAsAdmin();

  return (
    <header className={classes.header}>
      <div className={classes.linksWrapper}>
        <Link to={CATALOG_ROUTE} className={classes.logo}>
          {LOGO_TEXT}
        </Link>
        <Link to={ORDERS_ROUTE} className={classes.ordersLink}>
          {ORDERS_HISTORY_TEXT}
        </Link>
      </div>
      <div className={classes.linksWrapper}>
        <Link to={CART_ROUTE} className={classes.cart}>
          <img src={cart} alt="cart" />
          <span className={classes.cartAmount}>{cartAmount}</span>
        </Link>
        {isAdminRoute ? (
          <LogoutButton className={classes.button}>{LOGOUT_TEXT}</LogoutButton>
        ) : (
          !hideLogin && (
            <Link to={isAuthorized ? ADMIN_PRODUCTS_ROUTE : ADMIN_LOGIN_ROUTE}>
              <Button className={classes.button}>
                {isAuthorized ? ADMIN_PANEL_TEXT : LOGIN_TEXT}
              </Button>
            </Link>
          )
        )}
      </div>
    </header>
  );
}
