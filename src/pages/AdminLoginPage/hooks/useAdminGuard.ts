import { useEffect } from "react";
import { useNavigate } from "react-router";

import { ADMIN_PRODUCTS_ROUTE } from "@/constants/routes";
import { isAuthorizedAsAdmin } from "@/services/isAuthorizedAsAdmin";

export const useAdminGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthorizedAsAdmin()) {
      navigate(ADMIN_PRODUCTS_ROUTE);
    }
  }, []);
};
