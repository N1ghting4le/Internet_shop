import { ProductsCatalog } from "@/components/ProductsCatalog";

import { PRODUCTS_CATALOG_TEXT } from "./constants";
import classes from "./styles.module.css";

export function AdminProductsListPage() {
  return (
    <main className={classes.main}>
      <h1>{PRODUCTS_CATALOG_TEXT}</h1>
      <ProductsCatalog isAdminRoute />
    </main>
  );
}
