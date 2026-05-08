import { Header } from "@/components/Header";
import { AdminLoginForm } from "@/forms/AdminLoginForm";

import { LOGIN_TEXT } from "./constants";
import { useAdminGuard } from "./hooks/useAdminGuard";
import classes from "./styles.module.css";

export function AdminLoginPage() {
  useAdminGuard();

  return (
    <>
      <Header hideLogin />
      <main className={classes.main}>
        <h1 className={classes.title}>{LOGIN_TEXT}</h1>
        <AdminLoginForm />
      </main>
    </>
  );
}
