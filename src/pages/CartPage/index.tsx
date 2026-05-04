import { useState } from "react";

import type { CartItem } from "@/types/cartItem";

import { Cart } from "./components/Cart";
import { ClearCartButton } from "./components/ClearCartButton";
import classes from "./styles.module.css";

export function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <main className={classes.main}>
      <div className={classes.titleAndClearButtonWrapper}>
        <h1 className={classes.title}>Корзина</h1>
        {!!cartItems.length && <ClearCartButton {...{ setCartItems }} />}
      </div>
      <Cart {...{ cartItems, setCartItems }} />
    </main>
  );
}
