import { combineReducers } from "redux";
import login from "./login";
import categorys from "./categorys";
import films from "./films"

const rootReducder = combineReducers({
  login,
  categorys,
  films
});
export default rootReducder;
