import type { Product } from "@/types/product";

import type { ProductFormInput } from "./schema";

export interface ProductFormProps {
  defaultValues?: ProductFormInput;
  onSubmit: (product: Product) => void;
}
