import { all } from "redux-saga/effects";
import { watchCheckAuth, watchLogin, watchCheckIn } from "./authorization";
import { watchSaveFavorite, watchGetFavorite } from "./favorites";

export function* rootSaga() {
  yield all([
    watchCheckAuth(),
    watchLogin(),
    watchCheckIn(),
    watchSaveFavorite(),
    watchGetFavorite(),
  ]);
}
