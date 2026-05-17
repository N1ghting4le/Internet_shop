import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { texts } from "../constants";

import { loadOrdersHistory } from "@/services/loadOrdersHistory";
import type { Order } from "@/types/order";

export const useOrdersHistory = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      setOrders(loadOrdersHistory());
    } catch {
      setIsError(true);
      toast.error(texts.ERROR_TEXT);
    }
  }, []);

  return { orders, isError };
};
