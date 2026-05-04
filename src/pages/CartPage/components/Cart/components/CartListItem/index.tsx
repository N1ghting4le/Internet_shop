import classes from "./styles.module.css";

import deleteIcon from "@/assets/delete.svg";
import minusIcon from "@/assets/Minus.svg";
import plusIcon from "@/assets/Plus.svg";
import { CURRENCY } from "@/constants/currency";
import { mergeClassNames } from "@/utils/mergeClassNames";

import type { CartListItemProps } from "./types";

export function CartListItem({
  item: {
    amount,
    product: { id, title, price },
  },
  incrementItem,
  decrementItem,
  deleteItem,
}: CartListItemProps) {
  return (
    <li className={classes.cartItem}>
      <div>
        <p className={classes.text}>{title}</p>
        <p className={mergeClassNames(classes.text, classes.price)}>
          {price} {CURRENCY}
        </p>
      </div>
      <div className={classes.amountAndTotalPriceWrapper}>
        <div className={classes.amount}>
          <button
            className={classes.button}
            disabled={amount === 1}
            onClick={decrementItem(id)}
          >
            <img src={minusIcon} alt="Decrement" />
          </button>
          <p className={classes.text}>{amount}</p>
          <button className={classes.button} onClick={incrementItem(id)}>
            <img src={plusIcon} alt="Increment" />
          </button>
        </div>
        <p className={mergeClassNames(classes.text, classes.price)}>
          {(price * amount).toFixed(2)} {CURRENCY}
        </p>
      </div>
      <button
        className={mergeClassNames(classes.button, classes.deleteIcon)}
        onClick={deleteItem(id)}
      >
        <img src={deleteIcon} alt="Delete" />
      </button>
    </li>
  );
}
