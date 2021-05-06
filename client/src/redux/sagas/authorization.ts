import { put, call } from "redux-saga/effects";
import * as Eff from "redux-saga/effects";
import axios from "axios";

import { login, UserData } from "./.././../typing/user";

import { actionsForAuthorization, setAuth } from "./../actions/authorization";
import { setMessage } from "./../actions/message";
import { setLoading, setLoaded } from "./../actions/loading";

const takeEvery: any = Eff.takeEvery;

async function checkAuth() {
  const token: string | null = localStorage.getItem("token");
  if (!token) {
    return {
      data: false,
    };
  } else {
    return await axios.get(`https://sibdev.herokuapp.com/api/auth/auth`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

async function fetchLogin(loginData: UserData) {
  const login = loginData.login;
  const password = loginData.password;
  return axios
    .post(`https://sibdev.herokuapp.com/api/auth/login`, {
      login,
      password,
    })
    .then((response) => response)
    .catch((reject) => reject);
}

async function fetchCheckIn(checkInData: UserData) {
  const login = checkInData.login;
  const password = checkInData.password;
  return axios
    .post(`https://sibdev.herokuapp.com/api/auth/registration`, {
      login,
      password,
    })
    .then((response) => response)
    .catch((reject) => reject);
}

function* workerCheckAuth() {
  yield put(setLoading());
  const result: login = yield call(checkAuth);
  yield put(setLoaded());
  if (result.data.message) {
    yield put(setMessage(result.data));
  } else {
    yield put(setAuth(result.data));
  }
}

function* workerLogin({ payload }: { payload: UserData }) {
  yield put(setLoading());
  const result: login = yield call(fetchLogin, payload);
  yield put(setLoaded());
  yield put(setAuth(result.data));
}

function* workerCheckIn({ payload }: { payload: UserData }) {
  yield put(setLoading());
  const result: login = yield call(fetchCheckIn, payload);
  if (result.data.message) {
    yield put(setMessage(result.data));
  } else {
    yield put(setAuth(result.data));
  }

  yield put(setLoaded());
}

export function* watchCheckAuth() {
  yield takeEvery(actionsForAuthorization.CHECK_AUTH, workerCheckAuth);
}

export function* watchLogin() {
  yield takeEvery(actionsForAuthorization.LOGIN, workerLogin);
}

export function* watchCheckIn() {
  yield takeEvery(actionsForAuthorization.CHECK_IN, workerCheckIn);
}
