import type { Client } from "@/forms/CheckoutForm/schema";

import type { CartItem } from "./cartItem";

export interface Order {
  cart: CartItem[];
  client: Client;
  totalPrice: number;
}
