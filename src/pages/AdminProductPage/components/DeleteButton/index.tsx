import { useState } from "react";
import { useNavigate } from "react-router";

import { Button } from "@/components/Button";
import { Loader } from "@/components/Loader";
import { ADMIN_PRODUCTS_ROUTE } from "@/constants/routes";
import { useTimeoutRef } from "@/hooks/useTimeoutRef";
import { deleteProductFromStorage } from "@/utils/deleteProductFromStorage";

import classes from "./styles.module.css";
import type { DeleteButtonProps } from "./types";

export function DeleteButton({
  id,
  isDeleting,
  setIsDeleting,
}: DeleteButtonProps) {
  const [isError, setIsError] = useState(false);
  const timeoutRef = useTimeoutRef();
  const navigate = useNavigate();

  const handleDelete = () => {
    setIsDeleting(true);

    timeoutRef.current = setTimeout(() => {
      try {
        deleteProductFromStorage(id);
        navigate(ADMIN_PRODUCTS_ROUTE);
      } catch {
        setIsError(true);
      }

      setIsDeleting(false);
    }, 1000);
  };

  return (
    <div className={classes.wrapper}>
      {isDeleting ? (
        <Loader size={50} className={classes.loader} />
      ) : (
        <Button onClick={handleDelete}>Удалить</Button>
      )}
      {isError && <p className={classes.error}>Произошла ошибка</p>}
    </div>
  );
}
