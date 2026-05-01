import type { ButtonHTMLAttributes } from "react";

import { mergeClassNames } from "@/utils/mergeClassNames";

import classes from "./styles.module.css";

export function Button({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={mergeClassNames(classes.button, className)} {...props} />
  );
}
