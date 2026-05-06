import type { Dispatch, SetStateAction } from "react";

export interface DeleteButtonProps {
  id: number;
  isDeleting: boolean;
  setIsDeleting: Dispatch<SetStateAction<boolean>>;
}
