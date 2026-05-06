import { CURRENCY } from "@/constants/currency";
import { DIGITS_AFTER_DECIMAL_POINT } from "@/constants/digitsAfterDecimalPoint";

export const getPriceString = (price: number) =>
  `${price.toFixed(DIGITS_AFTER_DECIMAL_POINT)} ${CURRENCY}`;
