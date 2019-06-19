import { combineReducers } from "redux";
import login from "./login";
import categorys from "./categorys";
import films from "./films";
import getOne from "./get-one";
const rootReducder = combineReducers({
  login,
  categorys,
  films,
  getOne
});
export default rootReducder;
