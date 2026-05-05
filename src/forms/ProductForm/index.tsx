import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useTimeoutRef } from "@/hooks/useTimeoutRef";
import { createProduct } from "@/utils/createProduct";
import { mergeClassNames } from "@/utils/mergeClassNames";

import classes from "./styles.module.css";
import { schema, type ProductInfo } from "./schema";
import type { ProductFormProps } from "./types";

export function ProductForm({
  defaultValues,
  onSubmit: externalOnSubmit,
}: ProductFormProps) {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const timeoutRef = useTimeoutRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), defaultValues });

  const onSubmit = (values: ProductInfo) => {
    try {
      if (defaultValues) {
        // Handle update logic here
      } else {
        externalOnSubmit(createProduct(values));
      }

      setIsSuccess(true);
      setIsError(false);
      reset();

      timeoutRef.current = setTimeout(() => {
        setIsSuccess(false);
      }, 1000);
    } catch {
      setIsError(true);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Название"
        error={errors.title?.message}
        {...register("title")}
      />
      <Input
        label="Описание"
        error={errors.description?.message}
        {...register("description")}
      />
      <Input
        label="Цена"
        error={errors.price?.message}
        {...register("price")}
      />
      <Button type="submit" className={classes.button}>
        {defaultValues ? "Сохранить" : "Добавить товар"}
      </Button>
      {isSuccess && (
        <p className={mergeClassNames(classes.message, classes.success)}>
          Товар успешно {defaultValues ? "сохранен" : "добавлен"}
        </p>
      )}
      {isError && (
        <p className={mergeClassNames(classes.message, classes.error)}>
          Произошла ошибка
        </p>
      )}
    </form>
  );
}
