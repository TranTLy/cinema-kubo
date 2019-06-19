import { all } from "redux-saga/effects";
import rootCategory from "./categorys/index";
import rootFilm from "./films/index";

export default function* rootSaga() {
  yield all([rootCategory(), rootFilm()]);
}
