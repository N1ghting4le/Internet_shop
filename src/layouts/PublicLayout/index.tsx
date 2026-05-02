import { Outlet } from "react-router";

import { Header } from "@/components/Header";

export function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
