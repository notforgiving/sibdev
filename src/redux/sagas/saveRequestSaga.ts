import { setReqsts, actionsForSave } from "../actions/reqActions";
import { put, call, all } from "redux-saga/effects";
import * as Eff from "redux-saga/effects";
import axios from "axios";
const takeEvery: any = Eff.takeEvery;

function fetchSave(save: any) {
  const { name, quantity, sort, data } = save.data;
  return axios
    .post(
      "http://localhost:5000/api/req/save",
      {
        text: data,
        name,
        sort,
        value: quantity,
      },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    )
    .then((response) => response.data)
    .catch((reject) => reject);
}

function fetchGetReqsts() {
  return axios
    .get(
      "http://localhost:5000/api/req/get",
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    )
    .then((response) => response.data)
    .catch((reject) => reject);
}

function fetchUpd(save: any) {
  const { name, quantity, sort, text, objectid } = save.data;

  return axios
    .post(
      "http://localhost:5000/api/req/change",
      {
        text: text,
        name,
        sort,
        value: quantity,
        objectid
      },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    )
    .then((response) => response.data)
    .catch((reject) => reject);
}

function* workerSaveReq(data: any) {
  const response: Array<any> = yield call(fetchSave, data);
}

function* workerGetReqsts() {
  const response: Array<any> = yield call(fetchGetReqsts);
  yield put(setReqsts(response));
}

function* workerUpdReq(data: any) {
  const response: Array<any> = yield call(fetchUpd, data);
  const videos: Array<any> = yield call(fetchGetReqsts);
  yield put(setReqsts(videos));
}

export function* watchSaveReq() {
  yield takeEvery(actionsForSave.SAVE_REQ, workerSaveReq);
}

export function* watchGetReqsts() {
  yield takeEvery(actionsForSave.GET_REQ, workerGetReqsts);
}

export function* watchUpdReqsts() {
  yield takeEvery(actionsForSave.UPS_REQ, workerUpdReq);
}



