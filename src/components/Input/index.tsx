import { mergeClassNames } from "@/utils/mergeClassNames";

import type { InputProps } from "./types";
import classes from "./styles.module.css";

export function Input({
  placeholder,
  label,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <div className={classes.container}>
      {label && (
        <label htmlFor={props.id} className={classes.label}>
          {label}
        </label>
      )}
      <div className={classes.inputWrapper}>
        <input
          {...props}
          className={mergeClassNames(
            classes.input,
            className,
            error && classes.inputError,
          )}
          placeholder=""
        />
        {placeholder && (
          <div className={classes.placeholder}>{placeholder}</div>
        )}
        {error && <p className={classes.error}>{error}</p>}
      </div>
    </div>
  );
}
