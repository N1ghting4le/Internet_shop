import * as z from "zod";

export const schema = z.object({
  address: z
    .string()
    .trim()
    .min(5, "Минимальная длина - 5 символов")
    .max(200, "Максимальная длина - 200 символов")
    .refine((val) => /\d+/.test(val), "Адрес должен содержать номер дома"),
  clientName: z
    .string()
    .trim()
    .min(2, "Минимальная длина - 2 символа")
    .max(50, "Минимальная длина - 50 символов"),
  phoneNumber: z
    .string()
    .trim()
    .transform((val) => val.replace(/[\s\-()]/g, ""))
    .pipe(
      z
        .string()
        .regex(
          /^\+?[0-9]{10,15}$/,
          "Введите корректный номер телефона (10-15 цифр)",
        ),
    ),
});

export type Client = z.infer<typeof schema>;
