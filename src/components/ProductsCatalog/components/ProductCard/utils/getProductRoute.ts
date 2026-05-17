import { routes } from "@/constants/routes";

const { PRODUCTS_ROUTE, ADMIN_PRODUCTS_ROUTE } = routes;

export const getProductRoute = (id: number, isAdminRoute?: boolean) =>
  `${isAdminRoute ? ADMIN_PRODUCTS_ROUTE : PRODUCTS_ROUTE}/${id}`;
