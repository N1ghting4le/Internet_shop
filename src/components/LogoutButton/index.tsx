import type { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router";

import { Button } from "@/components/Button";
import { ADMIN_CREDENTIALS_KEY } from "@/constants/localStorageKeys";
import { ADMIN_LOGIN_ROUTE } from "@/constants/routes";

export function LogoutButton(
  props: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(ADMIN_CREDENTIALS_KEY);
    navigate(ADMIN_LOGIN_ROUTE);
  };

  return (
    <div>
      <Button {...props} onClick={handleLogout} />
    </div>
  );
}
