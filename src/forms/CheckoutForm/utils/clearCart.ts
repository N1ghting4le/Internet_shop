import { CART_KEY } from "@/constants/localStorageKeys";

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};
