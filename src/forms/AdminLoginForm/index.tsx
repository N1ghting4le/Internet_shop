import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Loader } from "@/components/Loader";
import { ADMIN_LOGIN, ADMIN_PASSWORD } from "@/constants/adminCredentials";
import { ADMIN_CREDENTIALS_KEY } from "@/constants/localStorageKeys";
import { ADMIN_PRODUCTS_ROUTE } from "@/constants/routes";

import { INCORRECT_LOGIN, INCORRECT_PASSWORD } from "./constants";
import type { FormValues } from "./types";
import { validationOptions } from "./validation";
import classes from "./styles.module.css";

export function AdminLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    [],
  );

  const onSubmit = (values: FormValues) => {
    const { login, password } = values;

    setIsLoading(true);
    setError(null);

    timeoutRef.current = setTimeout(() => {
      if (login !== ADMIN_LOGIN) {
        setError(INCORRECT_LOGIN);
      } else if (password !== ADMIN_PASSWORD) {
        setError(INCORRECT_PASSWORD);
      } else {
        localStorage.setItem(ADMIN_CREDENTIALS_KEY, JSON.stringify(values));
        navigate(ADMIN_PRODUCTS_ROUTE);
      }

      setIsLoading(false);
    }, 500);
  };

  return (
    // eslint-disable-next-line react-hooks/refs
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Input
        label="Логин"
        id="login"
        {...register("login", validationOptions)}
        error={errors.login?.message}
      />
      <Input
        label="Пароль"
        id="password"
        {...register("password", validationOptions)}
        error={errors.password?.message}
        password
      />
      <div className={classes.submitWrapper}>
        {isLoading ? (
          <Loader size={40} />
        ) : (
          <Button type="submit" className={classes.button}>
            Войти
          </Button>
        )}
        {error && <p className={classes.error}>{error}</p>}
      </div>
    </form>
  );
}
