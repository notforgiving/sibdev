import { all } from "redux-saga/effects";
import { watchCheckAuth, watchLogin, watchCheckIn } from "./authorization";
import { watchSaveFavorite, watchGetFavorite, watchDeleteFavorite,watchUpdateFavorite } from "./favorites";

import {watchGetVideos} from './video';

export function* rootSaga() {
  yield all([
    watchCheckAuth(),
    watchLogin(),
    watchCheckIn(),
    watchSaveFavorite(),
    watchGetFavorite(),
    watchDeleteFavorite(),
    watchUpdateFavorite(),
    watchGetVideos()
  ]);
}
