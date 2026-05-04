import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import navigationIcon from "@/assets/navigation.svg";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { CURRENCY } from "@/constants/currency";
import { ORDERS_ROUTE } from "@/constants/routes";
import { useCartAmountContext } from "@/contexts/CartAmountContext/useCartAmountContext";
import { calculateTotalCost } from "@/utils/calculateTotalCost";
import { loadCart } from "@/utils/loadCart";
import { mergeClassNames } from "@/utils/mergeClassNames";

import { schema, type Client } from "./schema";
import classes from "./styles.module.css";
import { clearCart } from "./utils/clearCart";
import { saveOrder } from "./utils/saveOrder";

export function CheckoutForm() {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const { clearCartAmount } = useCartAmountContext();
  const navigate = useNavigate();

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    [],
  );

  const cart = loadCart();
  const totalPrice = calculateTotalCost(cart);

  const onSubmit = (values: Client) => {
    try {
      saveOrder(cart, values, totalPrice);
      clearCart();
      clearCartAmount();
      setIsError(false);
      setIsSuccess(true);

      timeoutRef.current = setTimeout(() => {
        navigate(ORDERS_ROUTE);
      }, 1000);
    } catch {
      setIsError(true);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("address")}
        label="Куда доставить?"
        placeholder={
          <span className={classes.placeholder}>
            <img src={navigationIcon} alt="Navigation" /> Выберите адрес
            доставки
          </span>
        }
        error={errors.address?.message}
      />
      <Input
        {...register("clientName")}
        label="Имя"
        error={errors.clientName?.message}
      />
      <Input
        {...register("phoneNumber")}
        label="Телефон"
        error={errors.phoneNumber?.message}
      />
      <div>
        <div className={classes.totalPriceWrapper}>
          <p className={classes.text}>Итого:</p>
          <p className={mergeClassNames(classes.text, classes.price)}>
            {totalPrice} {CURRENCY}
          </p>
        </div>
        <Button type="submit" disabled={isSuccess}>
          Сделать заказ
        </Button>
      </div>
      {isSuccess && <p className={classes.success}>Заказ успешно оформлен</p>}
      {isError && <p className={classes.error}>Произошла ошибка</p>}
    </form>
  );
}
