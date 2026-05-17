import { useEffect } from "react";
import { useNavigate } from "react-router";

import { routes } from "@/constants/routes";
import { isAuthorizedAsAdmin } from "@/services/isAuthorizedAsAdmin";

export const useAdminGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorizedAsAdmin()) {
      navigate(routes.ADMIN_PRODUCTS_ROUTE);
    }
  }, []);
};
