import type { Client } from "../schema";

import { ORDERS_HISTORY_KEY } from "@/constants/localStorageKeys";
import type { CartItem } from "@/types/cartItem";
import { loadOrdersHistory } from "@/utils/loadOrdersHistory";

export const saveOrder = (
  cart: CartItem[],
  client: Client,
  totalPrice: number,
) => {
  const ordersHistory = loadOrdersHistory();

  ordersHistory.push({
    cart,
    client,
    totalPrice,
  });

  localStorage.setItem(ORDERS_HISTORY_KEY, JSON.stringify(ordersHistory));
};
