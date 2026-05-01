import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";

import { ADMIN_LOGIN_ROUTE } from "@/constants/routes";
import { isAuthorizedAsAdmin } from "@/utils/isAuthorizedAsAdmin";

export function ProtectedRoute({ children }: PropsWithChildren) {
  if (isAuthorizedAsAdmin()) {
    return children;
  }

  return <Navigate to={ADMIN_LOGIN_ROUTE} replace />;
}
