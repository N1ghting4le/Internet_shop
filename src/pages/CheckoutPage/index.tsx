import { CheckoutForm } from '@/forms/CheckoutForm';

import classes from './styles.module.css';

export function CheckoutPage() {
  return (
    <main className={classes.main}>
      <h1 className={classes.title}>Доставка</h1>
      <CheckoutForm />
    </main>
  );
}
