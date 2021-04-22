import { baseActions, dataActions } from "./../../typing/actions";
import {UserData} from './../../typing/user';

export enum actionsForAuthorization {
  CHECK_AUTH = "CHECK_AUTH",
  SET_USER = "SET_USER",
  LOGIN = "LOGIN",
  CHECK_IN = "CHECK_IN",
  LOG_OUT = "LOG_OUT",
}

export const checkAuth = (): baseActions => ({
  type: actionsForAuthorization.CHECK_AUTH,
});

export const setAuth = (authData: any): dataActions => ({
  type: actionsForAuthorization.SET_USER,
  payload: authData
});

export const logIn = (loginData: UserData): dataActions => ({
  type: actionsForAuthorization.LOGIN,
  payload: loginData
});

export const checkIn = (checkInData: UserData): dataActions => ({
  type: actionsForAuthorization.CHECK_IN,
  payload: checkInData
});

export const logOut = (): baseActions => ({
  type: actionsForAuthorization.LOG_OUT,
});

