import { CheckoutForm } from '@/forms/CheckoutForm';

import { DELIVERY_TEXT } from './constants';
import classes from './styles.module.css';

export function CheckoutPage() {
  return (
    <main className={classes.main}>
      <h1 className={classes.title}>{DELIVERY_TEXT}</h1>
      <CheckoutForm />
    </main>
  );
}
