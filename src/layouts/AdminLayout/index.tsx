import { Outlet } from "react-router";

export function AdminLayout() {
  return (
    <>
      <h2>Админ</h2>
      <Outlet />
    </>
  );
}
