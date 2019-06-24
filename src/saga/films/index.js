import { all } from "redux-saga/effects";
import watchRead from "./read";
import watchDeleteFilm from "./delete";
export default function* rootFilm() {
  yield all([watchRead(), watchDeleteFilm()]);
}
