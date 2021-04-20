import { dataActions } from "./../../typing/actions";

export enum actionsForMessage {
  SET_MESSAGE = "SET_MESSAGE",
}

export const setMessage = (message: any): dataActions => ({
  type: actionsForMessage.SET_MESSAGE,
  payload: message
});
