import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

import { Button } from "@/components/Button";
import { CURRENCY } from "@/constants/currency";
import { CHECKOUT_ROUTE } from "@/constants/routes";
import { useCartAmountContext } from "@/contexts/CartAmountContext/useCartAmountContext";
import { useUpdateEffect } from "@/hooks/useUpdateEffect";
import { calculateTotalCost } from "@/utils/calculateTotalCost";
import { loadCart } from "@/utils/loadCart";

import { CartListItem } from "./components/CartListItem";
import classes from "./styles.module.css";
import type { CartProps } from "./types";
import { deleteItemById } from "./utils/deleteItemById";
import { updateCart } from "./utils/updateCart";
import { updateItemAmountById } from "./utils/updateItemAmountById";

export function Cart({ cartItems, setCartItems }: CartProps) {
  const { decrementCartAmount } = useCartAmountContext();
  const [isError, setIsError] = useState(false);
  const isCartLoadedRef = useRef(false);

  useEffect(() => {
    try {
      setCartItems(loadCart());
    } catch {
      setIsError(true);
    }
  }, []);

  useUpdateEffect(() => {
    if (isCartLoadedRef.current) {
      updateCart(cartItems);
    } else {
      isCartLoadedRef.current = true;
    }
  }, [cartItems]);

  if (isError) {
    return <p className={classes.error}>Произошла ошибка</p>;
  }

  if (!cartItems.length) {
    return <p>Корзина пуста</p>;
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
            {calculateTotalCost(cartItems)} {CURRENCY}
          </p>
        </div>
        <Link to={CHECKOUT_ROUTE}>
          <Button className={classes.button}>Оформить</Button>
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
