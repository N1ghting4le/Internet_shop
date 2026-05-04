import type { Dispatch, SetStateAction } from "react";

import type { CartItem } from "@/types/cartItem";

export interface ClearCartButtonProps {
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
}
