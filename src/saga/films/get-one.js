import { takeLatest, put, call } from "redux-saga/effects";
import { url } from "../../config/urlApi";
import { getOneFilmSucces, getOneFilmFailure } from "../../actions/action";

async function readAsync(id) {
  const res = await fetch(url + "/film/single?id=" + id);
  if (res.ok) return res.json();
  return new Error(res.statusText);
}

function* read(action) {
  try {
    const data = yield call(readAsync, action.id);
    yield put(getOneFilmSucces(data));
  } catch (e) {
    yield put(getOneFilmFailure(e));
  }
}

export default function* watchRead() {
  yield takeLatest("GET_ONE_FILM", read);
}
