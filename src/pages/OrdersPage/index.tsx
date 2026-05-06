import { getPriceString } from "@/utils/getPriceString";
import { loadOrdersHistory } from "@/utils/loadOrdersHistory";

import classes from "./styles.module.css";

export function OrdersPage() {
  const orders = loadOrdersHistory();

  return (
    <main className={classes.main}>
      <h1>История заказов</h1>
      {orders.length ? (
        <ul className={classes.ordersList}>
          {orders.map(({ id, date, cart, totalPrice }) => (
            <li key={id} className={classes.ordersListItem}>
              <p className={classes.dateAndPrice}>
                {new Date(date).toLocaleDateString()}
              </p>
              <ul className={classes.productsList}>
                {cart.map(({ product: { id, title }, amount }) => (
                  <li key={id} className={classes.productsListItem}>
                    {title} ({amount} шт.)
                  </li>
                ))}
              </ul>
              <p className={classes.dateAndPrice}>
                {getPriceString(totalPrice)}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>История заказов пуста</p>
      )}
    </main>
  );
}
