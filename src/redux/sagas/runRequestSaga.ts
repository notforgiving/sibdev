import {actionsForRunRequest} from '../actions/runRequest'
import { put, call } from "redux-saga/effects";
import * as Eff from 'redux-saga/effects'
import {actionsForVideo} from '../actions/videoAction'
import {getVideo,getTotalQuantity} from '../actions/videoAction'
import {iVideoTotal} from '../../typing/item'
import axios from "axios";
const takeEvery: any = Eff.takeEvery; 

function fetchVideoByREquest(data:any) {
  return axios
  .get(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=${data.sort}&maxResults=${data.value}&q=${data.text}&key=AIzaSyCdKJIX-gDn0ntEbtEbc4iTObajiBz2IHQ`
  )
  .then((response) => response.data)
}

function* workerRunRequest(data:any) {
  const videos:iVideoTotal = yield call(fetchVideoByREquest,data.payload);
  yield put(getVideo(videos.items));
  yield put(getTotalQuantity(videos.pageInfo.totalResults));
}

export function* watchRunRequest (){
  yield takeEvery(actionsForRunRequest.SAVE_REQUEST, workerRunRequest);
}