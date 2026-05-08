import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import navigationIcon from "@/assets/navigation.svg";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { ORDERS_ROUTE } from "@/constants/routes";
import { useCartAmountContext } from "@/contexts/CartAmountContext/useCartAmountContext";
import { calculateTotalCost } from "@/utils/calculateTotalCost";
import { getPriceString } from "@/utils/getPriceString";
import { loadCart } from "@/utils/loadCart";
import { mergeClassNames } from "@/utils/mergeClassNames";
import { wait } from "@/utils/wait";

import {
  ENTER_DELIVERY_ADDRESS_TEXT,
  CREATE_ORDER_TEXT,
  ORDER_CREATION_SUCCESS_TEXT,
  ERROR_TEXT,
  TOTAL_TEXT,
} from "./constants";
import { schema, type ClientInfo } from "./schema";
import classes from "./styles.module.css";
import { clearCart } from "./utils/clearCart";
import { saveOrder } from "./utils/saveOrder";

export function CheckoutForm() {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const { clearCartAmount } = useCartAmountContext();
  const navigate = useNavigate();

  const cart = loadCart();
  const totalPrice = calculateTotalCost(cart);

  const onSubmit = async (values: ClientInfo) => {
    try {
      saveOrder(cart, values, totalPrice);
      clearCart();
      clearCartAmount();
      setIsError(false);
      setIsSuccess(true);

      await wait(1000);

      navigate(ORDERS_ROUTE);
    } catch {
      setIsError(true);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("address")}
        id="address"
        label="Куда доставить?"
        placeholder={
          <span className={classes.placeholder}>
            <img src={navigationIcon} alt="Navigation" />{" "}
            {ENTER_DELIVERY_ADDRESS_TEXT}
          </span>
        }
        error={errors.address?.message}
      />
      <Input
        {...register("clientName")}
        id="clientName"
        label="Имя"
        error={errors.clientName?.message}
      />
      <Input
        {...register("phoneNumber")}
        id="phoneNumber"
        label="Телефон"
        error={errors.phoneNumber?.message}
      />
      <div>
        <div className={classes.totalPriceWrapper}>
          <p className={classes.text}>{TOTAL_TEXT}</p>
          <p className={mergeClassNames(classes.text, classes.price)}>
            {getPriceString(totalPrice)}
          </p>
        </div>
        <Button type="submit" disabled={isSuccess}>
          {CREATE_ORDER_TEXT}
        </Button>
      </div>
      {isSuccess && (
        <p className={classes.success}>{ORDER_CREATION_SUCCESS_TEXT}</p>
      )}
      {isError && <p className={classes.error}>{ERROR_TEXT}</p>}
    </form>
  );
}
