import { all } from "redux-saga/effects";
import { watchCheckAuth, watchLogin } from "./authorization";

export function* rootSaga() {
  yield all([watchCheckAuth(), watchLogin()]);
}
