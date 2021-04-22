import { all } from "redux-saga/effects";
import { watchCheckAuth, watchLogin, watchCheckIn } from "./authorization";

export function* rootSaga() {
  yield all([watchCheckAuth(), watchLogin(), watchCheckIn()]);
}
