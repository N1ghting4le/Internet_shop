import type { Dispatch, SetStateAction } from "react";

import type { CartItem } from "@/types/cartItem";

export interface CartProps {
  cartItems: CartItem[];
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
}
