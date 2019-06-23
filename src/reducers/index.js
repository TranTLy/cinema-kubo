import { combineReducers } from "redux";
import login from "./login";
import categorys from "./categorys";
import films from "./films"
import userFilmFavor from "./userFilmFavor";
import branch from "./branch";
import schedule from "./schedule";
import promotion from "./promotion";
import promotionBookTicket from "./promotionBookTicket";
import typePayment from "./typepayment";


const rootReducder = combineReducers({
  login,
  categorys,
  films,
  userFilmFavor,
  branch,
  schedule,
  promotion,
  promotionBookTicket,
  typePayment
});
export default rootReducder;
