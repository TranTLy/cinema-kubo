import { combineReducers } from "redux";
import login from "./login";
import categorys from "./categorys";
import films from "./films"
import userFilmFavor from "./userFilmFavor";
import branch from "./branch";
import schedule from "./schedule";

const rootReducder = combineReducers({
  login,
  categorys,
  films,
  userFilmFavor,
  branch,
  schedule
});
export default rootReducder;
