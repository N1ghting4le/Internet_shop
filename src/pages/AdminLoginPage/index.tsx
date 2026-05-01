import { AdminLoginForm } from '@/forms/AdminLoginForm';

import classes from './styles.module.css';

export function AdminLoginPage() {
  return (
    <main className={classes.main}>
      <h1 className={classes.title}>Вход в аккаунт администратора</h1>
      <AdminLoginForm />
    </main>
  );
}
