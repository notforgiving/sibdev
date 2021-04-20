import { all } from "redux-saga/effects";
import { watchCheckAuth } from "./authorization";

export function* rootSaga() {
  yield all([watchCheckAuth()]);
}
