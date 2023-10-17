import { AuthenticatedRoutesConstant } from "./nav.constant";

const saveToken = (token) => {
  localStorage.setItem(AuthenticatedRoutesConstant.USER_TOKEN, token);
};

const removeToken = () => {
  localStorage.removeItem(AuthenticatedRoutesConstant.USER_TOKEN);
};

const isUserisLoggedIn = () => {
  const token = localStorage.getItem(AuthenticatedRoutesConstant.USER_TOKEN);
  if (!token) {
    return false;
  }

  return true;
};

export const AuthUtils = {
  saveToken,
  isUserisLoggedIn,
  removeToken,
};