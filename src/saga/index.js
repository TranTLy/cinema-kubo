import { all } from "redux-saga/effects";
import rootCategory from "./categorys/index";
import rootFilm from "./films/index";
import rootUserFilmFavor from "./userFilmFavor/index";
import rootBranch from "./branch/index";
import rootSchedule from "./schedule/index";

export default function* rootSaga() {
  yield all([rootCategory(), rootFilm(), rootUserFilmFavor(),
  rootBranch(), rootSchedule()]);
}
