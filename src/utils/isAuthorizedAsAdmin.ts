import { ADMIN_LOGIN, ADMIN_PASSWORD } from "@/constants/adminCredentials";
import { ADMIN_CREDENTIALS_KEY } from "@/constants/localStorageKeys";

export const isAuthorizedAsAdmin = () => {
  const adminCredentialsRaw = localStorage.getItem(ADMIN_CREDENTIALS_KEY);

  if (!adminCredentialsRaw) {
    return false;
  }

  try {
    const { login, password } = JSON.parse(adminCredentialsRaw);

    return login === ADMIN_LOGIN && password === ADMIN_PASSWORD;
  } catch {
    return false;
  }
};
