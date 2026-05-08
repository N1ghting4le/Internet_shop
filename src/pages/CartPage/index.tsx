import { useCartItems } from "@/hooks/useCartItems";

import { Cart } from "./components/Cart";
import { ClearCartButton } from "./components/ClearCartButton";
import { CART_TEXT } from "./constants";
import classes from "./styles.module.css";

export function CartPage() {
  const { cartItems, setCartItems, isError } = useCartItems();

  return (
    <main className={classes.main}>
      <div className={classes.titleAndClearButtonWrapper}>
        <h1 className={classes.title}>{CART_TEXT}</h1>
        {!!cartItems.length && <ClearCartButton {...{ setCartItems }} />}
      </div>
      <Cart {...{ cartItems, setCartItems, isError }} />
    </main>
  );
}
