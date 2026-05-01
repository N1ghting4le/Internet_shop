import { Outlet } from "react-router";

export function PublicLayout() {
  return (
    <>
      <h2>Публичный</h2>
      <Outlet />
    </>
  );
}
