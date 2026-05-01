import type { RegisterOptions } from "react-hook-form";

import type { FormValues } from "./types";

export const validationOptions: RegisterOptions<FormValues> = {
  required: { value: true, message: "Поле обязательно" },
  minLength: { value: 2, message: "Минимальная длина - 2 символа" },
  maxLength: { value: 20, message: "Максимальная длина - 20 символов" },
};
