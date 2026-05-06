import type { Product } from "@/types/product";

export interface ProductFormProps {
  product?: Product;
  onSubmit: (product: Product) => void;
}
