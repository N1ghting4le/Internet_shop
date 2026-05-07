import { getPriceString } from "@/utils/getPriceString";
import { loadOrdersHistory } from "@/utils/loadOrdersHistory";

import { ORDERS_HISTORY_TEXT, EMPTY_ORDERS_HISTORY_TEXT } from "./constants";
import classes from "./styles.module.css";
import { getDateString } from "./utils/getDateString";
import { getProductString } from "./utils/getProductString";

export function OrdersPage() {
  const orders = loadOrdersHistory();

  return (
    <main className={classes.main}>
      <h1>{ORDERS_HISTORY_TEXT}</h1>
      {orders.length ? (
        <ul className={classes.ordersList}>
          {orders.map(({ id, date, cart, totalPrice }) => (
            <li key={id} className={classes.ordersListItem}>
              <p className={classes.dateAndPrice}>{getDateString(date)}</p>
              <ul className={classes.productsList}>
                {cart.map(({ product: { id, title }, amount }) => (
                  <li key={id} className={classes.productsListItem}>
                    {getProductString(title, amount)}
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
        <p>{EMPTY_ORDERS_HISTORY_TEXT}</p>
      )}
    </main>
  );
}
