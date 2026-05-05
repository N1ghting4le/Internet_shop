import type { CartItem } from "./cartItem";
import type { ClientInfo } from "./clientInfo";

export interface Order {
  cart: CartItem[];
  client: ClientInfo;
  totalPrice: number;
}
