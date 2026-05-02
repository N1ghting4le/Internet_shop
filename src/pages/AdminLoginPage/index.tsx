import { Navigate } from "react-router";

import { Header } from "@/components/Header";
import { ADMIN_PRODUCTS_ROUTE } from "@/constants/routes";
import { AdminLoginForm } from "@/forms/AdminLoginForm";
import { isAuthorizedAsAdmin } from "@/utils/isAuthorizedAsAdmin";

import classes from "./styles.module.css";

export function AdminLoginPage() {
  if (isAuthorizedAsAdmin()) {
    return <Navigate to={ADMIN_PRODUCTS_ROUTE} replace />;
  }

  return (
    <>
      <Header hideLogin />
      <main className={classes.main}>
        <h1 className={classes.title}>Вход в аккаунт администратора</h1>
        <AdminLoginForm />
      </main>
    </>
  );
}
