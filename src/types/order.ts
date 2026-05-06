import type { CartItem } from "./cartItem";
import type { ClientInfo } from "./clientInfo";

export interface Order {
  id: number;
  cart: CartItem[];
  client: ClientInfo;
  totalPrice: number;
  date: Date;
}
