import { Link } from "react-router";

import { Button } from "@/components/Button";
import { EMPTY_CART_TEXT } from "@/constants/emptyCartText";
import { CHECKOUT_ROUTE } from "@/constants/routes";
import { useCartAmountContext } from "@/contexts/CartAmountContext/useCartAmountContext";
import { calculateTotalCost } from "@/utils/calculateTotalCost";
import { deleteItemById } from "@/utils/deleteItemById";
import { getPriceString } from "@/utils/getPriceString";

import { CartListItem } from "./components/CartListItem";
import { CHECKOUT_TEXT } from "./constants";
import { useUpdateCart } from "./hooks/useUpdateCart";
import classes from "./styles.module.css";
import type { CartProps } from "./types";
import { updateItemAmountById } from "./utils/updateItemAmountById";

export function Cart({ cartItems, setCartItems, isError }: CartProps) {
  const { decrementCartAmount } = useCartAmountContext();

  useUpdateCart(cartItems);

  if (isError) {
    return null;
  }

  if (!cartItems.length) {
    return <p>{EMPTY_CART_TEXT}</p>;
  }

  const incrementItem = (id: number) => () => {
    setCartItems(updateItemAmountById(id, (amount) => amount + 1));
  };

  const decrementItem = (id: number) => () => {
    setCartItems(updateItemAmountById(id, (amount) => amount - 1));
  };

  const deleteItem = (id: number) => () => {
    setCartItems(deleteItemById(id));
    decrementCartAmount();
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.cartHeader}>
        <div className={classes.totalCostWrapper}>
          <p className={classes.costLabel}>Стоимость корзины:</p>
          <p className={classes.totalCost}>
            {getPriceString(calculateTotalCost(cartItems))}
          </p>
        </div>
        <Link to={CHECKOUT_ROUTE}>
          <Button className={classes.button}>{CHECKOUT_TEXT}</Button>
        </Link>
      </div>
      <ul className={classes.list}>
        {cartItems.map((item) => (
          <CartListItem
            key={item.product.id}
            {...{ item, incrementItem, decrementItem, deleteItem }}
          />
        ))}
      </ul>
    </div>
  );
}
