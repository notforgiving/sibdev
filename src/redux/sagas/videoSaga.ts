import { put, call } from "redux-saga/effects";
import * as Eff from 'redux-saga/effects'
import {actionsForVideo} from './../actions/videoAction'
import {getVideo,getTotalQuantity,setViewCount} from './../actions/videoAction'
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

function fetchGetViewCount(values:any){
  return axios
  .get(
    `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${values.payload}&key=AIzaSyCdKJIX-gDn0ntEbtEbc4iTObajiBz2IHQ`
  )
  .then((response) => response.data)
}

function* workerGetViewCount(values:any) {
  const quantitys:Array<any> = yield call(fetchGetViewCount,values);
  yield put(setViewCount(quantitys));
}

function* workerLoadVideo(data:any) {
  const video:iVideoTotal = yield call(fetchVideo,data);
  yield put(getVideo(video.items));
  yield put(getTotalQuantity(video.pageInfo.totalResults));
}

export function* watchLoadVideo (){
  yield takeEvery(actionsForVideo.LOAD_VIDEO, workerLoadVideo);
}

export function* watchGetViewCount (){
  yield takeEvery(actionsForVideo.GET_VIEWCOUNT, workerGetViewCount);
}

