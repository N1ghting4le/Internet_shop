import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Loader } from "@/components/Loader";
import { ADMIN_LOGIN, ADMIN_PASSWORD } from "@/constants/adminCredentials";
import { ADMIN_PRODUCTS_ROUTE } from "@/constants/routes";
import { wait } from "@/utils/wait";

import {
  INCORRECT_LOGIN,
  INCORRECT_PASSWORD,
  LOGIN_TEXT,
  SUCCESS_TEXT,
} from "./constants";
import type { FormValues } from "./types";
import { saveAdminCredentials } from "./utils/saveAdminCredentials";
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

  const onSubmit = async (values: FormValues) => {
    const { login, password } = values;

    setIsLoading(true);

    await wait(500);

    if (login !== ADMIN_LOGIN) {
      toast.error(INCORRECT_LOGIN);
    } else if (password !== ADMIN_PASSWORD) {
      toast.error(INCORRECT_PASSWORD);
    } else {
      toast.success(SUCCESS_TEXT);
      saveAdminCredentials(values);
      navigate(ADMIN_PRODUCTS_ROUTE);
    }

    setIsLoading(false);
  };

  return (
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
      {isLoading ? (
        <Loader size={40} />
      ) : (
        <Button type="submit" className={classes.button}>
          {LOGIN_TEXT}
        </Button>
      )}
    </form>
  );
}
