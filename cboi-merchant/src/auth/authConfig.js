import { WebStorageStateStore } from "oidc-client-ts";

export const authConfig = {
  authority: "https://cboi-auth-stage.isupay.in/application/o/merchant-web-application/",
  client_id: "02WnEFxSElzxzrv3Qht29IacaiO6qKa3pclXleoo",
  redirect_uri: "http://localhost:5173/callback",
  post_logout_redirect_uri: "http://localhost:5173/",
  response_type: "code",
  scope:
    "openid profile email offline_access authorities privileges user_name created adminName bankCode goauthentik.io/api",

  userStore: new WebStorageStateStore({
    store: window.sessionStorage,
  }),
};