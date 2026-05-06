import { loadCart } from "@/utils/loadCart";

export const isProductInCart = (id: number) => {
  const cart = loadCart();
  const numericId = Number(id);

  return cart.some(({ product }) => product.id === numericId);
};
