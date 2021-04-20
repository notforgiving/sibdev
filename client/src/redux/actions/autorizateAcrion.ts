export enum actionsForAutorizate {
  GET_AUTH = "GET_AUTH",
  GET_REGISTR = "GET_REGISTR",
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT",
  AUTH = "AUTH",
  SET_USER = "SET_USER",
}

export const logIn = (data: any): any => ({
  type: actionsForAutorizate.GET_AUTH,
  data,
});

export const registr = (data: any): any => ({
  type: actionsForAutorizate.GET_REGISTR,
  data,
});

export const loggedIn = (token: any): any => ({
  type: actionsForAutorizate.LOG_IN,
  payload: token,
});

export const logOut = (): any => ({
  type: actionsForAutorizate.LOG_OUT,
});

export const authentification = (): any => ({
  type: actionsForAutorizate.AUTH,
});

export const setUser = (user: any): any => ({
  type: actionsForAutorizate.SET_USER,
  payload: user,
});
