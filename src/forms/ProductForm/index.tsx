import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { createProduct } from "@/utils/createProduct";
import { mergeClassNames } from "@/utils/mergeClassNames";
import { updateProduct } from "@/utils/updateProduct";
import { wait } from "@/utils/wait";

import {
  EMPTY_VALUES,
  UPDATE_PRODUCT_TEXT,
  ADD_PRODUCT_TEXT,
  ERROR_TEXT,
} from "./constants";
import classes from "./styles.module.css";
import { schema, type ProductInfo } from "./schema";
import type { ProductFormProps } from "./types";
import { getDefaultValues } from "./utils/getDefaultValues";
import { getSuccessText } from "./utils/getSuccessText";

export function ProductForm({
  product,
  onSubmit: externalOnSubmit,
}: ProductFormProps) {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: getDefaultValues(product),
  });

  const onSubmit = async (values: ProductInfo) => {
    try {
      if (product) {
        externalOnSubmit(updateProduct(product.id, values));
      } else {
        externalOnSubmit(createProduct(values));
      }

      setIsSuccess(true);
      setIsError(false);
      reset(EMPTY_VALUES);

      await wait(1000);

      setIsSuccess(false);
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
        id="title"
      />
      <Input
        label="Описание"
        error={errors.description?.message}
        {...register("description")}
        id="description"
      />
      <Input
        label="Цена"
        error={errors.price?.message}
        {...register("price")}
        id="price"
      />
      <Button type="submit" className={classes.button}>
        {product ? UPDATE_PRODUCT_TEXT : ADD_PRODUCT_TEXT}
      </Button>
      {isSuccess && (
        <p className={mergeClassNames(classes.message, classes.success)}>
          {getSuccessText(!!product)}
        </p>
      )}
      {isError && (
        <p className={mergeClassNames(classes.message, classes.error)}>
          {ERROR_TEXT}
        </p>
      )}
    </form>
  );
}
