export const getTextForSecondButton = (
  isInCart: boolean,
  isAdminRoute?: boolean,
) => {
  if (isAdminRoute) {
    return "Удалить товар";
  }

  return isInCart ? "Товар в корзине" : "Добавить в корзину";
};
