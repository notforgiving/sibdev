import { put, call, all } from "redux-saga/effects";
import * as Eff from "redux-saga/effects";
import axios from "axios";
import { actionsForAutorizate, setUser } from "./../actions/autorizateAcrion";
import { loggedIn } from "./../actions/autorizateAcrion";
const takeEvery: any = Eff.takeEvery;

function fetchAuth(userData: any) {
  const login = userData.data.login;
  const password = userData.data.password;
  return axios
    .post(`https://stormy-earth-24857.herokuapp.com/api/auth/login`, {
      login,
      password,
    })
    .then((response) => response.data)
    .catch((reject) => reject);
}

function fetchRegistr(userData: any) {
  const login = userData.data.login;
  const password = userData.data.password;
  return axios
    .post(`https://stormy-earth-24857.herokuapp.com/api/auth/registration`, {
      login,
      password,
    })
    .then((response) => response.data)
    .catch((reject) => reject);
}

async function auth() {
  if (
    localStorage.getItem("token") != "undefined" &&
    localStorage.getItem("token") != null
  ) {
    return await axios.get(`https://stormy-earth-24857.herokuapp.com/api/auth/auth`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  } else {
    return false;
  }
}

function* workerGetAuth(userData: any) {
  const data: Array<any> = yield call(fetchAuth, userData);
  yield put(loggedIn(data));
}

function* workerGetRegistr(userData: any) {
  const data: { message: string } = yield call(fetchRegistr, userData);
  const auth: Array<any> = yield call(fetchAuth, userData);
  yield put(loggedIn(auth));
}

function* workerSetAuth() {
  const response: Array<any> | boolean = yield call(auth);
  yield put(setUser(response));
}

export function* watchGetAuth() {
  yield takeEvery(actionsForAutorizate.GET_AUTH, workerGetAuth);
}

export function* watchGetRegistr() {
  yield takeEvery(actionsForAutorizate.GET_REGISTR, workerGetRegistr);
}

export function* watchSetAuth() {
  yield takeEvery(actionsForAutorizate.AUTH, workerSetAuth);
}