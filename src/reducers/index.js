import { combineReducers } from "redux";
import login from "./login";
import categorys from "./categorys";

const rootReducder = combineReducers({
  login,
  categorys
});
export default rootReducder;
