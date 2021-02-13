import {all} from "redux-saga/effects";

import {watchLoadVideo} from './videoSaga'
import {watchGetAuth,watchSetAuth} from './autorizateSaga'
import {watchSaveReq,watchGetReqsts,watchUpdReqsts} from './saveRequestSaga'

export function* rootSaga() {
  yield all([
    watchLoadVideo(),
    watchGetAuth(),
    watchSaveReq(),
    watchSetAuth(),
    watchGetReqsts(),
    watchUpdReqsts()
  ])
}
