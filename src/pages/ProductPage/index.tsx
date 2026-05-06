import { useParams } from "react-router";

import { BackToProductsButton } from "@/components/BackToProductsButton";
import { ProductInfo } from "@/components/ProductInfo";
import { loadProductById } from "@/utils/loadProductById";

import { AddToCartButton } from "./components/AddToCartButton";
import classes from "./styles.module.css";

export function ProductPage() {
  const { id } = useParams();

  if (!id) {
    return null;
  }

  const product = loadProductById(id);

  return (
    <main className={classes.main}>
      <BackToProductsButton />
      <ProductInfo {...{ product }} />
      {product && <AddToCartButton {...{ product }} />}
    </main>
  );
}
