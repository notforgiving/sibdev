import { actionsForVideo, putVideos } from "./../actions/video";
import { put, call } from "redux-saga/effects";
import * as Eff from "redux-saga/effects";
import axios from "axios";
import { sortValues } from "./../../config/sorting";
import { IVideosResult } from "../../typing/video";
import { setLoaded, setLoading } from "../actions/loading";

const takeEvery: any = Eff.takeEvery;

async function fetchGetStatistics(id: string) {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyCUGOpgB7P9keOsl6LSvQbc4G033vXJFvE`;
  return axios.get(url);
}

async function fetchGetVideos(search: string) {
  const videos = [];
  const url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=25&order=date&q=${search}&relevanceLanguage=ru&type=video&key=AIzaSyCUGOpgB7P9keOsl6LSvQbc4G033vXJFvE`;
  return await axios
    .get(url)
    .then((response) => {
      return Promise.all(
        response.data.items.map((item: any) => {
          return fetchGetStatistics(item.id.videoId);
        })
      );
    })
    .then((data) => data)
    .catch((reject) => reject);
}

function* workerGetVideos({ payload }: { payload: string }) {
  yield put(setLoading());
  const result: IVideosResult = yield call(fetchGetVideos, payload);
  yield put(setLoaded());
  yield put(putVideos(result))
}

export function* watchGetVideos() {
  yield takeEvery(actionsForVideo.GET_VIDEOS, workerGetVideos);
}
