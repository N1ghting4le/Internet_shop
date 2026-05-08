import { useState } from "react";
import { useParams } from "react-router";

import { BackToProductsButton } from "@/components/BackToProductsButton";
import { Button } from "@/components/Button";
import { ProductInfo } from "@/components/ProductInfo";
import { ProductForm } from "@/forms/ProductForm";
import { useProduct } from "@/hooks/useProduct";
import type { Product } from "@/types/product";
import { wait } from "@/utils/wait";

import { DeleteButton } from "./components/DeleteButton";
import { EDIT_TEXT } from "./constants";
import classes from "./styles.module.css";

export function AdminProductPage() {
  const { id } = useParams();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditView, setIsEditView] = useState(false);
  const { product, setProduct, isError } = useProduct(id);

  if (!id || isError) {
    return null;
  }

  const enterEditView = () => {
    setIsEditView(true);
  };

  const onSubmit = async (updatedProduct: Product) => {
    await wait(1000);

    setProduct(updatedProduct);
    setIsEditView(false);
  };

  return (
    <main className={classes.main}>
      <BackToProductsButton isAdminRoute />
      {isEditView ? (
        <ProductForm {...{ onSubmit, product }} />
      ) : (
        <ProductInfo {...{ product }} />
      )}
      {product && !isEditView && (
        <div className={classes.buttonsWrapper}>
          <Button onClick={enterEditView} disabled={isDeleting}>
            {EDIT_TEXT}
          </Button>
          <DeleteButton {...{ isDeleting, setIsDeleting }} id={product.id} />
        </div>
      )}
    </main>
  );
}
