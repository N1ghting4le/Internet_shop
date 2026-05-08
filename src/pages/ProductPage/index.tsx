import { useParams } from "react-router";

import { BackToProductsButton } from "@/components/BackToProductsButton";
import { ProductInfo } from "@/components/ProductInfo";
import { useProduct } from "@/hooks/useProduct";

import { AddToCartButton } from "./components/AddToCartButton";
import classes from "./styles.module.css";

export function ProductPage() {
  const { id } = useParams();
  const product = useProduct(id);

  if (!id) {
    return null;
  }

  return (
    <main className={classes.main}>
      <BackToProductsButton />
      <ProductInfo {...{ product }} />
      {product && <AddToCartButton {...{ product }} />}
    </main>
  );
}
