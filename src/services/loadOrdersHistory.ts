import { ORDERS_HISTORY_KEY } from "@/constants/localStorageKeys";
import type { Order } from "@/types/order";

export const loadOrdersHistory = (): Order[] => {
  const ordersHistoryRaw = localStorage.getItem(ORDERS_HISTORY_KEY);

  if (!ordersHistoryRaw) {
    return [];
  }

  return JSON.parse(ordersHistoryRaw);
};
