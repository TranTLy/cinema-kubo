import { all } from "redux-saga/effects";
import watchRead from "./read";
export default function* rootUser() {
  yield all([watchRead()]);
}
