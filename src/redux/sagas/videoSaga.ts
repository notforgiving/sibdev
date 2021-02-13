import { put, call } from "redux-saga/effects";
import * as Eff from 'redux-saga/effects'
import {actionsForVideo} from './../actions/videoAction'
import {getVideo,getTotalQuantity} from './../actions/videoAction'
import {iVideoTotal} from './../../typing/item'
import axios from "axios";


const takeEvery: any = Eff.takeEvery; 

function fetchVideo(data:any) {
  return axios
  .get(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${data.request}&key=AIzaSyCdKJIX-gDn0ntEbtEbc4iTObajiBz2IHQ`
  )
  .then((response) => response.data)
}

function fetchQuantity(id:string){
  return axios
  .get(
    `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyCdKJIX-gDn0ntEbtEbc4iTObajiBz2IHQ&part=statistics`
  )
  .then((response) => response.data)
}

function* workerLoadVideo(data:any) {
  const video:iVideoTotal = yield call(fetchVideo,data);
  yield put(getVideo(video.items));
  yield put(getTotalQuantity(video.pageInfo.totalResults));
}

export function* watchLoadVideo (){
  yield takeEvery(actionsForVideo.LOAD_VIDEO, workerLoadVideo);
}