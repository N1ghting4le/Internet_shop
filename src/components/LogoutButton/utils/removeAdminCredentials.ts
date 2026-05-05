import { ADMIN_CREDENTIALS_KEY } from "@/constants/localStorageKeys";

export const removeAdminCredentials = () => {
  localStorage.removeItem(ADMIN_CREDENTIALS_KEY);
};
