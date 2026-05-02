import classes from "../styles.module.css";

export const getSecondClassNameForSecondButton = (
  isInCart: boolean,
  isAdminRoute?: boolean,
) => {
  if (isAdminRoute) {
    return classes.secondButton;
  }

  return isInCart ? classes.inCart : classes.secondButton;
};
