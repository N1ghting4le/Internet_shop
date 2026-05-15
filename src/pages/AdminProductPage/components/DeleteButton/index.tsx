import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { Button } from "@/components/Button";
import { Loader } from "@/components/Loader";
import { ADMIN_PRODUCTS_ROUTE } from "@/constants/routes";
import { deleteProductFromStorage } from "@/services/deleteProductFromStorage";
import { wait } from "@/utils/wait";

import { DELETE_TEXT, ERROR_TEXT, SUCCESS_TEXT } from "./constants";
import classes from "./styles.module.css";
import type { DeleteButtonProps } from "./types";

export function DeleteButton({
  id,
  isDeleting,
  setIsDeleting,
}: DeleteButtonProps) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    setIsDeleting(true);

    await wait(1000);

    try {
      deleteProductFromStorage(id);
      toast.success(SUCCESS_TEXT);
      navigate(ADMIN_PRODUCTS_ROUTE);
    } catch {
      toast.error(ERROR_TEXT);
    }

    setIsDeleting(false);
  };

  return (
    <div className={classes.wrapper}>
      {isDeleting ? (
        <Loader size={50} className={classes.loader} />
      ) : (
        <Button onClick={handleDelete}>{DELETE_TEXT}</Button>
      )}
    </div>
  );
}
