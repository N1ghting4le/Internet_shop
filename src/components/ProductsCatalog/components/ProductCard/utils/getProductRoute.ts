import { PRODUCTS_ROUTE, ADMIN_PRODUCTS_ROUTE } from "@/constants/routes";

export const getProductRoute = (id: number, isAdminRoute?: boolean) =>
  `${isAdminRoute ? ADMIN_PRODUCTS_ROUTE : PRODUCTS_ROUTE}/${id}`;
