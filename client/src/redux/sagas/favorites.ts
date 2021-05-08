import { put, call } from "redux-saga/effects";
import * as Eff from "redux-saga/effects";
import axios from "axios";

import { Favorite, favoriteDB } from "../../typing/favorite";
import {
  actionsForFavorites,
  getFavorites,
  putFavorite,
} from "./../actions/favorites";

import { sortValues } from "./../../config/sorting";
import { clearSearchString } from "../actions/search";

const takeEvery: any = Eff.takeEvery;

async function fetchSaveFavorite(favorite: Favorite) {
  console.log(favorite, "favorite");

  const sortText = sortValues.filter((item) => item.id == favorite.sort);
  const text = favorite.request;
  const name = favorite.name;
  const sort = sortText[0].text;
  const value = favorite.number;
  return axios
    .post(
      "https://sibdev.herokuapp.com/api/req/save",
      {
        text,
        name,
        sort,
        value,
      },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    )
    .then((response) => response)
    .catch((reject) => reject);
}

async function fetchGetFavorite() {
  return axios
    .get("https://sibdev.herokuapp.com/api/req/get", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response) => response.data)
    .catch((reject) => reject);
}

interface saveResult {
  status: number;
  data: {
    message: string;
  };
}

function* workerSaveFavorite({ payload }: { payload: Favorite }) {
  const result: saveResult = yield call(fetchSaveFavorite, payload);
  console.log(result, "result");
  if (result.status === 200 && result.data.message == "Запрос сохранен") {
  }
  yield put(clearSearchString());
  // yield put(setAuth(result.data));
}

function* workerGetFavorite() {
  const result: favoriteDB[] = yield call(fetchGetFavorite);
  yield put(putFavorite(result));
}

export function* watchSaveFavorite() {
  yield takeEvery(actionsForFavorites.SET_FAVORITE, workerSaveFavorite);
}

export function* watchGetFavorite() {
  yield takeEvery(actionsForFavorites.GET_FAVORITES, workerGetFavorite);
}
