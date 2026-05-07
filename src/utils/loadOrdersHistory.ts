import { ORDERS_HISTORY_KEY } from "@/constants/localStorageKeys";
import type { LoadedOrder } from "@/types/order";

export const loadOrdersHistory = (): LoadedOrder[] => {
  const ordersHistoryRaw = localStorage.getItem(ORDERS_HISTORY_KEY);

  if (!ordersHistoryRaw) {
    return [];
  }

  return JSON.parse(ordersHistoryRaw);
};
