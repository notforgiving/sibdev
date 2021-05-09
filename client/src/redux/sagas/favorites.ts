import { put, call } from "redux-saga/effects";
import * as Eff from "redux-saga/effects";
import axios from "axios";

import {
  Favorite,
  favoriteDB,
  saveResult,
  IResult,
} from "../../typing/favorite";
import {
  actionsForFavorites,
  getFavorites,
  putFavorite,
} from "./../actions/favorites";

import { sortValues } from "./../../config/sorting";
import { clearSearchString } from "../actions/search";
import { setMessage } from "../actions/message";

const takeEvery: any = Eff.takeEvery;

async function fetchSaveFavorite(favorite: Favorite) {
  let sortText = favorite.sort
    ? sortValues.filter((item) => item.id == favorite.sort)
    : sortValues.filter((item, index) => index == 1);
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

async function fetchDeleteFavorite(id: string) {
  return axios
    .post(
      "https://sibdev.herokuapp.com/api/req/del",
      { id },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
    .then((response) => response.data)
    .catch((reject) => reject);
}

async function fetchUpdateFavorite(favorite: Favorite) {
  let sortText = favorite.sort
    ? sortValues.filter((item) => item.id == favorite.sort)
    : sortValues.filter((item, index) => index == 1);
  const text = favorite.request;
  const name = favorite.name;
  const sort = sortText[0].text;
  const value = favorite.number;
  const id = favorite.id;

  return axios
    .post(
      "https://sibdev.herokuapp.com/api/req/update",
      {
        id,
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

function* workerSaveFavorite({ payload }: { payload: Favorite }) {
  const result: saveResult = yield call(fetchSaveFavorite, payload);
  if (result.data.status) {
    yield put(setMessage(result.data));
    yield put(clearSearchString());
    const newFavorites: favoriteDB[] = yield call(fetchGetFavorite);
    yield put(putFavorite(newFavorites));
  } else {
    yield put(setMessage(result.data));
  }
}

function* workerGetFavorite() {
  const result: favoriteDB[] = yield call(fetchGetFavorite);
  yield put(putFavorite(result));
}

function* workerDeleteFavorite({ payload }: { payload: string }) {
  const result: IResult = yield call(fetchDeleteFavorite, payload);
  if (result.status) {
    yield put(setMessage(result));
    const newFavorites: favoriteDB[] = yield call(fetchGetFavorite);
    yield put(putFavorite(newFavorites));
  } else {
    yield put(setMessage(result));
  }
}

function* workerUpdateFavorite({ payload }: { payload: Favorite }) {
  const result: saveResult = yield call(fetchUpdateFavorite, payload);
  if (result.data.status) {
    yield put(setMessage(result.data));
    const newFavorites: favoriteDB[] = yield call(fetchGetFavorite);
    yield put(putFavorite(newFavorites));
  } else {
      yield put(setMessage(result.data));
  }
}

export function* watchSaveFavorite() {
  yield takeEvery(actionsForFavorites.SET_FAVORITE, workerSaveFavorite);
}

export function* watchGetFavorite() {
  yield takeEvery(actionsForFavorites.GET_FAVORITES, workerGetFavorite);
}

export function* watchDeleteFavorite() {
  yield takeEvery(actionsForFavorites.DELETE_FAVORITES, workerDeleteFavorite);
}

export function* watchUpdateFavorite() {
  yield takeEvery(actionsForFavorites.UPDATE_FAVORITE, workerUpdateFavorite);
}
