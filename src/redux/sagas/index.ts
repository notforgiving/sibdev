import { put, call,all } from "redux-saga/effects";
import * as Eff from 'redux-saga/effects'
import {actionsForVideo} from './../actions/videoAction'
import {getVideo} from './../actions/videoAction'
import {iVideoItem,iVideoId} from './../../typing/item'

const takeEvery: any = Eff.takeEvery; 

function fetchVideo(data:any) {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${data.request}&key=AIzaSyBxeGGubFb6T4Og0IJvNzHi-QXbRJqw1J8`
  )
  .then((response) => response.json())
  .then(data=>data.items);
}

function* workerLoadVideo(data:any) {
  const video:iVideoItem = yield call(fetchVideo,data);
  yield put(getVideo(video));
}

export function* watchLoadVideo (){
  yield takeEvery(actionsForVideo.LOAD_VIDEO, workerLoadVideo);
}

export function* rootSaga() {
  yield all([
    watchLoadVideo(),
  ])
}
