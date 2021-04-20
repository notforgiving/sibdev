import { put, call, all } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import axios from "axios";
import { actionsForAuthorization, setAuth } from "./../actions/authorization";
import { login, loginError } from "./.././../typing/user";
import {setMessage} from './../actions/message';

async function checkAuth() {
  const token: string | null = localStorage.getItem("token");
  console.log(token,'token')
  if (!token) {
    return {
      data: false
    };
  } else {
    return await axios.get(
      `http://localhost:5000/api/auth/auth`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }
}

function* workerCheckAuth() {
  const result: login = yield call(checkAuth);
  console.log(result.data,'result')
  if(result.data.message){
    yield put(setMessage(result.data));
  }else {
    yield put(setAuth(result.data));
  }
}

export function* watchCheckAuth() {
  yield takeEvery(actionsForAuthorization.CHECK_AUTH, workerCheckAuth);
}