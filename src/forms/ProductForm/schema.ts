import * as z from "zod";

export const schema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Минимальная длина - 2 символа")
    .max(30, "Максимальная длина - 30 символов"),
  description: z
    .string()
    .trim()
    .min(2, "Минимальная длина - 2 символа")
    .max(150, "Максимальная длина - 150 символов"),
  price: z
    .string()
    .trim()
    .nonempty("Цена обязательна")
    .regex(
      /^\d+(\.\d{1,2})?$/,
      "Цена должна быть числом (не более 2 знаков после десятичной точки)",
    )
    .transform(Number)
    .pipe(z.number().positive("Цена должна быть больше 0")),
});

export type ProductFormInput = z.input<typeof schema>;
export type ProductInfo = z.output<typeof schema>;
