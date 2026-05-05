import { ADMIN_CREDENTIALS_KEY } from "@/constants/localStorageKeys";

import type { FormValues } from "../types";

export const saveAdminCredentials = (credentials: FormValues) => {
  localStorage.setItem(ADMIN_CREDENTIALS_KEY, JSON.stringify(credentials));
};
