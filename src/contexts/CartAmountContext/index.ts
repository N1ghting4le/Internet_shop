import { createContext } from "react";

import type { CartAmountContextType } from "./types";

export const CartAmountContext = createContext<CartAmountContextType | null>(
  null,
);
