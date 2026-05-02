import { ProductsCatalog } from '@/components/ProductsCatalog';

import classes from './styles.module.css';

export function CatalogPage() {
  return (
    <main className={classes.main}>
      <h1>Каталог товаров</h1>
      <ProductsCatalog />
    </main>
  );
}
