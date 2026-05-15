import type { ClientInfo } from "../schema";

import { ORDERS_HISTORY_KEY } from "@/constants/localStorageKeys";
import type { CartItem } from "@/types/cartItem";
import { loadOrdersHistory } from "@/services/loadOrdersHistory";
import { getId } from "@/utils/getId";

export const saveOrder = (
  cart: CartItem[],
  client: ClientInfo,
  totalPrice: number,
) => {
  const ordersHistory = loadOrdersHistory();

  ordersHistory.unshift({
    id: getId(ordersHistory),
    cart,
    client,
    totalPrice,
    date: new Date().toJSON(),
  });

  localStorage.setItem(ORDERS_HISTORY_KEY, JSON.stringify(ordersHistory));
};
