import { baseActions, dataActions } from "./../../typing/actions";

export enum actionsForMessage {
  SET_MESSAGE = "SET_MESSAGE",
  CLEAR_MESSAGE = "CLEAR_MESSAGE",
}

export const setMessage = (message: any): dataActions => ({
  type: actionsForMessage.SET_MESSAGE,
  payload: message,
});

export const clearMessage = (): baseActions => ({
  type: actionsForMessage.CLEAR_MESSAGE,
});
