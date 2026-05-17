const ADMIN_PREFIX = "/admin";
const PRODUCTS_ROUTE = "/products";

export const routes = {
  PRODUCTS_ROUTE,
  ADMIN_LOGIN_ROUTE: `${ADMIN_PREFIX}/login`,
  ADMIN_PRODUCTS_ROUTE: `${ADMIN_PREFIX}${PRODUCTS_ROUTE}`,
  CATALOG_ROUTE: "/",
  ORDERS_ROUTE: "/orders",
  CART_ROUTE: "/cart",
  CHECKOUT_ROUTE: "/checkout",
};
