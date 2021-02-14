import {all} from "redux-saga/effects";

import {watchLoadVideo,watchGetViewCount} from './videoSaga'
import {watchGetAuth,watchSetAuth} from './autorizateSaga'
import {watchSaveReq,watchGetReqsts,watchUpdReqsts} from './saveRequestSaga'
import {watchRunRequest} from './runRequestSaga'

export function* rootSaga() {
  yield all([
    watchLoadVideo(),
    watchGetViewCount(),
    watchGetAuth(),
    watchSaveReq(),
    watchSetAuth(),
    watchGetReqsts(),
    watchUpdReqsts(),
    watchRunRequest()
  ])
}
