import { actionsForVideo, putVideos } from "./../actions/video";
import { put, call } from "redux-saga/effects";
import * as Eff from "redux-saga/effects";
import axios from "axios";
import { sortValues } from "./../../config/sorting";
import { IVideosResult } from "../../typing/video";
import { setLoaded, setLoading } from "../actions/loading";
import { searchOptions } from "../../typing/search";
import { setSearchString } from "../actions/search";

const takeEvery: any = Eff.takeEvery;

async function fetchGetStatistics(id: string) {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyCUGOpgB7P9keOsl6LSvQbc4G033vXJFvE`;
  return axios.get(url).then((data) => {
    return data.data.items[0];
  });
}

async function fetchGetVideos({ search, order, maxResults }: searchOptions) {
  const reultsValue = maxResults ? maxResults : "15";
  const resultOrder = order ? order : "date";
  const url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=${reultsValue}&order=${resultOrder}&q=${search}&relevanceLanguage=ru&type=video&key=AIzaSyCUGOpgB7P9keOsl6LSvQbc4G033vXJFvE`;
  return await axios
    .get(url)
    .then((response) => {
      return Promise.all(
        response.data.items.map((item: any) => {
          return fetchGetStatistics(item.id.videoId);
        })
      );
    })
    .then((data) => {
      return data;
    })
    .catch((reject) => reject);
}

function* workerGetVideos({ payload }: { payload: searchOptions }) {
  yield put(setLoading());
  const result: IVideosResult[] = yield call(fetchGetVideos, payload);
  yield put(setSearchString(payload.search));
  yield put(setLoaded());
  yield put(putVideos(result));
}

export function* watchGetVideos() {
  yield takeEvery(actionsForVideo.GET_VIDEOS, workerGetVideos);
}
