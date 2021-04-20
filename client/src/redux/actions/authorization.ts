import { baseActions, dataActions } from "./../../typing/actions";

export enum actionsForAuthorization {
  CHECK_AUTH = "CHECK_AUTH",
  SET_USER = "SET_USER",
}

export const checkAuth = (): baseActions => ({
  type: actionsForAuthorization.CHECK_AUTH,
});

export const setAuth = (authData: any): dataActions => ({
  type: actionsForAuthorization.SET_USER,
  payload: authData
});
