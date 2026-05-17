import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";

import { routes } from "@/constants/routes";
import { isAuthorizedAsAdmin } from "@/services/isAuthorizedAsAdmin";

export function ProtectedRoute({ children }: PropsWithChildren) {
  if (isAuthorizedAsAdmin()) {
    return children;
  }

  return <Navigate to={routes.ADMIN_LOGIN_ROUTE} replace />;
}
