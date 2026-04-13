import { UserManager } from "oidc-client-ts";
import { authConfig } from "./authConfig";

const userManager = new UserManager(authConfig);

export const login = () => userManager.signinRedirect();

export const handleCallback = () =>
  userManager.signinRedirectCallback();

export const logout = () => userManager.signoutRedirect();

export const getUser = () => userManager.getUser();