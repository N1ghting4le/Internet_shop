import { useState } from "react";

import eyeOpen from "@/assets/eye.svg";
import eyeClosed from "@/assets/eye-slash.svg";
import { mergeClassNames } from "@/utils/mergeClassNames";

import type { InputProps } from "./types";
import { getPasswordInputType } from "./utils/getPasswordInputType";
import classes from "./styles.module.css";

export function Input({
  placeholder,
  label,
  error,
  className,
  type,
  password,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

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
          type={password ? getPasswordInputType(showPassword) : type}
          className={mergeClassNames(
            classes.input,
            error && classes.inputError,
            password && classes.password,
            className,
          )}
          placeholder=""
        />
        {placeholder && (
          <div className={classes.placeholder}>{placeholder}</div>
        )}
        {password && (
          <img
            className={classes.passwordVisibilityIcon}
            onClick={toggleShowPassword}
            src={showPassword ? eyeOpen : eyeClosed}
            alt={showPassword ? "visible" : "invisible"}
          />
        )}
        {error && <p className={classes.error}>{error}</p>}
      </div>
    </div>
  );
}
