import classes from "../styles.module.css";

import { mergeClassNames } from "@/utils/mergeClassNames";

export const getClassNameForSecondButton = (
  isInCart: boolean,
  isAdminRoute?: boolean,
) =>
  mergeClassNames(
    classes.button,
    isAdminRoute || !isInCart ? classes.secondButton : classes.inCart,
  );
