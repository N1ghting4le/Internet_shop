import { getPriceString } from "@/utils/getPriceString";

export const getAddToCartButtonText = (price: number) =>
  `В корзину за ${getPriceString(price)}`;
