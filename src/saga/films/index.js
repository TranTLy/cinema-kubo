import { all } from "redux-saga/effects";
import watchRead from "./read";
import watchGetOne from "./get-one";
export default function* rootFilm() {
  yield all([watchRead(), watchGetOne()]);
}
