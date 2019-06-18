import { all } from "redux-saga/effects";
import rootCategory from "./categorys/index";

export default function* rootSaga() {
  yield all([rootCategory()]);
}
